function solution(arr, query) {
    let answer = [...arr];
    for (let i = 0; i < query.length; i++) {
        let q = query[i]
        if (i % 2 === 0) {
            answer = answer.slice(0, q +1);
        } else {
            answer = answer.slice(q)
        }
    }
    return answer;
}
