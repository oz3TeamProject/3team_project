import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import PlaceModal from "./Modal";
import './Row.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from "styled-components";

const Row = ({city, title, id}) =>{
    const fetchUrl='https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=D6HvbqfFj6otDTGY3883h0C51xIplWlMUXEF%2Bl5ZX9DTpTTNODdcI%2F6StO1BbYtjTAtOOKyj25hhnMVj4ASszw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=%EA%B0%95%EC%9B%90&contentTypeId=12' 

    const [places, setPlaces] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    //현재 선택된 장소에 대한 data
    const [placeSelected, setPlaceSelected]= useState({});

    const handleClick = (place)=>{
        setModalOpen(true);
        setPlaceSelected(place);
    }

    const fetchTourPlaces = useCallback(async () =>{
        try{
            const response = await axios.get(fetchUrl);
            setPlaces(response.data.response.body.items.item);
            console.log(response.data.response.body.items.item);
        }catch(error){
            console.error('Error fetching data:', error);
        }
    },[fetchUrl])

    useEffect(()=>{
        fetchTourPlaces();
    }, [fetchTourPlaces])

    //console.log(places[0].firstimage)

    return(
        <Container>
            <h2>{city}</h2>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                breakpoints={{
                    1378: {
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                    },
                    998: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                    625: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    0: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },

                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
             >

                <div id={city} className="row__places">
                    {places.map((place)=>(
                        <SwiperSlide
                            key={place.contentid}
                        >
                            <Wrap>
                                <img
                                    className="row__place"
                                    src={place.firstimage ? place.firstimage : "images/no_img.jpg"}
                                    alt={place.title}
                                    onClick={()=>handleClick(place)}
                                />
                            </Wrap>
                        </SwiperSlide>
                    ))}
                </div>

            </Swiper>
            {modalOpen ? 
                <PlaceModal {...placeSelected} setModalOpen={setModalOpen} />
            :null}
        </Container>
    );
};


const Container = styled.div`
    padding: 0 0 26px;
`

const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img{
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Row;