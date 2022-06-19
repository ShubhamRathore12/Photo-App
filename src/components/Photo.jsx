import React, { useEffect, useState } from 'react'
import axios from "axios"
import Input from './Input';
import Pagination from './Pagination';

const Photo = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState("")
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const fetchData = async () => {
    setLoading(true)
    try{
        const res= await axios.get("https://api.unsplash.com/search/photos?page=1&query={car}&client_id=nIzVkzFx4MNSDZMLq3l6_qDJpby0Fjz9HuInrDSIbXc");
        console.log(res.data.results)
        setResults(res.data.results)
        
      setLoading(false)
    } catch(e){
        console.log(e)
    }
}

const changePhoto = () => {
  axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=nIzVkzFx4MNSDZMLq3l6_qDJpby0Fjz9HuInrDSIbXc`)
      .then((response) => {
          // console.log(response.data);
          setResults(response.data.results);
          setPhoto("")  
    
      })
}


useEffect(()=> {
   fetchData();
    changePhoto();
}, [showPerPage])




if(loading) return <h1>Loading ......</h1>
  return (
    <>
    <Input setResults={setResults} photo={photo} setPhoto={setPhoto} setPagination={setPagination} changePhoto={changePhoto}/>
    <div className="container">
    <div className="row text-center text-lg-start" >
        {results.slice(pagination.start, pagination.end).map((value) => {
            return (
                <div className="col-lg-3 col-md-4 col-6" key={value.id}>
                        <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
                </div>
            )
        })}
    </div>
   <br></br>
  <Pagination showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={results.length}/>
</div>
</>
  )
}

export default Photo