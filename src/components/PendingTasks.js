import React from "react";

function PendingTasks({ tasks, completeTask, deleteTask }) {
  return (
    <div className="tasks">
      <h3>Pending Tasks</h3>
      {tasks.length === 0 ? (
        <p>No pending tasks</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <small>Added: {task.dateAdded}</small>
            <div className="buttons">
              <button onClick={() => completeTask(task.id)} className="complete-btn">Complete</button>
              <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PendingTasks;
