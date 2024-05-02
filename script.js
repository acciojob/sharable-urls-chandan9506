// your code here
let heading = document.getElementById("url");
let nameInput = document.getElementById("name");
let yearInput = document.getElementById("year");
let btn = document.getElementById("button");

btn.addEventListener("click",function (e){
	e.preventDefault();
	let nameInputValue = nameInput.value;
	let yearInputValue = yearInput.value;
	let headingValue = heading.innerText;
    if (nameInputValue =="" && yearInputValue =="") {
		heading.innerText =`${headingValue}`;
	}
	else if (nameInputValue =="" && yearInputValue !=="") {
		heading.innerText =`${headingValue}?year=${yearInputValue}`;
	}
    else if (nameInputValue !="" && yearInputValue =="") {
		heading.innerText =`${headingValue}?name=${nameInputValue}`;
	}
    else{
        heading.innerText =`${headingValue}?name=${nameInputValue}&year=${yearInputValue}`;
    }
});















