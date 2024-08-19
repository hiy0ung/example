// 날씨 정보를 가져오는 비동기 함수

const city = "Seoul";
// >> input창에서 입력받을 경우 capitalize 사용
// EX) London, Tokyo 등

const apikey = "4228550c90726bad987b1c72d6333998"; // API 사이트에서 제공하는 개인 API_KEY
const lang = "kr";

const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}&units=metric`;

// >> 제공된 API를 사용하여 지역의 이름을 바탕으로
// >> 해당 날씨에 대한 데이터를 lang(언어)속성을 지정하여 원하는 언어로 호출
// >> &units=metric: 시간이 지남에 따라 변화하는 데이터를 의미

async function fetchWeather() {
  try {
    // weather API에 데이터를 요청하는 fetch()함수 사용
    const response = await fetch(`API KEY`);

    // 응답이 성공적이지 않은 경우, 에러 발생
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    // 응답된 데이터를 JSON 형식으로 변환하여 저장
    const data = await response.json();

    // 날씨 UI를 업데이트하는 함수에 데이터 전달
    updateWeatherUI(data)

  } catch (error) {
    console.log('Error fetching weather data: ', error);
  }
}

function updateWeatherUI(data) {
  const weatherInfo = `
  <p>온도: ${data.current.temp_c}</p>
  `;

  document.getElementById('weather-info').innerHTML = weatherInfo;
}


//* 현재 날짜
const nowDate = document.querySelector('#nowDate');
const now = new Date(); // 현재 날짜 및 시간 출력
const year = now.getFullYear()
const date = now.getDate(); 

//! 요일 출력 배열
function getDayLabel() {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let day = new Date().getDay();
  let dayLabel = days[day];

  return dayLabel;
}

//! 영어 월 출력
function getMonthLabel() {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let month = new Date().getMonth();
  let monthLabel = months[month];

  return monthLabel;
}

nowDate.textContent = `${getDayLabel()}, ${getMonthLabel()} ${date}, ${year}`


//* 다크모드
const button = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');
const container = document.querySelector('#weather-container');
const input = document.querySelector('.search');

// 버튼 기능 구현 (Dark -> Light로 버튼명, 색 변경)
button.addEventListener('click', () => {
  if(button.classList.contains('dark')) {
    button.textContent = 'Light';
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    container.style.color = 'white';
    input.style.color = 'white';

    // 다크모드 지정하는 클래스 제거
    button.classList.remove('dark');
  } else {
    button.textContent = 'Dark';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    button.style = 'none';
    container.style = 'none';
    input.style = 'none';
    
    button.classList.add('dark');
  }
});

