import React, { useEffect } from "react";
import axios from "axios";
import Back from "./Back";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const Deletebooks = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="h1">Deletebooks</div>
      <button className="btn btn-lg btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Deletebooks;
