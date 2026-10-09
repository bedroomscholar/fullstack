import TaskCard from "../components/TaskCard.jsx";

export default function TasksView({ tasks, tags, loading, error }) {
  if (loading) return <p>Loading tasks…</p>;
  if (error) {
    return <p className="error">Could not load data: {error}. Is the server running on port 3010?</p>;
  }

  return (
    <section>
      <h1>Tasks</h1>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <div className="task-grid">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} tags={tags} />
          ))}
        </div>
      )}
    </section>
  );
}