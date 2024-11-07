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
              src="https://i.pinimg.com/564x/c1/ba/68/c1ba6868e603d2f08de31468c3c3880c.jpg"
              alt="WeddingVenue"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding Venue
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A wedding is a ceremony where two people are united in marriage.
              Wedding traditions and customs vary greatly between cultures. Most
              wedding ceremonies involve an exchange of marriage vows by a
              couple, presentation of a gift
            </p>
            <Link
              to="/weddingvenues"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more about Wedding Venue
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHkjCRKa3pbcMQMjXXykWeZ7A7rxncBIv4c9NyX1HDVUg_tcL0rEck97bwHNhNheyK70&usqp=CAU"
              alt="wedding Vendors"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding Vendors
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wedding vendors are people or businesses that provide products or
              services for a wedding, such as food, music, or a venue. Some
              common wedding vendors include: Venue: The location of the
              wedding, which can set the tone for the event.
            </p>
            <Link
              to="/weddingVendors"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more about Wedding Vendors
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
              src="https://cdn0.weddingwire.in/vendor/1670/3_2/960/jpg/bridal-lehenga-auraya-fashion-lehenga-2_15_461670-170849299747877.webp"
              alt="Bride"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bridal lehenga
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The lehenga, lehnga or langa or लेहंगा (also known as a ghagra,
              chaniyo, Paro, paavada, or lacha) is a form of ankle-length skirt
              from the Indian subcontinent. Different patterns and styles of
              traditional embroidery are used to decorate lehenga.
            </p>
            <Link
              to="/bride"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more about Wedding Bridal
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
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOgFzPhkB6HzldxCV93zdPSo7urnkN2WjY04EobhmMJYnyu16W"
              alt="Grooms"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sherwani
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A sherwani is a long, fitted, button-down coat that is worn by men
              in South Asia. It is typically knee-length, has long sleeves, and
              is often worn for festive occasions like weddings. Sherwanis are
              usually made from fine fabrics like silk and can be embellished
              with embroidery
            </p>
            <Link
              to="/groms"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more about Grooms
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