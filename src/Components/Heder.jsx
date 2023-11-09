import React from "react";
import Beltie from "../image/Beltie.png";
import { Link } from "react-scroll";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
const Heder = () => {
  const slderLeft = () =>{
    var slider = document.getElementById('slider');
    slider.scrollLeft =slider.scrollLeft-500;
  }
  const slderRoght = () =>{
    var slider = document.getElementById('slider');
    slider.scrollLeft =slider.scrollLeft+500;
  }

  return (
    <div className="swapper">
      <div className="narbar">
        <div className="case_beetie">
          <div className="Box-img">
            <img src={Beltie} />
          </div>
          <div className="text_box">
            <h1 className="font-family:battambbang">
              សកលវិទ្យាល័យប៊ែលធី​ អន្តរជាតិ
            </h1>
            <h3>BELTI INTERNATIONAL UNIVERSITY</h3>
            <p>Quality ,Efficeincy, Excellece, Morality, Virue</p>
          </div>
        </div>
        <div className="menu_box">
          <i onClick={slderLeft}>
            
            <AiOutlineLeft  size={25} />
          </i>
          <ul id="slider" className="box_menu">
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Aout University
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Main Programs
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                12 Faculty Ties
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Recognition
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Structure and Staff
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                University FAcilities
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Admission Transfer & Fee
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Feild Trip
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Ducument
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                List of Graduate Student{" "}
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Lession Power Point Slides
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Extra-Curriecular Courses
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                University Map
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                BELTIE News / Events
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Job Announcement
              </Link>
            </li>
            <li>
              <Link
                to='"/'
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Special Video
              </Link>
            </li>
          </ul>
          <i onClick={slderRoght}>
            
            <AiOutlineRight size={25} />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Heder;
