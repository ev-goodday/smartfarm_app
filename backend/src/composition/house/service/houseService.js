class HouseService {
    async getHouse(a, b) {
        try {
            return {
                data: a + b,
            };
        } catch (err) {
            console.error(err);
            throw new Error("서버 에러");
        }
    }
}

export default new HouseService();
