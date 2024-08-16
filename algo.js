// 22. Generate Parentheses



// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.









/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    let result = []

    function generate(string, left, right){

        if(string.length != n*2){

            if(left < n){
                generate(string + "(", left+1, right)
            }
            if(right < left){
                generate(string + ")", left, right+1)
            }
        }else{

            result.push(string)
        }
    }

    generate("", 0, 0)

    return result
};