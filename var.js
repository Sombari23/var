const input= require("readline-sync");

let m = input.questionInt("number;-");
let n = input.questionInt("number;-");

{
    m = m+n;
    n = m-n;
    m = m-n;
    console.log(m,n);
}