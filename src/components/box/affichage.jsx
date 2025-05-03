import React from 'react';
import { useParams } from 'react-router-dom'; // ✅ ajouter
import './affichage.css'; 

const orders = [
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

const OrdersPage = () => {
  const { id } = useParams(); // ✅ récupérer id
  const order = orders.find(order => order.id === parseInt(id)); // chercher l'order

  if (!order) {
    return <div>Commande non trouvée</div>;
  }

  return (
    <div className="orders-container">
      <h1 className="orders-title">Détail de la commande</h1>
      <div className="order-card">
        <h2 className="order-name">{order.name}</h2>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Poste:</strong> {order.post}</p>
        <p><strong>Société:</strong> {order.societe}</p>
        <p><strong>Téléphone:</strong> {order.telephone}</p>
        <p><strong>Message:</strong> {order.message}</p>
      </div>
    </div>
  );
};

export default OrdersPage;
