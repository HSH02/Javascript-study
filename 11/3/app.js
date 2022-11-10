//https://school.programmers.co.kr/learn/courses/30/lessons/76501

// function solution(absolutes, signs) {
//     let answer = 0;
//     for(let i=0;i<absolutes.length;i++){
//         if(signs[i] == true){
//             answer += absolutes[i];
//         }
//         else if(signs[i] == false){
//             answer -= absolutes[i];
//         }
//     }
//     return answer;
// }

// 다른 사람의 풀이
// function solution(absolutes, signs) {
//     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }

// function solution(absolutes, signs) {
//     let answer = 0;  
//     for (let i = 0; i < absolutes.length; i++) {
//         signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
//     }
//     return answer;
// }

// function solution(absolutes, signs) {
//     let answer = 0;
//     absolutes.forEach((v, i) => {
//         if (signs[i]) {
//             answer += v;
//         } else {
//             answer -= v;
//         }
//     })
//     return answer;
// }

//https://school.programmers.co.kr/learn/courses/30/lessons/8605
// function solution(numbers) {
//     return 45-numbers.reduce((acc, val) => acc+val, 0);
// }

//다른 사람의 풀이
// function solution(numbers) {
//     let answer = 0;
//     for(let i = 0; i <= 9; i++) {
//         if(!numbers.includes(i)) answer += i;
//     }1
//     return answer;
// }


//https://school.programmers.co.kr/learn/courses/30/lessons/12903
//mdn에선 substr을 쓰지 않음을 권장

// function solution(s) {
//     return Math.floor(s.length)%2==0?s.substr(Math.floor(s.length/2)-1,2):s.substr(Math.floor(s.length/2),1)
// }

//substring으로 해결한 풀이
// function solution(s) {
//     Mas = Math.ceil(s.length/2);
//     return s.substring(Mas - 1, s.length % 2 === 0 ? Mas+1 : Mas);
// }

//다른 사람의 풀이

// function solution(s) {
//     return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }

//https://school.programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
// function solution(n) {
//     var answer = '';
//     for(let i=1;i<=n;i++){
//         i%2!=0?answer+="수":answer+="박";
//     }
//     return answer;
// }

// const waterMelon = n => {
//     return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
// }
