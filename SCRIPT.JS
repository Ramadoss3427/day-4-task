//question 1    a)print odd number in array
 
IIFE :       (function(array){
    for(var i = 0 ; i< array.length ; i++){
              if(array[i]%2!=0){
                 console.log(array[i])
              } 
         }
    })([1,2,3,4])
    // b)string to tittle caps
    
    IIFE : (function (str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
          console.log(str[i])
        } 
      
        
      })("hello everyone");
      // c) sum of all numbers in array
    
    IIFE :       (function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
           sum = sum + array[i];
           console.log(sum)
    }
        
    })([1,2,3,4])
    // d)prime numbers in array
    
    IIFE: 
    (function(numArray){
      numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      console.log(numArray);
    })([1,2,8,4,9,10])
    // e) palindrome in array
    function palindrome(arr){
      var result=[]
      for(var i=0;i<arr.length;i++){
          var data=arr[i].split("").reverse().join("")
          if(data===arr[i]){
              result.push(arr[i])
          }
          return result;
      }
    }
    console.log(palindrome((["mom","data"])))
    // f) median two sorted  array
    const arr1=[1,3,5,7]
    const arr2=[2,4,6,8]
    function findmediantwosortedarrays(arr1,arr2){
        let arr=[...arr1,...arr2]
        arr.sort((a,b)=>a-b)
        let n=arr.length
        return n%2===0 ?(arr[n/2]+arr[n/2-1])/2 :arr[Math.floor(n/2)]
    }
    console.log(findmediantwosortedarrays(arr1,arr2))
    // g)duplicates from an array
    IIFE :                (function(array){
      let dup = [...new Set(array)];
      console.log(dup);
     })([1,1,2,3,4,4,8,8,6,7,7,])
     // h) rotate array k times
     const arr=[1,2,3,4,5]
    const k=3;
    (function(arr,k){
        for(var i=0;i<k;i++){
            arr.push(arr[i])
        }
        for(var i=0;i<k;i++){
            arr.shift()
        }
        console.log(arr)
    })(arr,k)
    
    //arrow function
    
    // question2 a) print odd numbers in array
    var a=[1,2,3,4,5,6,7,8]
     var oddNumbers = (array) => {
      for(var i = 0 ; i< array.length ; i++){
           if(array[i]%2!=0){
          console.log(array[i])
            
           } 
      }
           }
         console.log(oddNumbers(a))
    
    // b)string to tittle caps
    var str="i am ramadoss"
    var titleCase = (str) => {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
      } 
      return str.join(' ');
    }    
    console.log(titleCase(str))     
    
    // c)sum of all numbers in array
    var a=[2,4,6,8]
     var sum = (array)=>{
      var sum = 0;
           for(var i = 0 ; i< array.length ; i++){
              sum = sum + array[i];
            }
            return sum;
            }
            console.log(sum(a))
    
    // d)return all prime numbers in array
    var b =[1,2,3,4,5,6]
    var primeNumber = (numArray) => {
      numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      console.log(numArray);
    }
    console.log(primeNumber(b))
    
    // e)palintrome in array
    var c=["mom","data"]
     var Palindrome = (arr, n) =>
        {
           
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        }
        console.log(palindrome(c))