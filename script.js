// 1. Show an alert box on click on a link.
// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function mobile1_Image(){
    alert("Samsung Smartphone — Stunning display, powerful performance aur stylish design ke sath ek complete smart experience.");
}
function mobile2_Image(){
    alert("Vivo Smartphone — Stylish look, sharp camera aur smooth speed jo daily use ke liye perfect hai.");
}
function mobile3_Image()
{
    alert(" OnePlus Smartphone — Fast performance, smooth display, powerful camera aur premium design ke sath ek flagship experience.");
 }

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 

function getData(){
    let userName  =document.getElementById("userName").value;
    let userRollNumber=document.getElementById("rollNumber").value;
    document.getElementById("tableData").innerHTML=`${userName} ${userRollNumber}`
}

function printdata(){
}