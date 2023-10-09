import React from "react";
import { Link } from "react-router-dom";
import {
  faHeading,
  faUser,
  faMoneyBill,
  faPenToSquare,
  faTrash,
  faPlus,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = ({ books }) => {
  return (
    <div className="card-container">
      <div className="row">
        {books.map((book, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-9">
                    <p className="text-black">{book._id}</p>
                  </div>
                  <div className="col-md-3 btn btn-sm btn-danger">
                    {book.timestamp}
                  </div>
                </div>
                <h5 className="card-title">
                  <FontAwesomeIcon icon={faHeading} />
                  <span className="px-5 "> {book.title} </span>
                </h5>
                <p className="card-text">
                  <FontAwesomeIcon icon={faUser} />
                  <span className="px-5"> {book.author} </span>
                </p>
                <p className="card-text">
                  <FontAwesomeIcon icon={faMoneyBill} />
                  <span className="px-5"> {book.cost} </span>
                </p>
                <div className="row">
                  <div className="col-md-4">
                    <Link to={`/books/edit/${book._id}`}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Link>
                    <span>Edit</span>
                  </div>
                  <div className="col-md-4">
                    <Link to={`/books/delete/${book._id}`}>
                      <FontAwesomeIcon icon={faTrash} />
                    </Link>
                    <span>Delete</span>
                  </div>
                  <div className="col-md-4">
                    <Link to={`/books/show/${book._id}`}>
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                    <span>Show</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
