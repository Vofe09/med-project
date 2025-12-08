import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MaterialsPage() {
  const [materials, setMaterials] = useState([]);
  const [filteredMaterials, setFilteredMaterials] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Все");

  const router = useRouter();

  useEffect(() => {
    fetch("/materials.json")
      .then(res => res.json())
      .then(data => {
        setMaterials(data);
        setFilteredMaterials(data);
      });
  }, []);

  const categories = ["Все", "Учебно-методическое пособие", "Статьи", "Учебники"];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === "Все") {
      setFilteredMaterials(materials);
    } else {
      setFilteredMaterials(materials.filter(mat => mat.category === category));
    }
  };

  const openMaterialDetail = (id) => {
    router.push(`/material-detail/${id}`);
  };

  return (
    <div>
      <header>
        <nav>
          <a href="/">О нас</a>
          <a href="/forum">Форум</a>
          <a href="/conference">Конференции</a>
          <a href="#" className="active">Материалы</a>
        </nav>
      </header>

      <section className="materials-categories">
        <h1>Категории материалов</h1>
        <div className="categories-list">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="materials-cards">
        {filteredMaterials.map(mat => (
          <div
            key={mat.id}
            className="material-card"
            onClick={() => openMaterialDetail(mat.id)}
          >
            <img src={mat.image} alt={mat.name} />
            <h2>{mat.name}</h2>
            <p>Автор: {mat.author}</p>
            <p>Дата: {mat.date}</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>MED.UNIT — пространство, где будущие и действующие медики объединяются в один коллектив.</p>
      </footer>

      <style jsx>{`
        .materials-categories {
          margin-top: 120px;
          text-align: center;
        }
        .categories-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-top: 20px;
        }
        .category-btn {
          padding: 10px 20px;
          border-radius: 15px;
          border: none;
          cursor: pointer;
          background-color: var(--blue-light);
          color: var(--text-dark);
          font-weight: bold;
          transition: 0.3s;
        }
        .category-btn.active {
          background-color: var(--blue-main);
          color: white;
        }
        .materials-cards {
          width: 90%;
          max-width: 1200px;
          margin: 40px auto;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .material-card {
          width: 280px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(8px);
          border-radius: 20px;
          padding: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .material-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 30px rgba(0,0,0,0.2);
        }
        .material-card img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 15px;
          margin-bottom: 10px;
        }
        .footer {
          width: 90%;
          max-width: 1200px;
          margin: 50px auto 30px auto;
          text-align: center;
          font-size: 18px;
          padding: 15px;
          border-radius: 20px;
          background-color: var(--blue-light);
          color: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
