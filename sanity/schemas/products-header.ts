const ProductsHeader = {
  title: 'Products Header',
  name: 'productsHeader',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for the about us section.',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
        of: [{type: 'block'}],
    },
    {
      name: 'image1',
      title: 'Background Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'background image for the about us section.',
    },
    {
      name: 'image2',
      title: 'Background Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'background image for the about us section.',
    },
    {
      name: 'image3',
      title: 'Background Image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'background image for the about us section.',
    },
    {
      name: 'image4',
      title: 'Background Image 4',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'background image for the about us section.',
    },
        {
      name: 'image5',
      title: 'Background Image 5',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'background image for the about us section.',
    },
    {
      name: 'image6',
      title: 'Background Image 6',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'background image for the about us section.',
    },
    {
      name: 'image7',
      title: 'Background Image 7',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'background image for the about us section.',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the call-to-action button.',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      description: 'URL for the call-to-action button.',
    },
  ]
}

export default ProductsHeader;
