import React, {useState} from 'react'
import axios from 'axios'

const Input = ({setResults,photo, setPhoto, setPagination, changePhoto}) => {
 


  return (
    <div className='container text-center my-5'>
 
                <input type="text" className='form-control' value={photo} onChange={(e) => {
                    setPhoto(e.target.value.toLowerCase())
                }} />
                <button type='submit' onClick={changePhoto} className='btn btn-primary my-2'>Get Photo</button>
             
            </div>
  )
}

export default Input