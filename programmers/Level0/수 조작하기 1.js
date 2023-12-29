function solution(n, control) {
    let answer = n;
    let arr = control.split("");
    for (let a of arr) {
        switch (a) {
            case "w" : {
                answer += 1;
                continue;
            } 
            case "s" : {
                answer -= 1;
                continue;
            } 
            case "d" : {
                answer += 10;
                continue;
            } 
            case "a" : {
                answer -= 10;
                continue;
            }
        }
    }
    return answer;
}
