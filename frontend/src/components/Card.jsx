import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Edit from './Edit';

export default function Card({item,HandleEdit,handleDelete}) {
    // const HandleEdit=()=>{
    //     // document.getElementById('my_modal_4').showModal()
    // }
  return (
    <>
    
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            className="w-full h-[100%] object-cover"
            src={item.ImageUrl}
            alt="card"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="mb-4">{item.desc}</p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-5">
              <button className="btn btn-outline btn-sm flex items-center space-x-1 text-sm" onClick={HandleEdit}>
                <FaEdit /> <span>Edit</span>
              </button>
              <button className="btn btn-outline btn-error btn-sm flex items-center space-x-1 text-sm" onClick={handleDelete}>
                <FaTrash /> <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
