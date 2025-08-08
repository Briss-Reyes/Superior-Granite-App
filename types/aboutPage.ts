import { PortableTextBlock } from "next-sanity";
export type AboutPage = {
  _id: string;
  _createdAt: Date;
  title: string;
  image1: string;
  image2: string;
  buttonText: string;
  buttonLink: string;
  content: PortableTextBlock[];
}