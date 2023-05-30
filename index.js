currentIndex=0
images=["first.jpg","second.jpeg","third.jpeg","fourth.jpeg",
"fifth.jpeg",
"sixth.jpg"]

setInterval(
    function() {
     currentIndex=Math.round(Math.random()*5)
     document.getElementById("img1").src = 
     images[ currentIndex ]
    },10000
)


function changeImage(arrowtype){
    
    if(arrowtype=="right"){
       currentIndex = currentIndex==5?0:++currentIndex
    }
    else if(arrowtype=="left"){
        currentIndex = currentIndex==0?5:--currentIndex
    }
    document.getElementById("img1").src=images[currentIndex]
}