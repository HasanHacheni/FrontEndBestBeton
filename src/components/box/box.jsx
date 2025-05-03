import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { useNavigate } from 'react-router-dom'; // ✅ Ajouter useNavigate
import "./box.css";
import PageAdmin1 from '../page _admin/page_admin';

// Sample client orders
const initialOrders = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    post: "Ingénieur",
    societe: "BétonPro",
    telephone: "0601020304",
    message: "Je souhaite commander 100 dalles alvéolées."
  },
  {
    id: 2,
    name: "Marie Durand",
    email: "marie.durand@example.com",
    post: "Architecte",
    societe: "Durand Architecture",
    telephone: "0654321987",
    message: "Demande de devis pour poutrelles et entrevous."
  },
];

const OrdersAdmin = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const navigate = useNavigate(); // ✅ Créer navigate

  const handleDelete = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
    setSelectedOrders(selectedOrders.filter((orderId) => orderId !== id));
  };

  const handleBulkDelete = () => {
    setOrders(orders.filter((order) => !selectedOrders.includes(order.id)));
    setSelectedOrders([]);
  };

  const handleSelectOrder = (id) => {
    if (selectedOrders.includes(id)) {
      setSelectedOrders(selectedOrders.filter((orderId) => orderId !== id));
    } else {
      setSelectedOrders([...selectedOrders, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map((order) => order.id));
    }
  };

  // ✅ Quand je clique sur un client, naviguer vers la page détail
  const handleViewOrder = (id) => {
    navigate(`/OrdersPage/${id}`);
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <PageAdmin1 />
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="inbox-container">
          {/* Bulk actions */}
          <div className="bulk-actions">
            <label>
              <input
                type="checkbox"
                checked={selectedOrders.length === orders.length && orders.length > 0}
                onChange={handleSelectAll}
              />
              Select All
            </label>
            {selectedOrders.length > 0 && (
              <button className="bulk-delete-btn" onClick={handleBulkDelete}>
                <Trash2 size={16} style={{ marginRight: "5px" }} />
                Delete Selected ({selectedOrders.length})
              </button>
            )}
          </div>

          {/* Orders List */}
          <div className="email-list">
            {orders.map((order) => (
              <div
                key={order.id}
                className="email-item"
                onClick={() => handleViewOrder(order.id)} // ✅ Ajouter le clic sur le bloc
                style={{ cursor: "pointer" }} // ✅ Ajoute la main quand on passe dessus
              >
                <input
                  type="checkbox"
                  checked={selectedOrders.includes(order.id)}
                  onChange={(e) => {
                    e.stopPropagation(); // ✅ empêcher clic sur le checkbox d'ouvrir la page
                    handleSelectOrder(order.id);
                  }}
                  className="email-checkbox"
                />
                <div className="email-content">
                  <div className="email-header">
                    <span className="email-sender">{order.name}</span>
                    <span className="email-date">{order.telephone}</span>
                  </div>
                  <div className="email-subject">
                    <strong>Poste:</strong> {order.post} | <strong>Société:</strong> {order.societe}
                  </div>
                  <div className="email-snippet">
                    <strong>Message:</strong> {order.message}
                  </div>
                  <div className="email-snippet">
                    <strong>Email:</strong> {order.email}
                  </div>
                </div>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // ✅ empêcher clic delete d'ouvrir la page
                    handleDelete(order.id);
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrdersAdmin;
