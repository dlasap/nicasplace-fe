import react, { useState } from "react";
import FsLightbox from "fslightbox-react";

const ImagesSlider = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Open the lightbox.</button>
      <FsLightbox
        exitFullscreenOnClose={true}
        toggler={toggler}
        type="image"
        sources={[
          //   "/Images/Example.jpg",
          "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5",
          "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277660640_2118902561605687_2668190340410279320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHvOX9YVrDk8yRvVRx0pUm3JRXsiZjARJklFeyJmMBEmSByJRcDv-azCY3lYTZPz8ong00m7tPraZguzV7EIGAY&_nc_ohc=aKHtW7hSttwAX9HOf-6&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC2fV6zol-bd0d3FfxJAl95JY3OwAwwK1XQBFyukaAXNw&oe=63FB3487",
        ]}
      />
    </>
  );
};

export default ImagesSlider;
