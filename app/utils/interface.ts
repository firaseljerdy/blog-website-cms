/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableTextBlock } from "@sanity/types";

export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: PortableTextBlock[]; // Updated from 'any' to 'PortableTextBlock[]'
  tags: Array<Tag>;
  _id: string;
}

export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
  postCount?: number;
}
