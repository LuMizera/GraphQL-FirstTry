const UserMutators = require('./mutators')
const UserTypes = require('./types')
const UserQueries = require('./queries')

module.exports = {
    mutators: UserMutators, 
    types: UserTypes, 
    queries: UserQueries
}