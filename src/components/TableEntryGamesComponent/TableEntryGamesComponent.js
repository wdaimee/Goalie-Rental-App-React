import React from 'react';
import dateFormat from 'dateformat';

export default function TableEntryGamesComponent(props) {
    return(
        <>
            <h2 style={{marginLeft: "1em"}}>All Open Games</h2>
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
                            <th scope="col">Join</th>
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
                                    <td>{item.skill_level.str}</td>
                                    <td>{dateFormat(item.request_date, "UTC:dddd, mmmm dS, yyyy")}</td>
                                    <td>{item.request_time}</td>
                                    <td>{item.team_name}</td>
                                    <td>{item.arena.name}</td>
                                    <td>{item.arena.address}</td>
                                    <td>{item.city}</td>
                                    <td>{item.description}</td>
                                    <td><button className="btn btn-success" onClick={() => props.handleJoinClick(item._id, props.user)}>JOIN</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </>    
    )
}