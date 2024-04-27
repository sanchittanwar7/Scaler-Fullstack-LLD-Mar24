function parent() {
    var a = 10;
    function child() {
        var a = 20
        function grandchild() {
            console.log(a)
        }
        return grandchild
    }
    return child
}

// var childFn = parent()

// var grandchildFn = childFn()

// grandchildFn()

parent()()()


