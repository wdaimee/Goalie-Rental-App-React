import React from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

export default function TableEntryOpenComponent(props) {
    return(
        <>
            <h2 style={{marginLeft: "1em"}}>Open Requests</h2>
                <table className="table" style={{marginTop: 0}}>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Requestor</th>
                            <th scope="col">Email</th>
                            <th scope="col">Sport</th>
                            <th scope="col">Skill Level</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Team Name</th>
                            <th scope="col">Arena</th>
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.request_list.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{item.requestor.name}</td>
                                    <td>{item.requestor.email}</td>
                                    <td>{item.sport.toUpperCase()}</td>
                                    <td>{item.skill_level}</td>
                                    <td>{dateFormat(item.request_date, "mmmmm dS, yyyy")}</td>
                                    <td>{item.request_time}</td>
                                    <td>{item.team_name}</td>
                                    <td>{item.arena.name}</td>
                                    <td>{item.arena.address}</td>
                                    <td>{item.city}</td>
                                    <td>{item.description}</td>
                                    <td>{item.status.toUpperCase()}</td>
                                    <Link className="btn btn-secondary"
                                          to={{
                                              pathname: '/requests/edit',
                                              state: {item}
                                          }}>EDIT</Link>
                                    <td><button className="btn btn-danger" onClick={() => props.handleDeleteClick(item._id)} style={{textAlign: "center"}}>X</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </>    
    )
}