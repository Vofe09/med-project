module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// pages/index.js
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
function Home() {
    const trackRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const track = trackRef.current;
        const container = containerRef.current;
        const cardList = Array.from(track.querySelectorAll(".carousel-card"));
        setCards(cardList);
        const centerCardByIndex = (i, animate = true)=>{
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
            cardList.forEach((c, idx)=>c.classList.toggle("active", idx === i));
        };
        // Инициализация
        track.style.transform = "translateX(0px)";
        requestAnimationFrame(()=>centerCardByIndex(currentIndex, false));
        // Обработчик ресайза
        const handleResize = ()=>{
            centerCardByIndex(currentIndex, false);
        };
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    const handleNext = ()=>setCurrentIndex((prev)=>Math.min(cards.length - 1, prev + 1));
    const handlePrev = ()=>setCurrentIndex((prev)=>Math.max(0, prev - 1));
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
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
        cards.forEach((c, idx)=>c.classList.toggle("active", idx === currentIndex));
    }, [
        currentIndex,
        cards
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "jsx-270a64be56b16296",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: "jsx-270a64be56b16296",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                    className: "jsx-270a64be56b16296",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "jsx-270a64be56b16296" + " " + "lighter",
                            children: "О нас"
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: "/forum",
                            className: "jsx-270a64be56b16296",
                            children: "Форум"
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "jsx-270a64be56b16296",
                            children: "Конференции"
                        }, void 0, false, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "jsx-270a64be56b16296" + " " + "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-270a64be56b16296" + " " + "hero-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: "/medical_bg.jpg",
                                alt: "medical bg",
                                className: "jsx-270a64be56b16296"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "jsx-270a64be56b16296",
                                children: "Платформа для студентов медколледжей и молодых специалистов"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-270a64be56b16296" + " " + "hero-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "jsx-270a64be56b16296",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                        className: "jsx-270a64be56b16296",
                                        children: "MED.UNIT"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    " — объединение будущих медиков."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "jsx-270a64be56b16296" + " " + "hero-text",
                                children: "это пространство, где студенты медицинских колледжей встречаются с опытом практикующих врачей, медсестёр и фельдшеров..."
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "jsx-270a64be56b16296" + " " + "benefits",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-270a64be56b16296" + " " + "benefits-header",
                        children: "Наши преимущества ;)"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-270a64be56b16296" + " " + "benefits-items",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-270a64be56b16296" + " " + "benefit-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "jsx-270a64be56b16296",
                                        children: "Реальный опыт"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-270a64be56b16296",
                                        children: "студенты получают доступ к практическим кейсам и рекомендациям действующих специалистов."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-270a64be56b16296" + " " + "benefit-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "jsx-270a64be56b16296",
                                        children: "Наставничество"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-270a64be56b16296",
                                        children: "старшие курсы и медработники помогают решать сложные задачи и дают ценные советы."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-270a64be56b16296" + " " + "benefit-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "jsx-270a64be56b16296",
                                        children: "Профессиональное сообщество"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-270a64be56b16296",
                                        children: "объединяет студентов и специалистов разных учреждений для обмена знаниями и сотрудничества."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                ref: containerRef,
                className: "jsx-270a64be56b16296" + " " + "carousel-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: handlePrev,
                        className: "jsx-270a64be56b16296" + " " + "global-btn global-prev",
                        children: "❮"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        className: "jsx-270a64be56b16296" + " " + "global-btn global-next",
                        children: "❯"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        ref: trackRef,
                        className: "jsx-270a64be56b16296" + " " + "carousel-track",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-270a64be56b16296" + " " + "carousel-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: "/forum-image.jpg",
                                        alt: "medical",
                                        className: "jsx-270a64be56b16296"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        className: "jsx-270a64be56b16296",
                                        children: "Форум"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-270a64be56b16296",
                                        children: "Место общения будущих и действующих медиков. Кейсы, опыт, вопросы."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-270a64be56b16296" + " " + "carousel-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: "/conference-image.jpg",
                                        alt: "conference",
                                        className: "jsx-270a64be56b16296"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        className: "jsx-270a64be56b16296",
                                        children: "Конференц-зал"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-270a64be56b16296",
                                        children: "Видео опыта студентов и конференции специалистов по важным медицинским темам."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-270a64be56b16296" + " " + "carousel-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: "/materials-image.jpg",
                                        alt: "materials",
                                        className: "jsx-270a64be56b16296"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        className: "jsx-270a64be56b16296",
                                        children: "Материалы"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-270a64be56b16296",
                                        children: "Учебники, статьи, лекции, исследования и реальные работы специалистов."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-270a64be56b16296" + " " + "carousel-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: "/tests-image.jpg",
                                        alt: "tests",
                                        className: "jsx-270a64be56b16296"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        className: "jsx-270a64be56b16296",
                                        children: "Тесты и кейсы"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-270a64be56b16296",
                                        children: "Проверьте знания и потренируйте клиническое мышление на реальных сценариях."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                className: "jsx-270a64be56b16296" + " " + "footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "jsx-270a64be56b16296",
                    children: "MED.UNIT — это не просто платформа, а пространство, где будущие и действующие медики объединяются в один коллектив."
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "270a64be56b16296",
                children: ":root{--bg-light:#e6f8f7;--blue-main:#4fd1c5;--blue-light:#76e0d1;--blue-hover:#a0f0ea;--text-dark:#1e293b;--green-accent:#34d399;--warning-accent:#facc15;--blue-dark:#1f7a73;--soft-blue:#d0f8f5}body{background:var(--bg-light);margin:0;padding:0;font-family:Arial,sans-serif;overflow-x:hidden}header{background-color:var(--blue-main);z-index:1000;border-radius:30px;justify-content:center;align-items:center;width:60%;margin-top:10px;padding:20px;display:flex;position:fixed;top:0;left:50%;transform:translate(-50%);box-shadow:0 4px 12px #00000026}nav{gap:20px;display:flex}nav a{color:#fff;background-color:var(--blue-light);opacity:0;border-radius:20px;padding:10px 20px;font-weight:700;text-decoration:none;transition:all .3s;animation:.6s forwards fadeIn;transform:translateY(-10px)}nav a:hover{background-color:var(--blue-hover)}nav a:first-child{animation-delay:.3s}nav a:nth-child(2){animation-delay:.45s}nav a:nth-child(3){animation-delay:.6s}@keyframes fadeIn{to{opacity:1;transform:translateY(0)}}.hero{flex-direction:column;align-items:center;gap:30px;margin-top:100px;padding:40px 0;display:flex}.hero-card{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;background:#fff6;border-radius:20px;flex-direction:column;align-items:center;width:60%;padding:20px;animation:1.2s forwards heroAppear;display:flex;transform:translateY(20px);box-shadow:0 8px 20px #0000001a}.hero-card img{border-radius:20px;width:auto;max-width:100%;height:auto;margin:0 auto 20px;display:block}.hero-card h1{text-align:center;color:var(--text-dark);font-size:26px}.hero-card i{color:var(--blue-main)}.hero-card p{text-align:center;color:var(--text-dark);max-width:90%;margin-top:10px;font-size:18px;line-height:1.5}@keyframes heroAppear{to{opacity:1;transform:translateY(0)}}.hero-card:first-child{animation-delay:.3s}.hero-card:nth-child(2){animation-delay:.6s}.benefits{background:var(--blue-hover);border-radius:20px;flex-direction:column;gap:20px;width:60%;min-height:260px;margin-top:30px;margin-left:auto;margin-right:auto;padding:25px;display:flex;box-shadow:0 8px 20px #0000001a}.benefits-header{text-align:center;color:#fff;text-shadow:0 2px 8px #0000004d;width:100%;margin-bottom:20px;font-size:28px;font-weight:700}.benefits-items{justify-content:space-between;gap:20px;display:flex}.benefit-item{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);text-align:center;opacity:0;background:#ffffff80;border-radius:20px;flex-direction:column;justify-content:center;width:30%;padding:20px;animation:1.2s forwards heroAppear;display:flex;transform:translateY(20px);box-shadow:0 6px 16px #0000001f}.benefit-item:first-child{animation-delay:.3s}.benefit-item:nth-child(2){animation-delay:.5s}.benefit-item:nth-child(3){animation-delay:.7s}.benefit-item h2{color:var(--text-dark);margin-bottom:20px;font-size:28px}.benefit-item p{color:var(--text-dark);font-size:18px;line-height:1.6}.footer{background-color:var(--blue-light);text-align:center;color:#fff;border-radius:30px;width:60%;margin:50px auto 30px;padding:15px;font-size:18px;font-weight:700;line-height:1.5;box-shadow:0 4px 12px #00000026}.carousel-container{border-radius:20px;width:40%;max-width:none;margin:20px auto;padding:25px;position:relative;overflow:hidden;box-shadow:0 8px 20px #0000001a}.carousel-track{justify-content:center;gap:20px;padding:10px 0;transition:transform .7s cubic-bezier(.4,0,.2,1);display:flex}.carousel-card{background:var(--soft-blue);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);max-width:100%;color:var(--text-dark);cursor:pointer;border-radius:20px;flex:0 0 100%;margin:0 10px;padding:20px;transition:transform .3s cubic-bezier(.4,0,.2,1),box-shadow .3s;box-shadow:0 10px 25px #0003}.carousel-card.active{transform:scale(1.05)translateY(-5px);box-shadow:0 15px 35px #0000004d}@media (width>=900px){.carousel-card{flex:0 0 80%}}.carousel-card img{border-radius:15px;width:100%;margin-bottom:15px}.carousel-card h1{text-align:center;margin-bottom:8px;font-size:24px}.carousel-card p{text-align:center;font-size:16px}.global-btn{cursor:pointer;color:var(--text-dark);z-index:10;background:#fff9;border:none;border-radius:50%;padding:12px 14px;font-size:26px;transition:all .2s;position:absolute;top:50%;transform:translateY(-50%)}.global-btn:hover{background:#ffffffd9}.global-prev{left:5px}.global-next{right:5px}@media (width<=768px){header{width:90%;padding:15px}nav{flex-wrap:wrap;justify-content:center;gap:10px}nav a{flex:auto;padding:8px 12px;font-size:16px}.hero-card{width:90%;padding:15px}.hero-card h1{font-size:22px}.hero-card p{font-size:16px}.benefits{width:90%;padding:20px}.benefits-items{flex-flow:wrap;justify-content:center;gap:15px}.benefit-item{flex:28%;max-width:220px;padding:15px}.benefit-item h2{font-size:18px}.benefit-item p{font-size:15px}.footer{width:90%;padding:15px;font-size:18px}.carousel-container{width:90%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1e682c6e._.js.map