const menuBtn=document.getElementById("menubarBtn")
const menuNav=document.getElementById("navBar")
menuBtn.addEventListener("click",()=>{
console.log(getComputedStyle(navBar, null).display)
if(getComputedStyle(navBar, null).display === "none" ){
    navBar.style.display="block"

}else{
    navBar.style.display="none"
}

})
