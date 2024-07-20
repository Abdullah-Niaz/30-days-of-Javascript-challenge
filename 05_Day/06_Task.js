// write a function to check if a string contians the specific character or not return the boolean value

const SFC = (s,key) =>{
    // first we split down the string into array like this 
    // s = "Hello"
    // s = ["H","e","l","l","o"]
    let arr = s.split('');
    
    // flag to be returned in case we found out the character
    let flag = false;

    for(let i=0;i<arr.length;i++){
        if(arr[i] === key){
            flag = true;
            break;
        }
    }
    return flag;    
}

const s = SFC("HelloWorld","W");
console.log(s);