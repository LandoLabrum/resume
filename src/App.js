import React, { useState, useEffect } from "react";

import "./App.css";
import logo from "./logo.svg";
import M from "materialize-css/dist/js/materialize.min.js";
import Profile from "./media/profile.jpeg";

function ListView(i) {
  const List = i.list.map((n) => {
    return (
      <li key={n} className="collection-item">
        {n}
      </li>
    );
  });
  return (<>          <h2>{i.title}</h2>

    <ul className={i.title ? "collection with-header" : "collection"}>
      {/* {i.title ? (
        <li className="collection-header">
          <h4>{i.title}</h4>
        </li>
      ) : (
        ""
      )} */}
      {List}
    </ul>
    </>
  );
}
// function RowView(i) {
//   const List = i.list.map((n) => {
//     return (
//       <div key={n}>
//         <div
//           style={{ borderRight: "solid 2px #ff3300" }}
//           className="col s3 right-align"
//         >
//           {n.start} - {n.end ? n.end : "Current"}
//         </div>
//         <div className="col s3">
//           <h6>{n.title}</h6>
//         </div>
//       </div>
//     );
//   });
//   return (
//     <div className="row">
//       {i.title ? (
//         <div className="col s12">
//           <h4>{i.title}</h4>
//         </div>
//       ) : (
//         ""
//       )}
//       {List}
//     </div>
//   );
// }
function TableView(i) {
  const List = i.list.map((n) => {
    return (
      <tr className="left" key={n}>
        <td className="right-align">
          <div
            style={{
              borderRadius: "10px",
              whiteSpace: "nowrap",
              padding: "0px 10px",
            }}
            className="center red white-text"
          >
            <small>
              {n.start} - {n.end ? n.end : "Current"}
            </small>
          </div>
        </td>
        <td>
          <h5>{n.title}</h5>
          <b className="grey-text">{n.company}</b>
          <p>{n.body}</p>
        </td>
      </tr>
    );
  });
  return (
    <div className="small-container">
      {i.title ? <h4>{i.title}</h4> : ""}
      <table>{List}</table>
    </div>
  );
}

function Header() {
  useEffect(() => {
    var scroll = document.querySelectorAll(".scrollspy");
    M.ScrollSpy.init(scroll, {});
  }, []);
  return (
    <div className="section blue-grey grey-text text-lighten-3">
      <div className="small-container">
        <h2 style={{ fontWeight: "700", marginTop: "0px" }}>LANDON LABRUM</h2>
        <h4 style={{ margin: "-1.48rem 0 0.912rem 0" }}>Fullstack Developer</h4>
      </div>
    </div>
  );
}
function TitleBar(i) {
  return (
    <div className={"row " + i.background}>
      <h2>{i.title}</h2>
      <blockquote>{i.body}</blockquote>
    </div>
  );
}
function TabsView() {
  useEffect(() => {
    var tabs = document.querySelectorAll(".tabs");
    M.Tabs.init(tabs, {});
  }, []);
  // var instance = M.Tabs.getInstance(".tabs");

  return (
    <>
      {/* <div className="row ">
        <div className="col s12 blue-grey lighten-2">
          <ul className="tabs blue-grey lighten-2">
            <li className="tab col s3">
              <a href="#intro">Intro</a>
            </li>
            <li className="tab col s3">
              <a href="#experience">Experience</a>
            </li>
            <li className="tab col s3">
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="small-container">
        <div id="intro">
        <h2>Introduction</h2>

          <div className="row  grey lighten-3 valign-wrapper">
            <div className="col s12 m2">
              <img className="responsive-img circle" src={Profile} />
            </div>
            <div className="col s12 m10">
              <span>
                <blockquote>
                  <h5>Hello, my name is Landon Labrum</h5>
                  I build Social Engineering software catered to both
                  commercial and individual clientele. I have owned my own
                  Social Engineering and Brand Image Company since 2017. With over 14+ Years of experience in almost all aspects of digital management and growth. I also have partnered with many others, to
                  create and manage the digital aspect of their successful businesses.<br/> Understanding how the end-users
                  experience, and how the Software intends to be used, has
                  always been at the forefont of my work. I design products that
                  are effective in building consumer values to the services
                  provided, whilst keeping the monetary and core values of both my and the
                  clients business flourishing.
                </blockquote>
              </span>
            </div>
          </div>

          {/* <br/> */}
          {/* <div className="row">
            <h5 className="grey-text text-darken-1">Contact information</h5>
                <div className="col s12 m4">
                  <div className="center promo">
                    <i className="material-icons">flash_on</i>
                    <p className="promo-caption">Speeds up development</p>
                    <p className="light center">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="center promo">
                    <i className="material-icons">group</i>
                    <p className="promo-caption">User Experience Focused</p>
                    <p className="light center">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="center promo">
                    <i className="material-icons">settings</i>
                    <p className="promo-caption">Easy to work with</p>
                    <p className="light center">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                  </div>
                </div>
              </div> */}
        </div>
        <div id="experience" className="col s12">
          <TitleBar
            title="Things I've worked on"
            body="With 14+ years in experience, from projects including everything from Social Engineering to Brand Identity, I have gathered a large amount of hands-on experience."
          />
          <TableView
            title="Work Experience"
            list={[
              {
                title: "Brand Image + Product Design",
                company: "Black Clover",
                start: 2008,
                end: 2009,
                body: "Designed product lines and brand image for consumer products and marketing material",
              },
              {
                title: "Web Developer + Social Media Manager",
                company: "Park City Snowboard Team",
                start: 2009,
                end: 2013,
                body: "Created website and marketing material aimed to connect members as well as prospects with information, events and associative partners.",
              },
              {
                title: "Web Developer + Marketing Manager",
                company: "Fit Stop Health Club",
                start: 2012,
                end: 2014,
                body: "Created website and marketing material aimed to connect members as well as prospects with information, events and associative partners.",
              },
              {
                title:
                  "Business Developement Manager + Digital Admin + Social Engineering + Web Developer + Brand Image",
                company: "Labrum Auto Group",
                start: 2013,
                end: 2020,
                body: "Grew the amount of clients and webpage visits to this business by implimenting new and market-proven strategies to better connect car-buyers to vehicles.",
              },
              {
                title:
                  "Co-owner + Social Engineering + Web Developer + Brand Image",
                company: "Lakewakelife",
                start: 2017,
                end: 2020,
                body: "Created an e-commerce platform that sold consumer products, Automated Social Media Accounts, grew an audience by tracking customer interactions, Created partnerships with vendors and suppliers.",
              },
              {
                title: "President",
                company: "Deepturn llc",
                start: 2017,
                body: "Designed custom software for individuals in need of understanding their target market, trends, and competitors. This software also automates digital interactions with clients.",
              },
            ]}
          />
        </div>
        <div id="skills" className="col s12">
          <ListView
            title="Notable Skills"
            list={[
              "Django",
              "Python",
              "React JS",
              "AWS",
              "Postgres",
              "Javascript",
            ]}
          />
        </div>
      </div>
    </>
  );
}
function Intro() {
  return {};
}
function App() {
  return (
    <>
      <Header />
      <TabsView />
    </>
  );
}

export default App;
