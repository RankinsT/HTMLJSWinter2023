var startButton = document.querySelector("Button");
startButton.addEventListener("click", dataPrompt);

function dataPrompt(){

    var hourlyPay = prompt("Enter Your Hourly Pay");
    var hoursWorkedWeekly = prompt("Enter Your Hours Worked Per Week");
    var taxRate = prompt("Enter the Tax Rate");
    var biWeeklyHoursWorked = Number(hoursWorkedWeekly) * 2 ;
    var grossPay = Number(hourlyPay) * Number(biWeeklyHoursWorked);
    var totalTaxes = Number(grossPay) * Number(taxRate);
    var netPay = Number(grossPay) - Number(totalTaxes);
    alert(`Your Pay Results Are\nGross Pay: ${grossPay} \nTotal Taxes: ${totalTaxes} \nNet Pay: ${netPay}`);
    console.log(`Your Gross Pay is ${grossPay}`);
    console.log(`Your Total Deducted for Taxes is ${totalTaxes}`);
    console.log(`Your Total Net Pay is ${netPay}`);
}
