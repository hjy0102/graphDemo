angular.module('ChartsApp').controller('chartCtrl', function ($scope, bus) {
    'use strict';
    console.log("chart controller");

    bus.on('updateData', function(data) {
        $scope.data = angular.copy(data);
    });
});
