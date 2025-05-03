import React, { useState, useEffect } from 'react';
import './ajouter articl.css';

const LOCAL_KEY = 'mes_articles_enregistres';

const ArticleManager = () => {
  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState({ name: '', image: '', index: null });
  const [preview, setPreview] = useState(null);

  // Charger depuis localStorage au début
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) {
      setArticles(JSON.parse(saved));
    }
  }, []);

  // Enregistrer dans localStorage chaque fois que les articles changent
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(articles));
  }, [articles]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setForm({ ...form, image: imageUrl });
    setPreview(imageUrl);
  };

  const handleSubmit = () => {
    if (!form.name || !form.image) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const updatedArticles = [...articles];
    if (form.index !== null) {
      updatedArticles[form.index] = { name: form.name, image: form.image };
    } else {
      updatedArticles.push({ name: form.name, image: form.image });
    }

    setArticles(updatedArticles);
    setForm({ name: '', image: '', index: null });
    setPreview(null);
  };

  const handleEdit = (index) => {
    const article = articles[index];
    setForm({ name: article.name, image: article.image, index });
    setPreview(article.image);
  };

  const handleDelete = (index) => {
    const updated = articles.filter((_, i) => i !== index);
    setArticles(updated);
  };

  return (
    <div className="article-container">
      <h2>Gérer les articles</h2>

      <div className="article-form">
        <input
          type="text"
          name="name"
          placeholder="Nom de l'article"
          value={form.name}
          onChange={handleChange}
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {preview && <img src={preview} alt="Preview" className="image-preview" />}
        <button onClick={handleSubmit}>
          {form.index !== null ? 'Modifier' : 'Ajouter'} l'article
        </button>
      </div>

      <div className="article-list">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <h3>{article.name}</h3>
            <img src={article.image} alt={article.name} />
            <div className="actions">
              <button onClick={() => handleEdit(index)}>Modifier</button>
              <button onClick={() => handleDelete(index)}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleManager;
