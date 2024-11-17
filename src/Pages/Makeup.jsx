import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Makeup = () => {
    const { currentuser } = useSelector((state) => state.user);
  const [makeup, setMakeup] = useState([]);
  
  useEffect(() => {
    fetchData();
  });
  const fetchData=async()=>{
    const response=await fetch("http://localhost:5000/api/makeup/getmakeup");
    const data = await response.json();
    setMakeup(data);
    console.log(data);   
};
const handleDelete= async()=>{
  
}
    return (
        <div>
       {makeup.map((ele, index) => {
        return (
          <div key={index}>
            <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="#">
                <img
                  className="p-8 rounded-t-lg h-96 max-w-96 mt-10"
                  src={ele.image}
                  alt="makeup"
                />
              </Link>
              <div className="px-5 pb-5 ">
                <Link to="#">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
                    {ele.makeupname}
                  </h5>
                </Link>
                <br />
                <p>{ele.makeupDescription}</p>
                <div className="flex items-center mt-10">
                  <h5>{ele.makeupLocation}</h5>
                </div>
                <br />
                <div className="flex items-center justify-between">
                  <span className="text-xl text-gray-900 font-bold dark:text-white">
                  From Bridal makeup :${ele.makeupPriceRange}
                  </span>
                </div>
                <br />
                <div className="flex items-end justify-items-end">
                  <span className="text-xl text-gray-900 font-bold dark:text-white">
                    <Button>Request Pricing</Button>
                  </span>
                </div>
                <div  className="max-w-sm">
                <div className="mt-4 flex space-x-3 lg:mt-6">
               {currentuser.Admin && (
                    <Link to={`/resort/edit/${ele._id}`}>
                      <Button className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                        Edit Resort
                      </Button>
                    </Link>
                  )}

                  {currentuser.Admin && (
                    < Button className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-red-00" onClick={handleDelete}>
                        Delete Resort
                      </Button>
                      )}
                </div>
              </div>
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
};
export default Makeup;