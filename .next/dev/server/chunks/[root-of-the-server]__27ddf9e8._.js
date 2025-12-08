module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/mysql2/promise [external] (mysql2/promise, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mysql2/promise", () => require("mysql2/promise"));

module.exports = mod;
}),
"[project]/lib/db.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mysql2$2f$promise__$5b$external$5d$__$28$mysql2$2f$promise$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mysql2/promise [external] (mysql2/promise, cjs)");
;
let pool;
if (!pool) {
    pool = __TURBOPACK__imported__module__$5b$externals$5d2f$mysql2$2f$promise__$5b$external$5d$__$28$mysql2$2f$promise$2c$__cjs$29$__["default"].createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
}
const __TURBOPACK__default__export__ = pool;
}),
"[project]/pages/api/login.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [api] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'bcrypt'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Метод не разрешён"
        });
    }
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "Введите email и пароль"
        });
    }
    try {
        const [rows] = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["default"].query("SELECT * FROM users WHERE email = ?", [
            email
        ]);
        if (rows.length === 0) {
            return res.status(400).json({
                message: "Пользователь не найден"
            });
        }
        const user = rows[0];
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(400).json({
                message: "Неверный пароль"
            });
        }
        res.status(200).json({
            message: "Вход выполнен",
            username: user.username,
            id: user.id
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Ошибка сервера"
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__27ddf9e8._.js.map