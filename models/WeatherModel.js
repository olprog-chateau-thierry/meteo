import { SkyModel } from "./SkyModel.js";

export class WeatherModel {
    temp = "";
    tempLike = "";
    tempMin = -150;
    tempMax = 150;
    pressure = 0;
    humidity = -100;
    skies = [];
    date = new Date();


static toWeatherModel(el) {
    const w = new WeatherModel();
    const main = el.main;
    if (main) {
      w.temp = main.temp ?? -150;
      w.tempLike = main["feels_like"] ?? -150;
      w.tempMin = main["temp_min"] ?? -150;
      w.tempMax = main["temp_max"] ?? 150;
      w.pressure = main["pressure"] ?? 0;
      w.humidity = main["humidity"] ?? -100;
    }
    w.date = new Date(el["dt_txt"]);
    const skies = el["weather"];
    if (skies) {
        w.skies = skies.map(sky => new SkyModel(sky["main"], sky["description"], sky["icon"]));
    }
    return w
}
}
