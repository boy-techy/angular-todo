(function () {
    'use strict';
    angular.module('app')
        .controller('todoController',todoController);

    todoController.$inject = ['todoProcess','$log'];

    function todoController(todoProcess,$log) {
        var vm = this;

        printData();

        function printData() {
            todoProcess
                .getTodo()
                .then(function (list) {
                    vm.pre = list.pre;
                    vm.past = list.past;
                });
        }
    }
})();