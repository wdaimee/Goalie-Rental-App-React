import React from 'react';

export default function TableComponent(props) {
    return (
        <table className="table" style={{padding: "1em"}}>
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
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.request_list.map((item, idx) => {
                    return (
                        <tr>
                            <th scope="row">{idx + 1}</th>
                            <td>{item.requestor.name}</td>
                            <td>{item.requestor.email}</td>
                            <td>{item.sport}</td>
                            <td>{item.skill_level}</td>
                            <td>{item.request_date}</td>
                            <td>{item.request_time}</td>
                            <td>{item.team_name}</td>
                            <td>{item.arena.name}</td>
                            <td>{item.arena.address}</td>
                            <td>{item.city}</td>
                            <td>{item.description}</td>
                            <td><button>EDIT</button></td>
                            <td><button>X</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}