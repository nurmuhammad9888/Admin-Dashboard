import React from 'react';
import { Tickets } from '../Tickets/Tickets';
import "./tasks.css"

export const Tasks = () => {
    const tasksobj= [
        {
            name:"Waiting on Feature Request",
            number:4238
        },
        {
            name:"Awaiting Customer Response",
            number:1005
        },
        {
            name:"Awaiting Developer Fix",
            number:914
        },
        {
            name:"Pending",
            number:281
        },
    ]

    return (
        <div className='tasks-wrapper'>
            <div className="tasks">
                <div className='tasks-text-wrap d-flex align-items-center justify-content-between'>
                    <h2 className="tasks-title">Unresolved tickets</h2>
                    <a className="tasks-link" href="#">View details</a>
                </div>
                <p className="tasks-text">Group: <span className='tasks-span'>Support</span></p>

                <ul className="tasks-list list-unstyled mb-0">
                    {tasksobj.map(el =>(
                    <li className="tasks-item">
                        <p className="tasks-item-text">{el.name}</p>
                        <span className='tasks-item-number'>{el.number}</span>
                    </li>
                    ))}
                </ul>
            </div>
            
                <Tickets/>
            
        </div>
    );
};
