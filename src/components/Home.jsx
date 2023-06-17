import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to your Programming problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="vector-graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increse the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere deserunt sint sapiente voluptate dolores. Natus dolore est debitis, suscipit laborum architecto quisquam sed deserunt voluptatibus fuga error omnis ad neque, porro dolor, nulla quia animi obcaecati repellendus! Ad cupiditate sed illo, accusantium illum non nisi necessitatibus deserunt dolores obcaecati!</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{animationDelay: "0.3s"}}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{animationDelay: "0.5s"}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{animationDelay: "0.7s"}}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{animationDelay: "1s"}}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>

      </div>
    </>
  );
}
