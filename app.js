// function to implement the image fluid effect
function imageFluid(){
    const full_img = document.querySelector(".full_img")
    const previewImages = document.querySelectorAll(".myImage img")
    const modalDiv = document.querySelector(".modal")
    const caption = document.querySelector(".caption")

    // image click even listener\
    previewImages.forEach(element =>{
        element.addEventListener("click", function(){
            console.log(this)
            const imgSrc = this.src;
            // console.log(imgSrc);
            const fullSrc = imgSrc.replace("small","large")
            full_img.src = fullSrc;
            console.log(element);
            // image caption
            // full_img.getAttribute()
            caption.textContent = element.alt
            // console.log(full_img)
            modalDiv.style.display= "block"
            modalDiv.style.opacity = 1;
            // console.log(modalDiv.style)
            // go back to preview images
            modalDiv.addEventListener("click", function(e){
                if(e.target.className === "modal"){
                    modalDiv.style.opacity = 0;
                    modalDiv.style.display= "none"
                }
                

            })
        



        })
    })
    
}
// invoke the function
imageFluid()