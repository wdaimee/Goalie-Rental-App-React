import React from 'react';
import dateFormat from 'dateformat';

export default function TableEntryComponent(props) {
    let header;
    let actionBtn1;
    let actionBtn2;
    if (props.request_status === "pending") {
        header = <h2 style={{marginLeft: "1em"}}>Pending Requests</h2>
        actionBtn1 = <td><button className="btn btn-success">CONFIRM</button></td>
        actionBtn2 = <td><button className="btn btn-danger">KICK</button></td>
    }
    else if (props.request_status === "confirmed") {
        header = <h2 style={{marginLeft: "1em"}}>Confirmed Requests</h2>
    }
    else if (props.request_status === "all") {
        header = <h2 style={{marginLeft: "1em"}}>All Requests</h2>
    }

    return(
        <>
            {header}
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
                            <th scope="col">Goalie</th>
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
                                    {item.goalie ? <td>{item.goalie.name}</td> : <td>No Goalie</td>}
                                    {item.status === 'open'? 
                                        <td><button className="btn btn-secondary">EDIT</button></td> : null
                                    }
                                    {item.status === 'open'? 
                                        <td><button className="btn btn-danger">X</button></td> : null
                                    }
                                    {item.status === 'pending' ?
                                        <td><button className="btn btn-success">CONFIRM</button></td> : null
                                    }
                                    {item.status === 'pending' ?
                                        <td><button className="btn btn-danger">KICK</button></td> : null
                                    }                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </>    
    )
}