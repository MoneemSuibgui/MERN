// tosscoin function 
function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


function fiveHeads() {
return new Promise( (resolve, reject) => {
  // your code here!
let headsCount = 0;
let attempts = 0;
while(headsCount < 5) {
    attempts++;
    let result = tossCoin();
    console.log(result);
    if(result === "heads"){
        headsCount++;
    } else {
        headsCount = 0;
    }}
    // the condition of resolve & reject promise
    if(attempts < 100){
        resolve(`heads has been flipped five times ${attempts}`)
    }
    else{
        reject(`Error :heads has been flipped five times ${attempts} `)
    }
});
}
fiveHeads().then( res => console.log(res) )
.catch( err => console.log(err) );
