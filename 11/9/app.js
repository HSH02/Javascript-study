//https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 원래 코드 
// function solution(arr)
// {
//     let i=0;
//     while(i<arr.length){
//         if(arr[i] == arr[i+1]){
//             arr.splice(i+1,1);
//         }
//         else{
//             i++;
//         }
//     }
//     return arr;
// }


// 효율성 테스트가 막혀서 찾아본 코드
// function solution(arr)
// {
//     var answer = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] != arr[i+1]){
//             answer.push(arr[i]);
//         }
//     }
//     return answer;
// }

//12줄 -> 10줄? 1. 가독성 좋아짐 2. 원본 arr를 건드리지 않음 
// 배열의 원소를 제거하면 해당 원소의 뒤 원소부터 차례대로 앞으로 당기는 작업을 합니다.
// 예를 들어 1,000,000 크기의 배열에서 맨 앞 원소를 제거하면 999,999번의 이동 작업을 수행합니다.

// 이 문제에서 배열의 최대 길이는 1,000,000입니다.
// 그래서 질문자님의 첫 번째 소스코드로 실행하면 최악의 경우 (모든 원소가 같은 경우)
// 1,000,000 + 999,999 + 999,998 + 999,997 + ... = 500,000,500,000
// 약 5천억 번 연산을 하게 됩니다.

// 대략 1억 번의 연산에 1초가 걸린다고 가정을 하면 5천 초, 1시간 22분이 걸립니다.
// -> 프로그래머스 답글

// 다른 사람의 풀이 
// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);
// }

//https://school.programmers.co.kr/learn/courses/30/lessons/12930#


//https://school.programmers.co.kr/learn/courses/14743/lessons/118645
// function solution(s) {
//     var answer = "";
    
//     s.split(" ").forEach(function(element, index){
        
//         let split = element.split("");
        
//         split.forEach(function(element, index){
//             if(index%2 == 0){
//                 answer += element.toUpperCase();
//             }else{
//                 answer += element.toLowerCase();
//             }
//         });
//         index === s.split(" ").length -1?answer:answer += " ";
//     });
     
//     return answer;
// }
//단어를 하나씩 나누고 홀수,짝수에 따라 대문자, 소문자화 한 다음 공백 넣기, 마지막이면 생략