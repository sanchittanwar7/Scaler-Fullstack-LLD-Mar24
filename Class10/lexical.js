function parent() {
    var a = 10;
    console.log(a)
    function child() {
        var a = 20
        function grandchild() {
            console.log(a)
        }
        grandchild()
    }
    child()
    console.log(a)
}

parent()

