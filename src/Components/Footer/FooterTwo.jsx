import React from "react";
import "../../Components/Footer/Navgations/Nav.css";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillApple,
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

export const FooterTwo = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-content">
          <h3
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "2em",
            }}
          >
             <b><em>ExalTech</em> Software</b> 
          </h3>
          <p>ExalTech Software is a registered company under ExalTech Tech Pvt. Ltd.</p>
          <div className="sub">
            <div>
              <b>Company</b>
              <p>About</p>
              <p>Blog</p>
            </div>
            
            <div>
              <b>For Business</b>
              <p>Shops</p>
              <p>Business</p>
            </div>
            <div>
              <b>For You</b>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </div>
            <div>
              <b>Social links</b>
              <div>
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
              </div>
              <div>
                <AiFillApple />
                <FaGooglePlay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
