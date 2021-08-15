export default {
    name: "blockContent",
    title: "Block Content",
    type: "array",
    of: [{
            type: "block",
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Code', value: 'code' }
                ],
                annotations: [{
                    name: 'internalLink',
                    type: 'object',
                    title: 'Internal link',
                    fields: [{
                        name: 'reference',
                        type: 'reference',
                        title: 'Reference',
                        to: [
                            { type: 'person' },
                            // other types you may want to link to
                        ]
                    }]
                }, {
                    name: 'link',
                    type: 'object',
                    title: 'External link',
                    fields: [{
                            name: 'href',
                            type: 'url',
                            title: 'URL'
                        },
                        {
                            title: 'Open in new tab',
                            name: 'blank',
                            description: 'Read https://site-name.com',
                            type: 'boolean'
                        }
                    ]
                }, ]
            }
        },
        {
            type: "image"
        },
        {
            type: "code",
            title: "CodeTitle"
        }
    ]

}