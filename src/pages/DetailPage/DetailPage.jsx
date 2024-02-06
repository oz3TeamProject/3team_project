import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const DetailPage = () => {
  const contentTitle = useParams();
  const [tour, setTour] = useState(null);
  const [detailContent, setDetailContent] = useState("");
  const APIS_KEY =
    "D6HvbqfFj6otDTGY3883h0C51xIplWlMUXEF%2Bl5ZX9DTpTTNODdcI%2F6StO1BbYtjTAtOOKyj25hhnMVj4ASszw%3D%3D";
  const itemCount = 1;
  const containerStyle = {
    width: "700px",
    height: "400px",
    margin: "auto",
    borderRadius: "10px",
  };

  useEffect(() => {
    async function fetchData() {
      const newContentTitle = contentTitle.content_title.replace(
        "content_title:",
        ""
      );

      const response = await axios.get(
        `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${APIS_KEY}&numOfRows=${itemCount}&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&&contentTypeId=12&keyword=${newContentTitle}`
      );

      setTour(response.data.response.body.items.item[0]);
      const contentId = response.data.response.body.items.item[0].contentid;
      console.log(contentId);
      const response2 = await axios.get(
        `https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${APIS_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentId}&contentTypeId=12&defaultYN=Y&overviewYN=Y&numOfRows=1&pageNo=1`
      );
      setDetailContent(response2.data.response.body.items.item[0].overview);
    }
    fetchData();
  }, [contentTitle]);

  if (tour === null) return null;

  return (
    <div className="detail_background">
      <div className="detail_container">
        <div className="detail_container_top">
          <img
            src="images/detail_image1.png"
            alt="left 이미지"
            className="detail_img_logo1"
          />
          <div className="detail_circle">우리나라 관광지</div>
          <img
            src="images/detail_image2.png"
            alt="left 이미지"
            className="detail_img_logo2"
          />
        </div>
        <section className="detail_section">
          <div className="detail_data">
            <div className="data_info">
              <h1 className="detail_title">{tour.title}</h1>
              <img
                src={tour.firstimage ? tour.firstimage : "images/no_img.jpg"}
              />
              <div className="data_text">
                <p>{`주소: ${tour.addr1} ${tour.addr2}`}</p>
                <br />
                <h4>상세정보</h4>
                <div
                  style={{ width: "650px", margin: "auto", textAlign: "start" }}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: detailContent
                        .replace(/<br \/>/g, "<br />")
                        .replace(/\n/g, "<br />"),
                    }}
                  ></p>
                  {/* <p>{detailContent.replace('<br />', '')}</p> */}
                </div>
              </div>
              <br />
              <LoadScript
                googleMapsApiKey="AIzaSyAMUowo4dL4hO_oLvHA3CvHyINSAXjUIjI"
                loadingElement={<div style={{ height: "100%" }} />}
              >
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={{
                    lat: parseFloat(tour.mapy),
                    lng: parseFloat(tour.mapx),
                  }}
                  zoom={14}
                >
                  <MarkerF
                    position={{
                      lat: parseFloat(tour.mapy),
                      lng: parseFloat(tour.mapx),
                    }}
                  />
                </GoogleMap>
              </LoadScript>
              <br />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailPage;
