function solution(array, height) {
   const arr = array.filter((e) => e > height);
    return arr.length;
}