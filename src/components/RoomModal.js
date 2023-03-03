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
  border: "5px solid white",
  boxShadow: 24,
  p: "4px 0px 0px 0px",
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
          <div className="ModalContent">
            <div id="content-name" variant="h4" component="h2">
              <h3 id="room">Room</h3>
              {name}
            </div>
            <div id="content-description" sx={{ mt: 2 }}>
              <h3 id="desc">Description</h3>
              {body}
            </div>
            <div id="content-rates" variant="h6" component="h2">
              <h3 id="rates">Rates</h3>
              <ul className="ulist">
                <li>Weekdays: ₱ 1,500/night</li>
                <li>Weekends: ₱ 1,800/night</li>
              </ul>
            </div>
          </div>
        </Box>
      </Modal>{" "}
    </>
  );
};

export default RoomModal;
