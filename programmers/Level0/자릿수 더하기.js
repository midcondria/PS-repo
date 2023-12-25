function solution(n) {
    let arr = `${n}`.split("");
    let answer = 0;
    arr.forEach((el) => answer += Number(el));
    return answer;
}
