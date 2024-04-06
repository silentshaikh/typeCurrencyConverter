import inquirer from 'inquirer';
;
let ourCurrency = {
    USD: 1,
    TUR: 32.03,
    UK: 0.79,
    PKR: 277.54,
    EUR: 0.92,
    INR: 83.30
};
let currencyConvert = await inquirer.prompt([
    { name: 'from', message: 'Select the Currency from', type: 'list', choices: ['USD', 'TUR', 'UK', 'PKR', 'EUR', 'INR'] },
    { name: 'to', message: 'Select the Currency to', type: 'list', choices: ['USD', 'TUR', 'UK', 'PKR', 'EUR', 'INR'] },
    { name: 'amount', message: 'Enter Your Amount', type: 'number' }
]);
// console.log(currencyConvert);
let fromCurrency = currencyConvert.from;
let toCurrency = currencyConvert.to;
let amount = currencyConvert.amount;
if (!amount) {
    console.log('Please Enter the Amount');
}
else {
    let baseAmount = amount / ourCurrency[fromCurrency];
    let finalAmount = baseAmount * ourCurrency[toCurrency];
    console.log(finalAmount);
}
