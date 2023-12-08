function solution(babbling) {
    let answer = 0;
    let can = ['aya', 'ye', 'woo', 'ma'];
    for (let b of babbling) {
        for (let c of can) {
            b = b.replace(c, " ");            
        }
        console.log(b)
        
        if (b.replaceAll(" ", "") === "") {
            answer++;
        }
    }
    return answer;
}
