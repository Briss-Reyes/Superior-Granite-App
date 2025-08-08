import { PortableTextBlock } from "next-sanity";
export type productsHeader = {
  _id: string;
  _createdAt: Date;
  title: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  buttonText: string;
  buttonLink: string;
  content: PortableTextBlock[];
}