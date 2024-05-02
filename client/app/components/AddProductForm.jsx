"use-client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AddProductForm() {
  //useStates to store datas from input.
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");
  
  const router = useRouter();

  //Handle funtion on submition of the form
  const handleSubmit = async (e) => {
    //To prevent default behavior of form resfreshing page upon submition.
    e.preventDefault(); 

    const data = { title, price, description, image: imageURL, category };

    //Handle POST request from the form to specific server route.
    axios
      .post("http://localhost:9000/new", { data })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col border-2 border-purple-900 bg-white p-2 rounded-md">
      <label htmlFor="">Product Name:</label>
      <input  type="text" onChange={(e) => {setTitle(e.target.value)}} autoComplete="off" required/>

      <label htmlFor="">Price(Numbers Only):</label>
      <input type="text" onChange={(e) => {setPrice(e.target.value)}} autoComplete="off" required/>

      <label htmlFor="">Description:</label>
      <textarea rows="4" cols="50" type="text" onChange={(e) => {setDescription(e.target.value)}} autoComplete="off" required/>
      
      <label htmlFor="">Image URL:</label>
      <input type="text" onChange={(e) => {setImageURL(e.target.value)}} autoComplete="off" required/>

      <label htmlFor="">Category:</label>
      <input type="text" onChange={(e) => {setCategory(e.target.value)}} autoComplete="off" required/>

      <button className="bg-slate-400 text-white rounded-md p-2 mt-5 mb-3" onClick={()=>router.push("/product-page")}>Add</button>
    </form>
  );
}
