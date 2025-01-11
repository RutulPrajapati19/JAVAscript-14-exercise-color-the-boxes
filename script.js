console.log("script.js initializing")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children

function getRandomColor(){
    let val1 = Math.ceil(0+ Math.random()* 255);

    /* Math.random() 
        gives an random let us say === 0.151533353121933355

        it work with === a + r (b-a)      ( where if we want to generate color between a,b  and r is the random number 
                                             when value of r.n.  === 0 then  we got a  and if  r.n == 1 then we got b  
                                            if value of r.n is between the 0  and 1 then we got the random value or number)
        
                                            
         now a  = 0 and b  = 255 (according to rgb (red color))    r is a [ Math.random()]
         
         so the equation will be  [ 0 + Math.random() * 255]


         final equation [ Math.ceil(0 + Math.random() * 255)]

          where Math.ceil gives a random value into integer value

    */

    
    let val2 = Math.ceil(0+ Math.random()* 255);
    let val3 = Math.ceil(0+ Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})

