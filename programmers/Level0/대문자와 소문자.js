function solution(my_string) {
    let answer = '';
    let arr = my_string.split("");
    for (let i = 0; i < my_string.length; i++) {
        if (my_string.charCodeAt(i) >= 65 && my_string.charCodeAt(i) <= 90) {
            answer += my_string.charAt(i).toLowerCase();
        } else {
            answer += my_string.charAt(i).toUpperCase();
        }
    }
    return answer;
}
