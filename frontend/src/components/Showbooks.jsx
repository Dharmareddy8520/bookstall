import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Back  from './Back'
const Showbooks = () => {
  const [books, setBooks] = React.useState([])
  const { id } = useParams()
  useEffect(()=>{
    try{
      const getbooks=async()=>{
        const res=await axios.get(`http://localhost:5000/books/${id}`)
         console.log(res.data)
         setBooks(res.data)
      }
      getbooks()
    }
    catch(error)
    {
      console.log(error)
    }
  })
  return (
    <>
    <Back/>
        <div>Showbooks</div>
        <div className='row'>
          <div className='col-md-4'>
          <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{books.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{books.id}</h6>
    <h6 className="card-subtitle mb-2 text-muted">{books.cost}</h6>
    <h6 className="card-subtitle mb-2 text-muted">{books.author}</h6>
    <p className="card-text">{books.timestamp }</p>
    
  </div>
</div>
          </div>
          <div className='col-md-4'>

          </div>
          <div className='col-md-4'>

          </div>
        
        </div>

    </>
  )
}

export default Showbooks