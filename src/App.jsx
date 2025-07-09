import React, { useState } from "react";

const skills = [
  {
    icon: "🟢",
    nameEN: "Firm Conditions ◎",
    nameES: "Terreno Firme ◎",
    descriptionEN: "Increase performance on firm ground.",
    descriptionES: "Aumenta el rendimiento en terreno firme.",
    type: "Terreno"
  },
  {
    icon: "💙",
    nameEN: "Corner Recovery +",
    nameES: "Recuperación en Curva +",
    descriptionEN: "Slightly recover endurance on a corner with efficient turning.",
    descriptionES: "Recupera ligeramente resistencia en una curva con giro eficiente.",
    type: "Recuperación"
  },
  {
    icon: "🟣",
    nameEN: "Wallflower",
    nameES: "Wallflower",
    descriptionEN: "Moderately decrease performance when at least 5 other runners are using the same strategy.",
    descriptionES: "Disminuye moderadamente el rendimiento cuando al menos 5 corredoras usan la misma estrategia.",
    type: "Debuff"
  }
];

function App() {
  const [search, setSearch] = useState("");

  const filteredSkills = skills.filter(skill =>
    skill.nameEN.toLowerCase().includes(search.toLowerCase()) ||
    skill.nameES.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Habilidades - Uma Musume en Español</h1>
      <input
        type="text"
        placeholder="Buscar habilidad..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="rounded-2xl shadow-md border p-4">
            <div className="text-xl">{skill.icon} {skill.nameEN} / {skill.nameES}</div>
            <div className="text-sm text-gray-600 mt-2">
              🔹 EN: {skill.descriptionEN}<br />
              🔸 ES: {skill.descriptionES}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
