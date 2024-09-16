import Header from "@/app/Components/Header";
import PostComponent from "@/app/Components/PostComponent";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import React from "react";

async function getPostsByTag(tag: string) {
  const query = `*[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
  title,
  slug,
  publishedAt,
  excerpt,
  tags[]-> {
    _id,
    slug,
    name
   }
  }`;
  const posts = await client.fetch(query);
  return posts;
}
interface Params {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const page = async ({ params }: Params) => {
  const posts: Array<Post> = await getPostsByTag(params.slug);
  console.log(posts);
  return (
    <div>
      <Header title={`${params?.slug}`} tags />
      <div>
        {" "}
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
};

export default page;
