import express from "express";
import cors from "cors";

import houseRoutes from "./composition/house/routes/houseRoutes.js";
import userRoutes from "./composition/user/routes/userRoutes.js";
import { testConnection } from "./models/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// 데이터베이스 연결 테스트
testConnection();

app.get("/", (req, res) => {
    res.send(" Express API 서버가 실행 중입니다.");
});

// 라우터 설정
app.use("/house", houseRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
