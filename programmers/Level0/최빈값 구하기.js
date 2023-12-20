function solution(array) {
    const map = new Map();
    let max = 0;
    let answer = 0;
    let count = 0;
    for (let a of array) {
        map.set(a, (map.get(a) || 0) + 1);
        max = Math.max(map.get(a), max);
    }
    for (let k of map.keys()){
        if (map.get(k) == max) {
            count += 1;
            answer = k;
        }
    }
    return count == 1 ? answer : -1;
}
