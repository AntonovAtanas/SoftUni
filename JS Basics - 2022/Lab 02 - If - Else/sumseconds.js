function sumSeconds (input){

  let firstTime = Number (input[0])      
  let secondTime = Number (input[1])
  let thirdTime = Number (input[2])  
  
  let totalTime = firstTime + secondTime + thirdTime
 
    let howMinutes = Math.floor(totalTime / 60)
    let seconds = totalTime % 60

    if (seconds <10 ){
        console.log(`${howMinutes}:0${seconds}`)
    } else {
        console.log(`${howMinutes}:${seconds}`)
    }



}

sumSeconds (["50", "50", "49"])