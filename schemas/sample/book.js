export default {
    // N.B. use singular form for name and fields not arrays
    title: "Book",
    name: "book",
    type: "document",
    fields: [{
            title: "Book Title",
            name: "bookTitle",
            type: "string"
        },
        {
            title: "Year",
            name: "year",
            type: "number"
        },
        {
            title: "ISBN",
            name: "isbn",
            type: "string"
        },
        {
            title: "Author",
            name: "author",

            // person or any reference must be published before it can be referenced
            // type: "reference",
            // to: [{ type: "person" }],
            // to take multiple persons as authors i.e. many to one -> wrap type-reference and to-type in the "of" of type "array"
            // N.B. use plural form for arrays
            type: "array",
            of: [{
                type: "reference",
                to: [{ type: "person" }]
            }]
        }, {
            title: "Cover",
            name: "cover",
            type: "image"
        }
    ]
}