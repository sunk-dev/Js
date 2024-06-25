//에러예제
//위의 alert 만 작동
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof (alert)); // function이 아니라 지금은 왜 undefined 라고 나오는가..?