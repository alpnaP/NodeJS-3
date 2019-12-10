var obj = {
    foo: function() {
        return this;   
    }
};

obj.foo() === obj; // true
