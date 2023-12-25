function solution(n) {
    let answer = 0;
    let start = 1;
    while (start <= n) {
        answer += n % start === 0 ? 1 : 0;
        start++;
    }
    return answer;
}
