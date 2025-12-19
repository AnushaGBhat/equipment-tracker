import { useEffect, useState } from "react";
import EquipmentForm from "./components/EquipmentForm";
import EquipmentTable from "./components/EquipmentTable";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [editItem, setEditItem] = useState(null);

  // search state(Bonus)
  const [search, setSearch] = useState("");

  const fetchEquipment = async () => {
    const res = await fetch("http://localhost:7000/api/equipment");
    const data = await res.json();
    setEquipment(data);
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  // filter equipment based on search(Bonus)
  const filteredEquipment = equipment.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Equipment Tracker</h2>

      {/* SEARCH BOX */}
      <input
        type="text"
        placeholder="Search by name or type"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          marginBottom: "15px",
          padding: "6px",
          width: "250px"
        }}
      />

      <EquipmentForm
        fetchEquipment={fetchEquipment}
        editItem={editItem}
        setEditItem={setEditItem}
      />

      <EquipmentTable
        equipment={filteredEquipment}
        fetchEquipment={fetchEquipment}
        setEditItem={setEditItem}
      />
    </div>
  );
}

export default App;
