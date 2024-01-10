/// DOM by ID

// document.getElementById("line").innerHTML="START"
// document.getElementById("line").style.color="blue"

// /// DOM by CLASS

// let clas = document.getElementsByClassName("cls")
// clas[0].style.color="red"

// /// DOM by TAGNAME

// let tg = document.getElementsByTagName("a")
// tg[0].textContent="OK!!"

// /// DOM by CSS SELECTORS

// document.querySelector("#map").innerHTML = "MOON"
// let qc = document.querySelectorAll("span")
// qc[0].style.color="orange"

///  form selectors

// let ab = document.forms["forms1"]
// console.log(ab);

// let res = document.getElementById("hre").herf = "https://www.google.com/"
// console.log(res);


///css psudo-selectors

document.getElementById("submit").style.color = "red";
document.getElementById("submit").style.background="orange";
document.getElementById("contant").style.color ="green";
///events

function eventAttribue(){
    document.getElementById("contant").innerHTML="clicked!!!!"
}

function emailContant(){
   console.log( document.getElementById("eValue").value);
}



///animation

function buttonAnimation() {

    // console.log("done");

    let id = null;

    const element = document.getElementById("child");
    
    let position = 0 ;


    clearInterval(id);

    id = setInterval(animation , 500);

    function animation(){
        if(position == 450){
            clearInterval(id)
        }else{
            position++;
            element.style.top = position + "px"
            element.style.left = position + "px"
        }
    }

}


///validation

function formValidation(){

    const fln = document.forms["sign"]["name"].value
     
    if( fln == ' ') {
        console.log("not found")
        document.getElementById("nameError").innerHTML = "please"
        return false;
    } 
 
   
}

///node-elemts

let node1 = document.getElementById("parent").parentNode
let node2 = document.getElementById("parent").childNodes
let node3 = document.getElementById("body").childNodes[0]
let nodes4 = document.getElementById("body").firstChild
let node = document.getElementById("body").lastChild

console.log(node);
console.log( nodes4);
console.log(node3);
console.log(node2);
console.log(node1);


//window



function getWindowSize(){
    
    //;;;;;; Find the height and width of the browser using window object

    let element = window.document.getElementById("WindowSize");

    let height = window.innerHeight;
    let width = window.innerWidth;
   
    // element .innerHTML =`window height is ${height} and window width is ${width}`

    ////*****************************************************************///

    ///find user URL using window

    // let element = window.document.getElementById("WindowSize");

    // let url = window.location

    // element.innerHTML =`url ${url}`
   
}

// Manage browser forward and backward using window object

function Backward() {
    window.history.back();
}

function Forward() {
    window.history.forward();
}

///web storage api

localStorage.setItem("userName","sujith")
let response = localStorage.getItem("userName")
console.log(response);
let response2 = response.length
console.log(response2);
