function solution(n) {
    let answer = 1;
    let i = 1;
    while(i <= n) {
        if (answer % 3 === 0 || ("" + answer).includes("3")) {
            answer++;
            continue;
        }
        if (i === n) {
            return answer;
        }
        answer++;
        i++;
    }
    return answer;
}
