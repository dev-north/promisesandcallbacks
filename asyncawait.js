console.log("Person 1 : Brings Tickets");
console.log("Person 2 : Brings Tickets");


//Using Promises


// const promiseWifeBringingTicket = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("ticket");
//     }, 3000);
// });


// const getPopcorn = promiseWifeBringingTicket.then((value)=>{
//     console.log("W: I have the ticket");
//     console.log("H:lets go in");
//     console.log("W: We need to get popcorn");
//     return new Promise((resolve,reject)=>{
//         resolve(`${value} and Popcorn`);
//     })
// });

// const getButter = getPopcorn.then((value)=>{
//     console.log("H: I got popcorn");
//     console.log("H: lets go in");
//     console.log("W: I need buttern on my popcorn");
//     return new Promise((resolve,reject)=>{
//         resolve(`${value} with buttern`);
//     })
// });

// getButter.then((value)=>console.log(value));


const preMovie = async () => {
    const promiseWifeBringingTicket = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("ticket");
        }, 3000);
    });

    const getPopcorn = new Promise((resolve,reject)=>resolve("popcorn"));
    const getButter = new Promise((resolve,reject)=>resolve("butter"));
    const getColdDrinks = new Promise((resolve,reject)=>resolve("Cold Drinks"));
    let ticket = await promiseWifeBringingTicket;
    let [pocorn , candy , coke] = await Promise.all([getPopcorn,getButter,getColdDrinks]);


    //resolving one by one

    // console.log(`W: I have the ${ticket}`);
    // console.log("H:lets go in");
    // console.log("W: We need to get popcorn");

    // let popcorn = await getPopcorn;

    // console.log(`H: I got ${popcorn}`);
    // console.log("H: lets go in");
    // console.log("W: I need buttern on my popcorn");

    // let butter = await getButter;

    // console.log(`H: I got ${butter} on the ${popcorn}`);
    // console.log("W: Lets go in");

    //resolve using Promise.all()

    
    return ticket;
};

preMovie().then((msg)=>console.log(`Person 3: Brings ${msg}`));

console.log("Person 4 : Brings Tickets");
console.log("Person 5 : Brings Tickets");
