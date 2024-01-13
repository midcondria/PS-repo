let set = new Set();

function isPrime(target) {
    let targetNum = Number(target);
    if (targetNum === 0 || targetNum === 1) {
        return;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(targetNum)); i++) {
        if (targetNum % i === 0) {
            return;
        }
    }
    set.add(targetNum);
}

function reculsive(init, left) {
    let arr = left.split("");
    
    for (let i = 0; i < arr.length; i++) {
        isPrime(init + arr[i]);
        reculsive((init + arr[i]), left.substring(0, i)+ left.substring(i + 1));    
    }
}

function solution(numbers) {
    // 1. 1자리 숫자로 나눔
    // 2. left 를 루프를 돌아서 init 에다가 붙이고 그걸 또 재귀함수 호출
    // 3. 소수 판별
    reculsive("", numbers);
    
    return set.size;
}
