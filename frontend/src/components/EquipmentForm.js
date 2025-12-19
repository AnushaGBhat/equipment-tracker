import { useEffect, useState } from "react";

function EquipmentForm({ fetchEquipment, editItem, setEditItem }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    status: "",
    lastCleaned: ""
  });

  useEffect(() => {
    if (editItem) {
      setForm(editItem);
    }
  }, [editItem]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.type || !form.status) {
      alert("Please fill all required fields");
      return;
    }

    const url = editItem
      ? `http://localhost:7000/api/equipment/${editItem.id}`
      : "http://localhost:7000/api/equipment";

    const method = editItem ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setForm({ name: "", type: "", status: "", lastCleaned: "" });
    setEditItem(null);
    fetchEquipment();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <select name="type" value={form.type} onChange={handleChange}>
        <option value="">Select Type</option>
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>

      <select name="status" value={form.status} onChange={handleChange}>
        <option value="">Select Status</option>
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>

      <input
        type="date"
        name="lastCleaned"
        value={form.lastCleaned}
        onChange={handleChange}
      />

      <button type="submit">
        {editItem ? "Update Equipment" : "Add Equipment"}
      </button>
    </form>
  );
}

export default EquipmentForm;
