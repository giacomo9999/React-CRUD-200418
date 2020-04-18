import React from "react";

const EditActorPanel = (props) => {
  return (
    <div className="container-inner">
      <h2>Edit Actor</h2>
      <form className="h-form" onSubmit={props.updateActor}>
        <label className="h-label">Role</label>
        <input
          className="h-input"
          type="text"
          name="tempRoleName"
          value={props.tempRoleName}
          onChange={props.handleInputChange}
        />
        <label className="h-label">Actor</label>
        <input
          className="h-input"
          type="text"
          name="tempActorName"
          value={props.tempActorName}
          onChange={props.handleInputChange}
        />
        <button>Submit</button>
        <button onClick={() => props.toggleEditPanel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditActorPanel;
