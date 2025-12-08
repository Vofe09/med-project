// pages/material-detail/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MaterialDetail() {
  const router = useRouter();
  const { id } = router.query; // id из URL
  const [material, setMaterial] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch("/materials.json") // JSON в public/materials.json
      .then(res => res.json())
      .then(data => {
        const mat = data.find(m => m.id === parseInt(id));
        setMaterial(mat);
      });
  }, [id]);

  if (!material) return <p style={{ textAlign: "center", marginTop: "50px" }}>Загрузка...</p>;

  return (
    <div className="material-detail">
      <img src={material.image} alt={material.name} />
      <h1>{material.name}</h1>
      <p><strong>Автор:</strong> {material.author}</p>
      <p><strong>Дата выпуска:</strong> {material.date}</p>
      <p>{material.description}</p>
      <a href={material.file} className="download-btn" download>Скачать материал</a>

      <style jsx>{`
        .material-detail {
          width: 80%;
          max-width: 800px;
          margin: 120px auto 60px auto;
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(10px);
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .material-detail img {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          border-radius: 15px;
          margin-bottom: 20px;
        }

        .material-detail h1 {
          margin-bottom: 15px;
          text-align: center;
        }

        .material-detail p {
          margin-bottom: 10px;
          font-size: 16px;
        }

        .download-btn {
          display: inline-block;
          padding: 12px 20px;
          background-color: var(--blue-main);
          color: white;
          text-decoration: none;
          border-radius: 15px;
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
}
