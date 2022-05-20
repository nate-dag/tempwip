import React, { useState } from "react";
import Avatar from "react-avatar";

const LeaderboardHandle = ({ handle, image, link, members }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let mobileView = false;
  if (typeof window !== "undefined") {
    mobileView = window.innerWidth <= 740 ? true : false;
  }

  const trimHandle = (handle) => {
    if (handle.split("").length > 15) {
      return `${handle.substring(0, 12)}...`;
    } else {
      return handle;
    }
  };

  return (
    <div className="wrapper-competitor" key={handle}>
      {members ? (
        <div
          className="wrapper-members"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="wrapper-team-top">
            <div className="team-toggle">
              {isExpanded ? (
                <img
                  src="/images/triangle-down.svg"
                  alt="picture of a triangle down"
                  className="triangle triangle-down"
                />
              ) : (
                <img
                  src="/images/triangle-right.svg"
                  alt="picture of a triangle right"
                  className="triangle triangle-right"
                />
              )}
            </div>
            <div className="team-wrapper">
              <span
                className={
                  mobileView === false ? "team-avatar" : "team-avatar-small"
                }
              >
                {handle.substring(0, 1)}
              </span>
              <span className="team-name">{handle}</span>
            </div>
          </div>
          {isExpanded
            ? members.map((member) => (
                <div className="member team-identifier" key={member.handle}>
                  <a href={member.link}>
                    <Avatar
                      src={
                        member.image && member.image.childImageSharp.resize.src
                      }
                      name={member.handle}
                      size={mobileView === false ? "25px" : "13px"}
                      round={mobileView === false ? "25px" : "8px"}
                    />
                    <span>{member.handle}</span>
                  </a>
                </div>
              ))
            : ""}
        </div>
      ) : (
        <a href={link}>
          <Avatar
            src={image && image.childImageSharp.resize.src}
            name={handle}
            size={mobileView === false ? "27px" : "16px"}
            round={mobileView === false ? "27px" : "16px"}
          />

          <span>{mobileView === true ? trimHandle(handle) : handle}</span>
        </a>
      )}
    </div>
  );
};

export default LeaderboardHandle;
