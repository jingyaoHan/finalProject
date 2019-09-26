import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDraw.css'
import Backdrop from "../../UI/Backdrop/Backdrop"
import Aux from "../../../hoc/Auxiliary/Auxiliary"

const sideDrawer = (props) =>{
    let attachedClasses= ['SideDrawer','Close'];
    if(props.open){
        attachedClasses=['SideDrawer','Open']
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <Logo/>
            <nav>
                <NavigationItems />
            </nav>
        </div>

        </Aux>
    );
};
export default sideDrawer;