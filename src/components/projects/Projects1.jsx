import React, {useRef} from 'react'
import "./Projects1.css"
import next_icon from "../../assets/projects/next-icon.png"
import back_icon from "../../assets/projects/back-icon.png"

import user_1 from "../../assets/projects/user-1.png"
import user_2 from "../../assets/projects/user-2.png"
import user_3 from "../../assets/projects/user-3.png"
import user_4 from "../../assets/projects/user-4.png"

const Projects1 = () => {

    const slider = useRef();
    let tx = 0 

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} /> 
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Peter Zorve 1</h3>
                                <span>Mikkeli, Finland</span>
                            </div>
                        </div>
                        <p>
                            Atoms are made of three kinds of subatomic particles. These are protons, neutrons, and electrons. Protons and neutrons have much more mass. These are in the middle of the atom, called the nucleus. Lightweight electrons move quickly around them. The electromagnetic force holds the nucleus and electrons together.
                            Atoms with the same number of protons belong to the same chemical element. Examples of elements are carbon and gold. Atoms with the same number of protons, but different numbers of neutrons, are called isotopes. Usually an atom has the same number of electrons as protons. If an atom has more or less electrons than protons, it is called an ion, and has an electric charge. 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Peter Zorve 2</h3>
                                <span>Mikkeli, Finland</span>
                            </div>
                        </div>
                        <p>
                            Atoms are made of three kinds of subatomic particles. These are protons, neutrons, and electrons. Protons and neutrons have much more mass. These are in the middle of the atom, called the nucleus. Lightweight electrons move quickly around them. The electromagnetic force holds the nucleus and electrons together.
                            Atoms with the same number of protons belong to the same chemical element. Examples of elements are carbon and gold. Atoms with the same number of protons, but different numbers of neutrons, are called isotopes. Usually an atom has the same number of electrons as protons. If an atom has more or less electrons than protons, it is called an ion, and has an electric charge. 
                        </p>
                    </div>
                </li>                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Peter Zorve 3</h3>
                                <span>Mikkeli, Finland</span>
                            </div>
                        </div>
                        <p>
                            Atoms are made of three kinds of subatomic particles. These are protons, neutrons, and electrons. Protons and neutrons have much more mass. These are in the middle of the atom, called the nucleus. Lightweight electrons move quickly around them. The electromagnetic force holds the nucleus and electrons together.
                            Atoms with the same number of protons belong to the same chemical element. Examples of elements are carbon and gold. Atoms with the same number of protons, but different numbers of neutrons, are called isotopes. Usually an atom has the same number of electrons as protons. If an atom has more or less electrons than protons, it is called an ion, and has an electric charge. 
                        </p>
                    </div>
                </li>                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Peter Zorve 4</h3>
                                <span>Mikkeli, Finland</span>
                            </div>
                        </div>
                        <p>
                            Atoms are made of three kinds of subatomic particles. These are protons, neutrons, and electrons. Protons and neutrons have much more mass. These are in the middle of the atom, called the nucleus. Lightweight electrons move quickly around them. The electromagnetic force holds the nucleus and electrons together.
                            Atoms with the same number of protons belong to the same chemical element. Examples of elements are carbon and gold. Atoms with the same number of protons, but different numbers of neutrons, are called isotopes. Usually an atom has the same number of electrons as protons. If an atom has more or less electrons than protons, it is called an ion, and has an electric charge. 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Projects1


