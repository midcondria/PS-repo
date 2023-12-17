function GCD(a, b) {
    if (a % b == 0) {
        return b;
    }
    return GCD(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    let newNumer = numer1 * denom2 + numer2 * denom1;
    let newDenom = denom1 * denom2;
    let gcd = GCD(newNumer, newDenom);
    return [(newNumer/gcd), (newDenom/gcd)];
}
