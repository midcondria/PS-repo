function solution(arr) {
    return arr.map((el) => {
        if (el % 2 === 0 && el >= 50) {
            return el / 2;
        } else if (el % 2 === 1 && el < 50) {
            return el * 2;
        } else {
            return el;
        }
    });
}
