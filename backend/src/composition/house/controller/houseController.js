class HouseController {
    async getHouseList(req, res) {
        try {
            const a = 10;
            const b = 20;

            res.status(200).json({
                message: "Good",
                data: a + b,
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
