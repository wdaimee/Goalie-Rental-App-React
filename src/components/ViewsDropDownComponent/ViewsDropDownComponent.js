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
            <div className="col-sm-6">
            <Select options={statusList} 
                    name="status" 
                    value={props.request_status}
                    onChange={({ value }) => props.handleChangeSelectBox(value, "request_status")} />
            </div>
        </>    
    )
}