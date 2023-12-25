function solution(my_string) {
    let answer = 0;
    let arr = my_string.split("");
    arr.forEach((el) => {
        if (Number.isInteger(Number((el)))) {
            answer += Number(el);
        }
    })  
    return answer;
}
