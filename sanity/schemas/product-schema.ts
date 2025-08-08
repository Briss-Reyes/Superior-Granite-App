const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'},
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields:[
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                },
            ]
        },
        {
            name: 'image2',
            title: 'Image2',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields:[
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                },
            ]
        },
        {
            name: 'image3',
            title: 'Image3',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields:[
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                },
            ]
        },
        {
            name: 'image4',
            title: 'Image4',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields:[
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                },
            ]
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}],
        }
    ],
}

export default product;