


import React, { useState } from 'react';
import './Gallery.css';
import Title from '../Title/Title';
import white_arrow from '../../assets/gallery/white-arrow.png';
import gallery_1 from '../../assets/gallery/gallery-1.png';
import gallery_2 from '../../assets/gallery/gallery-2.png';
import gallery_3 from '../../assets/gallery/gallery-3.png';
import gallery_4 from '../../assets/gallery/gallery-4.png';

import eduzolve_01 from '../../assets/gallery/eduzolve-01.png';
import eduzolve_02 from '../../assets/gallery/eduzolve-02.png';
import eduzolve_03 from '../../assets/gallery/eduzolve-03.png';
import eduzolve_04 from '../../assets/gallery/eduzolve-04.png';
import eduzolve_05 from '../../assets/gallery/eduzolve-05.png';
import eduzolve_06 from '../../assets/gallery/eduzolve-06.png';

import eduzolve_11 from '../../assets/gallery/eduzolve-11.png';
import eduzolve_12 from '../../assets/gallery/eduzolve-12.png';
import eduzolve_13 from '../../assets/gallery/eduzolve-13.png';
import eduzolve_14 from '../../assets/gallery/eduzolve-14.png';

import eduzolve_21 from '../../assets/gallery/eduzolve-21.png';
import eduzolve_22 from '../../assets/gallery/eduzolve-22.png';
import eduzolve_23 from '../../assets/gallery/eduzolve-23.png';
import eduzolve_24 from '../../assets/gallery/eduzolve-24.png';


const Gallery = () => {
  const [seeMore, setSeeMore] = useState(false);
  const buttonTitle = seeMore ? "Show less" : "Show more";

  return (
    <div className=''>
      <div className="title">
        <Title title={"Photos of EduZolve's Event"}/>
        {/* <h3 className='title-text'>Photos of EduZolve's Event</h3> */}
      </div>
      <div className="gallery">
        <figure>
          <img src={eduzolve_01} alt="Description for Image 1" />
          <figcaption>EduZolve @ Tahko Ski Lift Pitch</figcaption>
        </figure>
        <figure>
          <img src={eduzolve_02} alt="Description for Image 2" />
          <figcaption>EduZolve meets students from Ghana</figcaption>
        </figure>
        <figure>
          <img src={eduzolve_03} alt="Description for Image 3" />
          <figcaption>EDuZolve @ EDvance Hub Event</figcaption>
        </figure>
        <figure>
          <img src={eduzolve_05} alt="Description for Image 4" />
          <figcaption>EduZolve meets students from Nigeria</figcaption>
        </figure>
      </div>

      {seeMore && (
        <>
          <div className="gallery">
            <figure>
              <img src={eduzolve_11} alt="Description for Image 5" />
              <figcaption>EDuZolve @ EDvance Hub Event</figcaption>
            </figure>
            <figure>
              <img src={eduzolve_12} alt="Description for Image 6" />
              <figcaption>EduZolve meets UEF alumini</figcaption>
            </figure>
            <figure>
              <img src={eduzolve_13} alt="Description for Image 7" />
              <figcaption>EduZolve @ Tahko Ski Lift Event</figcaption>
            </figure>
            <figure>
              <img src={eduzolve_14} alt="Description for Image 8" />
              <figcaption>Tahko Ski Lift</figcaption>
            </figure>
          </div>
          <div className="gallery">
            <figure>
              <img src={eduzolve_21} alt="Description for Image 9" />
              <figcaption>EDvance HUB Events</figcaption>
            </figure>
            <figure>
              <img src={eduzolve_22} alt="Description for Image 10" />
              <figcaption>Speakers at EDvance HUB Event - Vol 1</figcaption>
            </figure>
            <figure>
              <img src={eduzolve_23} alt="Description for Image 11" />
              <figcaption>Amanze Egekeze</figcaption>
            </figure>
            <figure>
              <img src={eduzolve_24} alt="Description for Image 12" />
              <figcaption>Amanze Egekeze Speaker at EDvance Hub</figcaption>
            </figure>
          </div>
        </>
      )}

      <button onClick={() => { setSeeMore(!seeMore) }} className='btn dark-btn'>
        {buttonTitle}
        <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Gallery;
