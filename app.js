// This is a test to add to repository

budgetController = (function(){

    var x = 23

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        },
        b: x
    }

})();