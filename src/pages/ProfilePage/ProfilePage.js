import React, { Component } from 'react';
import ProfileHeaderComponent from '../../components/ProfileHeaderComponent/ProfileHeaderComponent';
import ProfileCardComponent from '../../components/ProfileCardComponent/ProfileCardComponent';


export default function ProfilePage(props) {
    return(
        <>
            <ProfileHeaderComponent user={props.user}/>
            <ProfileCardComponent user={props.user}/>
        </>    
    )
}

