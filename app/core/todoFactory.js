(function () {
    'use strict';
    angular.module('app')
        .factory('todoFactory',todoFactory);

    todoFactory.$inject = ['$http'];

    function todoFactory(http) {
        var service = {};
        service.gettodoList = gettodoList;
        return service;


        //////////////////////////////
        function gettodoList() {
            return http.get('/api/data.json')
                .then(function (response) {
                        return wrapInTodo(response.data);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    }
    function wrapInTodo(jsonObject) {
        return jsonObject.map(function (item) {
            return new Todo(item);
        })
    }

    function Todo(data) {
        this.title =data.title;
        this.date = data.date;
        this.desc = data.description;
        this.status = data.status;
    }

    Todo.prototype.hasCrossed = function () {
        return new Date(this.date) < new Date;
    }

    Todo.prototype.isComplete = function () {
        return this.status;
    }
})()