import houseService from "../service/houseService";

class HouseController {
    async getHouseList(req, res) {
        try {
            const house = await houseService.getAllHouse();

            if (!house) {
                return res.status(404).json({
                    message: "데이터를 찾을 수 없습니다.",
                });
            }

            res.json(house);
        } catch (err) {
            console.error("하우스 조회 중 오류 발생: ", err);
            res.status(500).json({
                error: "서버 오류가 발생했습니다.",
            });
        }
    }
}

export default new HouseController();
