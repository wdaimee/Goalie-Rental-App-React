import React from 'react';
import TableEntryOpenComponent from '../TableEntryOpenComponent/TableEntryOpenComponent';
import TableEntryComponent from '../TableEntryComponent/TableEntryComponent';


export default function TableComponent(props) {
    let table_data;

    if (props.request_status === 'open') {
        table_data = <TableEntryOpenComponent request_list={props.request_list} 
                                              handleDeleteClick={props.handleDeleteClick}/>
    }

    else {
        table_data = <TableEntryComponent user={props.user}
                                          request_list={props.request_list}
                                          request_status={props.request_status}
                                          handleConfirmClick={props.handleConfirmClick}
                                          handleDeleteClick={props.handleDeleteClick}
                                          handleKickClick={props.handleKickClick} />
    }

    return (
        <div className="table-responsive" style={{height: "60vh", marginTop: "1em"}}>
            {table_data}
        </div>
    )
}