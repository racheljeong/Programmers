function solution(n, k) {  
    let nPrice = 12000;
    let kPrice = 2000;

    return n * nPrice + k * kPrice - parseInt(n/10) * kPrice;
}