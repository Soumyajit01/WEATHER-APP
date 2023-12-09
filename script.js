apiKey="YOUR API KEY" // You can get a free API key on RapidAPI; No credit card details are required for this one. So you can use this application and customise accordingly
{
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const getResp = async () => {

        const response = await fetch(url, options);
        const result = await response.text();
        // console.log(result);
        cloud_pct_delhi.innerHTML = JSON.parse(result).cloud_pct
        temp_delhi.innerHTML = JSON.parse(result).temp
        feels_like_delhi.innerHTML = JSON.parse(result).feels_like
        humidity_delhi.innerHTML = JSON.parse(result).humidity
        min_temp_delhi.innerHTML = JSON.parse(result).min_temp
        max_temp_delhi.innerHTML = JSON.parse(result).max_temp
        wind_speed_delhi.innerHTML = JSON.parse(result).wind_speed
    }
    getResp()
} catch (error) {
    console.error(error);
}
}
{const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const getResp = async () => {

        const response = await fetch(url, options);
        const result = await response.text();
        // console.log(result);
        cloud_pct_mumbai.innerHTML = JSON.parse(result).cloud_pct
        temp_mumbai.innerHTML = JSON.parse(result).temp
        feels_like_mumbai.innerHTML = JSON.parse(result).feels_like
        humidity_mumbai.innerHTML = JSON.parse(result).humidity
        min_temp_mumbai.innerHTML = JSON.parse(result).min_temp
        max_temp_mumbai.innerHTML = JSON.parse(result).max_temp
        wind_speed_mumbai.innerHTML = JSON.parse(result).wind_speed
    }
    getResp()
} catch (error) {
    console.error(error);
}
}
{const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const getResp = async () => {

        const response = await fetch(url, options);
        const result = await response.text();
        // console.log(result);
        cloud_pct_bangalore.innerHTML = JSON.parse(result).cloud_pct
        temp_bangalore.innerHTML = JSON.parse(result).temp
        feels_like_bangalore.innerHTML = JSON.parse(result).feels_like
        humidity_bangalore.innerHTML = JSON.parse(result).humidity
        min_temp_bangalore.innerHTML = JSON.parse(result).min_temp
        max_temp_bangalore.innerHTML = JSON.parse(result).max_temp
        wind_speed_bangalore.innerHTML = JSON.parse(result).wind_speed
    }
    getResp()
} catch (error) {
    console.error(error);
}
}

responses.hidden = true
search.addEventListener("click", function () {
    responses.hidden = false;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city_searched.value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const getResp = async () => {
            const response = await fetch(url, options);
            const result = await response.text();
            // console.log(result)
            cloud_pct.innerHTML = JSON.parse(result).cloud_pct
            temp.innerHTML = JSON.parse(result).temp
            feels_like.innerHTML = JSON.parse(result).feels_like
            humidity.innerHTML = JSON.parse(result).humidity
            min_temp.innerHTML = JSON.parse(result).min_temp
            max_temp.innerHTML = JSON.parse(result).max_temp
            wind_speed.innerHTML = JSON.parse(result).wind_speed
        };
        getResp()
    } catch (error) {
        console.error(error);
    }
})