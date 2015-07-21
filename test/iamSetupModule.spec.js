var expect = require('chai').expect;
var iamSetupModule = require('../lib/index.js');

describe('IAMSetupModule', function () {

    beforeEach(function () {
        iamSetupModule.clear();
    });

    describe('addPermissions', function () {
        it('should allow chaining', function () {
            var permissions = iamSetupModule.addPermissions('post.user.auth').addPermissions('get.user.*').getPermissions();
            expect(permissions).to.eql(['post.user.auth', 'get.user.*']);
        });
        it('should allow vararg', function () {
            var permissions = iamSetupModule.addPermissions('delete.tracker.*.stream.*.hash', 'patch.equipment').getPermissions();
            expect(permissions).to.eql(['delete.tracker.*.stream.*.hash', 'patch.equipment']);
        });
        it('should allow array', function () {
            var permissions = iamSetupModule.addPermissions(['delete.tracker.*.stream.*.hash', 'patch.equipment']).getPermissions();
            expect(permissions).to.eql(['delete.tracker.*.stream.*.hash', 'patch.equipment']);
        });
        describe('when permission already exists', function () {
            it('should not duplicate', function () {
                var permissions = iamSetupModule.addPermissions('post.equipment').addPermissions('post.equipment').getPermissions();
                expect(permissions).to.eql(['post.equipment']);
            });
        });
    });
});
