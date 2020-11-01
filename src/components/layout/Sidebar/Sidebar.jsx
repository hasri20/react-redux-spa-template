import React from "react";

const Sidebar = () => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <button>Dashboard</button>
          </li>
          <li className="nav-item">
            <button>Orders</button>
          </li>
          <li className="nav-item">
            <button>Products</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
