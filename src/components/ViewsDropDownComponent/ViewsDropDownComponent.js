import React from 'react';
import Select from 'react-select';

const statusList = [
    {value: "open", label: "OPEN"},
    {value: "confirmed", label: "CONFIRMED"},
    {value: "pending", label: "PENDING"},
    {value: "all", label: "ALL"}
]

export default function ViewsDropDownComponent(props) {
    return(
        <>
            <div className="col-sm-6" style={{marginBottom: "2em"}}>
                <h2 className="display-6" style={{margin: "0.5em"}}>View a List of Games By Status:</h2>
                <Select style={{marginLeft: "10em"}}
                        options={statusList} 
                        name="status" 
                        value={{label: props.request_status.toUpperCase() + ` (${props.request_list.length})`}}
                        onChange={({ value }) => props.handleChangeSelectBox(value, "request_status")} />
            </div>
        </>    
    )
}