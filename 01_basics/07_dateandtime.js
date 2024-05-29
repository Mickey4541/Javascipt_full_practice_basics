// const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(typeof myDate);


// let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate.toString());

// let myCreateDate = new Date("2024-05-29")
// // console.log(myCreateDate.getTime());
// console.log(myCreateDate.toLocaleDateString());
// console.log(myCreateDate.toLocaleString());



// let myTimeStamp = Date.now();
// console.log(myTimeStamp);


// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
    timeZoneName: 'short'
})
console.log(newDate);




