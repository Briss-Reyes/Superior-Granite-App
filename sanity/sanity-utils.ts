import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";
import clientConfig from "./config/client-config";
import { Page } from "../types/Page";
import { AboutPage } from "../types/aboutPage";
import { Product } from "../types/Product";


export async function getProjects(): Promise<Project[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

export async function getProducts(): Promise<Product[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product"]{
     _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getProduct(slug: string): Promise<Product> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      "image2": image2.asset->url,
      "image3": image3.asset->url,
      "image4": image4.asset->url,
      url,
      content
    }`,
    { slug }
  );
}

export async function getPaginatedProducts(page: number, limit: number): Promise<Product[]> {
  const start = (page - 1) * limit;
  const end = start + limit;

  return createClient(clientConfig).fetch(
    groq`*[_type == "product"] | order(_createdAt desc) [${start}...${end}]{
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getTotalProductsCount(): Promise<number> {
  return createClient(clientConfig).fetch(
    groq`count(*[_type == "product"])`
  );
}


export async function getProductsHeader() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "productsHeader"][0]{
      _id,
      _createdAt,
      title,
      "image1": image1.asset->url,
      "image2": image2.asset->url,
      "image3": image3.asset->url,
      "image4": image4.asset->url,
      "image5": image5.asset->url,
      "image6": image6.asset->url,
      "image7": image7.asset->url,
      buttonText,
      buttonLink,
      content
    }`
  );
}


export async function getHeader() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "header"][0]{
      _id,
      _createdAt,
      title,
      subtitle,
      "image": image.asset->url,
      "sliderImages": sliderImages[].asset->url,
      buttonText,
      buttonLink
    }`
  );
}

// export async function getHeader() {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "header"][0]{
//       _id,
//       _createdAt,
//       title,
//       text,
//       "image": image.asset->url,
//       buttonText,
//       buttonLink
//     }`
//   );
// }

export async function getAboutPage(): Promise<AboutPage> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "aboutPage"][0]{
      _id,
      _createdAt,
      title,
      content,
      buttonText,
      buttonLink,
      "image1": image1.asset->url,
      "image2": image2.asset->url
    }`
  );
}




export async function getHomeAbout() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homeAbout"][0]{
      _id,
      _createdAt,
      title,
      content,
      "image": image.asset->url
    }`
  );
}

export async function getHomeInventory() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homeInventory"][0]{
      _id,
      _createdAt,
      title,
      subtitle,
      "image": image.asset->url,
      buttonText,
      buttonLink
    }`
  );
}

export async function getHomeReviews() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homeReviews"][0].reviews`
  );
}











export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      name,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}

