import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr
      className="digi-table__tr digi-table__tr--editable"
      data-js-editable="true"
    >
      <td className="digi-table__td">
        <input
          className="digi-input digi-input--text"
          type="text"
          name="name"
          required="required"
          placeholder="Full name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
      </td>
      <td className="digi-table__td">
        <input
          className="digi-input digi-input--email"
          type="email"
          name="email"
          required="required"
          placeholder="E-Mail address"
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td className="digi-table__td">
        <input
          className="digi-input digi-input--phone"
          type="text"
          name="phone"
          required="required"
          placeholder="Phone number"
          value={editFormData.phone}
          onChange={handleEditFormChange}
        />
      </td>
      <td
        className="digi-table__td digi-table__td--edit-actions"
        data-js-action="edit-row"
      >
        <button type="submit" className="digi-button digi-button--submit digi-button--azure">
          <span className="digi-button__text">Save</span>
        </button>
        <button
          type="button"
          className="digi-button digi-button--inverted-azure"
          onClick={handleCancelClick}
        >
          <span className="digi-button__text">Cancel</span>
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
