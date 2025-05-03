import React, { useState } from "react";
import { UserPlus, Edit2, Trash2 } from "lucide-react";
import "./user.css";
import PageAdmin1 from '../page _admin/page_admin'; // Importing the sidebar component

// Initial users
const initialUsers = [];

const UserTable = () => {
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dateAdded: "",
  });

  const openModal = (user = null) => {
    setIsModalOpen(true);
    if (user) {
      setIsEditMode(true);
      setCurrentUser(user);
      setFormData({
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        dateAdded: user.dateAdded,
      });
    } else {
      setIsEditMode(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        dateAdded: "",
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0];
    if (isEditMode) {
      const updatedUsers = users.map((user) =>
        user.id === currentUser.id ? { ...currentUser, ...formData } : user
      );
      setUsers(updatedUsers);
    } else {
      const newUser = { id: Date.now(), ...formData, dateAdded: currentDate };
      setUsers([...users, newUser]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="admin-layout construction-theme">
      {/* Sidebar */}
      <div className="sidebar">
        <PageAdmin1 />
      </div>

      {/* Main content area */}
      <div className="main-content">
        {/* Header */}
        <div className="add-user-header">
          <button className="add-user-btn" onClick={() => openModal()}>
            <UserPlus size={18} style={{ marginRight: "8px" }} />
            Ajouter un utilisateur
          </button>
        </div>

        {/* Table wrapped in a frame */}
        <div className="frame">
          <table className="user-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Mot de passe</th>
                <th>Téléphone</th>
                <th>Date d’ajout</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>{user.dateAdded}</td>
                  <td>
                    <button
                      className="edit-btn"
                      title="Modifier"
                      onClick={() => openModal(user)}
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      className="delete-btn"
                      title="Supprimer"
                      onClick={() => handleDelete(user.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal for adding/editing user, also wrapped in a frame */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content frame">
              <h2>{isEditMode ? "Modifier l'utilisateur" : "Ajouter un utilisateur"}</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Nom:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Mot de passe:
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Téléphone:
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Date d’ajout:
                  <input
                    type="date"
                    name="dateAdded"
                    value={formData.dateAdded || new Date().toISOString().split('T')[0]}
                    onChange={handleChange}
                    required
                    disabled
                  />
                </label>
                <div className="modal-actions">
                  <button type="submit">
                    {isEditMode ? "Mettre à jour" : "Ajouter"}
                  </button>
                  <button type="button" onClick={closeModal}>
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTable;