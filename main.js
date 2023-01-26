// ( async ()=> {
// }
// )

import { getWeatherByLatAndLonMetric } from "./services/WeatherService.js";
import { WeatherModel } from "./models/WeatherModel.js";

let ville = "";

const setHtml = (weathers) => {
      let html = "";
      for (const w of weathers) {
            html += `<article class="card">
<div class="card__date">${w.date.toLocaleString()}</div>
<div class="card__temp">
<div>${w.skies[0].description}</div>
<div>
<img src="https://openweathermap.org/img/wn/${w.skies[0].icon}@4x.png" alt="">
<p>${w.temp} °C</p>
</div>
</div>
<div class="card__minmax">
<div>
<p>min</p>
<p>${w.tempMin} °C</p>
</div>
<div>
<p>ressenti</p>
<p>${w.tempLike} °C</p>
</div>
<div>
<p>max</p>
<p>${w.tempMax} °C</p>
</div>
</div>
<div class="card__pressure">
<div>
<p>pression</p>
<p>${w.pressure}</p>
</div>
<div>
<p>humidité</p>
<p>${w.humidity}</p>
</div>
</div>
</article>`
      }
      return html;
}

navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords.latitude, position.coords.longitude);

      getWeatherByLatAndLonMetric(position.coords.latitude, position.coords.longitude)
          .then(data => {
                ville = data["city"]["name"]

                const list = data["list"];
                const weathers = list.map(el => WeatherModel.toWeatherModel(el));

                document.getElementById('ville').innerHTML = ville;
                document.getElementById('weathers').innerHTML = setHtml(weathers);
          })

});



