import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  Navbar,
} from "flowbite-react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toggleTheme } from "../Redux/Slice/themeSlice";
import { signOutSuccess } from "../Redux/Slice/authSlice";

const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentuser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const handleSignout = () => {
    dispatch(signOutSuccess());
    localStorage.removeItem("Token");
    navigate("/");
  };

  return (
    <Navbar className="border-b-2 dark:bg-black fade-in-text sm:cursor-pointer relative z-40">
      <Link
        to="/homepages"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white "
      >
        <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg text-white">
         WeddingWise-Management
        </span>
      </Link>
      <div className="flex gap-2 md:order-2 ">
        {currentuser ? (
          <Dropdown
            className="w-52 ml-16 dark:bg-slate-900 text-white text-ellipsis dark:hover:bg-slate-900 z-50 relative  hover:scale-110"
            arrowIcon={false}
            inline
            label={ 
              <Avatar
                alt="user"
                img={currentuser.profilePicture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-lg text-ellipsis dark:text-white">
                {currentuser.username}
              </span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=profile" >
              <Dropdown.Item >Profile</Dropdown.Item>
            </Link>
            <DropdownDivider />
            <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="purpleToPink" className="hover:scale-105">SignIn</Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"} className="mt-2 text-lg text-neutral-800 hover:scale-110">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/about"}
          as={"div"}
          className="mt-2 text-lg mb-2 text-neutral-800 hover:scale-110"
        >
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Button
          className="w-12 h-9 py-1 mt-1 hover:scale-110"
          gradientDuoTone="purpleToPink"
          pill
          onClick={() => dispatch(toggleTheme())}

        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;