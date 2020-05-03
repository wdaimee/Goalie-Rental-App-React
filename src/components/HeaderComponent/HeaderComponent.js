import React from 'react';
import style from './HeaderComponent.module.css'

export default function HeaderComponent() {
    return (
        <div className={style.header}>
            <div className={style.displayName}>
                gÜber
            </div>
            <div className={style.displayMoto}>
                The Goalie Rental Company
            </div>
        </div>
    );
}