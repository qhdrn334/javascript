let btn = document.querySelector('.addCart');
btn.addEventListener('click', addToCart);
// let product = document.querySelectorAll(product)
// for (i = 0; product.length  i++) {
//    product[i]
// }


function addToCart(event) {
   let product = event.target.parentElement;
   let aa = product.querySelector('span').textContent;
   let aa = product.querySelector('price').textContent;
   let aa = product.querySelector('quantity').textContent;
   금액
   개수

   console.log(aa);

   let hello3 = document.createElement(`li`);    //HLML에 P태그 추가
   hello3.textContent = aa + '[' + 개수 + ']' + ':' + 금액*개수 + '원';
   document.querySelector(`ul`).appendChild(hello3); 
}



// const resultElement = document.getE1ementsByClassName('quantity');
// let number = resultElement.innerText;
// if(type === 'plus') {

//    number = parseInt(number) + 1;

// }else if(type === 'minus') {

//    number = parseInt(number) - 1;

// }
