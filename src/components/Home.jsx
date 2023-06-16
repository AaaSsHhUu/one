import React from "react";
import vg from "../assets/2.webp";

export default function Home() {
  return (
    <>
      <div className="home">
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
    </>
  );
}
