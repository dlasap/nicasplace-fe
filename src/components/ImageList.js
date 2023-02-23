import react from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./styles/ImageList.css";
const StandardImageList = ({ imageInfo }) => {
  return (
    <ImageList id="ImgList" sx={{ width: "70%", height: "50%" }} cols={2} rowHeight={300}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} width="50" height="auto" alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const itemData = [
  {
    img: "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
    title: "Breakfast",
  },
  {
    img: "https://scontent.fceb2-2.fna.fbcdn.net/v/t31.18172-8/28616980_1906900276050446_2382300686752928427_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEWp6Lhnrp1w1t1_6iJk3cvpsaONHLOZmymxo40cs5mbPwRqE5NadhqYgbi_8xWkb6vDicnw2jv4BNdYygbKZ78&_nc_ohc=3CuHr2iWy1IAX8aApur&_nc_ht=scontent.fceb2-2.fna&oh=00_AfDnvAIbS-sJdrgqA16epeTCEPUY3pwrUNaayeJ1_GSrng&oe=641E476B",
    title: "Burger",
  },
  {
    img: "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
    title: "Nica",
  },
  {
    img: "https://scontent.fceb2-1.fna.fbcdn.net/v/t31.18172-8/28423320_1906899492717191_3035394719282840491_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHxjfRTwzhGa9hL-qb_JpACJQXyq2vwAdolBfKra_AB2ifJe5z519j2BE1-COAgy1p4QVGZpxtHmerPh2klEX0J&_nc_ohc=CzQfubN3MuIAX8O9Sq9&_nc_ht=scontent.fceb2-1.fna&oh=00_AfBXFxEr4f7iLtcMS7UXFC6k4fpkFcoiPq-6GxjpbtWV_A&oe=641E418C",
    title: "Nica",
  },
];

export default StandardImageList;
