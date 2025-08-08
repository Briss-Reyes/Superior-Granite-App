const homeInvetory = {
  title: 'Home Invetory Banner',
  name: 'homeInventory',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The main title for the header section.',
        },
        {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
        description: 'A brief subtitle or tagline for the header.',
        },
        {
        name: 'image',
        title: 'Background Image',
        type: 'image',
        options: {
            hotspot: true,
        },
        description: 'Background image for the header section.',
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
export default homeInvetory;