import react from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardBody from "./CardBody";

import "./styles/RoomCard.css";
import RoomModal from "./RoomModal";

const dummy_data = [
  {
    //later
  },
];
const RoomCards = () => {
  return (
    <div>
      <h1 className="RoomCardsHeader">Rooms at Nica's Place</h1>
      <RoomModal
        roomInfo={{
          name: "12A",
          body: "No Room for No ManKind.",
        }}
      />
      <div className="RoomCards">
        <Card className="Card" sx={{ maxWidth: 400 }}>
          <CardBody
            imageInfo={{
              sx: { height: 300 },
              title: "room 1",
              image:
                "https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.6435-9/140583070_4987874644619645_8934521985317859050_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHxaIwWYSfg9sFa7vGc9X-bRorqSPFaNsNGiupI8Vo2w5TGifZ0PsrpbFfYZOfw4Ta5PUB1d6EARCVS7bVjAS9X&_nc_ohc=cGxsKSjGQB4AX-9OyYV&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfBpYXaFTV0_q4qNMtMswPYvM5K1nM3NzjmHQRQS5k2diw&oe=641C4BDA",
            }}
            contentInfo={{
              contentTitle: "12A",
              contentBody: "Nica's first ever room.",
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
              image:
                "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/122039125_4594392657301181_2914309188669696783_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFAElxBhNXHhRxHEolGlZbb_skNNN5T88T-yQ003lPzxLK1Qc3io-QE9_418qzdVxeyQNdCNUuwsU2Sbl8E3e85&_nc_ohc=MU3fHp7nxG0AX8eYKkb&_nc_ht=scontent-hkt1-1.xx&oh=00_AfBGZIIm-iSacsOaRncWR5RRRmVT4JCOyxTMA-mN88IUuQ&oe=641C2C8E",
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
