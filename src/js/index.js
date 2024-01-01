const keyApi = "d73e64e4dbba2c61fe8dc310d901d3f2"

document.querySelector('.btn-search').addEventListener('click', search)

function addDisplay(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em: " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%";
    document.querySelector(".text-prevision").innerHTML = data.weather[0].description
    document.querySelector(".img-prevision").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    document.querySelector(".img-prevision").style.display = "block";
}



async function searchCity(inputCity) {
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    inputCity + 
    "&appid=" + 
    keyApi + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    addDisplay(data)
}

function search() {
    const inputCity = document.querySelector(".input-city").value;

    searchCity(inputCity);

}





