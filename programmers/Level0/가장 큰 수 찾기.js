function solution(array) {
    let answer = [];
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = Math.max(max, array[i]);
            answer = [max, i];
        }
    }
    return answer;
}
