// 1.	Create a List and Append to the Body
// Create an unordered list (<ul>) with five list items (<li>), each containing unique text. Append the <ul> to the <body>.
let ul = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.innerText = `Item ${i}`;
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
  
//   2.	Create a Paragraph Inside a Div and Append to the Body
// Create a <div> element, and inside it, add a <p> element with some descriptive text. Append the <div> to the <body>.
let div = document.createElement("div");
let p = document.createElement("p");
p.innerText = "hello world";
div.appendChild(p)
document.body.appendChild(div)


// 3.	Build a Nested Structure and Append to the Body
// Create a <div> containing a <h1> heading and a <p> paragraph, both with distinct text. Append the <div> to the <body>.

let divElement1 = document.createElement('div');
document.body.appendChild(divElement1)

let h1 = document.createElement('h1');
h1.textContent='Navyasri Reddy'
divElement1.appendChild(h1);

let paragraphEl = document.createElement('p');
paragraphEl.textContent = 'Navyasri Reddy'
divElement1.appendChild(paragraphEl)

// 4.	Generate a Table Row and Append to the Body
// Create a <table> element with a single row (<tr>) and three cells (<td>), each containing some text. Append the <table> to the <body>.
// 
let tableDataContent = ['First Name', 'Last Name', 'Email']
let divElement3 = document.createElement('div');
document.body.appendChild(divElement3)

let tableElement = document.createElement('table')
divElement3.appendChild(tableElement);

let tableRow = document.createElement('tr')
tableElement.appendChild(tableRow);

let k = 0;
while(k<tableDataContent.length){
    let tableData = document.createElement('td');
    tableData.textContent =`${tableDataContent[k]}`
    tableRow.appendChild(tableData)
    k++
}

// 5.	Add Multiple Buttons and Append to the Body
// Create a <div> and append five <button> elements to it, each with unique text for the button label. Append the <div> to the <body>.
// */
let buttonText = ['Login', 'Submit', 'Proceed to Checkout', 'Sign Up', 'Subscribe', "PAY NOW",'Login', 'Submit', 'Proceed to Checkout', 'Sign Up', 'Subscribe', "PAY NOW"]
let divElement2 = document.createElement('div');
document.body.appendChild(divElement2)

buttonText.forEach(element => {
    let buttonElement2 = document.createElement('button')
    buttonElement2.textContent = `${element}`
    divElement2.appendChild(buttonElement2)
});