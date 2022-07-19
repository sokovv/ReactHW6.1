 import { v4 as uuidv4 } from "uuid";
 import React, { useState } from "react";
 import ClocksList from "./ClocksList";

export default function FormClock() {
  const clearForm = { name: "", timeZone: ""};
  const [form, setForm] = useState(clearForm);
  const [clocks, setClocks] = useState([]);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (form.name === "" || form.timeZone === "") {
      return;
    }

    setClocks((prev) => [
        ...prev,
        { id: uuidv4(), name:form.name, timeZone: form.timeZone},
      ]);
    setForm(clearForm);
  };

  const handleChange = ({ target }) => {
    setForm((prevForm) => ({ ...prevForm, [target.name]: target.value }));
  };

  const handleDelete = (id) => {
    return () => {
        setClocks(clocks.filter((item) => item.id !== id));
    }
  }


  return (
    <><form onSubmit={handleSubmit} className="FormClock">
          <div className="name">
              <label htmlFor="name">Название</label>
              <input type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange} />
          </div>
          <div className="timeZone">
              <label htmlFor="timeZone">Временная зона(час)</label>
              <input  type="number"
                  id="timeZone"
                  name="timeZone"
                  value={form.timeZone}
                  onChange={handleChange} />
          </div>
          <button className="btn" type="submit">
              Добавить
          </button>
      </form><ClocksList clocks={clocks} onDelete={handleDelete} /></>
  );
}
