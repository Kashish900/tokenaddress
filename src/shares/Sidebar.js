import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitterSquare,FaInstagramSquare,FaFacebookSquare } from 'react-icons/fa';
import mylogo from '../images/nftifylogo.png';




function Sidebar(){

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark  mainrow" >
        <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4"><img className='img-fluid' src={mylogo} alt='logo' /></span>
        </Link>
        <hr />
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <Link to='tokenaddress'  className="nav-link  py-3 text-white  sidebarlink">Token Address</Link>
          </li>
          <li>
            <Link to='pairaddress'   className="nav-link py-3  text-white  sidebarlink" >Pair Address</Link>
          </li>
        </ul>
        <hr />
        <div className='row'>
          <div  className='  offset-1 col-3 iconcolor'><FaTwitterSquare  size={30}/></div>
          <div  className='col-3  iconcolor'><FaInstagramSquare  size={30}/></div>
          <div  className='col-3  iconcolor'><FaFacebookSquare  size={30}/></div>
        </div>
      </div>
    );
}




export default Sidebar;
