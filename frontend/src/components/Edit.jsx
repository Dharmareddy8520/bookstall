import React, { useEffect, useState } from "react";
import axios from "axios";
import Back from "./Back";
import { Link, useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [timestamp, settimestamp] = useState("");
  const [cost, setcost] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/books/${id}`);
        const data = res.data;
        settitle(data.title);
        setauthor(data.author);
        settimestamp(data.timestamp);
        setcost(data.cost);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleEdit = async () => {
    const data = {
      title: title,
      author: author,
      cost: cost,
      timestamp: timestamp,
    };

    try {
      const res = await axios.patch(`http://localhost:5000/books/${id}`, data);
      console.log(res.data);
      navigate("/"); // Redirect to the home page after successful save
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
            {/* Form fields */}
            <>
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

                  <div
                    className="btn btn-danger btn-lg my-5"
                    onClick={handleEdit}
                  >
                    Save
                  </div>
                </form>
              </div>
            </>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
