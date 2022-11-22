// let inp = document.querySelector("input")
// let h2 = document.querySelector("h2")

// // h2.innerHTML = localStorage.getItem("invalue")
// // inp.addEventListener("keyup", asd)

// // function asd(){
// //     localStorage.setItem("invalue", inp.value)
// //     h2.innerHTML = localStorage.getItem("invalue")
// //     console.log(localStorage.getItem("invalue"))
// // }

let pcode = document.querySelector(".pcode")
let pname = document.querySelector(".pname")
let pquantity = document.querySelector(".pquantity")
let ppcode = document.querySelector(".ppcode")
let output = document.querySelector(".output_text")
let data_ul = document.querySelector(".data_ul")

let iinsert = document.querySelector(".iinsert")
let ddelete = document.querySelector(".ddelete")
let getd = document.querySelector(".getd")


iinsert.addEventListener("click", insert)
ddelete.addEventListener("click", del)
getd.addEventListener("click", getData)


function insert(evt) {
    evt.preventDefault();

    if (pname.value === ""){
        output.textContent = `OUTPUT: Inputs cannot be blank.`
        output.style.color = "red"
        return
    }

    const cart = (() => {
        const fieldValue = localStorage.getItem("cart");
        return fieldValue === null
            ? []
            : JSON.parse(fieldValue);
    })();

    let index = cart.findIndex(cart => cart.ID === pcode.value)
    if (index > -1) {
        output.textContent = `OUTPUT: This Product Code already exists.`
        output.style.color = "red"
    }
    else{
        cart.push({
            "ID": pcode.value, 
            "Name": pname.value,
            "Quantity": pquantity.value}); 
        output.textContent = `OUTPUT: Successfully ADDED ${pname.value}.`
        output.style.color = "green"
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}

function del(evt){
    evt.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart"))
    let index = cart.findIndex(cart => cart.ID === pcode.value)
    if (index > -1) {
        cart.splice(index, 1);
        output.textContent = `OUTPUT: Successfully DELETED ${pcode.value}.`
        output.style.color = "green"
    }
    else{
        output.textContent = `OUTPUT: ${pcode.value} does not exist.`
        output.style.color = "red"
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    pcode.value = "",
        pname.value = "",
        pquantity.value = ""
}

// function getData(evt){
//     evt.preventDefault();
//     let cart = JSON.parse(localStorage.getItem("cart"))

//     cart.map(cart => {
//         if (cart.ID === ppcode.value) {
//             console.log("ifas")
//             output.textContent = `OUTPUT: Successfully FOUND ${ppcode.value}.`
//             output.style.color = "green"

//             let new_ul = document.createElement("ul")
//             let li_id = document.createElement("li")
//             let li_name = document.createElement("li")
//             let li_quan = document.createElement("li")
        
//             li_id.textContent = `Product ID: ${cart.ID}`
//             new_ul.appendChild(li_id)
//             li_name.textContent = `Product Name: ${cart.Name}`
//             new_ul.appendChild(li_name)
//             li_quan.textContent = `Product Quantity: ${cart.Quantity}`
//             new_ul.appendChild(li_quan)

//             data_ul.appendChild(new_ul)
//         }
//         else{
//             console.log("elsas")
//             output.textContent = `OUTPUT: ${ppcode.value} does not exist.`
//             output.style.color = "red"
//         }
//     })
// }

function getData(evt){
    evt.preventDefault();
    let cart = JSON.parse(localStorage.getItem("cart"))

    for (let i of cart) {
        if (i.ID == ppcode.value) {
            output.textContent = `OUTPUT: Successfully FOUND ${ppcode.value}.`
            output.style.color = "green"
    
            let new_ul = document.createElement("ul")
            let li_id = document.createElement("li")
            let li_name = document.createElement("li")
            let li_quan = document.createElement("li")
        
            li_id.textContent = `Product ID: ${i.ID}`
            new_ul.appendChild(li_id)
            li_name.textContent = `Product Name: ${i.Name}`
            new_ul.appendChild(li_name)
            li_quan.textContent = `Product Quantity: ${i.Quantity}`
            new_ul.appendChild(li_quan)
    
            data_ul.appendChild(new_ul)
            break;
        }
        else{
            output.textContent = `OUTPUT: ${ppcode.value} does not exist.`
            output.style.color = "red"
        }
    }
}