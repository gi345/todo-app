import React from "react";

function CompletedTasks({ tasks }) {
  return (
    <div className="tasks">
      <h3>Completed Tasks</h3>
      {tasks.length === 0 ? (
        <p>No completed tasks</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task completed">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <small>Completed on: {task.dateAdded}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default CompletedTasks;
