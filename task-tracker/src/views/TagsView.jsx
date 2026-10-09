export default function TagsView({ tags, loading, error }) {
  if (loading) return <p>Loading tags…</p>;
  if (error) return <p className="error">Could not load data: {error}</p>;

  return (
    <section>
      <h1>Tags</h1>
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag.id} className="tag">{tag.name}</li>
        ))}
      </ul>
    </section>
  );
}