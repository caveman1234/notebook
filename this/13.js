/**
 * Created by youngwind on 2016/10/21.
 */

function foo(something) {
    this.a = something;
}

var obj1 = {
    foo: foo
};

var obj2 = {};

obj1.foo(2);
console.log(obj1.a);

obj1.foo.call(obj2, 3);
console.log(obj2.a);

var bar = new obj1.foo(4);
console.log(obj1.a);
console.log(bar.a);
