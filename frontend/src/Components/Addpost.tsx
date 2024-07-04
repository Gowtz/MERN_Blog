import { useState } from "react";
import axios from 'axios'

// @ts-ignore 
export default function Addpost({ toggle }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = async() => {

    await axios.post(`${import.meta.env.VITE_BASE_URL}/post`,{
        title,desc
    },{
        withCredentials:true
    })


    toggle((prev:Boolean) => false);
  };
  return (
    <>
      <div className="absolute  bg-slate-50 w-full h-full z-20 flex justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-slate-200 p-10 rounded flex flex-col min-h-[50vh] w-[600px] text-black"
        >
          <label className="text-2xl mb-2">Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            className="py-3 px-5 rounded mb-5"
            type="text"
            placeholder="Title here"
          />
          <label className="text-2xl mb-2">Description</label>
          <textarea
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
            className="p-2 rounded h-80"
            placeholder="You descriptionn"
          ></textarea>
          <button
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
            className="btn mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
