import { Button, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { message } from "antd";
import axios from "axios";
const Catering = () => {
  const { currentuser } = useSelector((state) => state.user);
  const [catering, setCatering] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const NameInputRef = useRef(null);
  const [caterId, setCaterId] = useState();
  const [formdata, setFormData] = useState();

  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const response = await fetch(
      "https://weddingwisemanagement-backend.onrender.com/api/catering/getcratering"
    );
    const data = await response.json();
    setCatering(data);
    // console.log(data);
  };
  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        `https://weddingwisemanagement-backend.onrender.com/api/catering/book/${caterId}`,
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
 
  const bookCater = (id) => {
    console.log(id);

    setOpenModal(true);
    setCaterId(id);
  };

  return (
    <div>
      {catering.map((ele, index) => {
        return (
          <div key={index}>
            <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="#">
                <img
                  className="p-8 rounded-t-lg h-96 max-w-96 mt-10"
                  src={ele.image}
                  alt="catering"
                />
              </Link>
              <div className="px-5 pb-5 ">
                <Link to="#">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
                    {ele.cateringname}
                  </h5>
                </Link>
                <br />
                <p>{ele.cateringDescription}</p>
                <div className="flex items-center mt-10">
                  <h5>{ele.cateringLocation}</h5>
                </div>
                <br />
                <div className="flex items-center justify-between">
                  <span className="text-xl text-gray-900 font-bold dark:text-white">
                    From Price Per Plate ₹{ele.cateringPriceRange}
                  </span>
                </div>
                <br />
                <div className="flex items-end justify-items-end">
                  <span className="text-xl text-gray-900 font-bold dark:text-white">
                    <Button onClick={() => bookCater(ele._id)}>
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

export default Catering;
