const homeReviews = {
  title: 'Home Reviews',
  name: 'homeReviews',
  type: 'document',
  fields: [
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      description: 'List of client reviews',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Author',
              type: 'string',
              description: 'The name of the person who wrote the review.',
            },
            {
              name: 'subtitle',
              title: 'Review',
              type: 'string',
              description: 'The actual review or quote.',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
            },
          },
        },
      ],
    },
  ],
};

export default homeReviews;
