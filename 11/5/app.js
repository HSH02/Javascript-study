// //https://school.programmers.co.kr/learn/courses/30/lessons/77884

// function solution(left, right) {
//     let answer = 0;
//     let left2 = left;
    
//     for(i=1;i<=1+(right-left);i++){
//         let chance = 0 ;
//         let k = 1;

//         while(k<=left2){
//             if(left2%k == 0){
//                 chance += 1; 
//             }
//             k++;
//         }
          
//         chance%2 == 0 ? answer += left2:answer -= left2;
//         left2++;
//     }
//     return answer;
// }

// 다른 사람의 풀이 

// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }
