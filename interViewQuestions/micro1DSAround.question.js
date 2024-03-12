// /**
// Problem: Valid Parenthesis String

// Given a string containing only three types of characters: '(', ')', and '*', write a function check_valid_string(s) that checks whether the input string is valid.

// The input string is valid if:

// Open brackets must be closed by the same type of brackets.

// Open brackets must be closed in the correct order.

// A '*' can be treated as a wildcard character, which can represent either an open bracket '(' or a closing bracket ')' or nothing as well.

// Write a function check_valid_string(s) that takes a string s and returns True if the string is valid, and False otherwise.

 

// Function Signature:

// def check_valid_string(s: str) -> bool:

//     pass

 

// Example:

// assert check_valid_string("()") == True

// assert check_valid_string("(*)") == True

// assert check_valid_string(")(") == False

// assert check_valid_string("(*))") == True

// assert check_valid_string("(((**)") == True

// assert check_valid_string("(((*)") == False
// */


function checkValidParenthesis(str){
    // console.log(str)
    if(!str){
      return "invalid parentheis";
    }
    const left =[];
    const assert=[];
    for(let i=0;i<str.length;i++){
      const arr=str[i];
      if(arr=="("){
        left.push(i);
      }
      if(arr=="*"){
        assert.push(i)
      }
      if(arr==")"){
        if(left.length){
          left.pop()
        }else if(assert.length){
          assert.pop()
        }else{
          return false
        }
      }
      // console.log({left,arr})
    }
    while(left.length){
      const leftPos=left.pop();
      const assertPos=assert.pop()
      if(!assertPos||assertPos<leftPos){
        return false
      }
    }
      return true
    
  }
  console.log(checkValidParenthesis("(((*)"))
  
  /**
   * tree graph
   * Qustion 2- reverse linkedlist recursively
   * inheritance and static keyword in OOPS.
   */