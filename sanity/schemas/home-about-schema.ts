const homeAbout = {
  title: 'Home About Section',
  name: 'homeAbout',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The main title for the header section.',
        },
        {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{type: 'block'}],
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
    ]
}
export default homeAbout;