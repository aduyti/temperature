const API_KEY = '46ad7457603b9b0104e633e78cd60e16';
document.getElementById('search').addEventListener('click', () => {
    const city = document.getElementById('input').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url).then((response) => response.json()).then(data => showData(data));
});

const showData = (data) => {
    document.getElementById('city').innerText = data.name;
    document.getElementById('temperature').innerText = data.main.temp;
    document.getElementById('humidity').innerText = data.main.humidity;
    document.getElementById('weather').innerText = data.weather[0].main;
    document.getElementById('image').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // document.getElementById('img').setAttribute('src', img_url);
}