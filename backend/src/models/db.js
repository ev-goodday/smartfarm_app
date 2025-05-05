import mariadb from "mariadb";
import dbConfig from "../config/dbConfig";

const pool = mariadb.createPool(dbConfig);

const testConnection = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log("데이터베이스 연결 성공👍");
    } catch (err) {
        console.error("데이터베이스 연결 실패😢:", err);
    } finally {
        if (conn) conn.release();
    }
};

export { pool, testConnection };
