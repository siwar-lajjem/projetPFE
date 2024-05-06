import React, {useEffect} from "react"
// import './home.css'
import video from '../../asser/Tunisia.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
// import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img from '../../asser/download.jpg'
import img2 from '../../asser/binzart.jpg'
import img3 from '../../asser/djerba.jpg'
import img4 from '../../asser/hammamet.jpg'
import img5 from '../../asser/kairouan.jpg'
import img6 from '../../asser/sousse.jpg'

// import './footer.css';
import videoV from'../../asser/video.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import 'aos/dist/aos.css';

const Data =[
    {
    id:1,
    imgSrc: img,
    destTitle: 'El Jem',
    location: 'Tunisie',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the epitome of romance , Bora Bora is one of the best travel destinations in the World. This place is know for its luxurious stays and adventurous activities'
    },
    {
      id:2,
      imgSrc: img2,
      destTitle: 'Bizerte',
      location: 'Tunisie',
      grade: 'CULTURAL RELAX',
      fees: '$600',
      description: 'Huayna Picchu is a mountain in Peru , rising over Machu Picchu, the so called lost city of Incas . Tis place is popular among tourists'
      },
      {
        id:3,
        imgSrc: img3,
        destTitle: 'Djerba',
        location: 'Tunisie',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Huayna Picchu is a mountain in Peru , rising over Machu Picchu, the so called lost city of Incas . Tis place is popular among tourists'
        },
        {
          id:4,
          imgSrc: img4,
          destTitle: 'Hammamet',
          location: 'Tunisie',
          grade: 'CULTURAL RELAX',
          fees: '$600',
          description: 'Huayna Picchu is a mountain in Peru , rising over Machu Picchu, the so called lost city of Incas . Tis place is popular among tourists'
          },
          {
            id:5,
            imgSrc: img5,
            destTitle: 'Kairouan',
            location: 'Tunise',
            grade: 'CULTURAL RELAX',
            fees: '$600',
            description: 'Huayna Picchu is a mountain in Peru , rising over Machu Picchu, the so called lost city of Incas . Tis place is popular among tourists'
            },
            {
              id:6,
              imgSrc: img6,
              destTitle: 'Sousse',
              location: 'Tunisie',
              grade: 'CULTURAL RELAX',
              fees: '$600',
              description: 'Huayna Picchu is a mountain in Peru , rising over Machu Picchu, the so called lost city of Incas . Tis place is popular among tourists'
              },
    ]

const FooterVisiteur = () => {
    //lets create a react book to add a scroll animation ...
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[] )

  return (
    <div>
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="Tunisia/mp4"></video>

            <div className="homeContent  container">
            <div className="textDiv">

                <span data-aos="fade-up" className="smallText">
                    our Packages
                </span>
                
                <h1 data-aos="fade-up" className="homeTitle">
                    Search your Holiday 
                </h1>
            </div>

            <div data-aos="fade-up" className="cardDiv grid">
                <div className="destinationInput">
                    <label htmlFor="city">Search your destination :</label>
                    <div className="input flex">
                        <input type="text" placeholder="Enter
                        name here..."/>
                        <GrLocation className="icon" />                         
                    </div>
                </div>

                <div className="dateInput">
                    <label htmlFor="date">Select your date :</label>
                    <div className="input flex">
                        <input type="date" />                        
                    </div>
                </div>

                <div className="priceInput">
                    <div className="label_total flex">
                        <label htmlFor="price">Max price :</label>
                        <h3 className="total">$5000</h3>
                    </div>
                    <div className="input flex">
                        <input type="range" max={5000} min={1000} ></input>
                    </div>
                </div>

                <div className="searchOptions flex">
                    <HiFilter className="icon" />
                        <span>MORE FILTERS</span>
                    
                </div>

            </div>

            <div data-aos="fade-up" className="homeFooterIcons flex">
                <div className="rightIcons">
                    <FiFacebook className="icon"/>
                    <AiOutlineInstagram  className="icon"/>
                    <SiTripadvisor className="icon"/>
                </div>
                
                <div className="leftIcons">
                <BsListTask className="icon"/> 
                <TbApps  className="icon"/>    
                </div>
            </div>
            </div> 
        </section>

    <section id="destination" className="main container section">

            
    <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
            Most visited destinations
        </h3>
    </div>

    <div className="secContent grid">


    {
        Data.map(({id,imgSrc,destTitle,location,grade,fees,description }) =>{ 
        return(
            <div key={id} data-aos="fade-up" className="singleDestination">
            <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
            </div>  


            <div className="cardInfo">
                <h4 className="destTiltle">{destTitle}</h4>
                <span className="continent flex">
                <HiOutlineLocationMarker className='icon' />
                <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                <div className="grade">
                    <span>{grade}<small>+1</small></span>
                </div>
                <div className="price">
                    <h5>{fees}</h5>
                </div>  
                </div>  


                <div className="desc">
                <p>{description}</p>
                </div>

                <button className="btn flex">
                DETAILS <HiOutlineClipboardCheck className="icon"/>
                </button>


            </div>  
            </div>  
        )
        })
    }

    </div>

    </section>

    <section className="home">
          <div className="overlay"></div>
          <video src={video} muted autoPlay loop type="Tunisia/mp4"></video>
   
          <div className="homeContent  container">
            <div className="textDiv">

                <span data-aos="fade-up" className="smallText">
                    our Packages
                </span>
                
                <h1 data-aos="fade-up" className="homeTitle">
                    Search your Holiday 
                </h1>
             </div>

             <div data-aos="fade-up" className="cardDiv grid">
                <div className="destinationInput">
                    <label htmlFor="city">Search your destination :</label>
                    <div className="input flex">
                        <input type="text" placeholder="Enter
                         name here..."/>
                        <GrLocation className="icon" />                         
                    </div>
                </div>

                <div className="dateInput">
                    <label htmlFor="date">Select your date :</label>
                    <div className="input flex">
                        <input type="date" />                        
                    </div>
                </div>

                <div className="priceInput">
                    <div className="label_total flex">
                        <label htmlFor="price">Max price :</label>
                        <h3 className="total">$5000</h3>
                    </div>
                    <div className="input flex">
                        <input type="range" max={5000} min={1000} ></input>
                    </div>
                </div>

                <div className="searchOptions flex">
                    <HiFilter className="icon" />
                        <span>MORE FILTERS</span>
                    
                </div>

             </div>

             <div data-aos="fade-up" className="homeFooterIcons flex">
                <div className="rightIcons">
                  <FiFacebook className="icon"/>
                  <AiOutlineInstagram  className="icon"/>
                  <SiTripadvisor className="icon"/>
                </div>
                
                <div className="leftIcons">
                <BsListTask className="icon"/> 
                <TbApps  className="icon"/>    
                </div>
             </div>
          </div> 
       </section>

       <section className="footer">
            <div className="videoDiv">
                <video src={videoV} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH </small>
                        <h2>Travel with us </h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex"  type="submit">SEND
                        <FiSend  className="icon"/>

                        </button>
                    

                        
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerInto flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                            <MdOutlineTravelExplore
                             className="icon" /> Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit.Ullam inventore eos fuga hic cum voluptatem minima , tempore non odio provident nobis ipsam at, doloremque sed cupiditate ipsum in,atque soluta?   
                        </div> 
                        <div data-aos="fade-up" className="footerSocials flex ">
                        <AiOutlineTwitter className="icon" />
                        <AiFillYoutube className="icon" />
                        <AiFillInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                        </div>

                            
                    </div>

                 
                    <div className="footerLinks grid">


                        {/* Group one*/}
                        <div data-aos="fade-up" 
                        data-aos-duration="3000"
                        className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY 
                            </span>
                            
                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              Services
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              Insurance
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              Agency
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              Tourism
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              Payment
                            </li>

                        </div>

                        {/* Group two*/}
                        <div data-aos="fade-up"
                         data-aos-duration="4000" 
                        className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            
                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              Bookings
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              Rentcars
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              HostelWorld
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              Trivago
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              TripAdvisor
                            </li>

                        </div>

                        {/* Group three*/}
                        <div data-aos="fade-up"
                         data-aos-duration="5000"
                         className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            
                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              London
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              California
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              Indonesia
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              Europe
                            </li>

                            <li className="footerList flex">
                               <FiChevronRight className="icon"/>
                              Oceania
                            </li>

                        </div>


                    </div>


                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME </small>
                        
                        <small>COPYRIGHTS RESERVED - ISRATECH 2024</small>
                    </div>


                </div>
            </div>
        </section>

    </div>
  );
};

export default FooterVisiteur;
