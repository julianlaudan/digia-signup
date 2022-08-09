import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const ReadOnlyRow = ({
  user,
  handleEditClick,
  handleDeleteClick,
}) => {
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
      <td
        className="digi-table__td digi-table__td--actions"
        data-js-action="edit-row"
      >
        <button
          type="button"
          className="digi-button digi-button--icon-only"
          onClick={(event) => handleEditClick(event, user)}
        >
          <span className="digi-button__text">Edit</span>
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button
          type="button"
          className="digi-button digi-button--icon-only"
          onClick={() => handleDeleteClick(user.id)}
        >
          <span className="digi-button__text">Delete</span>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
