import React from 'react'
import "./Publications.css"

// import program_1 from "../../assets/program-1.png"
// import program_2 from "../../assets/program-2.png"
// import program_3 from "../../assets/program-3.png"

import program_1 from "../../assets/publication/abst1.png"
import program_2 from "../../assets/publication/abst2.png"
import program_6 from "../../assets/publication/abst6.png"


import program_icon_1 from "../../assets/publication/program-icon-1.png"
import program_icon_2 from "../../assets/publication/program-icon-2.png"
import program_icon_3 from "../../assets/publication/program-icon-3.png"


const Publications3 = () => {
  return (
    <div className='programs'>

        <div className="program">
            <a href="https://erepo.uef.fi/handle/123456789/20899" target='_blank'>
                <img src={program_6} alt="" />
                <div className='description'>
                    <h3>Master's Thesis <br /> Balqees Salami </h3>
                    <p>Effect of Methanol as a Model Internal Elctron Donor on the Stability of Magnesium Dichloride Surfaces in the Heterogeneous Ziegler-Natta Catalyst System: a DFT Study</p>

                </div>
                <div className="caption">
                    {/* <img src={program_icon_1} alt="" /> */}
                    <p>Master's Degree Thesis</p>
                </div>
            </a>
        </div>

        <div className="program">
            <a href="https://erepo.uef.fi/handle/123456789/23029" target='_blank'>
                <img src={program_6} alt="" />
                <div className='description'>
                    <h3>Master's Thesis <br/> Anand Chekkottu Parambil</h3>
                    <p>Two Coordinate Coinage Metal Complexes for OLEDs: Effects of Substitution on the Amide Ligand</p>
                </div>
                <div className="caption">
                    {/* <img src={program_icon_2} alt="" /> */}
                    <p>Master's Degree Thesis</p>
                </div>
            </a>
        </div>


        <div className="program">
            <a href="https://erepo.uef.fi/handle/123456789/23163" target='_blank'>
                <img src={program_6} alt="" />
                <div className='description'>
                    <h3>Master's Thesis <br />Yang Li</h3>

                    <p>Interaction Between Triethylaluminum and Titanium Tetrachloride on Magnesium Dichloride Clusters</p>
                </div>
                <div className="caption">
                    {/* <img src={program_icon_2} alt="" /> */}
                    <p>Master's Degree Thesis</p>
                </div>
            </a>
        </div>

        <div className="program">
            <a href="https://erepo.uef.fi/handle/123456789/22872" target='_blank'>
                <img src={program_6} alt="" />
                <div className='description'>
                    <h3>Master's Thesis <br />Aku Lempelto</h3>
                    <p>OLED-Laitteet ja Niissä Käytettävät Karbeeni-Metalli-Amidi-Yhdisteet</p>
                </div>
                <div className="caption">
                    {/* <img src={program_icon_3} alt="" /> */}
                    <p>Master's Degree Thesis</p>
                </div>
            </a>
        </div>

    </div>
  )
}

export default Publications3






