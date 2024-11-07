import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardProfile from '../Components/DashboardProfile';
import DashboardSidebar from '../Components/DashboardSidebar';


const Dashboard = () => {
    const location = useLocation();
  const [tab, setTab] = useState();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabUrl = urlParams.get("tab");
    if (tabUrl) {
      setTab(tabUrl); // profile
    }
  }, [location.search]);
    return (
        <div className='min-h-screen flex flex-col md:flex-row dark:bg-black'>
            <div className='md:w-58' >
              <DashboardSidebar/>
            </div>
            {tab === 'profile' && <DashboardProfile/>}
            {tab === 'dashboardhome' && <DashboardHome/>}
        </div>
    );
};

export default Dashboard;