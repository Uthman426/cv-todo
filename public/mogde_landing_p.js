window.addEventListener('load',()=>{
const section_image=document.querySelector('.section_image')
const section_imgs =["image/phone1.jpeg","image/land 3.jpeg",
  "image/land 2.jpeg","image/air bnb 2.jpeg","image/air bnb 3.jpeg",
 "image/electronics1.jpeg","image/land 1.jpeg"]
let count = -1;
function incrementCount() {
    if(count===section_imgs.length-1){
        count=-1
    }
  count++;
  //console.log(Count: ${count });
  section_image.src=section_imgs[count]
}

setInterval(incrementCount, 4000); // increment every 1 second
})
