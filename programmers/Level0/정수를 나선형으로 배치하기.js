function solution(n) {
    const answer = new Array(n); // 
    for (let i = 0; i < answer.length; i++) {
        answer[i] = new Array(n).fill(0);
    }
    const move = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let direction = 0;
    
    let x = 0;
    let y = 0;
    let num = 1;
    // x,y = 1, 2
    while (num <= n ** 2) {  
        // 현재 위치 채움
        answer[y][x] = num;    
        // 다음 위치 확인
        let nx = x + move[direction][0];
        let ny = y + move[direction][1];
        // 다음 위치가 방향이 바뀌면 direction 변경
        if (nx >= n || nx < 0
           || ny >= n || ny < 0
           || answer[ny][nx] !== 0) {
            direction = (direction + 1) % 4;
            nx = x + move[direction][0];
            ny = y + move[direction][1];
        }
        x = nx;
        y = ny;
        num += 1;
    }
    return answer;
}
