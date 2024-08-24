/**
 * LC -https://leetcode.com/problems/remove-outermost-parentheses/description/
 * Date - 2024-08-22
 */

function removeOuterParentheses(str: string): string {
 const stack:number[]=[];
 let result = "";
 for(let i = 0;i<str.length;i++){
    const s = str[i];
    if(s==="("){
        stack.push(i)
    }else{
        const start = stack.pop() as number;;
        if(stack.length===0){
            result+=str.substring(start+1,i);
        }
    }
 }
 return result;
};

console.log(removeOuterParentheses("(()())(())"))
//()()()