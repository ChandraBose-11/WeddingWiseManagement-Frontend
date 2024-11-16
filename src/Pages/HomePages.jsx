import { TextInput } from "flowbite-react";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const HomesPages = () => {
  const [searchteam, setSearchteam] = useState("");
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="flex flex-wrap border-2 dark:bg-black ">
        <div className="flex justify-center items-center sm:ml-0 mt-3">
          <img
            className="rounded-3xl max-w-md  p-3 ml-5 h-80"
            src="https://i.pinimg.com/736x/dc/ba/40/dcba40905d443c43f583b7281d5ed2a8.jpg"
            alt="image description"
          />
        </div>

        <div className="flex-col ml-2 flex-grow">
          <h1 className="font-bold text-4xl mt-10 ml-4 md:p-2">
            Every Love Story Deserves a Beautiful Wedding....
          </h1>
          <br />
          <h3 className="flex ml-5 font-semibold">
            Perfect for an inspiration or wedding ideas section
          </h3>

          <br />
          <form>
            <TextInput
              type="text"
              placeholder="Find the magic in every detail..."
              rightIcon={AiOutlineSearch}
              className="w-80 mx-6"
              value={searchteam}
              onChange={(e) => setSearchteam(e.target.value)}
            />
            <br />
          </form>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-secondary p-5 dark:bg-black text-white">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://onehorizonproductions.com/wp-content/uploads/2022/08/nesara-1.jpg"
              alt="WeddingResorts"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding-Resort
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Marriage resorts are popular wedding venues that offer a range of
              services and amenities, including: All-inclusive packages These
              can include ceremony and reception locations, food, lodging,
              decor, and activities. Some resorts may also offer spas,
              photography, and excursions
            </p>
            <Link
              to="/resort"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://onehorizonproductions.com/wp-content/uploads/2022/11/Wedding-caterers-in-bangalore-jpg.webp"
              alt=" Wedding-Caterers"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding-Caterers
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wedding catering is the service of food and other services for a
              wedding reception and party. Wedding caterers can be hired
              independently or as part of a package from the venue
            </p>
            <Link
              to="/catering"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://images.squarespace-cdn.com/content/v1/549ed406e4b031a7658c3dc1/1461496193980-41STQXH1DDV9LINJLK7V/Wedding_Travellers_Destination_Wedding_Photography-230.jpg"
              alt="photography"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding-Photography
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wedding photography is a type of photography that documents all
              the activities and events related to a wedding, from the
              preparations to the reception. The goal is to capture beautiful
              moments and create lasting memories for the couple
            </p>
            <Link
              to="/photo"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-secondary p-5 dark:bg-black text-white">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4_nHHOYG1TInaqr0sdtJiYoElz4X1WRAQQ&s"
              alt="Decoration"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Decoration
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wedding decoration can set the tone and ambiance for a wedding,
              and can help reflect the couple's personality and vision. Some
              common elements of wedding decor include: Flowers
            </p>
            <Link
              to="/decoration"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://www.brides.com/thmb/CymhTzDmoYs4kckVRoaAHw4qAqo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wedding-budget-guide-allocating-funds-staying-on-track_Final22-56876ddb855c4300810bfd9dd9294dad.png"
              alt="budget"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding Budget
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A wedding budget is a spreadsheet that tracks all wedding
              expenses, and it's a starting point for the wedding planning
              process. The budget can help you avoid debt and ensure you don't
              waste money
            </p>
            <Link
              to="/planningtool"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more about Wedding-PlanningTool
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://www.creatisimo.net/wp-content/uploads/2022/07/Simplicity-Engagement-Invitation.jpg"
              alt="invitation"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding invitation
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A wedding invitation is a letter asking the recipient to attend a
              wedding. It is typically written in the formal, third-person
              language and mailed five to eight weeks before the wedding date.
            </p>
            <Link
              to="/invitation"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more about Invitation
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomesPages;
