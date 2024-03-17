const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value; 
        // alert('hii');
        
        if(cityVal === ""){            
            city_name.innerText = `Write the name before search`;
        }else{
            try{
                let url  =`https://api.openweathermap.org/data/2.5/weather?${cityVal}&lat={lat}&lon={lon}&appid=21843958004a459786cfed92057f70d6`;

            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            city_name.innerText = '${arrData[0].name}, ${arrData[0].sys.country}';
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].temp;

        }catch{
            city_name.innerText = `Write the name Properly`;
        }
    }
}
submitBtn.addEventListener('click', getInfo);

