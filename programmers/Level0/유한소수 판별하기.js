function GCD(a, b) {
    if (a % b === 0) {
        return b;
    }
    return GCD(b, a % b);
}

function solution(a, b) {
    let num = b / GCD(a, b);
    while(num % 2 === 0 || num % 5 === 0) {
        if (num % 2 === 0) {
            num /= 2;
        }
        if (num % 5 === 0) {
            num /= 5;
        }
    }
    return num === 1 ? 1 : 2;
}
