var str = "helloworl";
console.log(str.substring(str.length) + "d");
let { hey } = test();
({ hey } = test());
function test() {
 return { hey: 2 };
}
