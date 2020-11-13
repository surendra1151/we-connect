import React, { Component } from 'react';
import "../styling/family.css";
import Modal from "./addModal.js"




class Family extends Component {
    state = {

        show:false
      }

      showModal=e=>{
      this.setState({show:true});

      //console.log(this.state.show);
      }


   
    render() { 
        return (  
            
            <div className="family" >
               <ul className="list row" >
                   <li className="family_list">
                       <h3 className="family_text">Family</h3>
                       
                   </li>
                   <li className="friend_list">
                   <h3 className="family_text">Friends</h3>
                   </li>

                   <li className="relatives_list">
                   <h3 className="family_text">Relatives</h3>
                   </li>
                  
               </ul>

               <ul className="secondlist row" >
                   <li className="office_list">
                       <h3 className="family_text">Office</h3>
                       
                   </li>
                   <li className="school_list">
                   <h3 className="family_text">School</h3>
                   </li>

                   <li className="neighbours_list">
                   <h3 className="family_text">Neighbours</h3>
                   </li>
                  
               </ul>
               <div className="row">
               <img className="plus" onClick={e=>{this.showModal();}} src={require("../images/add.png")}  />
                  
                   {this.state.show &&
                <Modal show={this.state.show} ref={el => (this.modal = el)} />}
               </div>
              

            </div>

        );
    }
}
 
export default Family;