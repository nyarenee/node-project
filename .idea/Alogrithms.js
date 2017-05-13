var numbers = [0,1,2,3,4,5,6,7,8,9];

//add to the end
numbers[numbers.length] = 10;

console.log(numbers);

//add numbers to the end using push function

numbers.push(11);
numbers.push(12,13);

console.log(numbers);

//add elements to the first postion

//shift all numbers to the right

for(var i = numbers.length; i >0; i-- ){
    //numbers[i] = numbers[i-1];
    console.log('current: ' ,i);
    console.log('new ', i-1);
}