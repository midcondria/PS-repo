function solution(quiz) {
    let answer = [];
    for (let i = 0; i < quiz.length; i++){
        let arr = quiz[i].split(" ");
        let X = Number(arr[0]);        
        let opperator = arr[1];
        let Y = Number(arr[2]);
        let Z = Number(arr[4]);
        if (arr[1] === "+") {
            if (X + Y == Z) {
                answer.push("O");
            } else {
                answer.push("X");
            }
        } else {
            if (X - Y == Z) {
                answer.push("O");
            } else {
                answer.push("X");
            }
        }
    }
    return answer;
}
