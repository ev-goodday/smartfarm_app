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

    async getUserDeviceById(user_id) {
        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(
                `
                SELECT   sd.device_id
                        ,sd.location
                        ,sd.status
                        ,st.description
                FROM user u
                JOIN house h ON u.user_id = h.owner_id
                JOIN sensor_device sd ON h.house_id = sd.house_id
                JOIN sensor_type st ON sd.type_id = st.type_id
                WHERE u.user_id = ?
                `,
                [user_id]
            );
            return rows.length ? rows : null;
        } finally {
            if (conn) conn.release();
        }
    }
}

export default new UserService();
