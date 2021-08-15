import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'xz5dazi4',
    dataset: 'production',
    token: 'skZDtSal4fNC03QYgb0lEr9legAUee7x4LJFzhPZRohqN9svkeZMwVcCXEPHuN4RZeXXsn9MMI5zIea1fbZKcs82GH4KYBJL605oQWAk0OEBhi7OMYEuQuFYthK5DYWgRZsBaNMlwHVTfNs23hF0YseAYqZZYRmvcksRwjSzabeOiFw73ruc', // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,
});

export default client;