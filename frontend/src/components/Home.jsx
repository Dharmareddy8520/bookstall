import React, { useEffect, useState } from "react";
import axios from "axios";

import Table from "./Cards/Table";
import Cards from "./Cards/Cards";
import { Link } from "react-router-dom";
import {
  faPenToSquare,
  faTrash,
  faPlus,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [show, setshow] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/books");
        const data = response.data.books;
        setBooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };

    getBooks();
  }, []);

  return (
    <div className="m-5 p-5">
      <div className="d-flex flex-row bd-highlight mb-3 container justify-content-between">
        <div className="h4  p-2 bd-highlight"> Book lists</div>
        <div className="row">
          <div className="col-sm-6">
            <div
              className="btn btn-lg btn-primary "
              onClick={() => {
                setshow("table");
              }}
            >
              Table
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className="btn btn-lg btn-primary "
              onClick={() => {
                setshow("card");
              }}
            >
              Cards
            </div>
          </div>
        </div>

        <div className="p-2 bd-highlight">
          <Link to="/books/create" className="btn btn-primary float-right">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
        </div>
      </div>
      {show === "table" ? <Table books={books} /> : <Cards books={books} />}
    </div>
  );
};

export default Home;
