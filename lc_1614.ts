/**
 * LC -https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses
 * Date- 2024-08-24 
 */


function maxDepth(str: string): number {
    const stack:string[] = [];
    let c= 0;
    const OPS= ["+","-","*","/"];
    for(const s of str){
        if(s==="("){
            stack.push(s);
        }else{
            if(OPS.includes(s) ||  (!isNaN(Number(s)) ) ) { continue };
            c = Math.max(c,stack.length);
            stack.pop();
        }
    }
    return c;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))