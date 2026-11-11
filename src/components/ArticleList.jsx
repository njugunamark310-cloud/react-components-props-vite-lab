import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 pb-12 md:grid-cols-2">
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;