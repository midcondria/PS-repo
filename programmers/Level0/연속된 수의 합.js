function solution(num, total) {
    let answer = [];
    if (num % 2 == 0) {
        let start = Math.ceil(total / num) - (num / 2);
        while (answer.length < num) {
            answer.push(start);
            start++;
        }
    } else {
        let start = (total / num) - Math.floor(num / 2);
        while (answer.length < num) {
            answer.push(start);
            start++;
        }
    }
    return answer;
}
