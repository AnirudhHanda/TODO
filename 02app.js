let btn = document.querySelector(".main .inp button");
// btn.addEventListener("click")
// let lis = document.querySelectorAll('li');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');
btn.addEventListener("click", function(){
    // console.log(inp.value);
    let li = document.createElement('li');
    li.innerText = inp.value;
    inp.value = "";
    let delbtn = document.createElement('button');
    delbtn.classList.add("delete");
    // delbtn.innerHtml = "<i class = 'fa-solid' fa-trash' style='color: #00AFEF; font-size: 20px; padding-left: 15px; margin-bottom: 20px;'></i>";
    // delbtn.innerHTML = "<i class="fa-solid fa-trash" style="color: #00AFEF; font-size: 20px; padding-left: 15px; margin-bottom: 20px;"></i>";
    // delbtn.innerText = "heellp";
    let icon = document.createElement('i');
    icon.classList.add("fa-solid", "fa-trash", "mystyle");
    delbtn.appendChild(icon);
    li.appendChild(delbtn);
    ul.appendChild(li);
});


inp.addEventListener("keydown", function(event){
    // console.log(inp.value);
    if(event.keyCode === 13){
        let li = document.createElement('li');
        li.innerText = inp.value;
        inp.value = "";
        let delbtn = document.createElement('button');
        delbtn.classList.add("delete");
        // delbtn.innerHtml = "<i class = 'fa-solid' fa-trash' style='color: #00AFEF; font-size: 20px; padding-left: 15px; margin-bottom: 20px;'></i>";
        // delbtn.innerHTML = "<i class="fa-solid fa-trash" style="color: #00AFEF; font-size: 20px; padding-left: 15px; margin-bottom: 20px;"></i>";
        // delbtn.innerText = "heellp";
        let icon = document.createElement('i');
        icon.classList.add("fa-solid", "fa-trash", "mystyle");
        delbtn.appendChild(icon);
        li.appendChild(delbtn);
        ul.appendChild(li);
    }

});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "I"){
        let par = event.target.parentElement;
        let par2 = par.parentElement;
        par2.remove();
    }
});

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }