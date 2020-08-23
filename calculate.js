function finddivider(a,b) {
    var string_a = typeof'a';
    var string_b = typeof'b';    
    if(a===0 || b===0) {
        console.log(`${a} or ${b} can not be ZERO-0`)
    }  else if ( a%b === 0 ) {
        console.log(`${b} is a divider of ${a}`);
     } 
     else if(b%a === 0 ) {
         console.log(`${a} is a divider of ${b}`);
     } else if ( a === string_a || b === string_b ){
         return "String is not compatitable";
     }
} 
console.log(finddivider("sdfb","dfghj"));