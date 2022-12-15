import React from 'react';
import "./todays.css";
import dashbord from "../../assets/images/graph1.png"

export const Todays = (props) => {
    
    const todosobj = [
        {
        name:"Resolved",
        number:449
        },
        {
        name:"Resolved",
        number:426
        },
        {
        name:"Average first response time",
        number:"33m"
        },
        {
        name:"Average response time",
        number:"3h 8m"
        },
        {
        name:"Resolution within SLA",
        number:"94%"
        }
    ]
    

    return (
        <div className='today-wrapper'>
            <div className='today-left'>
                <h2 className='todays-title'>Today’s trends</h2>
                <div className='d-flex justify-content-between'>
                    <time className="todays-time">as of 25 May 2019, 09:41 PM</time>
                    <div className='d-flex'>
                        <p className="todays-text">Today</p>
                        <p className="todays-text ms-5">Yesterday</p>
                    </div>
                </div>
                <div className="images-wrap">
                    <img src={dashbord} width={720} height={406} alt="dashbord" />
                </div>
            </div>
            <div className='w-100'>
                <ul className="today-list list-unstyled">
                    {todosobj.map((el) =>(
                            <li className="today-item">
                                <p className="today-item-text">{el.name}</p>
                                <strong className='today-number'>{el.number}</strong>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

