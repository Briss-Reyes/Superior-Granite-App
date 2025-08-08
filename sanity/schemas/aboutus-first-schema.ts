const aboutPage = {
  title: 'About Us Page',
  name: 'aboutPage',
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
      description: 'First background image for the about us section.',
    },
    {
      name: 'image2',
      title: 'Background Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Second background image for the about us section.',
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

export default aboutPage;

