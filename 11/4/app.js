//https://school.programmers.co.kr/learn/courses/30/lessons/70128

// function solution(a, b,i=0) {
//     let answer = 0;
//     a.forEach((v,i)=>{
//         answer += a[i]*b[i];
//         i++;
//     })
//     return answer;    
// }

//다른 사람의 풀이
// function solution(a, b) {
//     return a.reduce((acc, cur , i)=> acc += a[i]*b[i],0);
//     0,즉 초기값을 안넣어주면 첫번쨰는 배열을 곱한 값이 아닌 a[0]이 들어가서 오류남
// }

// https://school.programmers.co.kr/learn/courses/30/lessons/12917

// function solution(s) {
//     const string = s
//         .split("")
//         .sort()
//         .reverse()
//         .join("");
    
//     return string;
// }

//https://school.programmers.co.kr/learn/courses/30/lessons/12918#

// function solution(s) {

//     if(isNaN(s) == false &&(s.length == 6 || s.length == 4) ){
//         if(s.indexOf('E') != -1 || s.indexOf('e') != -1) return false
//         return true;
//     } else{
//         return false;
//     }
// }

// 다른 사람의 풀이
// function alpha_string46(s){
//     var regex = /^\d{6}$|^\d{4}$/;
//     return regex.test(s);
//   }
  