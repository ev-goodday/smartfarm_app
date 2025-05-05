import { pool } from "../../../models/db.js";

class HouseService {
    async getHouseById(house_id) {
        let conn;
        try {
            conn = await pool.getConnection();

            const rows = await conn.query(
                `
                    SELECT h.house_id, h.location, h.name
                    FROM house h
                    WHERE owner_id = ?
                    ORDER BY house_id;
                `,
                [house_id]
            );
            return rows.length ? rows : null;
        } catch (err) {
            console.error("하우스 조회 중 데이터베이스 오류 발생: ", err);
            throw new Error("데이터 베이스 에러");
        } finally {
            if (conn) conn.release();
        }
    }
}

export default new HouseService();
