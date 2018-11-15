module.exports.fizzbuzz = numebr  => {
    if(number%3===0 && number%5===0)return "Fizzbuzz";
    if(number%3===0)return "Fizz";
    if(number%5===0)return "Buzz";
    return number;
}
