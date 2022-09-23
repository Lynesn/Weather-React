import React from "react";
import axios from "axios";
import loader from "react-loader-spinner";

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }
    let apiKey = "d1c7e1c9752650fe2421481d738c5614";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return(
        <loader type="puff" color="blue" height={100} width={100} timeout={3000} />
    );
    <h2>Hello</h2>;
}