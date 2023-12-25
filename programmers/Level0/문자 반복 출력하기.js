function solution(my_string, n) {
    let answer = '';
    for (let m of my_string.split("")) {
        answer += m.repeat(n);
    }
    return answer;
}
