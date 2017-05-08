(function () {
    'use strict';
    angular
        .module('app')
        .controller('todoFilter',filterData);

    filterData.$inject = ['filterFactory'];

    function filterData(filterFactory) {
        filterFactory.filterList();
    }
})()