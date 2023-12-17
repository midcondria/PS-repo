function solution(board) {
    let answer = 0;
    let n = board.length;
    let dx = [1, 0, -1, 0, 1, -1, -1, 1];
    let dy = [0, 1, 0, -1, 1, 1, -1, -1];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <n; j++) {
            for (let k = 0; k < 8; k++) {
                let nx = j + dx[k];
                let ny = i + dy[k];                
                if (nx >= 0 && nx < n
                   && ny >= 0 && ny < n
                   && board[i][j] !== 1
                   && board[ny][nx] == 1) {
                    board[i][j] = 2;
                }                
            }
            answer += board[i][j] == 0 ? 1 : 0;
        }
    }
    return answer;
}
