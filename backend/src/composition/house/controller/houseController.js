import houseService from "../service/houseService";

class HouseController {
    async getHouseList(req, res) {
        try {
            const a = 50;
            const b = 20;

            const sum = await houseService.getHouse(a, b);

            res.status(200).json({
                message: "Good",
                data: sum.data,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "서버 에러",
            });
        }
    }
}

export default new HouseController();
