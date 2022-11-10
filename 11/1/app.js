//https://school.programmers.co.kr/learn/courses/30/lessons/12933

// *내 풀이
// function solution(n) {  
//     let array = [];
    
//     while(n>0){
//     array.push(n%10);
//     n = Math.floor(n/10);
//     }
    
//     array = array.sort((a,b)=>b-a);
    
//     var num = "";
 
//     for(let i =0;i<array.length;i++){
//         num += String(array[i]);
//     }
    
//     return num/1;
    
// }
// *참고할만한 다른 사람 풀이

// function solution(n) {
//     const newN = n + ""; //형변환
//     const newArr = newN 
//       .split("") //split ""로 배열에 나누어 넣음
//       .sort() //정렬
//       .reverse() //반대로 뒤집음
//       .join(""); //""로 합침

//     return +newArr; //+으로 int 형변환
//   }

//https://school.programmers.co.kr/learn/courses/30/lessons/12943
// function solution(num) {

//     for(let i=0;i<500;i++){
//         if(i==499 || num == 1) return num == 1 ? i:-1; //삼항연산자 
        
//         num = num%2?(num*3)+1:num/2;
//     }
// }


//https://school.programmers.co.kr/learn/courses/30/lessons/12919
// function solution(seoul) {
//     return ("김서방은 "+ seoul.indexOf('Kim')+"에 있다"); //배열 index 구하기
// }