import React from 'react';
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const redirect_to_roles = () => {
    history.push('/roles');
  }

  const redirect_to_addmed = () => {
    history.push('/addmed');
  }

  const redirect_to_supply = () => {
    history.push('/supply');
  }

  const redirect_to_track = () => {
    history.push('/track');
  }

  return (
    <div className="container-fluid text-center mt-5" style={{ backgroundColor: '#87CEEB' }}>
      <h2 className="mb-5" style={{ color: '#333' }}>Pharmaceutical Supply Chain</h2>
      <h5 className="mb-4" style={{ color: '#333' }}>Only Owner Can Register Raw material suppliers ,Manufacturers, Distributors and Retailers</h5>
      <button onClick={redirect_to_roles} className="btn btn-primary btn-lg mx-2 mb-4">Register Users</button>
      <h5 className="mb-4" style={{ color: '#333' }}>Only Owner Can Place a New Order</h5>
      <button onClick={redirect_to_addmed} className="btn btn-primary btn-lg mx-2 mb-4">Place New Order</button>
      <h5 className="mb-4" style={{ color: '#333' }}>Control Supply Chain (Users Only)</h5>
      <button onClick={redirect_to_supply} className="btn btn-primary btn-lg mx-2 mb-4">Control Supply Chain</button>
      <h5 className="mb-4" style={{ color: '#333' }}>Track the medicines</h5>
      <button onClick={redirect_to_track} className="btn btn-primary btn-lg mx-2 mb-4">Track Order Details</button>
    </div>
  );
}

export default Home;