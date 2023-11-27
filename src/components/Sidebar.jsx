/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function Sidebar() {
  return (
    <div
      className={'p-4 bg-secondary'}
      style={{ width: 300, minHeight: '100dvh' }}
    >
      <div className="font-logo text-center mb-5">
        <h2 className="fs-5 my-4 font-primary fw-bold">Backoffice V1.0.0</h2>
        <h2 className="fs-2">Warung Makan</h2>
        <h2 className="text-primary fs-2">Bahari</h2>
      </div>
      <nav>
        <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
          <p className="fw-bold">Dashboard</p>
          <li
            className="cursor-pointer text-primary"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="true"
          >
            <i className="bi bi-app-indicator me-3"></i>
            <span>Dashboard</span>
            <i className="bi bi-caret-down-fill ms-3"></i>
          </li>
          <div className="collapse" id="dashboard-collapse">
            <ul className="text-primary cursor-pointer d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
              <li className="cursor-pointer">
                <i className="bi bi-house me-3"></i>
                <span>Home</span>
              </li>
              <li className="cursor-pointer">
                <i className="bi bi-egg-fried me-3"></i>
                <span>Menu</span>
              </li>
              <li className="cursor-pointer">
                <i className="bi bi-view-stacked me-3"></i>
                <span>Table</span>
              </li>
              <li className="cursor-pointer">
                <i className="bi bi-receipt-cutoff me-3"></i>
                <span>Transaction</span>
              </li>
              <li className="cursor-pointer">
                <i className="bi bi-person me-3"></i>
                <span>Admin</span>
              </li>
            </ul>
          </div>
          <p className="fw-bold mt-4">Settings</p>
          <li className="cursor-pointer text-primary">
            <i className="bi bi-person me-3"></i>
            <span>User</span>
          </li>
          <hr />
          <li className="text-primary">
            <i className="bi bi-box-arrow-right me-3"></i>
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}