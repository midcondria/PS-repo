function solution(answers) {  
    function scoring(i, arr, num) {
        let idx = i % arr.length;        
        if (answers[i] === arr[idx]) {
            count[num] += 1;
        } 
    }
    let answer = [];
    let count = [0, 0, 0];
    let first = [1,2,3,4,5];
    let second = [2,1,2,3,2,4,2,5];
    let third = [3,3,1,1,2,2,4,4,5,5];
    let max = 0;
    // 1. 루프를 돈다.
    for (let i = 0; i < answers.length; i++) {
        scoring(i, first, 0);
        scoring(i, second, 1);
        scoring(i, third, 2);
    }
    // 2. 최고점자 찾기
    for (let c of count) {
        max = max > c ? max : c
    }
    for (let i = 0; i < count.length; i++) {
        if (count[i] === max) {
            answer.push(i +1);
        }
    }
    return answer;
}
