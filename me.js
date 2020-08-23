let ME = {
    "name": "zahid",
    "age": 12,
    "class": 8
}
var myname = ME.name;
var myage = ME.age;
var myclass = ME.class;
function myData(ans) {
    if (ans === myname) {
        return "right";
    } else {
        return "wrong";
    }
}

var output = myData ('xfghj');
console.log(output);