import { useState } from "react";

function EquipmentTable({ equipment, fetchEquipment, setEditItem }) {
  const [sortAsc, setSortAsc] = useState(true);

  const deleteItem = async (id) => {
    await fetch(`http://localhost:7000/api/equipment/${id}`, {
      method: "DELETE"
    });
    fetchEquipment();
  };

  // sort by name or type (Bonus)
  const sortByName = () => {
    equipment.sort((a, b) => {
      return sortAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setSortAsc(!sortAsc);
  };

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th
            onClick={sortByName}
            style={{ cursor: "pointer" }}
          >
            Name ⬍
          </th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Cleaned</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {equipment.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>{item.lastCleaned}</td>
            <td>
              <button onClick={() => setEditItem(item)}>Edit</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EquipmentTable;
