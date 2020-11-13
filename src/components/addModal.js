import React from 'react';
import  "../styling/modal.css";


function Modal(OnGroupSubmit,type){
    return(
        <div className="Modal">
            <div className="groupinfo column">
            <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Group Name</span>
  </div>
  <input type="text" className="form-control groupName "  aria-label="Username" aria-describedby="basic-addon1"></input>
</div>
<input type="file"  className="backgroundpic"/>

  <button  type="submit" className=" btn btn-primary newGroup" onClick={OnGroupSubmit}>Submit</button>
            </div>
        </div>
    );
}
 
export default Modal;