import React, { useEffect, useState } from "react";
import axios from "axios";
import Back from "./Back";
import { Link, useNavigate } from "react-router-dom";

const Createbooks = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [timestamp, settimestamp] = useState("");
  const [cost, setcost] = useState("");
  const navigate = useNavigate();

  const handlesave = async () => {
    const data = {
      title: title, //title
      author: author, //author
      cost: cost, //cost
      timestamp: timestamp, //timestamp
    };
    console.log(data);
    try {
      const res = await axios.post("https://bookstall.vercel.app/books", data);
      console.log(res.data); // Assuming the response contains the saved data
      navigate("/"); // Redirect to the books page after successful save
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <Back />
        <div className="h1">Createbooks</div>
        <div>
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setauthor(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Cost"
                  value={cost}
                  onChange={(e) => setcost(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Timestamp"
                  value={timestamp}
                  onChange={(e) => settimestamp(e.target.value)}
                />
              </div>
            </div>

            <div className="btn btn-danger btn-lg my-5" onClick={handlesave}>
              Save
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Createbooks;
