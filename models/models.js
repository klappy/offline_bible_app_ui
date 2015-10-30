module.exports = function(connection) {

    var User = require('./user');
    var Person = require('./person')(connection);
    var Thing = require('./thing')(connection);

    return {
        user: User,
        person: Person,
        thing: Thing
    }
}