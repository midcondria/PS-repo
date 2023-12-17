function solution(array, n) {
    let answer = 0;
    array.forEach((el) => answer += el === n ? 1 : 0);
    return answer;
}
