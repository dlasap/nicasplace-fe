import react, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ImagesSlider from "./ImagesSlider";

import ImageList from "./ImageList";

import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageGallery from "./ImageGallery";

import "./styles/ImageGallery.css";

// const lightbox = new PhotoSwipeLightbox({
//   gallery: "#my-gallery",
//   children: "a",
//   pswpModule: () => import("photoswipe"),
// });

// lightbox.init();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RoomModal = ({ roomInfo, openRoom, setOpenRoom }) => {
  const { name, body, images, image } = roomInfo;

  const handleClose = () => setOpenRoom(false);
  return (
    <>
      <Modal open={openRoom} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box className="box" sx={style}>
          <div className="gallery">
            <ImageGallery images={[...images, image]} />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rates
          </Typography>
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
