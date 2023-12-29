function solution(num_list) {
    let sum = 0;
    let mul = 1;
    num_list.forEach((el) => {
        sum += el;
        mul *= el;
    });
    return Math.pow(sum, 2) > mul ? 1 : 0;
}
