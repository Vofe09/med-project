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
        <div className="carousel-track" id="track" ref={trackRef}>
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
      <style jsx>{`
        /* Добавь сюда свои CSS стили из style.css, 
           заменив пути к изображениям на /имя_файла */
      `}</style>
    </div>
  );
}
