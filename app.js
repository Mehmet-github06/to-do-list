const input= document.querySelector(".input")
const add= document.querySelector(".add")
const list=document.querySelector(".list")
const lineDraw=document.querySelector("fa fa-trash")
const pEl= document.querySelector("span")
add.addEventListener('click', () => {
    if (!input.value) {
       alert("please enter a value")
    }
    else{
    let li= document.createElement("li")
    // console.log("lı olustu");
    list.appendChild(li)
    li.setAttribute("class", "liItem")
    let lineDraw= document.createElement("i")
    li.appendChild(lineDraw)
    lineDraw.setAttribute("class","fa-solid fa-check")
    let pEl= document.createElement("span")
    li.appendChild(pEl)
    pEl.textContent=input.value
    let deleteButton= document.createElement("i")
    li.appendChild(deleteButton)
    deleteButton.setAttribute("class","fa fa-trash")
   input.value=""
   let reset= document.querySelector(".reset")
    lineDraw.addEventListener("click",()=>{
        pEl.style.textDecoration="line-through"
        reset.style.display="block"
        pEl.style.backgroundColor="yellow"
    reset.addEventListener("click",()=>{
        if (pEl.style.textDecoration=="line-through"){
           li.remove()
           reset.style.display="none"
        }
    })
       })
    }
});
list.addEventListener("click",(e)=>{
    if (e.target.className==="fa fa-trash") {
    let listItem=e.target.parentElement;
    list.removeChild(listItem)
    }
})