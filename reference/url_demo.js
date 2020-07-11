const url = require('url');

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

// Serialized url
console.log(myUrl.href);

console.log(myUrl.host);
console.log(myUrl.hostname);

console.log(myUrl.pathname);
console.log(myUrl.searchParams);

myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
