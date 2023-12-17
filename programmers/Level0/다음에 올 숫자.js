function solution(common) {
    let answer = 0;
    if (common[1] - common[0] == common[2] - common[1]) {
        let seq = common[1] - common[0];
        answer = common[common.length -1] + seq;
    } else {
        let ratio = common[1] / common[0];
        answer = common[common.length -1] * ratio;
    }
    return answer;
}
