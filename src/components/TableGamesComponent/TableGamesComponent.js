import React from 'react';
import TableEntryGamesComponent from '../../components/TableEntryGamesComponent/TableEntryGamesComponent';

export default function TableGamesComponent(props) {
    return (
        <div className="table-responsive" style={{height: "60vh", marginTop: "1em"}}>
            <TableEntryGamesComponent user={props.user} request_list={props.request_list} handleJoinClick={props.handleJoinClick} />
        </div>
    )
}