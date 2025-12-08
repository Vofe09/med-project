// pages/index.js
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    const cardList = Array.from(track.querySelectorAll(".carousel-card"));
    setCards(cardList);

    const centerCardByIndex = (i, animate = true) => {
      if (!track || !container || cardList.length === 0) return;
      if (i < 0) i = 0;
      if (i > cardList.length - 1) i = cardList.length - 1;
      setCurrentIndex(i);

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      const card = cardList[i];
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;

      const style = window.getComputedStyle(track);
      const transform = style.transform === "none" ? "none" : style.transform;
      let currentTranslate = 0;
      if (transform !== "none") {
        const matrix = new DOMMatrixReadOnly(transform);
        currentTranslate = matrix.m41;
      }

      const delta = cardCenter - containerCenter;
      const newTranslate = currentTranslate - delta;

      if (!animate) {
        const prevTransition = track.style.transition;
        track.style.transition = "none";
        track.style.transform = `translateX(${newTranslate}px)`;
        track.getBoundingClientRect();
        track.style.transition = prevTransition || "";
      } else {
        track.style.transform = `translateX(${newTranslate}px)`;
      }

      cardList.forEach((c, idx) => c.classList.toggle("active", idx === i));
    };

    // Инициализация
    track.style.transform = "translateX(0px)";
    requestAnimationFrame(() => centerCardByIndex(currentIndex, false));

    // Обработчик ресайза
    const handleResize = () => {
      centerCardByIndex(currentIndex, false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => Math.min(cards.length - 1, prev + 1));
  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));

  useEffect(() => {
    const track = trackRef.current;
    if (!track || cards.length === 0) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    const card = cards[currentIndex];
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;

    const style = window.getComputedStyle(track);
    const transform = style.transform === "none" ? "none" : style.transform;
    let currentTranslate = 0;
    if (transform !== "none") {
      const matrix = new DOMMatrixReadOnly(transform);
      currentTranslate = matrix.m41;
    }
    const delta = cardCenter - containerCenter;
    const newTranslate = currentTranslate - delta;
    track.style.transform = `translateX(${newTranslate}px)`;

    cards.forEach((c, idx) => c.classList.toggle("active", idx === currentIndex));
  }, [currentIndex, cards]);

  return (
    <div>
      {/* ===== HEADER ===== */}
      <header>
        <nav>
          <a href="#" className="lighter">О нас</a>
          <a href="/forum">Форум</a>
          <a href="#">Конференции</a>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-card">
          <img src="/medical_bg.jpg" alt="medical bg" />
          <h1>Платформа для студентов медколледжей и молодых специалистов</h1>
        </div>
        <div className="hero-card">
          <h1><i>MED.UNIT</i> — объединение будущих медиков.</h1>
          <p className="hero-text">
            это пространство, где студенты медицинских колледжей встречаются с опытом практикующих врачей, медсестёр и фельдшеров...
          </p>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="benefits">
        <div className="benefits-header">Наши преимущества ;)</div>
        <div className="benefits-items">
          <div className="benefit-item">
            <h2>Реальный опыт</h2>
            <p>студенты получают доступ к практическим кейсам и рекомендациям действующих специалистов.</p>
          </div>
          <div className="benefit-item">
            <h2>Наставничество</h2>
            <p>старшие курсы и медработники помогают решать сложные задачи и дают ценные советы.</p>
          </div>
          <div className="benefit-item">
            <h2>Профессиональное сообщество</h2>
            <p>объединяет студентов и специалистов разных учреждений для обмена знаниями и сотрудничества.</p>
          </div>
        </div>
      </section>

      {/* ===== CAROUSEL ===== */}
      <section className="carousel-container" ref={containerRef}>
        <button className="global-btn global-prev" onClick={handlePrev}>&#10094;</button>
        <button className="global-btn global-next" onClick={handleNext}>&#10095;</button>
        <div className="carousel-track" ref={trackRef}>
          <div className="carousel-card">
            <img src="/forum-image.jpg" alt="medical" />
            <h1>Форум</h1>
            <p>Место общения будущих и действующих медиков. Кейсы, опыт, вопросы.</p>
          </div>
          <div className="carousel-card">
            <img src="/conference-image.jpg" alt="conference" />
            <h1>Конференц-зал</h1>
            <p>Видео опыта студентов и конференции специалистов по важным медицинским темам.</p>
          </div>
          <div className="carousel-card">
            <img src="/materials-image.jpg" alt="materials" />
            <h1>Материалы</h1>
            <p>Учебники, статьи, лекции, исследования и реальные работы специалистов.</p>
          </div>
          <div className="carousel-card">
            <img src="/tests-image.jpg" alt="tests" />
            <h1>Тесты и кейсы</h1>
            <p>Проверьте знания и потренируйте клиническое мышление на реальных сценариях.</p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>MED.UNIT — это не просто платформа, а пространство, где будущие и действующие медики объединяются в один коллектив.</p>
      </footer>

      {/* ===== STYLES ===== */}
      <style jsx global>{`
        :root {
          --bg-light: #e6f8f7;
          --blue-main: #4fd1c5;
          --blue-light: #76e0d1;
          --blue-hover: #a0f0ea;
          --text-dark: #1e293b;
          --green-accent: #34d399;
          --warning-accent: #facc15;
          --blue-dark: #1f7a73;
          --soft-blue: #d0f8f5;
        }

        body {
          margin: 0;
          padding: 0;
          background: var(--bg-light);
          font-family: Arial, sans-serif;
          overflow-x: hidden;
        }

        header {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          margin-top: 10px;
          background-color: var(--blue-main);
          padding: 20px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 1000;
        }

        nav {
          display: flex;
          gap: 20px;
        }

        nav a {
          color: white;
          text-decoration: none;
          background-color: var(--blue-light);
          padding: 10px 20px;
          border-radius: 20px;
          transition: 0.3s ease;
          opacity: 0;
          transform: translateY(-10px);
          animation: fadeIn 0.6s forwards;
          font-weight: bold;
        }

        nav a:hover {
          background-color: var(--blue-hover);
        }

        nav a:nth-child(1) { animation-delay: 0.3s; }
        nav a:nth-child(2) { animation-delay: 0.45s; }
        nav a:nth-child(3) { animation-delay: 0.6s; }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero {
          margin-top: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          padding: 40px 0;
        }

        .hero-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 60%;
          background: rgba(255,255,255,0.4);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(20px);
          animation: heroAppear 1.2s forwards;
        }

        .hero-card img {
          width: auto;
          max-width: 100%;
          height: auto;
          border-radius: 20px;
          display: block;
          margin: 0 auto 20px auto;
        }

        .hero-card h1 {
          text-align: center;
          font-size: 26px;
          color: var(--text-dark);
        }

        .hero-card i {
          color: var(--blue-main);
        }

        .hero-card p {
          text-align: center;
          font-size: 18px;
          line-height: 1.5;
          color: var(--text-dark);
          margin-top: 10px;
          max-width: 90%;
        }

        @keyframes heroAppear {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-card:nth-child(1) { animation-delay: 0.3s; }
        .hero-card:nth-child(2) { animation-delay: 0.6s; }

        .benefits {
          margin-top: 30px;
          width: 60%;
          min-height: 260px;
          background: var(--blue-hover);
          border-radius: 20px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .benefits-header {
          width: 100%;
          text-align: center;
          font-size: 28px;
          font-weight: bold;
          color: white;
          margin-bottom: 20px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        .benefits-items {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .benefit-item {
          width: 30%;
          padding: 20px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(8px);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
          opacity: 0;
          transform: translateY(20px);
          animation: heroAppear 1.2s forwards;
        }

        .benefit-item:nth-child(1) { animation-delay: 0.3s; }
        .benefit-item:nth-child(2) { animation-delay: 0.5s; }
        .benefit-item:nth-child(3) { animation-delay: 0.7s; }

        .benefit-item h2 { font-size: 28px; color: var(--text-dark); margin-bottom: 20px; }
        .benefit-item p { font-size: 18px; line-height: 1.6; color: var(--text-dark); }

        .footer {
          width: 60%;
          margin: 50px auto 30px auto;
          background-color: var(--blue-light);
          padding: 15px 15px;
          border-radius: 30px;
          text-align: center;
          font-size: 18px;
          line-height: 1.5;
          color: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          font-weight: bold;
        }

        /* Carousel */
        .carousel-container {
          width: 40%;
          margin: 20px auto;   
          overflow: hidden;
          position: relative;
          max-width: none; 
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);  
        }

        .carousel-track {
          display: flex;
          gap: 20px;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 10px 0;
          justify-content: center;
        }

        .carousel-card {
          flex: 0 0 100%;
          max-width: 100%;
          margin: 0px 10px;
          border-radius: 20px;
          background: var(--soft-blue);
          backdrop-filter: blur(8px);
          color: var(--text-dark);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          padding: 20px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s;
          flex-shrink: 0;
          cursor: pointer;
        }

        .carousel-card.active {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
        }

        @media (min-width: 900px) {
          .carousel-card { flex: 0 0 80%; }
        }

        .carousel-card img { width: 100%; border-radius: 15px; margin-bottom: 15px; }
        .carousel-card h1 { text-align: center; font-size: 24px; margin-bottom: 8px; }
        .carousel-card p { text-align: center; font-size: 16px; }

        .global-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.6);
          border: none;
          padding: 12px 14px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 26px;
          color: var(--text-dark);
          transition: 0.2s;
          z-index: 10;
        }

        .global-btn:hover { background: rgba(255,255,255,0.85); }
        .global-prev { left: 5px; }
        .global-next { right: 5px; }

        @media (max-width: 768px) {
          header { width: 90%; padding: 15px; }
          nav { flex-wrap: wrap; gap: 10px; justify-content: center; }
          nav a { padding: 8px 12px; font-size: 16px; flex: 1 1 auto; }
          .hero-card { width: 90%; padding: 15px; }
          .hero-card h1 { font-size: 22px; }
          .hero-card p { font-size: 16px; }
          .benefits { width: 90%; padding: 20px; }
          .benefits-items { flex-direction: row; justify-content: center; flex-wrap: wrap; gap: 15px; }
          .benefit-item { flex: 1 1 28%; max-width: 220px; padding: 15px; }
          .benefit-item h2 { font-size: 18px; }
          .benefit-item p { font-size: 15px; }
          .footer { width: 90%; padding: 15px; font-size: 18px; }
          .carousel-container { width: 90%; }
        }
      `}</style>
    </div>
  );
}
