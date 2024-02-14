import db from '../config/db/index.js';
export const getQuotation = (req, res) => {
    const selectSql = `SELECT * FROM quotation WHERE carModels = '${req.query.carModels}' AND series = '${req.query.series}'`;
    db.query(selectSql, (err, result) => {
        if (err) {
            console.log(err);
            res.send({ code: 200, msg: '获取失败' });
        }
        res.send({ code: 200, msg: '获取成功', result: result[0] });
    });
};
//# sourceMappingURL=quotation.js.map