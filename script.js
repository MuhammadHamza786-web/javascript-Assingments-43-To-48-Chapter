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
let students=[];
function getData(){
    let userName  =document.getElementById("userName").value;
    let userRollNumber=Number(document.getElementById("rollNumber").value);
    if(userName ===""){
        alert("Please Enter Your Name")

    }
    //  if(userRollNumber ===""){
    //     alert("Please Enter Your Roll Number")

    // }
    let studentobj={
        name:userName,
        RollNumber:userRollNumber
    }
    students.push(studentobj)
    printdata()
}

        function deleteStudent(index){
        
            students.splice(index, 1)

            printdata()
        }



        function printdata(){
            let rows = ""
            for(let i=0; i < students.length; i++){
                rows += `
                    <tr>
                        <td>${i}</td>
                        <td>${students[i].name}</td>
                        <td>${students[i].RollNumber}</td>
                        <td>
                            <button onClick="deleteStudent(${i})">Delete</button>
                        </td>
                    </tr>
                `
            }

            document.getElementById("tableData").innerHTML = rows
        }

//         4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.