//cleaning tags
export function parseTags(str) {
  if (!str) return [];
  return str.split(',').filter((s) => s !== '').map(Number);
}

export function joinTags(ids) {
    return ids.join(',');
}

//finding tags
export function tagsOfTask(task, tags) {
  return parseTags(task.tags)
    .map((id) => tags.find((tag) => tag.id === id))
    .filter(Boolean);
}