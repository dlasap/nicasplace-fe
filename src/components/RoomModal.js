import react, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ImagesSlider from "./ImagesSlider";
import ImagesSlick from "./ImagesSlick";
import ImagesLighter from "./ImagesSlick";

import ImageList from "./ImageList";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "60vw",
  maxWidth: "75vw",
  minHeight: "30vw",
  maxHeight: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RoomModal = ({ roomInfo, openRoom, setOpenRoom }) => {
  const { name, body, images } = roomInfo;
  const handleClose = () => setOpenRoom(false);
  return (
    <>
      <Modal open={openRoom} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          {/* <ImagesSlick images={images} /> */}
          {/* <ImagesSlider images={images} /> */}
          <ImageList images={images} />
          {/* <ImagesLighter /> */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {body}
          </Typography>
        </Box>
      </Modal>{" "}
    </>
  );
};

export default RoomModal;
