function solution(dots) {
    let answer = 0;
    const map = new Map();
    for (let i = 0; i < dots.length; i++) {
        let x1 = dots[i][0];
        let y1 = dots[i][1];
        for (let j = i + 1; j < dots.length; j++) {
            let x2 = dots[j][0];
            let y2 = dots[j][1];
            let gradient = (y2 - y1)/(x2 - x1);
            map.set(gradient, (map.get(gradient) ? map.get(gradient) : 0) +1)
        }
    }
    for (let key of map.keys()) {
        if (map.get(key) == 3) {
            return 0;
        } else if (map.get(key) >= 2) {
            return 1;
        }
    }

    return 0;
}
