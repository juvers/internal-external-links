import RouteFileInput from "./code";

export default {
    title: "Map",
    name: "map",
    type: "object",
    inputComponent: RouteFileInput,
    fields: [{
            title: "GPX file",
            name: "mapfile",
            type: "file",
        },
        {
            name: "bounds",
            title: "Bounds",
            description: "Will be populated by file upload",
            type: "string"
        }
    ]
}