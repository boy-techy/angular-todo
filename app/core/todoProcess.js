(function () {
    'use strict';
    angular.module('app')
        .factory('todoProcess',todoProcess);

    todoProcess.$inject = ['todoFactory'];

    function todoProcess(todoFactory) {
        var service = {},
            cache,
            listeners = [];

        service.events = {
            "FILTER" : 'filterToDo'
        };

        service.getTodo = getTodo;
        service.registerListeners = registerListeners;
        service.updateTodo = updateTodo;
        return service;


        ////////////////
        function getTodo() {
            return todoFactory
            .gettodoList()
            .then(function (todoList) {
                cache = todoList;
                return getLists(todoList);
            });
        }

        function registerListeners(event,action) {
            listeners[event] = listeners[event] ? listeners[event] : [];
            listeners[event].push(action);
        }
        function updateTodo(filters,actionType) {
            var filteredtodo = filter(cache,filters.type, filters.value);

            listeners[actionType].forEach(function (action) {
                action(filteredtodo);
            });
        }

        function filter(todoList,fType,fValue) {
            if(fType && fValue){
                return todoList.filter(function (item) {
                    return item[fType] === fValue;
                })
            }
            else{
                return todoList;
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
                    if(item.isComplete()){
                        list.pre.complete.push(item);
                    }
                    else{
                        list.pre.incomplete.push(item);
                    }
                }
                else {
                    if(item.isComplete()){
                        list.past.complete.push(item);
                    }
                    else{
                        list.past.incomplete.push(item);
                    }
                }
            });
            return list;
        }
    }

})();