import React from 'react';
import TableEntryGamesComponent from '../../components/TableEntryGamesComponent/TableEntryGamesComponent';

export default function TableComponentGames(props) {
    return (
        <div className="table-responsive" style={{height: "60vh", marginTop: "1em"}}>
            <TableEntryGamesComponent request_list={props.request_list} />
        </div>
    )
}