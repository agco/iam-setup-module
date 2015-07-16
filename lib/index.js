var _ = require('lodash');

var permissions = {};

module.exports = {
    addPermissions: function () {
        var params = arguments;
        if (arguments.length === 1 && arguments[0] instanceof Array) {
            params = arguments[0];
        }
        _.forEach(params, function (permission) {
            permissions[permission] = permission;
        });
        return this;
    },
    getPermissions: function () {
        return _.keys(permissions);
    },
    clear: function () {
        permissions = {};
        return this;
    }
};
