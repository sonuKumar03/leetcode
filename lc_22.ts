/**
 * LC: https://leetcode.com/problems/generate-parentheses/description/
 * Date: 2024-08-21
 */

const OPEN ="(";
const CLOSE = ")";

class Stack<T>{
    #top:number;
    #list:T[];
    constructor(){
        this.#top = -1;
        this.#list = [];
    }
    push(e:T){
        this.#list.push(e);
        this.#top+=1;
    }
    pop(){
        this.#top-=1;
        return this.#list.pop();
    }
    top(){
        return this.#list[this.#top];
    }
    isEmpty(){
        return this.#top===-1;
    }

}

function isValid(str:string):boolean{
    const stack = new Stack<string>();
    for(const s of str){
        if(s===OPEN){
            stack.push(s);
        }else if (stack.top()===OPEN && s === CLOSE){
            stack.pop();
        }else{

            return false;
        }
    }
    return stack.isEmpty();
}
function generateParenthesis(n:number):string[]{
    const answer:string[] = [];
    function generate(str:string){
        if(str.length===n*2){
            if(isValid(str))
                answer.push(str);
            return;
        }
        generate(str+"(");
        generate(str+")");
    }
    generate("");
    return answer;
}


console.log(generateParenthesis(6))