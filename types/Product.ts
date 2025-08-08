import { PortableTextBlock } from "next-sanity";

export type Product = {
  _id: string;
  _createdAt: Date;
  name: string;
  description: string;
    slug: string;
    image: string;
    image2: string;
    image3: string;
    image4: string;
    url: string;
    content: PortableTextBlock[];
}