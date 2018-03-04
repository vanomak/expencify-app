const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolver data');
        // reject('This is error');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('Fine:', data);
}).catch((data) => {
    console.log('Error:', data);
}).finally((data) => {
    console.log('Finally:', data);
});

console.log('after');
