const searchBtn = document.querySelector('#searchBtn');
const result = document.querySelector('.result');

searchBtn.addEventListener('click', () => {
    let input = document.querySelector('#countryInp').value;
    let url = `https://restcountries.com/v3.1/name/${input}?fullText=true`;
    fetch(url).then(res => res.json()).then(data => {
        result.innerHTML = `
        <img src='${data[0].flags.svg}' alt="Flag" class="flag">
        <h2 class="name">${input}</h2>
        <div class="data-div">
            <h4>Capital: </h4>
            <span>${data[0].capital}</span>
        </div>
        <div class="data-div">
            <h4>Continent: </h4>
            <span>${data[0].continents[0]}</span>
        </div>
        <div class="data-div">
            <h4>Population: </h4>
            <span>${data[0].population}</span>
        </div>
        <div class="data-div">
            <h4>Currency: </h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
        <div class="data-div">
            <h4>Common Languages: </h4>
            <span>${Object.values(data[0].languages).toString().split(',').join(', ')}</span>
        </div>
        `;
    }).catch( () => {
        if(input.length === 0){
            result.innerHTML = `<h3>The input field cannot be empty</h3>`
        }else{
            result.innerHTML = `<h3 class='error'>Enter valid country name</h3>`
        }
    })
})