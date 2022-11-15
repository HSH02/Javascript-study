//https://school.programmers.co.kr/learn/courses/30/lessons/17681

// function solution(n, arr1, arr2) {
//     let map = [];
    
//     for(let i=0;i<arr1.length;i++){
//         let map1_binary = arr1[i];
//         let map2_binary = arr2[i];
        
//         while(map1_binary.length<n){
//             map1_binary = String(0+map1_binary);
//         }

//         while(map2_binary.length<n){
//             map2_binary = String(0+map2_binary);
//         }
            
//         let secret = ((map1_binary | map2_binary).toString(2));
        
//         secret = secret.replace(/[1]/gi, '#');
//         secret = secret.replace(/[0]/gi, ' ');

//         while(secret.length<n){
//             secret = " "+secret;
//             console.log(secret);
//         }
        
//         map.push(secret);
//     }
    
//     return map;
// }


// 다른 사람의 풀이 
// //es6 화살표 함수 
// function solution(n, arr1, arr2) {
//     return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }

// const addZero = (n, s) => {
//     return '0'.repeat(n - s.length) + s;
// }

//var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))

// function solution(n, arr1, arr2) {
//     let num1, num2, s;
//     let answer = [];
//     //manually turning decimals to binaries cos i can!
//     for (let i=0; i<n; i++){
//         num1 = arr1[i];
//         num2 = arr2[i];
//         s = '';
//         for (let j=0; j<n; j++){
//             s = (num1%2 + num2%2) ? '#'+s : ' '+s;
//             num1 = Math.floor(num1/2);
//             num2 = Math.floor(num2/2);
//         }
//         answer.push(s);
//     }    
//     return answer;
// }