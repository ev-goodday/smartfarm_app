import { pool } from "../../../models/db.js";

class HouseService {
    async getAllHouse() {
        let conn;
        try {
            conn = await pool.getConnection();

            const rows = await conn.query(
                `
                    SELECT * FROM house
                `
            );
            return rows.length ? rows : null;
        } catch (err) {
            console.error(err);
            throw new Error("서버 에러");
        }
    }
}

export default new HouseService();
