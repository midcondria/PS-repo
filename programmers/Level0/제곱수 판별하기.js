function solution(n) {
    let root = Math.sqrt(n);
    return  root === Math.ceil(root) ? 1 : 2;
}
