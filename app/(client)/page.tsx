import { client } from "@/sanity/lib/client";
import Header from "../Components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../Components/PostComponent";

async function getPosts() {
  const query = `*[_type == "post"] {
  title,
  slug,
  publishedAt,
  excerpt,
  _id,
  tags[]-> {
    _id,
    slug,
    name
  }
}`;

  const data = await client.fetch(query);
  return data;
}

{
  /* Automatically cache */
}
export const revalidate = 30;

export default async function Home() {
  const posts: Post[] = await getPosts();
  return (
    <div className="font-geistMono">
      <Header title="Articles" tags />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
