console.log("hello  this is console from external js ");
console.log(28);
console.log(28 + 10);







alert("helle this is alert from external js");
alert(25);
alert(25 + 25);



document.write("hello this is doucument.write from external js");
document.write(26)
document.write(988 + 477)


function show() {
    let nameDiv = document.getElementById("TheId");
    nameDiv.innerHTML = "Hello World from innerHTML";
}



let name = prompt("Enter your name");
console.log(name);
alert(name);
document.write(name);
document.getElementById("TheId").innerHTML = name;
