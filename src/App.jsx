
import styled from 'styled-components';
import './App.css'

import Row from './components/Row';

function App() {
  // 아래 주소 사용하시면 됩니다. 저희는 주소뒤에 키워드 부분만 만지면 됩니다!
  // https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=D6HvbqfFj6otDTGY3883h0C51xIplWlMUXEF%2Bl5ZX9DTpTTNODdcI%2F6StO1BbYtjTAtOOKyj25hhnMVj4ASszw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=%EA%B0%95%EC%9B%90&contentTypeId=12
  
  const cityArray = ["강원", "경기", "서울", "인천", "충북", "충남", "경북", "경남", "전북", "전남", "제주"];
  
  return (
    <Container>
      {cityArray.map(city => (
        <Row key={city} id={city} city={city}/>
      ))}
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`

export default App
