'use strict';
var limit = 30;
var a = 0;
var b = 1;
var next;

/*while (a <= limit) {
  console.log(a);
  next = a + b;
  a = b;
  b = next;
}
*/

for (var a = 0; a <= limit;) {
  console.log(a);
  next = a + b;
  a = b;
  b = next;
}
