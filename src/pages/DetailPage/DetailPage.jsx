import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetailPage.css'

const DetailPage = () => {
  const contentTitle = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const newContentTitle = contentTitle.content_title.replace('content_title:', '');

      const response = await axios.get(
        `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=D6HvbqfFj6otDTGY3883h0C51xIplWlMUXEF%2Bl5ZX9DTpTTNODdcI%2F6StO1BbYtjTAtOOKyj25hhnMVj4ASszw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&&contentTypeId=12&keyword=${newContentTitle}`
      )
      setTour(response.data.response.body.items.item[0]);
      console.log('상세페이지 데이터:', response.data.response.body.items.item[0]);
      

    }
    fetchData();
  }, [contentTitle])

  if (tour === null) return null;

  return (
    <section>
      <div className='detail_data'>
        <div className='data_info'>
          <img src={tour.firstimage ? tour.firstimage : 'images/no_img.jpg'} />
          <div className='data_text'>
            <h1>{tour.title}</h1>
            <p>{`주소: ${tour.addr1} ${tour.addr2}`}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailPage