import { PortableTextBlock } from "next-sanity";
export type HomeInventory = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  content?: PortableTextBlock[];
};