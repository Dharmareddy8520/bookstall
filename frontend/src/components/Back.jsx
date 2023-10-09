import React from "react";
import { Link } from "react-router-dom";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Back = () => {
  return (
    <div className="">
      <div className="btn btn-lg btn-danger  ">
        <Link to="/">
          <FontAwesomeIcon icon={faLeftLong} />
        </Link>
        <span> Back</span>
      </div>
    </div>
  );
};

export default Back;
