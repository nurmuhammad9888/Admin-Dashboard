import React from 'react';
import "./tickets.css"
export const Tickets = () => {
    const ticketsObj = [
        {
        name:"Finish ticket update",
        number:"Urgent"
        },
        {
        name:"Create new ticket example",
        number:"New"
        },
        {
        name:"Update ticket report",
        number:"Default"
        },
    ]

    return (
        <>
            <div className="tasks">
                <div className='tasks-text-wrap d-flex align-items-center justify-content-between'>
                    <h2 className="tasks-title">Tasks</h2>
                    <a className="tasks-link" href="#">View all</a>
                </div>
                <p className="tasks-text">Today</p>

                <ul className="tasks-list list-unstyled mb-0">
                    <li className='tickets-input-wrap'>
                        <input className='tickets-input' type="text" name="todo-list" placeholder='Create new task'/>
                        <span className='plus'></span>
                    </li>
                    {ticketsObj.map(el =>(
                    <li className="tasks-item tickets-item">
                        <div className='d-flex align-items-center'>
                            <label className='tickets-label'>
                            <input className='tickets-input-check visually-hidden' type="checkbox" />
                            <span className='tickets-input-check-sapn'></span>
                            </label>
                            <p className="tasks-item-text">{el.name}</p>
                        </div>
                        <span className='tickets-item-number'>{el.number}</span>
                    </li>
                    ))}
                </ul>

            </div>
        </>
    );
};
