function solution(polynomial) {
    let answer = "";
    let x = 0;
    let c = 0;
    let arr = polynomial.split(" + ");
    for (let a of arr) {
        if (a === "x") {
            x += 1;
            continue;
        } 
        if (a !== "x" && a.includes("x")) {
            x += Number(a.replace("x", ""));
            continue;
        } 
        if (!a.includes("x")) {
            c += Number(a);
            continue;
        }
    }
    if (c === 0) {
        if (x === 0){  
            answer += "";
        } else if (x === 1) {
            answer += "x";
        } else {
            answer += `${x}x`;
        }
        return answer;
    } 
    if (x === 0) {
        if (c === 0){  
            answer += "";
        } else {
            answer += `${c}`;
        }
        return answer;
    }
    return x === 1 ? `x + ${c}`:`${x}x + ${c}`;
}
