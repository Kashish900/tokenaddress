import React from 'react';
import { Fragment } from 'react';
import ConnectModal from './ConnectModal';

function Searchbar(){
    return (
        <Fragment>
        <div  className='col-4'>
            <input className="form-control  bg-dark text-white   rounded-pill" type="search" id='searchbox' placeholder="Search"></input> 
        </div>
        <div className='col-2'>
            <button type="button" className="btn connectbtn text-white  px-4 py-2  rounded-pill"   data-bs-toggle="modal" data-bs-target="#connect">Connect</button>
        </div>
        <ConnectModal/>
        </Fragment>
    );
}

export default Searchbar;
