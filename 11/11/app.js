//https://school.programmers.co.kr/learn/courses/30/lessons/12982
// function solution(d, budget) {
//     var answer = 0;
//     sort_team = d.sort((a,b)=>a-b)

//     for(let i=0;i<sort_team.length;i++){
//         console.log(budget);
//         if(budget-sort_team[i]<0){
//             break;
//         }
//         else{
//             budget -= sort_team[i];
//             answer += 1;
//         }
//     }
    
//     return answer;
// }


//다른 풀이
// function solution(d, budget) {
//     return ~(~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
// }
//~->비트를 뒤집어줌