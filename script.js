function ageCalculate() {

    date = parseInt(document.getElementById("date").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);
    
    currDate = 20;
    currMonth = 11;
    currYear = 2023;

    dateOld = currDate - date;
    monthOld = currMonth - month;
    yearOld = currYear - year;

    document.getElementById("resultShow").value = "You are "+yearOld+" years "+monthOld+" months "+dateOld+" days Old"
    // Negative Values Error

}