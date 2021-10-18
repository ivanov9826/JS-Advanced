function print(a , b , c ){
    let stringLength = (a + b + c).length
    console.log(stringLength);
    let avgLength = (stringLength / 3)
    console.log(Math.floor(avgLength));

}

print('Hello , JavaScript' , "Hix there" , 'Madafaka mitaka');