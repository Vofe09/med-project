module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/pages/forum/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// pages/forum/index.js
__turbopack_context__.s([
    "default",
    ()=>ForumPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function ForumPage() {
    const [loginModalOpen, setLoginModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [registerModalOpen, setRegisterModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [loginEmail, setLoginEmail] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [loginPassword, setLoginPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [regUsername, setRegUsername] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [regEmail, setRegEmail] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [regPassword, setRegPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [regPassword2, setRegPassword2] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    // ======== LOGIN =========
    const handleLogin = async ()=>{
        if (!loginEmail || !loginPassword) return alert("Заполните все поля");
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: loginEmail,
                    password: loginPassword
                })
            });
            const data = await res.json();
            if (res.ok) {
                alert("Вход выполнен: " + data.username);
                setLoginModalOpen(false);
            } else {
                alert(data.message || "Ошибка при входе");
            }
        } catch (err) {
            console.error(err);
            alert("Сервер недоступен");
        }
    };
    // ======== REGISTER =========
    const handleRegister = async ()=>{
        if (!regUsername || !regEmail || !regPassword || !regPassword2) return alert("Заполните все поля");
        if (regPassword !== regPassword2) return alert("Пароли не совпадают");
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: regUsername,
                    email: regEmail,
                    password: regPassword
                })
            });
            const data = await res.json();
            if (res.ok) {
                alert("Регистрация успешна! Войдите в систему.");
                setRegisterModalOpen(false);
            } else {
                alert(data.message || "Ошибка при регистрации");
            }
        } catch (err) {
            console.error(err);
            alert("Сервер недоступен");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            background: "#e6f8f7",
            minHeight: "100vh",
            fontFamily: "Arial, sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    padding: "15px 30px",
                    background: "#4fd1c5",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    position: "sticky",
                    top: 0,
                    zIndex: 100
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 24,
                            fontWeight: "bold",
                            color: "white"
                        },
                        children: "MED.UNIT — Форум"
                    }, void 0, false, {
                        fileName: "[project]/pages/forum/index.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLoginModalOpen(true),
                                style: {
                                    background: "white",
                                    color: "#1f7a73",
                                    border: "none",
                                    padding: "10px 18px",
                                    borderRadius: 12,
                                    marginLeft: 10,
                                    cursor: "pointer",
                                    fontWeight: "bold"
                                },
                                children: "Вход"
                            }, void 0, false, {
                                fileName: "[project]/pages/forum/index.js",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setRegisterModalOpen(true),
                                style: {
                                    background: "white",
                                    color: "#1f7a73",
                                    border: "none",
                                    padding: "10px 18px",
                                    borderRadius: 12,
                                    marginLeft: 10,
                                    cursor: "pointer",
                                    fontWeight: "bold"
                                },
                                children: "Регистрация"
                            }, void 0, false, {
                                fileName: "[project]/pages/forum/index.js",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/forum/index.js",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/forum/index.js",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    width: "60%",
                    margin: "40px auto",
                    background: "rgba(255,255,255,0.5)",
                    padding: 25,
                    borderRadius: 20,
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 28,
                            fontWeight: "bold",
                            color: "#1f7a73",
                            textAlign: "center",
                            marginBottom: 20
                        },
                        children: "Темы форума"
                    }, void 0, false, {
                        fileName: "[project]/pages/forum/index.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            textAlign: "center",
                            color: "#1e293b",
                            fontSize: 18
                        },
                        children: "Здесь в будущем появятся темы, обсуждения и разделы."
                    }, void 0, false, {
                        fileName: "[project]/pages/forum/index.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/forum/index.js",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            loginModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.4)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 200
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        width: 350,
                        background: "white",
                        padding: 25,
                        borderRadius: 20,
                        textAlign: "center",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            style: {
                                marginBottom: 15,
                                color: "#1f7a73"
                            },
                            children: "Вход"
                        }, void 0, false, {
                            fileName: "[project]/pages/forum/index.js",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Логин",
                            value: loginEmail,
                            onChange: (e)=>setLoginEmail(e.target.value),
                            style: {
                                width: "90%",
                                padding: 12,
                                margin: 8,
                                borderRadius: 10,
                                border: "1px solid #4fd1c5",
                                fontSize: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/pages/forum/index.js",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "Пароль",
                            value: loginPassword,
                            onChange: (e)=>setLoginPassword(e.target.value),
                            style: {
                                width: "90%",
                                padding: 12,
                                margin: 8,
                                borderRadius: 10,
                                border: "1px solid #4fd1c5",
                                fontSize: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/pages/forum/index.js",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: handleLogin,
                            style: {
                                width: "95%",
                                padding: 12,
                                marginTop: 12,
                                background: "#4fd1c5",
                                border: "none",
                                color: "white",
                                fontSize: 18,
                                borderRadius: 12,
                                cursor: "pointer"
                            },
                            children: "Войти"
                        }, void 0, false, {
                            fileName: "[project]/pages/forum/index.js",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 10,
                                cursor: "pointer",
                                fontSize: 14,
                                color: "#1f7a73"
                            },
                            onClick: ()=>setLoginModalOpen(false),
                            children: "Закрыть"
                        }, void 0, false, {
                            fileName: "[project]/pages/forum/index.js",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/forum/index.js",
                    lineNumber: 116,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/forum/index.js",
                lineNumber: 115,
                columnNumber: 9
            }, this),
            registerModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.4)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 200
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        width: 350,
                        background: "white",
                        padding: 25,
                        borderRadius: 20,
                        textAlign: "center",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            style: {
                                marginBottom: 15,
                                color: "#1f7a73"
                            },
                            children: "Регистрация"
                        }, void 0, false, {
                            fileName: "[project]/pages/forum/index.js",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Логин",
                            value: regUsername,
                            onChange: (e)=>setRegUsername(e.target.value),
                            style: {
                                width: "90%",
                                padding: 12,
                                margin: 8,
                                borderRadius: 10,
                                border: "1px solid #4fd1c5",
                                fontSize: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/pages/forum/index.js",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: "Email",
                            value: regEmail,
                            onChange: (e)=>setRegEmail(e.target.value),
                            style: {
                                width: "90%",
                                padding: 12,
                                margin: 8,
                                borderRadius: 10,
                                border: "1px solid #4fd1c5",
                                fontSize: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/pages/forum/index.js",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "Пароль",
                            value: regPassword,
                            onChange: (e)=>setRegPassword(e.target.value),
                            style: {
                                width: "90%",
                                padding: 12,
                                margin: 8,
                                borderRadius: 10,
                                border: "1px solid #4fd1c5",
                                fontSize: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/pages/forum/index.js",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "Повторите пароль",
                            value: regPassword2,
                            onChange: (e)=>setRegPassword2(e.target.value),
                            style: {
                                width: "90%",
                                padding: 12,
                                margin: 8,
                                borderRadius: 10,
                                border: "1px solid #4fd1c5",
                                fontSize: 16
                            }
                        }, void 0, false, {
                            fileName: "[project]/pages/forum/index.js",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: handleRegister,
                            style: {
                                width: "95%",
                                padding: 12,
                                marginTop: 12,
                                background: "#4fd1c5",
                                border: "none",
                                color: "white",
                                fontSize: 18,
                                borderRadius: 12,
                                cursor: "pointer"
                            },
                            children: "Создать аккаунт"
                        }, void 0, false, {
                            fileName: "[project]/pages/forum/index.js",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 10,
                                cursor: "pointer",
                                fontSize: 14,
                                color: "#1f7a73"
                            },
                            onClick: ()=>setRegisterModalOpen(false),
                            children: "Закрыть"
                        }, void 0, false, {
                            fileName: "[project]/pages/forum/index.js",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/forum/index.js",
                    lineNumber: 129,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/forum/index.js",
                lineNumber: 128,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/forum/index.js",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eed7ad4d._.js.map