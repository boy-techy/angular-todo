(function () {
    'use strict';
    angular.module('app')
        .controller('todoController',todoController);

    todoController.$inject = ['todoProcess','$log'];

    function todoController(todoProcess) {
        var vm = this;

        init();
        ///////////////////


        function init() {
            registerOnViewDataUpdateListener();
            loadInitialData();
        }


        function registerOnViewDataUpdateListener() {
            todoProcess.registerListeners(todoProcess.events.FILTER, onViewDataUpdate);
        }

        function onViewDataUpdate(list) {

            console.log(list);

            vm.pre = list.pre;
            vm.past = list.past;
        }

        function loadInitialData() {
            todoProcess
                .getTodo()
                .then(function (list) {
                    vm.pre = list.pre;
                    vm.past = list.past;
                });
        }
    }
})();