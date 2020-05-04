import React from 'react';
import CreateRequestFormComponent from '../../components/CreateRequestFormComponent/CreateRequestFormComponent';

export default function CreateRequest(props) {
    return (
        <CreateRequestFormComponent user={props.user} history={props.history}/>
    );
}