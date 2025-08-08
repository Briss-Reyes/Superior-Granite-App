import { PortableTextBlock } from "next-sanity";
export type HomeAbout = {
  _id: string;
  _createdAt: Date;
  title: string;
  image: string;
  content?: PortableTextBlock[];
};