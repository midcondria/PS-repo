function solution(my_string) {
    let answer = [];
    for (let i = 0; i < my_string.length; i++) {
        if (my_string.charCodeAt(i) >= 97 && my_string.charCodeAt(i) <= 122) {
            continue;
        } else {
            answer.push(Number(my_string.at(i)));
        }
    }
    return answer.sort((a, b) => a - b);
}
