let del_temp = document.getElementById('del_temp');
let agra_temp = document.getElementById('agra_temp');
let kolkata_temp = document.getElementById('kol_temp');
let patna_temp = document.getElementById('patna_temp');
let del_text = document.getElementById('del_text');
let agra_text = document.getElementById('agra_text');
let patna_text = document.getElementById('patna_text');
let kol_text = document.getElementById('kol_text');
//  Api Key = 32f1d3c0461b4c8592b155802222511
let patna_link = "";
if (location.protocol === "http:") {
    patna_link = `http://api.weatherapi.com/v1/current.json?key=32f1d3c0461b4c8592b155802222511&q=patna`;
}
else{
    patna_link = `https://api.weatherapi.com/v1/current.json?key=32f1d3c0461b4c8592b155802222511&q=patna`;
}

let agra_link = "";
if (location.protocol === "http:") {
    agra_link = `http://api.weatherapi.com/v1/current.json?key=32f1d3c0461b4c8592b155802222511&q=agra`;
}
else{
    agra_link = `https://api.weatherapi.com/v1/current.json?key=32f1d3c0461b4c8592b155802222511&q=agra`;
}
let kolkata_link = "";
if (location.protocol === "http:") {
    kolkata_link = `http://api.weatherapi.com/v1/current.json?key=32f1d3c0461b4c8592b155802222511&q=kolkata`;
}
else{
    kolkata_link = `https://api.weatherapi.com/v1/current.json?key=32f1d3c0461b4c8592b155802222511&q=kolkata`;
}

let del_link = "";
if (location.protocol === "http:") {
    del_link = `http://api.weatherapi.com/v1/current.json?key=32f1d3c0461b4c8592b155802222511&q=delhi`;
}
else{
    del_link = `https://api.weatherapi.com/v1/current.json?key=32f1d3c0461b4c8592b155802222511&q=delhi`;
}

// Function to fetch data for delhi
async function delhiFunction() {
    let del_req = await fetch(del_link);
    let del_data = await del_req.json();
    del_temp.innerHTML = `${del_data.current.temp_c}℃`;
    del_text.innerHTML = `${del_data.current.condition.text}`;
}
// Function to fetch data for agra
async function agraFunction() {
    let del_req = await fetch(agra_link);
    let del_data = await del_req.json();
    agra_temp.innerHTML = `${del_data.current.temp_c}℃`;
    agra_text.innerHTML = `${del_data.current.condition.text}`
}
// Function to fetch data for patna
async function patnaFunction() {
    let del_req = await fetch(patna_link);
    let del_data = await del_req.json();
    patna_temp.innerHTML = `${del_data.current.temp_c}℃`;
    patna_text.innerHTML = `${del_data.current.condition.text}`
}

// Function to fetch data for Kolkata
async function kolkataFunction() {
    let del_req = await fetch(kolkata_link);
    let del_data = await del_req.json();
    kolkata_temp.innerHTML = `${del_data.current.temp_c}℃`;
    kol_text.innerHTML = `${del_data.current.condition.text}`;
}
delhiFunction();
agraFunction();
patnaFunction();
kolkataFunction();

let searchBtn = document.getElementById('search_btn');
searchBtn.addEventListener("click", async () => {
    let string = document.getElementById('search').value;
    let link;
    if (location.protocol === "http:") {
        link = `http://api.weatherapi.com/v1/current.json?key=32f1d3c0461b4c8592b155802222511&q=${string}`;
    }
    else{
        link = `https://api.weatherapi.com/v1/current.json?key=32f1d3c0461b4c8592b155802222511&q=${string}`;
    }

    let del_req = await fetch(link);
    let del_data = await del_req.json();
    document.querySelector('.append_degree').innerHTML = `${del_data.current.temp_c}℃`;
    document.querySelector('.append_condition').innerHTML = `${del_data.current.condition.text}`;
    document.getElementById('cluod_img').src = `${del_data.current.condition.icon}`;
})
// Developer Section Code
let fullDiv = document.querySelector('.dev_fulldiv');
let devBtn = document.getElementById('dev_btn');
devBtn.addEventListener("click",()=>{
    fullDiv.style.display
     = 'none';
})