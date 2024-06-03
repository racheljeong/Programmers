function solution(angle) {
    let answer = 0;
    
    return [0,90,91,180].filter(x => angle >= x).length;
}