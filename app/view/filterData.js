(function () {
    'use strict';
    angular
        .module('app')
        .controller('todoFilter',filterData);

    filterData.$inject = ['filterFactory'];

    function filterData(filterFactory) {

        var vm = this;
        vm.onSubmit = submit;

        init();
        //////////////////////

        function init() {

        }

        function submit() {
            filterFactory
                .forwardFilters({type: vm.filterType, value: vm.filterValue})

        }

    }




})()