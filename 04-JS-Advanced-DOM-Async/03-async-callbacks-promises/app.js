// 03: Async & Promises
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success data");
    }, 1000);
});
myPromise.then(res => console.log(res)).catch(err => console.log(err));
