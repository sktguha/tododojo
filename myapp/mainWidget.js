define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/maintemplate.html",
    "./TodoWidget"
], function(declare, _WidgetBase, _TemplatedMixin, template, TodoWidget) {

    /**
     * so make simple todo app
     * widget will have a todo
     */

    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _todoList : [],
        constructor : function(){
            var returnValue = this.inherited(arguments);
            this.writeToStorage = _.throttle(this._writeToStorage.bind(this), 100);
            return returnValue;
        },
        postCreate : function () {
            // this.addTodo();
            this._restoreStorage();
        },
        _addTodo: function (newParam = {
            done: false,
            text: ""
        }) {
            const todo = new TodoWidget(newParam);
            todo.placeAt(this.todoList);
            this._todoList.push(todo);
            dojo.connect(todo, "onSaveRequired", function(){
                this.writeToStorage();
            }.bind(this));
        },
        addTodo : function () {
            this._addTodo();
        },
        _writeToStorage : function () {
           localStorage['store'] = JSON.stringify(this._todoList.map((todo) => todo.toStorageString()));
        },
        _restoreStorage : function () {
            let arr = localStorage['store'];
            arr = JSON.parse(arr);
            arr.forEach((a) => {
                this._addTodo(a);
            });
        }
    });
});
