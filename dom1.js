
//1. click a button and show the content with 60px fontSize and bgColor red and bordeRadius 50%  
//   2. click the button and display three images on clicking the button ft img should be of border radius 30px ,
//    second img should be border radius 100px , third img should be of borderradius 50%





var d=document.getElementById("k")
  
function b(){
    d.innerText=" Hiiiiiii  i am hemanth"
    d.style.backgroundColor="red"
    d.style.borderRadius="50%"
    d.style.fontSize="60px"

}



var u=document.getElementById("s")
function c(){
    u.textContent=" "
    u.innerHTML=`<img style="border-Radius:30px " src="https://th.bing.com/th/id/OIG2.9O4YqGf98tiYzjKDvg7L" width="300px" /> 
             <img style="border-Radius:100px " src="https://th.bing.com/th/id/OIG2.9O4YqGf98tiYzjKDvg7L" width="300px" />
             <img style="border-Radius:50% "src="https://th.bing.com/th/id/OIG2.9O4YqGf98tiYzjKDvg7L" width="300px" />`
}
 
