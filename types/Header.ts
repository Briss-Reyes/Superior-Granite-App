export type Header = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  image: string;
  sliderImages?: string[]; // optional in case it's empty
  buttonText: string;
  buttonLink: string;
};
