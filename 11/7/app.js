//https://school.programmers.co.kr/learn/courses/30/lessons/12950
// function solution(arr1, arr2) {
//     let answer = [];

//     console.log(arr1[0].length);
    
//     for(let i=0;i<arr1.length;i++){
//         let sum = [];
//         for(let j=0;j<arr1[i].length;j++){
//             sum.push(arr1[i][j]+arr2[i][j])    
//         }
//         answer.push(sum);
//     }
    
//     return answer;
// }
//2시간 가량 생각해도 실마리가 안보여 인터넷 코드를 참조
//answer 자체를 2차원 배열로 선언해 어떻게 넣을지 오래 생각한 것, arr.length를 제대로 파악하며 생각하지 못한것때문에 잘 안됐던거라 생각


// function sumMatrix(A,B){
    /*var answer = Array();
  var rowMax = A.length > B.length ? A.length : B.length;
  var colMax = A[0].length > B[0].length ? A[0].length : B[0].length;
    for(var i=0; i < rowMax; i++)
  {
    answer[i] = new Array();
    for(var j=0; j < colMax; j++)
    {
      console.log(isNaN(A[i][j])?0:A[i][j]);
      console.log(isNaN(B[i][j])?0:B[i][j]);
            answer[i][j] = parseInt(isNaN(A[i][j])?0:A[i][j]) + parseInt(isNaN(B[i][j])?0:B[i][j]);
    }
  }*/

//     return A.map((a,i) => a.map((b, j) => b + B[i][j]));
// }

//https://school.programmers.co.kr/learn/courses/30/lessons/12969

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
    
//     for(let i=0;i<b;i++){
//         for(let j=0;j<a;j++){
//             process.stdout.write("*");
//         }
//         console.log("");
//     }
// });

// console.log랑 proces.stdout.write 은 줄바꿈 차이 있음

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     const row = '*'.repeat(a)
//     for(let i =0; i < b; i++){
//         console.log(row)
//     }

// });