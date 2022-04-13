import React from 'react';
import './CSS/ToDo.css'

export default class Header extends React.Component {
    render() {
        return (
            <div className={"ml-auto mr-auto"}>
                <h1 id={"header"}>ToDo List</h1>
            </div>
        )
    }
}