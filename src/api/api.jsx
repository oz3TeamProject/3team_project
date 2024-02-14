import axios from "axios";

const request = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/KorService1/searchKeyword1",
  params: {
    serviceKey:
      "D6HvbqfFj6otDTGY3883h0C51xIplWlMUXEF+l5ZX9DTpTTNODdcI/6StO1BbYtjTAtOOKyj25hhnMVj4ASszw==",

    pageNo: 1,
    MobileOS: "ETC",
    MobileApp: "AppTest",
    _type: "json",
    listYN: "Y",
    arrange: "A",
    contentTypeId: 12,
  },
});

export default request;