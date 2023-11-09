import React from "react";
import Beltie from "../image/Beltie.png";
import Youtube from "../image/Youtube.png";
import Khmer from "../image/khmer logo.png";
import under from "../image/under.jpg";
import image2 from "../image/image3.jpg";
import image3 from "../image/master.jpg";
import image4 from "../image/PhD-3-s.jpg";
import image5 from "../image/graducation-s.jpg";
import image6 from "../image/program.jpg";
import image7 from "../image/bachelor.jpg";
import image8 from "../image/Masterrrr.jpg";
import image9 from "../image/Doctor.jpg";
import image10 from "../image/Campus1.jpg";
import image11 from "../image/campus2.jpg";
import image12 from "../image/form12.jpg";
import image13 from "../image/for.jpg";
//image right:
import right1 from "../image/imageleft1.png";
import right2 from "../image/Hot new.png";
import right3 from "../image/right3.png";
import right4 from "../image/right4.png";
import right4a from "../image/right4a.png";
import right4b from "../image/right4b.png";
import right5 from "../image/right5.png";
import right6 from "../image/right6.png";
import right7 from "../image/right7.png";
import right8 from "../image/right8.png";
import right9 from "../image/right9.png";
import right10 from "../image/right10.png";
import right11 from "../image/right11.png";
import right12 from "../image/right12.png";
import right13 from "../image/right13.png";
import right14 from "../image/right14.png";
import right15 from "../image/right15.png";
import right16 from "../image/right16.png";
import right17 from "../image/right17.png";
import right18 from "../image/right18.png";
import right19 from "../image/right19.png";
import right20 from "../image/right20.png";
import right21 from "../image/right21.png";
import right22 from "../image/right22.png";
import right23 from "../image/right23.png";
import right24 from "../image/right24.png";
import right25 from "../image/right25.png";
import right26 from "../image/right26.png";
import right27 from "../image/right27.png";
import right28 from "../image/right28.png";
import right29 from "../image/right29.png";
import right30 from "../image/right30.png";
import right31 from "../image/right31.png";
import right32 from "../image/right32.png";
import right33 from "../image/right33.png";
import right34 from "../image/right34.png";
import right35 from "../image/right35.png";
import right36 from "../image/right36.png";
import right37 from "../image/right37.png";
import right38 from "../image/right38.png";
import right39 from "../image/right39.png";
import right40 from "../image/right40.png";
import right41 from "../image/right41.png";
import right42 from "../image/right42.png";
import right43 from "../image/right43.png";
import right44 from "../image/right44.png";
import right45 from "../image/right45.png";
import right46 from "../image/right46.png";
import right47 from "../image/right47.png";
import imageEven from "../image/image event.png";
import imageEven2 from "../image/imageEvent2.png";
import imageEven3 from "../image/imageEvent3.png";
import imageEven4 from "../image/imageEvent4.png";
import imageEven5 from "../image/imageEvent5.png";
import imageEven6 from "../image/imageEvent6.png";
// import right7 from "../image/right7.png";
import postgraduate from "../image/postgraduate.jpg";
import { Link } from "react-scroll";
import English from "../image/english.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// Import Swiper React components
const Founder = () => {
  const [text] = useTypewriter({
    words: [
      "The Future of Global Leaders",
      "The Future of Global Leaders",
      "The Future of Global Leaders",
      "The Future of Global Leaders",
    ],
    loop: 500,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div className="all_fouderinformation">
      <div className="fouder_case">
        <div className="fouder_runtext">
          <span>{text}</span>
          <Cursor cursorColor="red" />
        </div>
        <div className="fouder_sroll">
          <div className="fouder_left">
            <div className="icon_logo">
              <Link to="/" className="Image">
                <img src={Beltie} />
                Facebook
              </Link>
              <Link to="#" className="Image">
                <img src={Youtube} />
                វីដេអូឯកសា <br />​ ប៊ែលធី​គ្រុប
              </Link>
            </div>
            <div className="case_imformetion">
              <Link to='"/' className="link_name">
                <img src={under} />
              </Link>
              <Link to="#" className="link_name">
                <img src={postgraduate} />
              </Link>
              <Link to="#" className="link_name">
                <img src={image2} />
              </Link>
              <Link to="#" className="link_name">
                <img src={image3} />
              </Link>
              <Link to="#" className="link_name">
                <img src={image4} />
              </Link>
              <Link to="#" className="link_name">
                <img src={image5} />
              </Link>
              <Link to="#" className="link_name">
                <img src={image6} />
              </Link>
              <div className="boc_flex">
                <Link to="#" className="image">
                  <img src={image7} />
                </Link>
                <Link to="#" className="image">
                  <img src={image8} />
                </Link>
                <Link to="#" className="image">
                  <img src={image9} />
                </Link>
              </div>
              <Link to="#" className="link_name">
                <img src={image10} />
              </Link>
              <Link to="#" className="link_name">
                <img src={image11} />
              </Link>
              <Link to="#" className="link_name">
                <img src={image12} />
              </Link>
              <Link to="#" className="link_name">
                <img src={image13} />
              </Link>
            </div>
            <div className="Special_Events">
              <div className="text">Special Events</div>
              <div className="big_case">
                <div className="paragraphandimage">
                  <div className="photo">
                    <img src={imageEven}/>
                  </div>
                  <div className="paragraph">
                    <p>27/10/2023:Fun and Blessing Day for BELTEI Grade 12 Students</p>
                  </div>
                </div>
                <div className="paragraphandimage">
                  <div className="photo">
                    <img src={imageEven2}/>
                  </div>
                  <div className="paragraph">
                    <p>07/09/2023:Congratulations BELTEI IU Debate Program for Season 1 Final Round 2023</p>
                  </div>
                </div>
                <div className="paragraphandimage">
                  <div className="photo">
                    <img src={imageEven3}/>
                  </div>
                  <div className="paragraph">
                    <p>30/08/2023:Congratulations the 9th Public Speaking Contest Program BELTEI International University</p>
                  </div>
                </div>
                <div className="paragraphandimage">
                  <div className="photo">
                    <img src={imageEven4}/>
                  </div>
                  <div className="paragraph">
                    <p>08/08/2023:Congratulations on the Experience Sharing Program for 571 students</p>
                  </div>
                </div>
                <div className="paragraphandimage">
                  <div className="photo">
                    <img src={imageEven5}/>
                  </div>
                  <div className="paragraph">
                    <p>08/08/2023:Congratulations on the Experience Sharing Program for 571 students</p>
                  </div>
                </div>
                <div className="paragraphandimage">
                  <div className="photo">
                    <img src={imageEven6}/>
                  </div>
                  <div className="paragraph">
                    <p>08/08/2023:Congratulations on the Experience Sharing Program for 571 students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fouder_right">
            <div className="lenguage">
              <span className="Image">
                <img src={Khmer} />
                ភាសាខ្មែរ
              </span>
              <span className="Image">
                <img src={English} />
                ENGLISH
              </span>
            </div>
            <div className="right_image">
              <Link to="#" className="link_name">
                <img src={right1} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right2} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right3} />
              </Link>
              <div className="right_boxs">
                <Link to="#" className="photo">
                  <img src={right4} />
                </Link>
                <Link to="#" className="photo">
                  <img src={right4a} />
                </Link>
                <Link to="#" className="photo">
                  <img src={right4b} />
                </Link>
              </div>
              <Link to="#" className="link_name">
                <img src={right6} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right5} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right7} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right8} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right9} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right10} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right11} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right12} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right13} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right14} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right15} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right16} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right17} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right18} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right19} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right20} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right21} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right22} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right23} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right24} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right25} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right26} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right27} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right28} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right29} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right30} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right31} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right32} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right33} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right34} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right35} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right36} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right37} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right38} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right39} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right40} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right41} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right42} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right43} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right44} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right45} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right46} />
              </Link>
              <Link to="#" className="link_name">
                <img src={right47} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
