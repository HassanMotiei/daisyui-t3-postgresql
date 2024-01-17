import PostCard from "~/components/PostCard";

export default async function Home() {
  return (
    <main className="mt-10 grid items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </main>
  );
}
