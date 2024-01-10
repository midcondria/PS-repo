function solution(sizes) {
    let answer = 0;
    let wallet = [0, 0];
    // 1. 가로 크기가 큰 순으로 정렬한다.
    // 2. 루프를 돈다
    // 3. 넣어 봤을 때 넘치는 부분이 있으면 가로, 세로 크기 갱신
    
    // 1.
    sizes.sort((a, b) => {
        a.sort((a, b) => b - a);
        b.sort((a, b) => b - a);
    });
    // 2.
    for (let s of sizes) {
        // 3.
        if (wallet[0] < s[0]) {
            wallet[0] = s[0];
        }
        if (wallet[1] < s[1]) {
            wallet[1] = s[1];
        }
    }
    return wallet[0] * wallet[1];
}
