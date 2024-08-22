/**
 * LC- https://leetcode.com/problems/score-of-parentheses/description/
 * Date- 2024-08-22
 */

function peek<T>(stack:T[]){
    return stack[stack.length-1];
}

function scoreOfParentheses(str: string): number {
    const stack = [];
    let count = 0;
    for(const s of str){
        if(s==="("){
            stack.push(s);
        }else{
            let c = 0;
            if(stack.length> 0 && peek(stack)==="("){
                stack.pop();
                stack.push("1");
            }else{
                while(stack.length> 0 && peek(stack)!=="("){
                    c += parseInt(stack.pop() as string,10);
                }
                stack.pop()
                stack.push( `${c * 2}` );
            }
           
        }
    }

    while(stack.length>0 ){
        count += parseInt(stack.pop() as string,10);
    }

    return count;
};

console.log(scoreOfParentheses("()(())"));