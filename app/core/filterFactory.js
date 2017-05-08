(function () {
    'use strict';
    angular
        .module('app')
        .factory('filterFactory',filterFactory);

    filterFactory.$inject = ['$http'];

    function filterFactory(http) {
        var service = {};

        service.filterList = filterList;
        return service;


        function filterList() {
            console.log("Have to do work yet");
        }
    }
})()