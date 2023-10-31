import React, { Component, useState } from 'react';
import './App.css';

function App() {



  const [formData, setFormData] = useState({
    name: '',
    description: '',
    productName: '',
    productDescription: '',
    category: '',
    quantity: '',
    price: '',
  });

  const handleSubmitFormOne = (e) => {
    e.preventDefault();
    const formDataString = `Name: ${formData.name}\nDescription: ${formData.description}`;
    console.log('Form data submitted:', formData);
    alert(`Form data submitted:\n${formDataString}`);
  };

  const handleSubmitFormTwo = (e) => {
    e.preventDefault();
    const formDataString = `Name: ${formData.productName}\nDescription: ${formData.productDescription}\nCategory: ${formData.category}\nQuantity: ${formData.quantity}\nPrice: ${formData.price}`;
    
    const quantity = parseFloat(formData.quantity);
    const price = parseFloat(formData.price);

    if (isNaN(quantity) || isNaN(price)) {
      alert("Quantity and price must be valid numbers.");
      return; // No enviar el formulario si no son números válidos
    }
    console.log('Form New Product data submitted:', formData);
    alert(`Form data submitted:\n${formDataString}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      description: '',
      productName: '',
      productDescription: '',
      category: '',
      quantity: '',
      price: '',
    });
  }

  return (
    <div>
      <div className="form-container">
        <h1>New Shop</h1>
        <form className="form" onSubmit={handleSubmitFormOne}>
          <div className="form-field">
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <input
              placeholder="Description"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-button-container">
            <button className="form-button-submit" type="submit">SUBMIT</button>
            <button className="form-button-cancel" onClick={handleCancel}>CANCEL</button>
          </div>
        </form>
      </div>

      <div className="form-container">
      <h1>New Product</h1>
      <form className="form" onSubmit={handleSubmitFormTwo}>
          <div className="form-field">
              <input
              placeholder="Name"
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              />
          </div>
          <div className="form-field">
              <input
              placeholder="Description"
              type="text"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleInputChange}
              />
          </div>
          <div className="form-field">
              <input
              placeholder="Category"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              />
          </div>
          <div className="form-field">
              <input
              placeholder="Quantity"
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              />
          </div>
          <div className="form-field">
              <input
              placeholder="Price"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              />
          </div>
          <div className="form-button-container">
              <button className="form-button-submit" type="submit">SUBMIT</button>
              <button className="form-button-cancel" onClick={handleCancel}>CANCEL</button>
          </div>
        </form>
        </div>
      </div>
  );
}

export default App;