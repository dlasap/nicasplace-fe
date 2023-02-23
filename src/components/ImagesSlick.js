import React, { useState } from "react";
import Slider from "react-slick";
import "./styles/ImagesSlick.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const item =
  "https://scontent.fmnl8-2.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHTJRAuPlaoc0omiABf61qXTstmPSZcs0BOy2Y9JlyzQFaCiCuNzqvdGFLiojFoK1siBc7pZSH-DVqQ5GzBP5GY&_nc_ohc=CyvDp-iMwt8AX_pkK9L&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDSQdSdxNBmyrBMBnC71hSIG48I5AYDCdxe7XKPfNKP4Q&oe=641E58D5";

export default function SyncSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div>
      <Slider className="SliderSection1" asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        <div>
          <h3>
            {" "}
            <img src={item} width="750px" height="auto" alt={item.title} loading="lazy" />
          </h3>
        </div>

        <div>
          <h3>
            {" "}
            <img
              src={
                "https://scontent.fceb2-2.fna.fbcdn.net/v/t31.18172-8/28616980_1906900276050446_2382300686752928427_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEWp6Lhnrp1w1t1_6iJk3cvpsaONHLOZmymxo40cs5mbPwRqE5NadhqYgbi_8xWkb6vDicnw2jv4BNdYygbKZ78&_nc_ohc=3CuHr2iWy1IAX8aApur&_nc_ht=scontent.fceb2-2.fna&oh=00_AfDnvAIbS-sJdrgqA16epeTCEPUY3pwrUNaayeJ1_GSrng&oe=641E476B"
              }
              width="750px"
              height="auto"
              alt={item.title}
              loading="lazy"
            />
          </h3>
        </div>

        <div>
          <h3>
            {" "}
            <img
              src={
                "https://scontent.fceb2-2.fna.fbcdn.net/v/t31.18172-8/28616980_1906900276050446_2382300686752928427_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEWp6Lhnrp1w1t1_6iJk3cvpsaONHLOZmymxo40cs5mbPwRqE5NadhqYgbi_8xWkb6vDicnw2jv4BNdYygbKZ78&_nc_ohc=3CuHr2iWy1IAX8aApur&_nc_ht=scontent.fceb2-2.fna&oh=00_AfDnvAIbS-sJdrgqA16epeTCEPUY3pwrUNaayeJ1_GSrng&oe=641E476B"
              }
              width="750px"
              height="auto"
              alt={item.title}
              loading="lazy"
            />
          </h3>
        </div>
      </Slider>
      <Slider
        className="SliderSection2"
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={2}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <h3>
            {" "}
            <img src={item} width="200px" height="auto" alt={item.title} loading="lazy" />
          </h3>
        </div>
        <div>
          <h3>
            {" "}
            <img
              src={
                "https://scontent.fceb2-2.fna.fbcdn.net/v/t31.18172-8/28616980_1906900276050446_2382300686752928427_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEWp6Lhnrp1w1t1_6iJk3cvpsaONHLOZmymxo40cs5mbPwRqE5NadhqYgbi_8xWkb6vDicnw2jv4BNdYygbKZ78&_nc_ohc=3CuHr2iWy1IAX8aApur&_nc_ht=scontent.fceb2-2.fna&oh=00_AfDnvAIbS-sJdrgqA16epeTCEPUY3pwrUNaayeJ1_GSrng&oe=641E476B"
              }
              width="200px"
              height="auto"
              alt={"lel"}
              loading="lazy"
            />
          </h3>
        </div>
        <div>
          <h3>
            {" "}
            <img
              src={
                "https://scontent.fceb2-2.fna.fbcdn.net/v/t31.18172-8/28616980_1906900276050446_2382300686752928427_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEWp6Lhnrp1w1t1_6iJk3cvpsaONHLOZmymxo40cs5mbPwRqE5NadhqYgbi_8xWkb6vDicnw2jv4BNdYygbKZ78&_nc_ohc=3CuHr2iWy1IAX8aApur&_nc_ht=scontent.fceb2-2.fna&oh=00_AfDnvAIbS-sJdrgqA16epeTCEPUY3pwrUNaayeJ1_GSrng&oe=641E476B"
              }
              width="200px"
              height="auto"
              alt={item.title}
              loading="lazy"
            />
          </h3>
        </div>
      </Slider>
    </div>
  );
}
//   class ImageSlick extends Component {
//   constructor(props) {
//     super(props);
//     state = {
//       nav1: null,
//       nav2: null,
//     };
//   }

//   componentDidMount() {
//     setState({
//       nav1: slider1,
//       nav2: slider2,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Slider asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
//           <div>
//             <h3>
//               {" "}
//               <img src={item} width="750px" height="auto" alt={item.title} loading="lazy" />
//             </h3>
//           </div>
//           <div>
//             <h3>
//               {" "}
//               <img src={item} width="750px" height="auto" alt={item.title} loading="lazy" />
//             </h3>
//           </div>
//           <div>
//             <h3>
//               {" "}
//               <img src={item} width="750px" height="auto" alt={item.title} loading="lazy" />
//             </h3>
//           </div>
//           <div>
//             <h3>
//               {" "}
//               <img src={item} width="750px" height="auto" alt={item.title} loading="lazy" />
//             </h3>
//           </div>
//           <div>
//             <h3>
//               {" "}
//               <img src={item} width="750px" height="auto" alt={item.title} loading="lazy" />
//             </h3>
//           </div>
//           <div>
//             <h3>
//               {" "}
//               <img src={item} width="750px" height="auto" alt={item.title} loading="lazy" />
//             </h3>
//           </div>
//         </Slider>

//         <h4>Second Slider</h4>
//         <Slider asNavFor={nav1} ref={(slider) => (slider2 = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true}>
//           <div>
//             <h3>
//               {" "}
//               <img src={item} width="200px" height="auto" alt={item.title} loading="lazy" />
//             </h3>
//           </div>
//           <div>
//             <h3>
//               {" "}
//               <img src={item} width="200px" height="auto" alt={item.title} loading="lazy" />
//             </h3>
//           </div>
//           <div>
//             <h3>
//               {" "}
//               <img src={item} width="200px" height="auto" alt={item.title} loading="lazy" />
//             </h3>
//           </div>
//           <div>
//             <h3>
//               {" "}
//               <img src={item} width="200px" height="auto" alt={item.title} loading="lazy" />
//             </h3>
//           </div>
//           <div>
//             <h3>
//               {" "}
//               <img src={item} width="200px" height="auto" alt={item.title} loading="lazy" />
//             </h3>
//           </div>
//           <div>
//             <h3>
//               {" "}
//               <img src={item} width="200px" height="auto" alt={item.title} loading="lazy" />
//             </h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
