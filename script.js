const removeIconOne = document.getElementById("removeItemOne");
removeIconOne.addEventListener("click", function(){
   const cartItemOne = document.getElementById("cartItemOne");
   cartItemOne.style.display = "none";

   if(document.getElementById("cartItemTwo").style.display !== "none"){
       const subtotal = parseFloat(document.getElementById("price2").innerText);
   document.getElementById("subtotal").innerText = subtotal;
   document.getElementById("tax").innerText = (subtotal*0.05).toFixed(2);
   document.getElementById("total").innerText = parseFloat(document.getElementById("subtotal").innerText) + parseFloat(document.getElementById("tax").innerText);
   }else{
           document.getElementById("subtotal").innerText = 0;
       document.getElementById("tax").innerText = 0;
       document.getElementById("total").innerText=0;
   }
   
})
const removeIconTwo = document.getElementById("removeItemTwo");
removeIconTwo.addEventListener("click", function(){
 const cartItemTwo = document.getElementById("cartItemTwo");
   cartItemTwo.style.display = "none";

   if(document.getElementById("cartItemOne").style.display !== "none"){
       const subtotal = parseFloat(document.getElementById("price1").innerText);
   document.getElementById("subtotal").innerText = subtotal;
   document.getElementById("tax").innerText = (subtotal*0.05).toFixed(2);
   document.getElementById("total").innerText = parseFloat(document.getElementById("subtotal").innerText) + parseFloat(document.getElementById("tax").innerText);
   }else{
           document.getElementById("subtotal").innerText = 0;
       document.getElementById("tax").innerText = 0;
       document.getElementById("total").innerText=0;
   }
})

//Work with + icon Quantity increment 1 //
const plusIcon1 = document.getElementById("plusIconOne");
plusIcon1.addEventListener("click", function(){
   const quantityIncrement1 = document.getElementById("quantitySpinner1").value;
   const quantityNumber1 = parseFloat(quantityIncrement1);
   const totalQuantityOne = quantityNumber1 + 1;
   document.getElementById("quantitySpinner1").value = totalQuantityOne;


   const priceOne = document.getElementById("price1").innerText;
   const priceOfItem1 = parseFloat(priceOne);
   // console.log(priceOfItem1);
   const mainPrice1 = 1219 * totalQuantityOne;
   document.getElementById("price1").innerText = mainPrice1;
   cart();

 })
//Work with + icon Quantity increment 2 //  
const plusIcon2 = document.getElementById("plusIconTwo");
plusIcon2.addEventListener("click", function(){
   const quantityIncrement2 = document.getElementById("quantitySpinner2").value;
   const quantityNumber2 = parseFloat(quantityIncrement2);
   const totalQuantityTwo = quantityNumber2 + 1;
   document.getElementById("quantitySpinner2").value = totalQuantityTwo;

   const priceTwo = document.getElementById("price2").innerText;
   const priceOfItem2 = parseFloat(priceTwo);
   const mainPrice2 = 59 * totalQuantityTwo;
   document.getElementById("price2").innerText = mainPrice2;
   cart();
 })

 // - icone Quantity decrement 1 //
 const minusIcon1 = document.getElementById("minusIconOne");
minusIcon1.addEventListener("click", function(){
   const quantityDecrement1 = document.getElementById("quantitySpinner1").value;
   const quantityNumber1 = parseFloat(quantityDecrement1);
   
   if(quantityNumber1 >1){
       const totalQuantityOne = quantityNumber1 - 1;
      document.getElementById("quantitySpinner1").value = totalQuantityOne;

       const priceOne = document.getElementById("price1").innerText;
     const priceOfItem1 = parseFloat(priceOne);
     // console.log(priceOfItem1);
     const mainPrice1 = 1219 * totalQuantityOne;
     document.getElementById("price1").innerText = mainPrice1;
     cart();
   }
 })

 // - icone Quantity decrement 2 //
 const minusIcon2 = document.getElementById("minusIconTwo");
minusIcon2.addEventListener("click", function(){
   const quantityDecrement2 = document.getElementById("quantitySpinner2").value;
   const quantityNumber2 = parseFloat(quantityDecrement2);
   
   if(quantityNumber2 >1){
       const totalQuantityTwo = quantityNumber2 - 1;
      document.getElementById("quantitySpinner2").value = totalQuantityTwo;

      const priceTwo = document.getElementById("price2").innerText;
     const priceOfItem2 = parseFloat(priceTwo);
     const mainPrice2 = 59 * totalQuantityTwo;
     document.getElementById("price2").innerText = mainPrice2;
     cart();
       }
 })
//Subtotal Section //

function cart(){
    const subtotal = parseFloat(document.getElementById("price1").innerText) + parseFloat(document.getElementById("price2").innerText);
     document.getElementById("subtotal").innerText = subtotal;

     document.getElementById("tax").innerText = (subtotal*0.05).toFixed(2);

     document.getElementById("total").innerText = parseFloat(document.getElementById("subtotal").innerText) + parseFloat(document.getElementById("tax").innerText);
}
 