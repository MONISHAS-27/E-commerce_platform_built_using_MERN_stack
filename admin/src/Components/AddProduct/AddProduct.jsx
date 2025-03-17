import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";

const AddProduct = () => {

  const[image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
      name:"",
      image:"",
      category:"women",
      new_price:"",
      old_price:""
  });

  const AddProduct = async () => {
    
    let dataObj;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);
    
    await fetch('https://e-commerce-platform-built-using-mern.onrender.com/upload', {
      method: 'POST',
      headers: {
        Accept:'application/json',
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

    if (dataObj.success) {
      product.image = dataObj.image_url;
      console.log(product);
      await fetch('https://e-commerce-platform-built-using-mern.onrender.com/addproduct', {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((data) => {data.success?alert("Product Added"):alert("Failed")});
      
    }
  }

  const changeHandler = (e) => {
    console.log(e);
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
    }

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
    }

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name="name" value={productDetails.name} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="old_price" value={productDetails.old_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" name="new_price" value={productDetails.new_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product category</p>
        <select value={productDetails.category} name="category" className="add-product-selector" onChange={changeHandler}>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select> 
      </div>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <label for="file-input">
          <img className="addproduct-thumbnail-img" src={!image?upload_area:URL.createObjectURL(image)} alt="" />
        </label>
        <input onChange={(e)=>{imageHandler(e)}} type="file" name="image" id="file-input" hidden />
      </div>
      <button className="addproduct-btn" onClick={()=>{AddProduct()}}>ADD</button>
    </div>
  );
};

export default AddProduct;

// import React, { useState } from 'react'
// import './AddProduct.css'
// import axios from "axios";
// import upload_area from '../../assets/Assets/Admin_Assets/upload_area.svg'
// const AddProduct = () => {
//    const [image, setImage] = useState(false)
//    const [productDetails, setProductDetails] = useState({
//       name: '',
//       image: '',
//       category: '',
//       new_price: '',
//       old_price: '',
//    })
//    const imageHandler = (e) => {
//       const file = e.target.files[0]
//       if (file) {
//          setImage(file) // ✅ Store image properly
//       }
//    }

//    const changeHandler = (e) => {
//       setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
//    }
//    const AddProduct = async () => {
//       console.log(productDetails, image)
//       let responseData
//       let product = productDetails

//       let formData = new FormData()
//       formData.append('product', image)
      

//       try {
//          const { data } = await axios.post("https://e-commerce-platform-built-using-mern.onrender.com/upload", formData, {
//             headers: {
//                "Content-Type": "multipart/form-data",  // ✅ Required for file uploads
//                Accept: "application/json",
//             },
//          });
      
//          responseData = data; // ✅ Store response correctly
//       } catch (error) {
//          console.error("Error uploading file:", error);
//       }
      
//          if (responseData.success) {
//             product.image = responseData.image_url;
//             console.log(product);
         
//             try {
//                const { data } = await axios.post("https://e-commerce-platform-built-using-mern.onrender.com/addproduct", product, {
//                   headers: {
//                      Accept: "application/json",
//                      "Content-Type": "application/json",
//                   },
//                });
         
//                data.success ? alert("Product Added") : alert("Failed");
//             } catch (error) {
//                console.error("Error adding product:", error);
//                alert("Failed to add product");
//             }
//          }
         
//    }
//    return (
//       <div className='addproduct'>
//          <div className='addproduct-itemfield'>
//             <p>Product title</p>
//             <input
//                value={productDetails.name}
//                onChange={changeHandler}
//                type='text'
//                name='name'
//                placeholder='Type here'
//             />
//          </div>
//          <div className='addproduct-price'>
//             <div className='addproduct-itemfield'>
//                <p>Price</p>
//                <input
//                   value={productDetails.old_price}
//                   onChange={changeHandler}
//                   type='text'
//                   name='old_price'
//                   placeholder='Type here'
//                />
//             </div>

//             <div className='addproduct-itemfield'>
//                <p>Offer Price</p>
//                <input
//                   value={productDetails.new_price}
//                   onChange={changeHandler}
//                   type='text'
//                   name='new_price'
//                   placeholder='Type here'
//                />
//             </div>
//          </div>

//          <div className='addproduct-itemfield'>
//             <p>Category</p>
//             <select
//                value={productDetails.category}
//                onChange={changeHandler}
//                name='category'
//                className='add-product-selector'>
//                <option value='women'>Women</option>
//                <option value='men'>Men</option>
//                <option value='kid'>Kid</option>
//             </select>
//          </div>

//          <div className='addproduct-itemfield'>
//             <p>Product title</p>
//             <label htmlFor='file-input'>
//                <img
//                   className='addproduct-thumbnail-img'
//                   src={image ? URL.createObjectURL(image) : upload_area}
//                   alt=''
//                />
//             </label>
//             <input
//                onChange={(e) => {
//                   imageHandler(e)
//                }}
//                type='file'
//                name='image'
//                id='file-input'
//                hidden
//             />
//          </div>
//          <button
//             onClick={() => {
//                AddProduct()
//             }}
//             className='addproduct-btn'>
//             ADD
//          </button>
//       </div>
//    )
// }

// export default AddProduct
