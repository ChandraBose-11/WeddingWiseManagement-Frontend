import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiViewBoards, HiUser, HiMail } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutSuccess } from "../Redux/Slice/authSlice";
import { FaCameraRetro } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { HiHomeModern } from "react-icons/hi2";
import { GiPartyPopper } from "react-icons/gi";

const DashboardSidebar = () => {
  const { currentuser } = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabUrl = urlParams.get("tab"); //tab = profile
    if (tabUrl) {
      setTab(tabUrl); //profile
    }
  }, [location.search]);

  const handleSignout = () => {
    dispatch(signOutSuccess());
    localStorage.removeItem("Token");
  };

  return (
    <Sidebar className="w-full md:w-58">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-2 ">
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentuser.Admin ? "Admin" : "User"}
              labelColor="dark"
              as="div"
              className="hover:bg-neutral-200 transition duration-300 ease-in-out"
            >
              Profile
            </Sidebar.Item>
          </Link>
          {/* Publish */}
          {currentuser.Admin && (
            <Sidebar.Collapse icon={HiViewBoards} label="Published">
              {currentuser.Admin && (
                <Link to="/dashboard?tab=resort">
                  <Sidebar.Item
                    active={tab === "resort"}
                    icon={HiHomeModern}
                    labelColor="dark"
                    as="div"
                    className="hover:bg-neutral-200 transition duration-300 ease-in-out"
                  >
                    Add Resort
                  </Sidebar.Item>
                </Link>
              )}

              {currentuser.Admin && (
                <Link to="/dashboard?tab=catering">
                  <Sidebar.Item
                    active={tab === "catering"}
                    icon={IoFastFood}
                    labelColor="dark"
                    as="div"
                    className="hover:bg-neutral-200 transition duration-300 ease-in-out"
                  >
                    Add Catering
                  </Sidebar.Item>
                </Link>
              )}

              {currentuser.Admin && (
                <Link to="/dashboard?tab=photo">
                  <Sidebar.Item
                    active={tab === "photo"}
                    icon={FaCameraRetro}
                    labelColor="dark"
                    as="div"
                    className="hover:bg-neutral-200 transition duration-300 ease-in-out"
                  >
                    Add Photography
                  </Sidebar.Item>
                </Link>
              )}
            </Sidebar.Collapse>
          )}

          <Sidebar.Item
            icon={HiArrowSmRight}
            className="cursor-pointer hover:bg-neutral-200 transition duration-300 ease-in-out"
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashboardSidebar;
