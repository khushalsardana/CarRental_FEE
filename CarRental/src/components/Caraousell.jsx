import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Caraousell = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/back_2.jpg"
          alt="First slide"
          style={{ objectFit: "cover", filter: "brightness(60%)" }}
        />
        <Carousel.Caption>
          <h1 className="fontzy">You need Thrill</h1>
          <p>Thrill that exhilarates you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/mclaren_slide.webp"
          alt="Second slide"
          style={{ objectFit: "cover", filter: "brightness(60%)", objectPosition: "50% 90%" }}
        />
        <Carousel.Caption>
          <h1 className="fontzy">You need Speed</h1>
          <p>Speed that Frightens you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/back_por.webp"
          alt="Third slide"
          style={{ objectFit: "cover", filter: "brightness(60%)", objectPosition: "50% 90%" }}
        />
        <Carousel.Caption>
          <h1 className="fontzy">You need Class</h1>
          <p>Class that sets you APART</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/lambo login.jpg"
          alt="Fourth slide"
          style={{ objectFit: "cover", filter: "brightness(60%)" }}
        />
        <Carousel.Caption>
          <h1 className="fontzy">You need Endurance</h1>
          <p>Endurance that always motivates you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/background2.png"
          alt="Fifth slide"
          style={{ objectFit: "cover", filter: "brightness(100%)", objectPosition: "50% 90%" }}
        />
        <Carousel.Caption>
          <h1 className="fontzy">You need Exoticarz</h1>
          <p>Cars driven with perfection</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Caraousell;
// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Caraousell = () =>{
//     return(
//         <>
        
//     <main className="caraousell">
//       <div
//         id="myCarousel"
//         className="carousel slide"
//         data-bs-ride="carousel"
//         data-pause="hover"
//       >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#myCarousel"
//             data-bs-slide-to={0}
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           />
//           <button
//             type="button"
//             data-bs-target="#myCarousel"
//             data-bs-slide-to={1}
//             aria-label="Slide 2"
//           />
//           <button
//             type="button"
//             data-bs-target="#myCarousel"
//             data-bs-slide-to={2}
//             aria-label="Slide 3"
//           />
//           <button
//             type="button"
//             data-bs-target="#myCarousel"
//             data-bs-slide-to={3}
//             aria-label="Slide 4"
//           />
//           <button
//             type="button"
//             data-bs-target="#myCarousel"
//             data-bs-slide-to={4}
//             aria-label="Slide 5"
//           />
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               className="d-block w-100"
//               src="images/back_2.jpg"
//               alt="First slide"
//               style={{ objectFit: "cover", filter: "brightness(60%)" }}
//             />
//             <div className="container">
//               <div className="carousel-caption">
//                 <h1 className="fontzy">You need Thrill</h1>
//                 <p>Thrill that exhilarates you</p>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src="images/mclaren_slide.webp"
//               alt="Second slide"
//               style={{
//                 objectFit: "cover",
//                 filter: "brightness(60%)",
//                 objectPosition: "50% 90%"
//               }}
//             />
//             <div className="container">
//               <div className="carousel-caption">
//                 <h1 className="fontzy">You need Speed</h1>
//                 <p>Speed that Frightens you </p>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src="images/back_por.webp"
//               alt="Third slide"
//               style={{
//                 objectFit: "cover",
//                 filter: "brightness(60%)",
//                 objectPosition: "50% 90%"
//               }}
//             />
//             <div className="container">
//               <div className="carousel-caption">
//                 <h1 className="fontzy">You need Class</h1>
//                 <p>Class that sets you APART</p>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src="images/lambo login.jpg"
//               alt="Fourth slide"
//               style={{ objectFit: "cover", filter: "brightness(60%)" }}
//             />
//             <div className="container">
//               <div className="carousel-caption">
//                 <h1 className="fontzy">You need Endurance</h1>
//                 <p>Endurance that always motivates you</p>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src="images/background2.png"
//               alt="Fifth slide"
//               style={{
//                 objectFit: "cover",
//                 filter: "brightness(100%)",
//                 objectPosition: "50% 90%"
//               }}
//             />
//             <div className="container">
//               <div className="carousel-caption">
//                 <h1 className="fontzy">You need Exoticarz</h1>
//                 <p>Cars driven with perfection</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#myCarousel"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true" />
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#myCarousel"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true" />
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </main>
//         </>
//     )
// }
// export default Caraousell;

