import React from 'react';
import Sidebar from '../shares/Sidebar';
import Searchbar from '../shares/Searchbar';
import MainContent from '../shares/MainContent';
import PairContent from '../shares/PairContent';
import { Outlet } from 'react-router-dom';

function Home() {
    return (
        <div className='container-fluid homemain  g-0'>
            <div className='row g-0'>
                <div className='col-2'  id='sidebarblock'>
                    <Sidebar />
                </div>
                <div className='col-10'>
                    <div className='row g-0 searchbar mt-3 mb-4  ms-5'>
                        <Searchbar />
                    </div>
                    <div className='row g-0 px-4  overflow-hidden' id='maincontentbox'>
                    <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <div className='row  footer  g-0'>
                <h4 className='text-center p-3'>Copyright@2023</h4>
            </div>
        </div>
    );
}




export default Home;
