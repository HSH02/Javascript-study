// //https://school.programmers.co.kr/learn/courses/30/lessons/12948

// function solution(phone_number) {
//     return  phone_number.slice(-4).padStart(phone_number.length,'*');
// }

// function hide_numbers(s) {
//     return s.replace(/\d(?=\d{4})/g, "*"); //정규식 
//   }

//https://school.programmers.co.kr/learn/courses/30/lessons/12910

// function solution(arr, divisor) {
//     const array = [];
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]%divisor==0){
//             array.push(arr[i]);
//         }
//     }
//     if(array.length == 0) array.push(-1);
//     array.sort((a,b)=>a-b);
//     return array;
// }

// function solution(arr, divisor) {
//     var answer = arr.filter(v => v%divisor == 0);
//     return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
// } 다른 사람의 풀이

//https://school.programmers.co.kr/learn/courses/30/lessons/12935#
// function solution(arr) {
    
//     const min = Math.min(...arr); // ...은 객체나 배열의 원소들을 하나씩 꺼내어서 펼쳐서 리턴
//     let array = arr.filter(element=>element != min)
    
//     return array.length == 0 ? [-1]:array
// }