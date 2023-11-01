let division1 = document.createElement('div');
division1.innerHTML = "";
division1.setAttribute('class', 'division1');
let form = document.createElement('form');
form.innerHTML = "";
form.setAttribute('class', 'form')

let label1 = document.createElement('label');
label1.innerHTML = "FirstName : ";
label1.setAttribute("for", 'firstName');
let input1 = document.createElement('input');
input1.innerHTML = "";
input1.setAttribute('class', 'firstName');
input1.setAttribute('for', 'firstName');
form.append(label1);
label1.append(input1);

let br = document.createElement('br');
form.append(br);

let label2 = document.createElement('label');
label2.innerHTML = "lastName : ";
label2.setAttribute("for", 'lastName');
let input2 = document.createElement('input');
input2.innerHTML = "";
input2.setAttribute('class', 'lastName');
input2.setAttribute('for', 'lastName');
form.append(label2);
label2.append(input2);

let br2 = document.createElement('br');
form.append(br2);

let label3 = document.createElement('label');
label3.innerHTML = "address : ";
label3.setAttribute("for", 'address');
let input3 = document.createElement('input');
input3.innerHTML = "";
input3.setAttribute('class', 'address');
input3.setAttribute('for', 'address');
form.append(label3);
label3.append(input3);

let br3 = document.createElement('br');
form.append(br3);

let label4 = document.createElement('label');
label4.innerHTML = "pinCode : ";
label4.setAttribute("for", 'pinCode');
let input4 = document.createElement('input');
input4.innerHTML = "";
input4.setAttribute('class', 'pinCode');
input4.setAttribute('for', 'pinCode');
input4.setAttribute('type', 'number');
form.append(label4);
label4.append(input4);

let br4 = document.createElement('br');
form.append(br4);

let label12 = document.createElement('label');
label12.innerHTML = "State : ";
label12.setAttribute("for", 'State');
let input12 = document.createElement('input');
input12.innerHTML = "";
input12.setAttribute('class', 'State');
input12.setAttribute('for', 'State');
form.append(label12);
label12.append(input12);

let br5 = document.createElement('br');
form.append(br5);

let label13 = document.createElement('label');
label13.innerHTML = "Country : ";
label13.setAttribute("for", 'Country');
let input13 = document.createElement('input');
input13.innerHTML = "";
input13.setAttribute('class', 'Country');
input13.setAttribute('for', 'Country');
form.append(label13);
label13.append(input13);


let gender = document.createElement('h3')
gender.innerText = "gender : ";
form.append(gender);

let label5 = document.createElement('label');
label5.innerHTML = "Male";
label5.setAttribute("name", 'Gender');
let input5 = document.createElement('input');
input5.innerHTML = "Male";
input5.setAttribute('type', 'radio');
input5.setAttribute('class', 'Male');
input5.setAttribute('name', 'Gender');
input5.setAttribute('value','Male');
let input6 = document.createElement('input');

let label6 = document.createElement('label');
// input6.innerHTML = "Female";
label6.setAttribute("name", 'Gender');
input6.setAttribute('type', 'radio');
input6.setAttribute('class', 'Female');
input6.setAttribute('name', 'Gender');
input6.setAttribute('value','Female');
label6.innerHTML = "Female";
label5.append(input5);
label6.append(input6);
form.append(label5);
form.append(label6);

let choice = document.createElement('h3')
choice.innerText = "Choice Of Food : ";
form.append(choice);
let label7 = document.createElement('label');
label7.innerHTML = "Idly";
label7.setAttribute('for', 'checkBox');
let input7 = document.createElement('input');
input7.setAttribute('name', 'food');
input7.setAttribute('Value', 'Idly');
input7.setAttribute('type', 'checkbox');
label7.append(input7);
form.append(label7);

let label8 = document.createElement('label');
label8.innerHTML = "Dosa";
label8.setAttribute('for', 'checkBox');
let input8 = document.createElement('input');
input8.setAttribute('type', 'checkbox');
input8.setAttribute('name', 'food');
input8.setAttribute('Value', 'Dosa');
label8.append(input8);
form.append(label8);

let label9 = document.createElement('label');
label9.innerHTML = "Boori";
label9.setAttribute('for', 'checkBox');
let input9 = document.createElement('input');
input9.setAttribute('type', 'checkbox');
input9.setAttribute('name', 'food');
input9.setAttribute('Value', 'Boori');
label9.append(input9);
form.append(label9);

let label10 = document.createElement('label');
label10.innerHTML = "Pongal";
label10.setAttribute('for', 'checkBox');
let input10 = document.createElement('input');
input10.setAttribute('type', 'checkbox');
input10.setAttribute('name', 'food');
input10.setAttribute('Value', 'Pongal');
label10.append(input10);
form.append(label10);

let label11 = document.createElement('label');
label11.innerHTML = "Vada";
label11.setAttribute('for', 'checkBox');
let input11 = document.createElement('input');
input11.setAttribute('type', 'checkbox');
input11.setAttribute('name', 'food');
input11.setAttribute('Value', 'Vada');
label11.append(input11);
form.append(label11);


let br6 = document.createElement('br');
form.append(br6);

let submit = document.createElement('button')
submit.innerHTML = "Submit";
submit.setAttribute('class', 'button');
form.append(submit);


division1.append(form);

document.body.append(division1);



let division2 = document.createElement('div');
division2.setAttribute('class', 'division2')
let table = document.createElement('table');
table.setAttribute('class', 'table');
let heading = document.createElement('tr');
let heading1 = document.createElement('th');
heading1.innerHTML = "FirstName";
table.append(heading1);
let heading2 = document.createElement('th');
heading2.innerHTML = "LastName";
table.append(heading2);
let heading3 = document.createElement('th');
heading3.innerHTML = "Address";
table.append(heading3);
let heading4 = document.createElement('th');
heading4.innerHTML = "Pincode";
table.append(heading4);
let heading5 = document.createElement('th');
heading5.innerHTML = "Gender";
table.append(heading5);
let heading6 = document.createElement('th');
heading6.innerHTML = "Choice Of Food";
table.append(heading6);
let heading7 = document.createElement('th');
heading7.innerHTML = "State";
table.append(heading7);
let heading8 = document.createElement('th');
heading8.innerHTML = "Country";
table.append(heading8);
division2.append(table);
document.body.append(division2);


// form = document.getElementsByClassName("form");

form.addEventListener('submit', function button(event) {
    event.preventDefault();
    const tbody = document.createElement('tbody');
    const datarow = document.createElement('tr');
    const data1 = document.createElement('td');
    const data2 = document.createElement('td');
    const data3 = document.createElement('td');
    const data4 = document.createElement('td');
    const data5 = document.createElement('td');
    const data6 = document.createElement('td');
    const data7 = document.createElement('td');
    const data8 = document.createElement('td');
    datarow.append(data1);
    datarow.append(data2);
    datarow.append(data3);
    datarow.append(data4);
    datarow.append(data5);
    datarow.append(data6);
    datarow.append(data7);
    datarow.append(data8);
    tbody.append(datarow);
    const firstName = document.getElementsByClassName('firstName')[0].value;
    const lastName = document.getElementsByClassName('lastName')[0].value;
    const address = document.getElementsByClassName('address')[0].value;
    const pinCode = document.getElementsByClassName('pinCode')[0].value;
    const State = document.getElementsByClassName('State')[0].value;
    const Country = document.getElementsByClassName('Country')[0].value;
    const Gender = document.querySelector('input[name="Gender"]:checked')?.value;
    const FoodChoice = document.querySelectorAll('input[name="food"]:checked');
    let FoodChoiceArray=[];
    for(let i=0 ; i<FoodChoice.length;i++)
    {
      FoodChoiceArray.push(FoodChoice[i].value)
    }
    if(FoodChoiceArray.length<2){
        alert('Select atleast Two Food Choices');
        return;
    }
    console.log(FoodChoiceArray);

    data1.textContent = firstName;
    data2.textContent = lastName;
    data3.textContent = address;
    data4.textContent = pinCode;
    data7.textContent = State;
    data8.textContent = Country;
    data5.textContent = Gender ; 
    data6.textContent = FoodChoiceArray;
    
    table.append(tbody);
    // form.append(tbody);
    // console.log(Country,lastName);
    form.reset();
});




