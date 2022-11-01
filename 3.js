function counting() {
    let counter = 0;
    return function (a = 0) {
        counter += a;
        console.log(counter);
    }
}
const showCount = counting();
showCount();
showCount();
showCount(1);
showCount();
showCount(3);
showCount(7);
showCount(-5);