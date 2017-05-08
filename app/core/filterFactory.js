(function () {
    'use strict';
    angular
        .module('app')
        .factory('filterFactory',filterFactory);

    filterFactory.$inject = ['todoProcess'];

    function filterFactory(todoProcess) {

        var service = {};
        service.forwardFilters = forwardFilters;
        return service;

        /////////////////



        function forwardFilters(filters) {
            todoProcess.updateFilters(filters);
        }




    }
})()