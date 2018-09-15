define([
    "./todo"
], function(todo) {

    return {
        init : function () {
            var div = document.getElementById("mainDiv");
            new todo({
                text : "this is a text",
                done : false
            }).placeAt(div);
        }
    }
});
