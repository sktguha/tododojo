define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/maintemplate.html",
    "./todo"
], function(declare, _WidgetBase, _TemplatedMixin, template, todo) {

    /**
     * so make simple todo app
     * widget will have a todo
     */

    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        postCreate : function () {
            new todo({
                done : false,
                text : "this is a text"
            }).placeAt(this.todoList);
        },
        addTodo : function () {
            alert("eee");
        }
    });
});
