import React, { Component } from "react";
import "./App.css";

import ActorsList from "./ActorsList";
import EditActorPanel from "./EditActorPanel";
import AddActorPanel from "./AddActorPanel";

class App extends Component {
  state = {
    editPanelOpen: false,
    runningIdValue: 4,
    tempId: null,
    tempRoleName: "",
    tempActorName: "",
    actorsData: [
      { id: 1, roleName: "Capt. Kirk", actorName: "William Shatner" },
      { id: 2, roleName: "Officer Spock", actorName: "Leonard Nimoy" },
      { id: 3, roleName: "Lt. Uhura", actorName: "Nichelle Nichols" },
    ],
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleEditPanel = () => {
    this.setState({
      editPanelOpen: false,
      tempId: null,
      tempRoleName: "",
      tempActorName: "",
    });
  };

  addActor = (e) => {
    e.preventDefault();
    console.log(
      `addActor...${this.state.tempRoleName} ${this.state.tempActorName}`
    );
    const newActor = {
      id: this.state.runningIdValue,
      roleName: this.state.tempRoleName,
      actorName: this.state.tempActorName,
    };
    this.setState({
      runningIdValue: this.state.runningIdValue + 1,
      tempRoleName: "",
      tempActorName: "",
      actorsData: [...this.state.actorsData, newActor],
    });
  };

  editActor = (actor) => {
    console.log(`editActor...${actor}`);
    this.setState({
      editPanelOpen: true,
      tempId: actor.id,
      tempRoleName: actor.roleName,
      tempActorName: actor.actorName,
    });
  };

  updateActor = (e) => {
    e.preventDefault();
    console.log(`updateActor...`);
    const updatedActor = {
      id: this.state.tempId,
      roleName: this.state.tempRoleName,
      actorName: this.state.tempActorName,
    };
    this.setState({
      actorsData: this.state.actorsData.map((actor) =>
        actor.id === this.state.tempId ? updatedActor : actor
      ),
    });
    this.toggleEditPanel();
  };

  deleteActor = (id) => {
    console.log(`deleteActor...`);
    this.setState({
      actorsData: this.state.actorsData.filter((actor) => actor.id !== id),
    });
  };

  render() {
    return (
      <div className="container-outer">
        <ActorsList
          actorsData={this.state.actorsData}
          deleteActor={this.deleteActor}
          editActor={this.editActor}
        />
        {this.state.editPanelOpen ? (
          <EditActorPanel
            handleInputChange={this.handleInputChange}
            tempActorName={this.state.tempActorName}
            tempRoleName={this.state.tempRoleName}
            updateActor={this.updateActor}
            toggleEditPanel={this.toggleEditPanel}
          />
        ) : (
          <AddActorPanel
            handleInputChange={this.handleInputChange}
            tempActorName={this.state.tempActorName}
            tempRoleName={this.state.tempRoleName}
            addActor={this.addActor}
          />
        )}
      </div>
    );
  }
}

export default App;
