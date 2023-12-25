function solution(cipher, code) {
    let answer = '';
    for (let i = code -1; i < cipher.length;) {
        answer += cipher.at(i);
        i+= code;
    }
    return answer;
}
