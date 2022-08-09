import React from "react";

const ReadOnlyRow = ({ user, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={user.id} className="digi-table__tr">
      <td key={user.name} className="digi-table__td">
        {user.name}
      </td>
      <td key={user.email} className="digi-table__td">
        {user.email}
      </td>
      <td key={user.phone} className="digi-table__td">
        {user.phone}
      </td>
      <td className="digi-table__td digi-table__td--actions">
        <button
          type="button"
          className="digi-button digi-button--icon-only"
          onClick={(event) => handleEditClick(event, user)}
        >
          <span className="digi-button__text">Edit</span>
          <span className="digi-icon digi-icon--pen"></span>
        </button>
        <button type="button" className="digi-button digi-button--icon-only" onClick={() => handleDeleteClick(user.id)}>
          <span className="digi-button__text">Delete</span>
          <span className="digi-icon digi-icon--pen"></span>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
