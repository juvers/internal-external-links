// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import Person from './sample/person';
import Book from './sample/book';
import Appointment from './contentTypes/basicTypes';
import { visa, passport } from './contentTypes/basicTypes';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
        Person,
        Appointment,
        Book,
        visa, passport
    ]),
})