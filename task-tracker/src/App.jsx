import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import TasksView from "./views/TasksView.jsx";
import TagsView from "./views/TagsView.jsx";
import AboutView from "./views/AboutView.jsx";
import { fetchTasks, fetchTags } from "./api.js";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    Promise.all([fetchTasks(), fetchTags()])
      .then(([tasksData, tagsData]) => {
        if (!ignore) {
          setTasks(tasksData);
          setTags(tagsData);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<TasksView tasks={tasks} tags={tags} loading={loading} error={error} />} />
          <Route path="/tags" element={<TagsView tags={tags} loading={loading} error={error} />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="*" element={<p>Page not found.</p>} />
        </Routes>
      </main>
    </>
  );
}