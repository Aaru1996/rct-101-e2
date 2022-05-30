import React, { useEffect, useState } from "react";
// import { Text,Image,Box,Stack,Heading,Tag,TagLabel } from '@chakra-ui/react'

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  //  Text = () => <div />;
  //  Image = () => <div />;
  //  Box = () => <div />;
  // Stack = () => <div />;
  //  Heading = () => <div />;
  //  Tag = () => <div />;
  // TagLabel = () => <div />;
  const [form, setForm]=useState([]);
  useEffect(()=>{
    fetch(` http://localhost:8080/products`)
    .then((res)=> res.json())
    .then((data) => {
      setForm(data);
      console.log(data);
    })
  },[])
 
    

  return (
    <div data-cy="product">

     { form.map((data)=>(
        
     <div>
        <image data-cy="product-image"src={data.imageSrc}/>
        <p data-cy="product-category">{data.category}</p>
        <p>
          <label data-cy="product-gender">{data.gender}</label>
        </p>
        <h3 data-cy="product-title">{data.title}</h3>
        <div data-cy="product-price">{data.price}</div>

     </div>
     
      ))}
    </div>
  );
};

export default Product;
