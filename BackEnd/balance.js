k = "A common problem for compilers and text editors is determining whether the parentheses in a string are balanced and properly nested. For example, the string ((())())() contains properly nested pairs of parentheses, which the strings )()( and ()) do not.";
a = "()"
c = ")("
d =  "(()";
k= d
open = 0;
close = 0;

for (x = 0; x < k.length; x++){
    if (k[x] == "("){
        open++;
    } else if (k[x] == ")" && open > close){
        close ++;
        // console.log(x);
    } else if (k[x]=="(" || k[x]==")") {
        console.log(x);
        console.log(false);
        return false;
    }    
}

if (open == close){
    console.log(true);
    return true;
} else {
    console.log(k.length-1);
    console.log(false);
    return false;
}
