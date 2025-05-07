import { pool } from "../../../models/db";

class UserService {
    async getUserById(user_id) {
        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(
                `
                SELECT   u.name
                        ,u.email
                        ,u.phone
                        ,u.department
                        ,u.position
                        ,u.profile_image
                        ,u.last_login
                        ,u.status
                        ,u.created_at
                FROM user u
                WHERE u.user_id = ?
                `,
                [user_id]
            );
            return rows.length ? rows[0] : null;
        } finally {
            if (conn) conn.release();
        }
    }
}

export default new UserService();
