function solve() {
   let list = [];
   let cart = [];
   let price = 0;
   const textArea = document.querySelector('textarea');
   const checkoutBtn = document.querySelector('button.checkout')


   function addItem(ev){
      const productName = ev.target.parentNode.parentNode.children[1].children[0].textContent;
         const productPrice = Number(ev.target.parentNode.parentNode.children[3].textContent).toFixed(2);
         list.push(productName);
         price += Number(productPrice);
         
         let line = `Added ${productName} for ${productPrice} to the cart.\n`;
         cart.push(line);
         textArea.textContent = cart.join('');
   };

   function checkout(){
      let line = `You bought ${list.join(', ')} for ${price.toFixed(2)}`;
      cart.push(line);
      textArea.textContent = cart.join('');
      [...document.querySelectorAll('.add-product')].forEach(b =>{
         b.removeEventListener('click' , addItem);
      });
      checkoutBtn.removeEventListener('click' , checkout);
   };
   
   [...document.querySelectorAll('button.add-product')]
   .forEach(b =>{
      b.addEventListener('click' , addItem);
   });


   checkoutBtn.addEventListener('click' , checkout);
};