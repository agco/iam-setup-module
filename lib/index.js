var _ = require('lodash');

var permissions = [];

function addPermission(permission) {
    if (permissions.indexOf(permission) === -1) {
        permissions.push(permission);
    }
    return this;
}
module.exports = {
    addPermissions: function () {
        var params = arguments;
        if (arguments.length === 1 && arguments[0] instanceof Array) {
            params = arguments[0];
        }
        _.forEach(params, addPermission);
        return this;
    },
    getPermissions: function () {
        return _.clone(permissions);
    },
    clear: function () {
        permissions.length = 0;
        return this;
    }
};
