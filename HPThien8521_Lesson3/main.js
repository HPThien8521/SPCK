//--- question 1
    console.log("Question 1:")
//
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    string += "1";
  }
  string += "\n";
}
console.log(string);

//--- question 2
    console.log("Question 2:")
//

    let myArr = [9,7,9,0,7,8,387,123,456]
    console.log( "myArr: " + "[" + myArr + "]"  + " --> ")
    let newArray = [];
    
    for(let i = 0; i < myArr.length; i++){

        if(myArr[i] % 2 !== 0) newArray.push(myArr[i]);
        
    }

    console.log(newArray);

//--- question 3
    console.log("Question 3:")
//