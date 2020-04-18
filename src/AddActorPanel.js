import React from "react";

const AddActorPanel = (props) => {
  return (
    <div className="container-inner">
      <h2>Add Actor</h2>
      <form className="h-form" onSubmit={props.addActor}>
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
      </form>
    </div>
  );
};

export default AddActorPanel;
