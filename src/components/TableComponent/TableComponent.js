import React from 'react';
import TableEntryOpenComponent from '../TableEntryOpenComponent/TableEntryOpenComponent';


export default function TableComponent(props) {
    let table_data;

    if (props.request_status === 'open') {
        table_data = <TableEntryOpenComponent request_list={props.request_list}/>
    }

    return (
        <div className="table-responsive" style={{height: "60vh", marginTop: "1em"}}>
            {table_data}
        </div>
    )
}