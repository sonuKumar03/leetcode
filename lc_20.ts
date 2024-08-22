/**
 * LC -https://leetcode.com/problems/valid-parentheses/description/
 *  Date - 2024-08-22
 */

function isValid(str: string): boolean {
    const stack:string[] = [];
    const MAPPING:Record<string,string>={
        ")":"(",
        "]":"[",
        "}":"{"
    }
    const peek = ()=>{
        return stack[stack.length-1];
    }

    const OPEN = Object.values(MAPPING);

    for(const s of str){
        if( OPEN.includes(s) ){
            stack.push(s);
        }else{
            if ( stack.length > 0 && MAPPING[s] === peek() ){
                stack.pop()
            }else{
                return false;
            }
        }
    }
    return stack.length===0;
};

console.log(isValid("{([a])}"))
