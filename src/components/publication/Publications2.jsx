import React from 'react'
import "./Publications.css"

// import program_1 from "../../assets/program-1.png"
// import program_2 from "../../assets/program-2.png"
// import program_3 from "../../assets/program-3.png"

import program_1 from "../../assets/publication/abst1.png"
import program_2 from "../../assets/publication/abst2.png"
import program_3 from "../../assets/publication/abst3.png"
import program_4 from "../../assets/publication/abst4.png"
import program_5 from "../../assets/publication/abst5.png"
import program_6 from "../../assets/publication/abst6.png"


import program_icon_1 from "../../assets/publication/program-icon-1.png"
import program_icon_2 from "../../assets/publication/program-icon-2.png"
import program_icon_3 from "../../assets/publication/program-icon-3.png"


const Publications2 = () => {
  return (
    <div className='programs'>

        <div className="program">
            <a href="https://erepo.uef.fi/handle/123456789/23894" target='_blank'>
                <img src={program_4} alt="" />
                <div className='description'>
                    <h2>Ph.D Dissertation</h2>
                    <h4>Structures and Reactions of TiCl<sub>4</sub>-adsorbed MgCl<sub>2</sub> Crystallites in Ziegler–Natta Olefin Polymerization</h4>
                    <h2>Abstract</h2>
                    <p>Ziegler-Natta catalysis remains the leading technique for olefin polymerization. The state-of-the-art ZN catalyst comprises magnesium  ... </p>
                </div>
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <p>Doctoral Dessertation</p>
                </div>
            </a>
        </div>

        <div className="program">
            <a href="https://erepo.uef.fi/handle/123456789/18912" target='_blank'>
                <img src={program_6} alt="" />
                <div className='description'>
                    <h2>MSc Thesis</h2>
                    <h4>DFT Study of the Adsorption of Titanium Tetrachloride on Magnesium Dichloride Surfaces in the Heterogeneous Ziegler-Natta Catalyst System</h4>
                    <h2>Abstract</h2>
                    <p>Magnesium dichloride and titanium tetrachloride are key components of Ziegler–Natta polymerization catalysts. We report a systematic computational study at M06-2X/def-TZVP level, thus accounting for dispersion, ... </p>
                </div>
                <div className="caption">
                    <img src={program_icon_2} alt="" />
                    <p>Masters Thesis</p>
                </div>
            </a>
        </div>

        <div className="program">
                <img src={program_5} alt="" />
                <div className='description'>
                    <h2>BSc. Thesis</h2>
                    <h4>Colometric Determination of Carbohydrates as a Measure of Glycemic Index in Type II Diabetes</h4>
                    <h2>Abstract</h2>
                    <p>Carbohydrate is one of the essential food consumed by Ghanaians. Examples of foodstuff
containing carbohydrate are; cassava, yam, cocoyam, oat, millet, etc. Some of these
foodstuffs contain substantial amount of glucose which has a higher glycemic index and 
threatens Ghanaians of the type II diabetes. ... </p>
                </div>
                <div className="caption">
                <img src={program_icon_3} alt="" />
                    <p>Bachelor's Thesis</p>
                </div>
        </div>

    </div>
  )
}

export default Publications2






