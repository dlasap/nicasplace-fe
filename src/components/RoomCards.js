import react, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardBody from "./CardBody";

import "./styles/RoomCard.css";
import RoomModal from "./RoomModal";

const RoomCards = () => {
  const rooms = [
    {
      id: 1,
      sx: { height: 300 },
      title: "room 1",
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      // caption: "Nica hehe",
      image:
        "https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.6435-9/140583070_4987874644619645_8934521985317859050_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHxaIwWYSfg9sFa7vGc9X-bRorqSPFaNsNGiupI8Vo2w5TGifZ0PsrpbFfYZOfw4Ta5PUB1d6EARCVS7bVjAS9X&_nc_ohc=cGxsKSjGQB4AX-9OyYV&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfBpYXaFTV0_q4qNMtMswPYvM5K1nM3NzjmHQRQS5k2diw&oe=641C4BDA",
      contentTitle: "12A",
      contentBody: "Nica's first ever room.",
      images: [
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
      ],
    },
    {
      id: 2,
      sx: { height: 300 },
      title: "room 2",
      image: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      contentTitle: "38J",
      contentBody: "Nica's Place 38th Floor",
      images: [
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
      ],
    },
    {
      id: 3,
      sx: { height: 300 },
      title: "room 3",
      image:
        "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/122039125_4594392657301181_2914309188669696783_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFAElxBhNXHhRxHEolGlZbb_skNNN5T88T-yQ003lPzxLK1Qc3io-QE9_418qzdVxeyQNdCNUuwsU2Sbl8E3e85&_nc_ohc=MU3fHp7nxG0AX8eYKkb&_nc_ht=scontent-hkt1-1.xx&oh=00_AfBGZIIm-iSacsOaRncWR5RRRmVT4JCOyxTMA-mN88IUuQ&oe=641C2C8E",
      contentTitle: "29H",
      contentBody: "Nica's Place 38th Floor",
      images: [
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
      ],
    },
    {
      id: 4,
      sx: { height: 300 },
      title: "room 4",
      image:
        "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/122039125_4594392657301181_2914309188669696783_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFAElxBhNXHhRxHEolGlZbb_skNNN5T88T-yQ003lPzxLK1Qc3io-QE9_418qzdVxeyQNdCNUuwsU2Sbl8E3e85&_nc_ohc=MU3fHp7nxG0AX8eYKkb&_nc_ht=scontent-hkt1-1.xx&oh=00_AfBGZIIm-iSacsOaRncWR5RRRmVT4JCOyxTMA-mN88IUuQ&oe=641C2C8E",
      contentTitle: "45P",
      contentBody: "Nica's Place 38th Floor",
      images: [
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
      ],
    },
    {
      id: 5,
      sx: { height: 300 },
      title: "room 1",
      image:
        "https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.6435-9/140583070_4987874644619645_8934521985317859050_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHxaIwWYSfg9sFa7vGc9X-bRorqSPFaNsNGiupI8Vo2w5TGifZ0PsrpbFfYZOfw4Ta5PUB1d6EARCVS7bVjAS9X&_nc_ohc=cGxsKSjGQB4AX-9OyYV&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfBpYXaFTV0_q4qNMtMswPYvM5K1nM3NzjmHQRQS5k2diw&oe=641C4BDA",
      contentTitle: "12A",
      contentBody: "Nica's first ever room.",
      images: [
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
      ],
    },
    {
      id: 3,
      sx: { height: 300 },
      title: "room 3",
      image:
        "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/122039125_4594392657301181_2914309188669696783_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFAElxBhNXHhRxHEolGlZbb_skNNN5T88T-yQ003lPzxLK1Qc3io-QE9_418qzdVxeyQNdCNUuwsU2Sbl8E3e85&_nc_ohc=MU3fHp7nxG0AX8eYKkb&_nc_ht=scontent-hkt1-1.xx&oh=00_AfBGZIIm-iSacsOaRncWR5RRRmVT4JCOyxTMA-mN88IUuQ&oe=641C2C8E",
      contentTitle: "29H",
      contentBody: "Nica's Place 38th Floor",
      images: [
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
      ],
    },
    ,
    {
      id: 5,
      sx: { height: 300 },
      title: "room 1",
      image:
        "https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.6435-9/140583070_4987874644619645_8934521985317859050_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHxaIwWYSfg9sFa7vGc9X-bRorqSPFaNsNGiupI8Vo2w5TGifZ0PsrpbFfYZOfw4Ta5PUB1d6EARCVS7bVjAS9X&_nc_ohc=cGxsKSjGQB4AX-9OyYV&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfBpYXaFTV0_q4qNMtMswPYvM5K1nM3NzjmHQRQS5k2diw&oe=641C4BDA",
      contentTitle: "12A",
      contentBody: "Nica's first ever room.",
      images: [
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
      ],
    },
    {
      id: 3,
      sx: { height: 300 },
      title: "room 3",
      image:
        "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/122039125_4594392657301181_2914309188669696783_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFAElxBhNXHhRxHEolGlZbb_skNNN5T88T-yQ003lPzxLK1Qc3io-QE9_418qzdVxeyQNdCNUuwsU2Sbl8E3e85&_nc_ohc=MU3fHp7nxG0AX8eYKkb&_nc_ht=scontent-hkt1-1.xx&oh=00_AfBGZIIm-iSacsOaRncWR5RRRmVT4JCOyxTMA-mN88IUuQ&oe=641C2C8E",
      contentTitle: "29H",
      contentBody: "Nica's Place 38th Floor",
      images: [
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
      ],
    },
    ,
    {
      id: 5,
      sx: { height: 300 },
      title: "room 1",
      image:
        "https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.6435-9/140583070_4987874644619645_8934521985317859050_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHxaIwWYSfg9sFa7vGc9X-bRorqSPFaNsNGiupI8Vo2w5TGifZ0PsrpbFfYZOfw4Ta5PUB1d6EARCVS7bVjAS9X&_nc_ohc=cGxsKSjGQB4AX-9OyYV&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfBpYXaFTV0_q4qNMtMswPYvM5K1nM3NzjmHQRQS5k2diw&oe=641C4BDA",
      contentTitle: "12A",
      contentBody: "Nica's first ever room.",
      images: [
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
      ],
    },
    {
      id: 3,
      sx: { height: 300 },
      title: "room 3",
      image:
        "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/122039125_4594392657301181_2914309188669696783_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFAElxBhNXHhRxHEolGlZbb_skNNN5T88T-yQ003lPzxLK1Qc3io-QE9_418qzdVxeyQNdCNUuwsU2Sbl8E3e85&_nc_ohc=MU3fHp7nxG0AX8eYKkb&_nc_ht=scontent-hkt1-1.xx&oh=00_AfBGZIIm-iSacsOaRncWR5RRRmVT4JCOyxTMA-mN88IUuQ&oe=641C2C8E",
      contentTitle: "29H",
      contentBody: "Nica's Place 38th Floor",
      images: [
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
      ],
    },
    ,
    {
      id: 5,
      sx: { height: 300 },
      title: "room 1",
      image:
        "https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.6435-9/140583070_4987874644619645_8934521985317859050_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHxaIwWYSfg9sFa7vGc9X-bRorqSPFaNsNGiupI8Vo2w5TGifZ0PsrpbFfYZOfw4Ta5PUB1d6EARCVS7bVjAS9X&_nc_ohc=cGxsKSjGQB4AX-9OyYV&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfBpYXaFTV0_q4qNMtMswPYvM5K1nM3NzjmHQRQS5k2diw&oe=641C4BDA",
      contentTitle: "12A",
      contentBody: "Nica's first ever room.",
      images: [
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
      ],
    },
    {
      id: 3,
      sx: { height: 300 },
      title: "room 3",
      image:
        "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/122039125_4594392657301181_2914309188669696783_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFAElxBhNXHhRxHEolGlZbb_skNNN5T88T-yQ003lPzxLK1Qc3io-QE9_418qzdVxeyQNdCNUuwsU2Sbl8E3e85&_nc_ohc=MU3fHp7nxG0AX8eYKkb&_nc_ht=scontent-hkt1-1.xx&oh=00_AfBGZIIm-iSacsOaRncWR5RRRmVT4JCOyxTMA-mN88IUuQ&oe=641C2C8E",
      contentTitle: "29H",
      contentBody: "Nica's Place 38th Floor",
      images: [
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
      ],
    },
  ];
  const [openRoom, setOpenRoom] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(
    rooms[0] ?? {
      name: "12A",
      body: "No Room for No ManKind.",
    }
  );

  return (
    <div>
      <h1 className="RoomCardsHeader">Rooms at Nica's Place</h1>
      <RoomModal openRoom={openRoom} setOpenRoom={setOpenRoom} roomInfo={currentRoom} />
      <div className="RoomCards">
        {rooms.length ? (
          rooms.map((room) => {
            const { id, image, sx, title, contentTitle, contentBody, images } = room;
            return (
              <Card
                className="Card"
                sx={{ maxWidth: 450 }}
                onClick={() => {
                  setCurrentRoom({
                    name: contentTitle,
                    body: contentBody,
                    images,
                    image,
                  });
                }}
              >
                <CardBody
                  openRoom={openRoom}
                  setOpenRoom={setOpenRoom}
                  imageInfo={{
                    sx,
                    title,
                    image,
                  }}
                  contentInfo={{
                    contentTitle,
                    contentBody,
                  }}
                />
              </Card>
            );
          })
        ) : (
          <Typography sx={{ fontSize: "50px", background: "white" }}>No Available Rooms.</Typography>
        )}
      </div>
    </div>
  );
};

export default RoomCards;
