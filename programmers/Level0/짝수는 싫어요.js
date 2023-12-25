function solution(n) {
    let answer = [];
    let start = 1;
    while (start <= n) {
        if (start%2 === 1) {
            answer.push(start);
        }
        start++;
    }
    return answer;
}
