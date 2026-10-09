const BASE_URL = "http://127.0.0.1:3010";

async function getJson(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    throw new Error(`GET ${path} failed with status ${res.status}`);
  }
  return res.json();
}

export const fetchTasks = () => getJson("/tasks");
export const fetchTags = () => getJson("/tags");