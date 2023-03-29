import React from "react";
import Banner from "../Images/banner.jpg";
import Description from "./Description";
import EventBanner from "./EventBanner";
import EventDetails from "./EventDetails";
import IntroText from "./IntroText";
import Register from "./Register";
import WorkingGroups from "./WorkingGroups";

const Home = () => {
  return (
    <div>
      <section className="breadcrubs"></section>
      <section className="introBanner">
        <div className="w-full pt-5 px-4 mx-auto h-full rounded-lg">
          <EventBanner />
        </div>
      </section>
      <section className="introText">
        <IntroText />
      </section>
      <section className="eventDetails">
        <EventDetails />
      </section>
      <section className="description">
        <Description />
        <WorkingGroups />
      </section>
      <section className="Register">
        <Register />
      </section>
    </div>
  );
};

export default Home;
