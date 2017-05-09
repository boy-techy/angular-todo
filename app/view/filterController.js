(function () {
    'use strict';
    angular
        .module("app")
        .controller("filterController",filterController);

    filterController.$inject = ['filterCFactory'];

    function filterController(filterCFactory) {
        var vm = this;
        vm.onSubmit = submit;

        ////////////////
        function init() {

        }

        function submit() {
            filterCFactory.forwardFilter(
                {"type": vm.filterType,
                    "value": vm.filterValue
                })
        }
    }
})()