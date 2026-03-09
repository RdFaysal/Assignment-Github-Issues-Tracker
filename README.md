1. ans:
var → Function scoped, re-declare ও reassign করা যায়

let → Block scoped, reassign করা যায় কিন্তু re-declare করা যায় না

const → Block scoped, reassign বা re-declare কোনটাই করা যায় না


2. ans:
const a = [1,2];
const b = [...a,3];


3. ans:
map() → নতুন array return করে

filter() → condition অনুযায়ী নতুন filtered array return করে

forEach() → শুধু loop করে, কিছু return করে না

4. ans:
const sum = (a,b) => a + b;

5. ans:
const name = "Faysal";
console.log(`Hello ${name}`);