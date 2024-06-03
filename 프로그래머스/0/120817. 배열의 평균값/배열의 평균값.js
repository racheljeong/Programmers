function solution(numbers) {
    const getAvg = (numbers) => 
        numbers.reduce((sum, crtValue) => sum + crtValue, 0) / numbers.length;
    return getAvg(numbers);
}