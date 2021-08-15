export default {
    title: "Appointment",
    name: "appointment",
    type: "document",

    // preview can be placed before the array
    // to avoid title reading an object string use dot notation to extract preferred title off the object
    preview: {
        select: {
            title: 'visaDetails.appName'
        }
    },
    fields: [{
            // use object name to pass as type. e.g. visa from objectTypes > name:'visa'
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