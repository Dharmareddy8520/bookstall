import React from "react";
import { Link } from "react-router-dom";
import {
  faPenToSquare,
  faTrash,
  faPlus,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Table = ({ books }) => {
  return (
    <div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <td>NO</td>
              <td>Title</td>
              <td>Author</td>
              <td>Cost</td>
              <td>Time Stamp</td>
              <td>Operations</td>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.cost}</td>
                <td>{book.timestamp}</td>
                <td>
                  <div className="row items-center justify-center">
                    <div className="col-md-4">
                      <Link to={`/books/edit/${book._id}`}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </Link>
                      Edit
                    </div>
                    <div className="col-md-4">
                      <Link to={`/books/delete/${book._id}`}>
                        <FontAwesomeIcon icon={faTrash} />
                      </Link>{" "}
                      Delete
                    </div>
                    <div className="col-md-4">
                      <Link to={`/books/show/${book._id}`}>
                        <FontAwesomeIcon icon={faEye} />
                      </Link>{" "}
                      Show
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
