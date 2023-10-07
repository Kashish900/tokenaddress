import React from 'react';

function ConnectModal(){
    return (
        <div className="modal fade" id="connect" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modalcolour">
                <div className="modal-header"> 
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Connect to NFtify</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <label className="form-label">Email address</label>
                    <input type='email' className='form-control' placeholder='email id'/>
                    <label className="form-label">password</label>
                    <input type='password' className='form-control' placeholder='password'/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-dark text-white px-4 py-2" data-bs-dismiss="modal">Exit</button>
                    <button type="button" className="btn connectbtn text-white  px-4 py-2">Connect</button>
                </div>
                </div>
            </div>
            </div>
    );
}

export default ConnectModal;
