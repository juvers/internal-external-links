export const visa = {
    title: "Visa",
    name: "visa",
    type: "object",

    fields: [{
            title: "Name of Applicant",
            name: "appName",
            type: "string"
        },
        {
            title: 'Date of Application',
            name: "appDate",
            type: "datetime",
        },
        {
            title: "Number applied for",
            name: "numApplied",
            type: "number"
        },
        {
            title: "Can obtain visa",
            type: "boolean",
            name: "canObtain"
        }
    ]

}

export const passport = {
    title: "Passport",
    name: "passport",
    type: "object",
    preview: {
        select: {
            title: 'title'
        }
    },
    fields: [{
            title: "Name of Applicant",
            name: "appNameP",
            type: "string"
        },
        {
            title: 'Date of Application',
            name: "appDateP",
            type: "datetime",
        },
        {
            name: "appUrl",
            title: "Applicants website",
            type: "url"
        }
    ]

}


export default {
    title: "Appointment",
    name: "appointment",
    type: "document",

    // preview can be placed before the array
    // if preview is missing title in preview will be the combination of objects
    // but a string name can be extracted using the dot notation off the object
    preview: {
        select: {
            title: 'visaDetails.appName'
        }
    },
    fields: [{
            title: "Visa Detail",
            name: "visaDetails",
            type: "visa",
        },
        {
            title: "Passport Details",
            type: "passport",
            name: "passportDetails"
        }
    ],
}