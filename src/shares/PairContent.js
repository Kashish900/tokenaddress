import React from 'react';
import { Fragment } from 'react';
import { Si1Password } from "react-icons/si";
import { MyPairData } from '../data/MyData';
import { FaTractor } from 'react-icons/fa';

const pairdata = MyPairData;

function PairContent(){
    return (
        <Fragment>
        <h4  className='text-white'>Pair Search Results</h4>

        <div className="row">
            {pairdata.map((d)=>{
                return(
                    <Fragment>
                         <div className="col-sm-3 mb-3 px-4">
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
                                <td   className='ps-4'>"{d.docid}</td>
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
            <div className="col-sm-3 mb-3 px-4">
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
            <div className="col-sm-3 mb-3 px-4">
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
            <div className="col-sm-3 mb-3 px-4">
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



    </Fragment>
    );
}

export default PairContent;
