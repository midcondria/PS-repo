function solution(age) {
    let arr = ("" + age).split("")
    let answer = '';
    let alien = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    arr.forEach((el) => answer += alien[Number(el)]);
    return answer;
}
