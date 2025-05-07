import userService from "../service/userService";

class UserController {
    async getUserById(req, res) {
        try {
            const user = await userService.getUserById(req.params.id);
            if (!user) {
                return res
                    .status(404)
                    .json({ message: "사용자를 찾을 수 없습니다." });
            }
            res.json(user);
        } catch (err) {
            console.error("사용자 조회 중 오류 발생:", err);
            res.status(500).json({ message: "서버 오류가 발생했습니다." });
        }
    }
}

export default new UserController();
