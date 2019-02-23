// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
var money = currency;	
var h = 50; var q = 25; var d = 10; var n = 5; var p = 1;
var makeExchange = {};
    
if(money <= 10000) { 
    var rezH = (money - money % h) / h; 
    if(rezH > 0){
    makeExchange.H = rezH;
    };
        var rezQ = (money % h -  money % h % q) / q;
        if(rezQ > 0){
         makeExchange.Q = rezQ;   
        };
            var rezD = (money % h % q -  money % h % q % d) / d; 
            if(rezD > 0){  
             makeExchange.D = rezD;
            };
                var rezN = (money % h % q % d -  money % h % q % d % n) / n; 
                if(rezN > 0){
                 makeExchange.N = rezN;
                };    
                    var rezP = (money % h % q % d % n -  money % h % q % d % n % p) /p; 
                    if(rezP > 0){
                     makeExchange.P = rezP;
                    }; 
} else { 
   makeExchange.error = "You are rich, my friend! We don't have so much coins for exchange"};
   return makeExchange;


    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
