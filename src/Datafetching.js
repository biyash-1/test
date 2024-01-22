import axios from 'axios';
import React, { useState } from 'react';

function Datafetching() {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get("https://dummyjson.com/products");
      console.log("API Response:", result.data);

      if (Array.isArray(result.data)) {
        setDatas(result.data);
      } else {
        console.error("Data is not an array:", result.data);
        // Handle other types of data structures or setDatas accordingly
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className='flex  flex-col justify-center items-center w-full h-screen '>
      <button className='border bg-red-200 p-3 hover:bg-green-400' onClick={getData}>
        Get data
      </button>
      <div className='bg-purple-400 p-3 w-[300px] h-[400px]'>
        {Array.isArray(datas) ? (
          <ul>
            {datas.map((data) => (
              <li key={data.id}>{data.title}</li>
            ))}
          </ul>
        ) : (
          <p>Data is not an array</p>
          // Render differently for other types of data structures if needed
        )}
      </div>
    </div>
  );
}

export default Datafetching;

