import React from "react";

export default function Dashboard({ loggedInUser }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome, {loggedInUser}!</h1>
      <p>This is your Family Planner dashboard.</p>
      {/* Add your planner dashboard content here */}
    </div>
  );
}
