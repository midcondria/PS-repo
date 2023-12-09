function solution(a, b, c, d) {
    let given = [a, b, c, d];
    let count = new Map;
    for (let g of given) {
        count.set(g, (count.get(g) || 0) +1)
    }    
    if (count.size === 1) {
        return 1111 * a;
    } else if (count.size === 2) { 
        let x = Math.max(a, b, c, d);
        let y = Math.min(a, b, c, d);
        if (count.get(x) === 2) {             
            return (x + y) * Math.abs(x - y);
        } else if (count.get(x) === 3){    
            return (10 * x + y) ** 2;
        } else {
            return (10 * y + x) ** 2;
        }
    } else if (count.size === 3) {
        let qr = given.filter((element) => count.get(element) === 1);
        return qr[0] * qr[1];
    } else {
        return Math.min(a, b, c, d);
    }
    return;
}
