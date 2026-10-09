import { tagsForTask } from "../utils/tags.js";

export default function TaskCard({ task, tags }) {
  const taskTags = tagsForTask(task, tags);

  return (
    <article className="task-card">
      <h2 className="task-name">{task.name}</h2>
      {taskTags.length > 0 ? (
        <ul className="tag-list">
          {taskTags.map((tag) => (
            <li key={tag.id} className="tag">{tag.name}</li>
          ))}
        </ul>
      ) : (
        <p className="no-tags">No tags</p>
      )}
    </article>
  );
}