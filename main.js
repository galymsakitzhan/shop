let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

// Open Cart
cartIcon.addEventListener('click', ()=>{
    cart.classList.add("active")
})

//Close Cart 
closeCart.addEventListener('click', ()=>{
    cart.classList.remove("active")
})


// Cart Working JS

if(document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

//Making Function

function ready(){
    // remove items from cart
    let removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(let i = 0; i < removeCartButtons.length; i++){
        let button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // Quantity Changes
    let quantityInputs = document.getElementsByClassName('cart-quantity')
    for(let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }
}

function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove()
    updatetotal()   
}

function quantityChanged(event){
    let input = event.target
    if(isNaN(input.value) || input.value <= 0){
       input.value = 1 
    }
    updatetotal();
}

function updatetotal(){
    let cartContent = document.getElementsByClassName('cart-content')[0]
    let cartBoxes = cartContent.getElementsByClassName('cart-box')
    let total = 0;
    for(let i =  0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName('cart-price')[0]
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        let price = parseFloat(priceElement.innerHTML.replace("$",""));
        let quantity = quantityElement.value
        total = total + (price * quantity);

    document.getElementsByClassName('total-price')[0].innerHTML = '$' + total;

    }
}