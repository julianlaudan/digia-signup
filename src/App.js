//import {Table} from './components/03-organisms/table/table.js';
// <Table counter={42} />

import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./data.json";

import ReadOnlyRow from "./components/02-molecules/table-row/ReadOnlyRow";
import EditableRow from "./components/02-molecules/table-row/EditableRow";

import "./applications/digi/index.scss";

const App = () => {
  const [users, setUsers] = useState(data);

  // Using two separate useState Hooks for clarity of functions
  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [editUserId, setEditUserId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault(); // prevent form from post request when submitted

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault(); // prevent form from post request when submitted

    // Get name and value of input of event target, save as variables
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  // Add new users
  const handleAddFormSubmit = (event) => {
    event.preventDefault(); // prevent form from post request when submitted
    const newUser = {
      id: nanoid(),
      name: addFormData.name,
      email: addFormData.email,
      phone: addFormData.phone,
    };

    const newUsers = [...users, newUser];
    setUsers(newUsers);
  };

  // Save function for editable rows
  const handleEditFormSubmit = (event) => {
    event.preventDefault(); // prevent form from post request when submitted

    const editedUser = {
      id: editUserId, // row thats edited
      name: editFormData.name,
      email: editFormData.email,
      phone: editFormData.phone,
    };

    const newUsers = [...users];

    // Replace existing user object with the newly created object
    // get index of edited element where user.id matched the editUserId (edited row)
    const index = users.findIndex((user) => user.id === editUserId);

    // update array at given index position with values from edited element
    newUsers[index] = editedUser;
    setUsers(newUsers);

    // finished editing, set contact id to null in order to hide the editableRow
    setEditUserId(null);
  };

  // Handle the edit click on a row
  const handleEditClick = (event, user) => {
    event.preventDefault(); // prevent form from post request when submitted
    setEditUserId(user.id);

    // Populate Edit-Input fields with pre-existing data
    const formValues = {
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
    setEditFormData(formValues);
  };

  // Function to cancel element editing
  const handleCancelClick = () => {
    setEditUserId(null);
  };

  // Delete row function
  const handleDeleteClick = (userId) => {
    // create new array based on current users
    const newUsers = [...users];

    // find row to delete
    const index = users.findIndex((user) => user.id === userId);

    // splice method to remove one user object at given index of array
    newUsers.splice(index, 1);

    // update contacts
    setUsers(newUsers);
  };

  // Render app
  return (
    <main role="main" className="digi-content">
      <div className="digi-content__container">
        <h1 className="digi-heading digi-heading--1">List of participants</h1>
        <form
          className="digi-form digi-form--add-user"
          data-js-form="addParticipant"
          onSubmit={handleAddFormSubmit}
        >
          <input
            className="digi-input digi-input--text"
            type="text"
            name="name"
            id="name"
            required="required"
            placeholder="Full name"
            onChange={handleAddFormChange}
          />
          <input
            className="digi-input digi-input--email"
            type="email"
            name="email"
            id="email"
            required="required"
            placeholder="E-Mail address"
            onChange={handleAddFormChange}
          />
          <input
            className="digi-input digi-input--phone"
            type="text"
            name="phone"
            id="phone"
            required="required"
            placeholder="Phone number"
            onChange={handleAddFormChange}
          />
          <button className="digi-button digi-button--submit" type="submit">
            <span className="digi-button__text">Add new</span>
          </button>
        </form>
        <div className="digi-table-wrapper">
          <form
            className="digi-form digi-form--participants"
            data-js-form="participants"
            onSubmit={handleEditFormSubmit}
          >
            <table
              className="digi-table digi-table--participants"
              data-js-table="participants"
            >
              <thead className="digi-table__thead">
                <tr className="digi-table__tr">
                  <th className="digi-table__th">Name</th>
                  <th className="digi-table__th">E-Mail</th>
                  <th className="digi-table__th">Phone</th>
                  <th className="digit-table__th">
                    <span className="is--visually-hidden">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="digi-table__tbody">
                {users.map((user) => (
                  <Fragment>
                    {/* EditableRow only to appear if the editUserId from the function matched the user.id */}
                    {editUserId === user.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        user={user}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </main>
  );
};

export default App;
