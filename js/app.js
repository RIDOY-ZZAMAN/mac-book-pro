//Defining the function named as "getExtraCost" with 2 parameters(product and price).
function getExtraCost(product, price) {
    const extraCost = document.getElementById(product + '-cost');
    const extraAmount = price;
    extraCost.innerText = extraAmount;
    //Calling the "totalCostCalculation" fuction here, because it is common for all of them(memory,storage,delivery cost).
    totalCostCalculation();
}
//Defining the function named as "totalCostCalculation"  with zero parameter.
function totalCostCalculation() {
    const bestPrice = document.getElementById('best-price');
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const totalPrice = document.getElementById('total-price');
    const overAllTotalPrice = document.getElementById('overAllTotalPrice');
    //Summation of all the Cost
    const total = parseInt(bestPrice.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
    totalPrice.innerText = total;
    overAllTotalPrice.innerText = total;
    const inputField = document.getElementById('input-field');
    const coupon = inputField.value;
    //Checking the condition for "stevekaku" code
    if (coupon == "stevekaku") {
        //Calculating  20% Discount for "stevekaku" code
        const couponamount = total * 0.20;
        overAllTotalPrice.innerText = total - couponamount;
    }
}

//Adding Event Listener to the 8GB unified memory button
document.getElementById('extra-8GBmemory').addEventListener('click', function () {
    getExtraCost('memory', 0)

})
//Adding Event Listener to the 16GB unified memory button
document.getElementById('extra-16GBmemory').addEventListener('click', function () {
    getExtraCost('memory', 180)

})
//Adding Event Listener to the 256GB SSD storage button
document.getElementById('SSD256').addEventListener('click', function () {
    getExtraCost('storage', 0)
})
//Adding Event Listener to the 512GB SSD storage button
document.getElementById('SSD512').addEventListener('click', function () {
    getExtraCost('storage', 100)
})
//Adding Event Listener to the 1TB SSD storage button
document.getElementById('SSD1TB').addEventListener('click', function () {
    getExtraCost('storage', 180)
})
//Adding Event Listener to the FREE Delivery button
document.getElementById('free-delivery').addEventListener('click', function () {
    getExtraCost('delivery', 0)
})
//Adding Event Listener to the Extra Charged Delivery button
document.getElementById('extraCost-delivery').addEventListener('click', function () {
    getExtraCost('delivery', 20)
})
//Adding Event Listener to the Apply  button.
document.getElementById('coupon-btn').addEventListener('click', function () {
    totalCostCalculation();
})