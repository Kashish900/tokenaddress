import React, { Fragment } from 'react';
import { Si1Password } from "react-icons/si";
import { MyTokenData } from '../data/MyData';

const tokendata = MyTokenData;

function MainContent() {
    return (
        <Fragment>
            <div  className='row'>
            <h4  className='text-white'>Token Search Results</h4>
            </div>


        <div  className='container-fluid maincontentcontainer'>
             {/* row1 */}
            <div className="row">
                {tokendata.map((d)=>{
                    return (
                        <Fragment>
                        <div className="col-sm-6 col-md-3  mb-3 px-4  w" >
                        <div className="card bgbox text-white">
                            <div className="card-body bgbox rounded">
                                <div  className='row'>
                                <div className='col-9'>
                                <table  className='text-white'>
                                    <tr> <th colSpan={2}><h5>Basic Info</h5></th></tr>
                                    <tr>
                                        <td>Pair Created At</td>
                                        <td   className='ps-4'>{d.created}</td>
                                    </tr>
                                    <tr>
                                        <td>Symbol</td>
                                        <td   className='ps-4'>{d.symbol}</td>
                                    </tr>
                                    <tr>
                                        <td>Doc id</td>
                                        <td   className='ps-4'>{d.docid}</td>
                                    </tr>
                                    <tr>
                                        <td>Pair Address</td>
                                        <td   className='ps-4'>{d.pairAddress}</td>
                                    </tr>
                                </table>
                                </div>
                                <div className='cardbutton  col-3'>
                                <Si1Password  size={25}/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3  mb-3 px-4">
                        <div className="card bgbox text-white">
                            <div className="card-body bgbox rounded">
                                <div  className='row'>
                                <div className='col-9'>
                                <table  className='text-white'>
                                    <tr> <th colSpan={2}><h5>Base Token</h5></th></tr>
                                    <tr>
                                        <td>Name</td>
                                        <td   className='ps-4'>{d.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Symbol</td>
                                        <td   className='ps-4'>{d.symbol}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td   className='ps-4'>{d.pairAddress}</td>
                                    </tr>
                                </table>
                                </div>
                                <div className='cardbutton  col-3'>
                                <Si1Password  size={25}/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-sm-6 col-md-3  mb-3 px-4">
                        <div className="card bgbox text-white">
                            <div className="card-body bgbox rounded">
                                <div  className='row'>
                                <div className='col-9'>
                                <table  className='text-white'>
                                    <tr> <th colSpan={2}><h5>Quote Token</h5></th></tr>
                                    <tr>
                                        <td>Name</td>
                                        <td   className='ps-4'>{d.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Symbol</td>
                                        <td   className='ps-4'>{d.symbol}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td   className='ps-4'>{d.pairAddress}</td>
                                    </tr>
                                </table>
                                </div>
                                <div className='cardbutton  col-3'>
                                <Si1Password  size={25}/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3  mb-3 px-4">
                        <div className="card bgbox text-white">
                            <div className="card-body bgbox rounded">
                                <div  className='row'>
                                <div className='col-9'>
                                <table  className='text-white'>
                                    <tr> <th colSpan={2}><h5>Price</h5></th></tr>
                                    <tr>
                                        <td>Price Native</td>
                                        <td   className='ps-4'>{d.pricenative}</td>
                                    </tr>
                                    <tr>
                                        <td>Price USD</td>
                                        <td   className='ps-4'>{d.priceusd}</td>
                                    </tr>
                                </table>
                                </div>
                                <div className='cardbutton  col-3'>
                                <Si1Password  size={25}/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Fragment>
                    )
                })}


            </div>


        </div>
        </Fragment>
    );
}

export default MainContent;
