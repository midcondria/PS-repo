function solution(A, B) {
    let answer = 0;
    let arr = A.split("");
    let temp = A;
    for (let i = 0; i < arr.length; i++) {
        if (temp === B) {
            return i;
        } else {
            arr.unshift(arr.pop());
            temp = arr.join("");
        }
    }
    return -1;
}
