(function () {
    'use strict';
    angular.module('app')
        .factory('todoProcess',todoProcess);

    todoProcess.$inject = ['todoFactory','$log'];

    function todoProcess(todoFactory,$log) {
        var service = {};
        service.getTodo = getTodo;
        return service;

        function getTodo() {
            return todoFactory
                .gettodoList()
                .then(function (todoList) {
                return getLists(todoList);
            })
            // return todoFactory.getData()
        }
    }

    function getLists(todoList) {
        var list = {
            "pre":{
                "complete":[],
                "incomplete":[]
            },
            "past":{
                "complete":[],
                "incomplete":[]
            }
        };

        todoList.forEach(function (item) {
            if(item.hasCrossed()){
                if(item.isComplete())
                    list.pre.complete.push(item);
                else
                    list.pre.incomplete.push(item);
            }
            else {
                if(item.isComplete())
                    list.past.complete.push(item);
                else
                    list.past.incomplete.push(item);
            }
        })
        return list;
    }

})()