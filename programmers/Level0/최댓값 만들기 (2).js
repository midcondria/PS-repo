function solution(numbers) {
    let answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i +1; j < numbers.length; j++) {
            answer = Math.max(numbers[i] * numbers[j], answer);
        }
    }
    return answer;
}
