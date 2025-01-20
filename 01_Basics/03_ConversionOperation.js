let number = 35
// Here it will treat the number as number data type
//But if the nuber1 value is in string formate then it will give the type in string
console.log (typeof number);
console.log(typeof(number));
let number1 = "35"
console.log(typeof number1);
//if we want to use the string data in number data type for that, need to convert it into number from string
// for that we will declare a new variable in order to hold the string converted data into number
let valueInNumber = Number(number1)
console.log(typeof valueInNumber);
//Now printing the valueInNumber to check what information is stored in it
console.log(valueInNumber);

//Now checking if anyone has initialized the variable and declare that variable with some alphanumeric string
// wheather it will convert into number and will return some number as returned by above converted string into number
let number2 = "124ab"
console.log(typeof number2);

//Again leting another variable for this number2 to convert it into number
let valueInNumber2 = Number(number2)
console.log(typeof valueInNumber2);
//In below line of code the valueInNumber2 returns value as NaN. why?, As we has changed the data type of above in number but still
// we are not able to get the value from the below code
console.log(valueInNumber2);