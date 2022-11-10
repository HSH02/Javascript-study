// //https://school.programmers.co.kr/learn/courses/30/lessons/12940

// function solution(n, m) {
//   var answer = [];
//   var max = n-m>0?n:m;
//   var min = 1;
//   for(let i=max;i>0;i--){
//       if( n%i == 0 && m%i == 0){
//            answer.push(i);
//            break;
//       }
//   }
//   while(true){
//       if(min%n == 0 && min%m == 0 ){
//           answer.push(min);
//           break;
//       }
//       min++;
//   }
//   return answer;
// }

// 참고할만한 다른 사람의 풀이
// 유클리드 호제법
// function gcdlcm(a, b) {
//   var r;
//   for(var ab= a*b;r = a % b;a = b, b = r){}
//   return [b, ab/b];
// }