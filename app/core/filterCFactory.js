(function () {
    'use strict';
    angular
        .module('app')
        .factory('filterCFactory',filterCFactory);

    filterCFactory.$inject = ['todoProcess'];

    function filterCFactory(todoProcess) {
        var service = {};
        service.forwardFilter = forwardFilter;
        return service;

        ///////////////////////////
        function forwardFilter(filterS) {
            todoProcess.updateTodo(filterS,todoProcess.events.FILTER);
        }
    }
})()