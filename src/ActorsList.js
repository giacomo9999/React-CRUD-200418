import React from "react";

const ActorsList = (props) => {
  const actorTable = props.actorsData.map((actor) => (
    <tr key={`ACT_${actor.id}`}>
      <td>{actor.id}</td>
      <td>{actor.roleName}</td>
      <td>{actor.actorName}</td>
      <td>
        <button onClick={() => props.editActor(actor)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.deleteActor(actor.id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Role</th>
            <th>Actor Name</th>
          </tr>
        </thead>
        <tbody>{actorTable}</tbody>
      </table>
    </div>
  );
};

export default ActorsList;
