// https://school.programmers.co.kr/learn/courses/30/lessons/82612

// function solution(price, money, count) {
//     let count_price = 0;
    
//     for(let i=1;i<=count;i++){
//         count_price += price*i;
//     }
    
//     return count_price<money?0:count_price-money
// }

// 가우스 , 거듭제곱의 합  n*n(n+1)/2
// function solution(price, money, count) {
//     let count_price = count*(count+1)*price/2 - money;
//     // price 3, count 4 money 20 
//     // count*(count+1) -> 1,2,3,4 -> 10 
//     // 1*3+2*3+3*3+4*3 -> 30(10*3)
    
//     return count_price>0?count_price:0;
// }
