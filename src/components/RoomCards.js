import react from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardBody from "./CardBody";

import "./styles/RoomCard.css";

const dummy_data = [
  {
    //later
  },
];
const RoomCards = () => {
  return (
    <div>
      <h1 className="RoomCardsHeader">Rooms at Nica's Place</h1>
      <div className="RoomCards">
        <Card className="Cardx" sx={{ maxWidth: 400 }}>
          <CardBody
            imageInfo={{
              sx: { height: 300 },
              title: "room 1",
              image:
                "https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000",
            }}
            contentInfo={{
              contentTitle: "12A",
              contentBody: "Nica's Place 29th Floor",
            }}
          />
        </Card>

        <Card sx={{ maxWidth: 400 }}>
          <CardBody
            imageInfo={{
              sx: { height: 300 },
              title: "room 2",
              image: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
            }}
            contentInfo={{
              contentTitle: "38J",
              contentBody: "Nica's Place 38th Floor",
            }}
          />
        </Card>

        <Card sx={{ maxWidth: 400 }}>
          <CardBody
            imageInfo={{
              sx: { height: 300 },
              title: "room 2",
              image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-get-upgraded-1565955358.jpg",
            }}
            contentInfo={{
              contentTitle: "38K",
              contentBody: "Nica's Place 38th Floor",
            }}
          />
        </Card>

        <Card sx={{ maxWidth: 400 }}>
          <CardBody
            imageInfo={{
              sx: { height: 300 },
              title: "room 2",
              image: "https://images.trvl-media.com/hotels/60000000/59030000/59029900/59029824/35e16325_b.jpg",
            }}
            contentInfo={{
              contentTitle: "29H",
              contentBody: "Nica's Place 38th Floor",
            }}
          />
        </Card>

        <Card sx={{ maxWidth: 400 }}>
          <CardBody
            imageInfo={{
              sx: { height: 300 },
              title: "room 2",
              image: "https://rhotelgeelong.com.au/wp-content/uploads/2021/03/R-Hotel-Geelong-Hotel-Room-11.jpg",
            }}
            contentInfo={{
              contentTitle: "38L",
              contentBody: "Nica's Place 38th Floor",
            }}
          />
        </Card>

        <Card sx={{ maxWidth: 400 }}>
          <CardBody
            imageInfo={{
              sx: { height: 300 },
              title: "room 2",
              image: "https://rhotelgeelong.com.au/wp-content/uploads/2021/03/R-Hotel-Geelong-2B-Ocean-View-15-500x400.jpg",
            }}
            contentInfo={{
              contentTitle: "45P",
              contentBody: "Nica's Place 38th Floor",
            }}
          />
        </Card>

        <Card sx={{ maxWidth: 400 }}>
          <CardBody
            imageInfo={{
              sx: { height: 300 },
              title: "room 2",
              image:
                "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg",
            }}
            contentInfo={{
              contentTitle: "50P",
              contentBody: "Nica's Place 38th Floor",
            }}
          />
        </Card>

        <Card sx={{ maxWidth: 400 }}>
          <CardBody
            imageInfo={{
              sx: { height: 300 },
              title: "room 2",
              image: "https://s31606.pcdn.co/wp-content/uploads/2016/08/hotel-rooms.jpg",
            }}
            contentInfo={{
              contentTitle: "69A",
              contentBody: "Nica's Place 38th Floor",
            }}
          />
        </Card>
      </div>
    </div>
  );
};

export default RoomCards;
