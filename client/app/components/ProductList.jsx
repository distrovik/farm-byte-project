//  Client Side Rendering Method
// "use client"
// import { useState, useEffect } from "react";
// import axios from "axios";


// Server Side Rendering Method    
async function fetchProducts() {
  const response = await fetch("http://localhost:9000/products",{
    cache: "no-store"
  })
  return response.json()
}

export default async function ProductList() {

// Server Side Rendering Method    
  const products = await fetchProducts()
  console.log("Rerendering Products Component");
  console.log("Number of Products: ", products.length);


//  Client Side Rendering Method
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getApi();
  // }, []);

// GET request from server to render products.
  // const getApi = async () => {
  //   await axios.get("http://localhost:9000/products")
     //Store data received from server into state.
  //   .then((res) => {setData(res.data)});
  // };

  // Handles POST to delete products.
  // const deleteProduct = (_id, title) => {
  //   if (window.confirm(`Are you sure you want to delete " ${title} "`)) {
  //     fetch("http://localhost:9000/delete", {
  //       method: "POST",
  //       crossDomain: true,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         productId: _id,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         alert(data);
  //         getApi();
  //       });
  //   }
  // };

  return (
    // Client Side Rendering Method
        // React Fragment.
        // <>
        // {/* Map function to display data stored in state array. */}
        //   {data.map((item) => {
        //     return(
        //     <div id="productList" className="bg-white border-slate-500 border-2 rounded-md p-5 m-2 hover:border-purple-600" key={item._id}>

        //       <a id="productListInner" className="flex flex-col items-center text-center" href={item._id}>
                
        //         <img className="h-20 w-20  rounded-md" src={item.image} alt={item.title}/>

        //         <h1 className="pt-2">{item.title.length > 25? item.title.substring(0, 25)+"...":item.title}</h1>

        //         <h2 className="pt-2 text-purple-800">RM{item.price}</h2>

        //         {/* JS substring function to limit character displayed. */}
        //         <p className="pt-2">{item.description.length > 90? item.description.substring(0, 90)+"...":item.description}</p>

        //         <h3 className="pt-2">Category : {item.category}</h3>

        //       </a>

        //       {/* Delete Button */}
        //       {/* <p onClick={() => deleteProduct(item._id, item.title)} className="cursor-pointer">Delete</p> */}
        //       </div>
        //       )})}
        //   </>
       
        
    // Server Side Rendering Method    
        <>
        {/* Map function to display data stored in state array. */}
          {products.map((item) => {
            return(
            <div id="productList" className="bg-white border-slate-500 border-2 rounded-md p-5 m-2 hover:border-purple-600" key={item._id}>

              <a id="productListInner" className="flex flex-col items-center text-center" href={item._id}>
                
                <img className="h-20 w-20  rounded-md" src={item.image} alt={item.title}/>

                <h1 className="pt-2">{item.title.length > 25? item.title.substring(0, 25)+"...":item.title}</h1>

                <h2 className="pt-2 text-purple-800">RM{item.price}</h2>

                {/* JS substring function to limit character displayed. */}
                <p className="pt-2">{item.description.length > 90? item.description.substring(0, 90)+"...":item.description}</p>

                <h3 className="pt-2">Category : {item.category}</h3>

              </a>

              {/* Delete Button */}
              {/* <p onClick={() => deleteProduct(item._id, item.title)} className="cursor-pointer">Delete</p> */}
              </div>
              )})}
          </>
          
            
  );
}
