export default {
    // N.B. use singular for name and fields 
    // N.B. use plural for arrays
    title: "Book",
    name: "book",
    type: "document",
    fields: [{
            title: "Book Title",
            name: "bookTitle",
            type: "string"
        },
        {
            title: "File Data",
            name: "filedata",
            type: "map"
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
        },
        {
            title: "Block Data",
            name: "blockText",
            type: "blockContent"
        }
    ]
}