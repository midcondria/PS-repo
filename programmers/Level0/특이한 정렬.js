function solution(numlist, n) {
    numlist.sort((a, b) => Math.abs(b - n) -Math.abs(a - n) || b - a);
    return numlist;
}
