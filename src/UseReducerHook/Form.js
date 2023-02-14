import React, { useState } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:7002/upload";

function Form() {
  const [file, setFile] = useState(null);

  const handleFileInput = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('user_file', file);

    try {
      const response = await axios.post(baseURL, formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileInput} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
