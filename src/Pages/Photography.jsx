import { Button, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useState,useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

const Photography = () => {
    const { currentuser } = useSelector((state) => state.user);
    const [photography, setPhotography] = useState([]);
    const [openModal, setOpenModal] = useState(false);
  const NameInputRef = useRef(null);
  const [photoId, setPhotoId] = useState();
  const [formdata, setFormData] = useState();
    useEffect(() => {
        fetchData();
      });
      const fetchData = async () => {
        const response = await fetch("http://localhost:5000/api/photo/get");
        const data = await response.json();
        setPhotography(data);
        // console.log(data);
      };
      const handleSubmit = async (e) => {
        try {
          const response = await axios.post(
            `http://localhost:5000/api/photo/book/${photoId}`,
            formdata,
            {
              headers: {
                Authorization: localStorage.getItem("Token"),
              },
            }
          );
          message.success(response.data.message);
          setOpenModal(false);
        } catch (error) {
          message.error(error.response.data.message);
          setOpenModal(false);
        }
      };
      const handleDelete = async () => {};
      const bookPhoto = (id) => {
        console.log(id);
    
        setOpenModal(true);
        setPhotoId(id);
      };
    
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
                    <Button onClick={() => bookPhoto(ele._id)}>
                      Request Pricing
                    </Button>
                    <Modal
                      show={openModal}
                      size="md"
                      popup
                      onClose={() => setOpenModal(false)}
                      initialFocus={NameInputRef}
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="space-y-6">
                          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Request pricing Request pricing.
                            <br /> Fill this form we will contact you shortly.
                            All the information provided will be treated
                            confidentially.
                          </h3>
                          <form>
                            <TextInput
                              id="date"
                              name="eventDate"
                              type="date"
                              placeholder="date:"
                              required
                              onChange={(e) =>
                                setFormData({ [e.target.name]: e.target.value })
                              }
                            />
                          </form>

                          <div className="flex justify-center gap-4">
                            <Button
                              onClick={handleSubmit}
                              size="md"
                              gradientMonochrome="cyan"
                              className="text-center"
                            >
                              Registor
                            </Button>
                            <Button
                              color="failure"
                              onClick={() => setOpenModal(false)}
                            >
                              Back To Page
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </span>
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