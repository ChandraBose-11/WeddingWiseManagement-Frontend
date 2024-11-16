import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Photography = () => {
    const { currentuser } = useSelector((state) => state.user);
    const [photography, setPhotography] = useState([]);
    useEffect(() => {
        fetchData();
      });
      const fetchData = async () => {
        const response = await fetch("http://localhost:5000/api/photo/get");
        const data = await response.json();
        setPhotography(data);
        // console.log(data);
      };
      const handleDelete= async()=>{
  
      }
    return (
        <div>
        {photography.map((ele, index) => {
          return (
            <div key={index}>
              <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="#">
                  <img
                    className="p-8 rounded-t-lg h-96 max-w-96 mt-10"
                    src={ele.image}
                    alt="photography"
                  />
                </Link>
                <div className="px-5 pb-5 ">
                  <Link to="#">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
                      {ele.photographyname}
                    </h5>
                  </Link>
                  <br />
                  <p>{ele.photographyDescription}</p>
                  <div className="flex items-center mt-10">
                    <h5>{ele.photographyLocation}</h5>
                  </div>
                  <br />
                  <div className="flex items-center justify-between">
                    <span className="text-xl text-gray-900 font-bold dark:text-white">
                    From 1 Day Wedding Package:₹{ele.photographyPriceRange}
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
                      <Link to={`/photography/edit/${ele._id}`}>
                        <Button className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                          Edit photography
                        </Button>
                      </Link>
                    )}
  
                    {currentuser.Admin && (
                      < Button className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-red-00" onClick={handleDelete}>
                          Delete photography
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

export default Photography;