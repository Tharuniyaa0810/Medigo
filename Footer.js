import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const FooterList = [
      { id: "medi", label: " MediGo" },
      { id: "info", label: "    -Now You can Get Appointments In-Clinic " },
      { id: "orderstatus", label: "Without Stepping Out of Home" },
      { id: "space", label: " " },
      { id: "space", label: " " },
      { id: "privacy", label: "Technical & Privacy" },
      { id: "aboutus", label: "About Us" }
    ];
    return (
      <div className="mainFooter">
        <div className="footerListIcon">
          {FooterList.map((element) => (
            <div className="footerLabel" key={element.id}>
              {element.label}
            </div>
          ))}
        </div>
        <div className="footerListIcon">
          <div className="footerLabel">
            <div className="footerLogo">MediGo</div>
          </div>
          <div className="highlight">Care with Ease</div>
          <div className="footerLabel" style={{ marginLeft: "15px" }}>
            <i class="fa fa-facebook-f iconsAlign"></i>
            <i class="fa fa-instagram iconsAlign"></i>
            <i class="fa fa-youtube-play iconsAlign"></i>
          </div>
        </div>
        <div className="footerAddress">
          <div className="highlight1">Our Corporate Office</div>
          <div className="footerLabel">No:7, A2B road</div>
          <div className="footerLabel">Kovaipudur, Coimbatore-641042</div>
          <div className="footerLabel">
            <i class="fa fa-envelope contactIcon"></i>MediGo@gmail.com
          </div>
          <div className="footerLabel ">
            <i class="fa fa-phone contactIcon "></i>044 7654 5424
          </div>
        </div>
      </div>
    );
  }
}
