export function tagsForTask(task, allTags) {
  return String(task.tags ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter((id) => id !== "")
    .map((id) => allTags.find((tag) => String(tag.id) === id))
    .filter((tag) => tag !== undefined);
}