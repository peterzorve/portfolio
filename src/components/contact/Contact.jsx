// https://web3forms.com/
import React, {useState} from 'react'
import "./Contact.css"
import msg_icon      from "../../assets/contact/msg-icon.png"
import mail_icon     from "../../assets/contact/mail-icon.png"
import phone_icon    from "../../assets/contact/phone-icon.png"
import location_icon from "../../assets/contact/location-icon.png"
import white_arrow   from "../../assets/contact/white-arrow.png"

const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        

        // formData.append("access_key", "cf8c6136-a1bb-49ff-9618-c99eace4e5b7");
        formData.append("access_key", "45b7e91c-948f-442e-8fda-2749666ca42f");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        setResult(data.message);
        }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send me a message <img src={msg_icon} alt="" /> </h3>
            <p>Leave me a message. I will reply as soon as possible</p>
            <ul>
                <li> <img src={mail_icon} alt="" />peter.zorve@eduzolve.com</li>
                <li> <img src={phone_icon} alt="" />+358417289032</li>
                <li> <img src={location_icon} alt="" />Mikkeli <br />Finland </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Email address</label>
                <input type="text" name='email' placeholder='Enter your email address' required/>
                {/* <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/> */}
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
        
    </div>
  )
}

export default Contact

