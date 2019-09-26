import React from 'react';
import Aux from '../Auxiliary/Auxiliary';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDraw/SideDraw'
class Layout extends React.Component  {
    state={
        showSideDrawer:true
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler=()=>{
        //in case to have unexpected result if it asnych
        this.setState((prevState)=>{
            return {showSideDrawer:!this.state.showSideDrawer}
    });
    }
render(){
    return(
        <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <main className='content'>
                {this.props.children}
            </main>
        </Aux>
    )

}

}



export default Layout;