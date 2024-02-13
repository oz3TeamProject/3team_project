
import './App.css'

import Row from './Components/Row'

function App() {
  // 아래 주소 사용하시면 됩니다. 저희는 주소뒤에 키워드 부분만 만지면 됩니다!
  // https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=D6HvbqfFj6otDTGY3883h0C51xIplWlMUXEF%2Bl5ZX9DTpTTNODdcI%2F6StO1BbYtjTAtOOKyj25hhnMVj4ASszw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=%EA%B0%95%EC%9B%90&contentTypeId=12
  return (
    <div>
      <Row city="city"/>
    </div>
  )
}

export default App
