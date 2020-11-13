import React, { Component } from 'react';
import Family from './family';
class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="main" style={{height:"100%",  width:"100%"}}>
                <Family/>

            </div>
         );
    }
}
 
export default Main;