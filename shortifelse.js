//The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
    }
    
    console.log(checkEqual(1, 2));
//else-if
function checkSign(num) {
    return (num === 0) ? "zero" : (num < 0) ? "negative" : "positive";
    }
    
    console.log(checkSign(10));
        