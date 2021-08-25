// function for individual cost 
function cost(costId , amount){
    const costAmount = document.getElementById(costId);
    costAmount.innerText = amount;
    getTotal()
}
// memory 1
document.getElementById('first-memory-price').addEventListener('click',function(){
    cost('memory-cost', 0)
})
// memory 2
document.getElementById('second-memory-price').addEventListener('click',function(){
    cost('memory-cost', 180)
})
// storage 1
document.getElementById('first-storage-price').addEventListener('click',function(){
    cost('storage-cost', 0)
})
// storage 2
document.getElementById('second-storage-price').addEventListener('click',function(){
    cost('storage-cost',100)
})
// storage 3
document.getElementById('third-storage-price').addEventListener('click',function(){
    cost('storage-cost',180)
})
// free shipping
document.getElementById('free-delivery').addEventListener('click',function(){
    cost('delivery-charge', 0)
})
// paid shipping
document.getElementById('paid-delivery').addEventListener('click',function(){
    cost('delivery-charge', 20)
})
// function for total cost and promo code
function getTotal(){
    const bestPriceText = document.getElementById('best-price');
    const bestPrice = Number(bestPriceText.innerText);
    const memoryCostText = document.getElementById('memory-cost');
    const memoryCost = Number(memoryCostText.innerText);
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = Number(storageCostText.innerText);
    const deliveryChargeText = document.getElementById('delivery-charge');
    const deliveryCharge = Number(deliveryChargeText.innerText);
    // total cost 
    const totalCost = bestPrice + memoryCost + storageCost + deliveryCharge;
    // total cost price before promo code
    const total = document.getElementById('total-price');
    total.innerText = totalCost;
    
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = totalCost;
    // for promo code
    document.getElementById('promo-btn').addEventListener('click',function(){
      const promoCode = document.getElementById('promo-code');
      if(promoCode.value == 'stevekaku'){
        grandTotal.innerText = grandTotal.innerText - ((20/100 ) * grandTotal.innerText);
        promoCode.value = '';
      }
    })
}