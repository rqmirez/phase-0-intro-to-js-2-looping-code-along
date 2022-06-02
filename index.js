// Code your solutions in this file
 const names = ["Guadalupe", "Ollie", "Aki"]

 function writeCards(names){
     const array = []
     for (let i=0; i< names.length; i++){
         array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
     }
     return array
 }

 writeCards(names)

 function countDown(numbers) {
    let countDown = 10
while (countDown > -1) {
console.log(countDown--)
} 
}

