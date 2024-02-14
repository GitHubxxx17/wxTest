import db from '../config/db/index.js';
export const postWarranty = (req, res) => {
    let keyStr = '';
    let valueStr = '';
    for (const [key, value] of Object.entries(req.body)) {
        console.log(key, value);
        keyStr += key + ',';
        valueStr += `'${String(value).trim()}',`;
    }
    const insectSql = `INSERT INTO warranty (${keyStr.slice(0, -1)}) VALUES (${valueStr.slice(0, -1)});`;
    db.query(insectSql, (err) => {
        if (err) {
            console.log(err);
            res.send({ code: 200, msg: '质保录入失败' });
        }
        res.send({ code: 200, msg: '质保录入成功' });
    });
};
export const getWarranty = (req, res) => {
    const selectSql = `SELECT * FROM warranty WHERE carOwnerPhone = '${req.query.phone}'`;
    db.query(selectSql, (err, result) => {
        if (err) {
            console.log(err);
            res.send({ code: 200, msg: '获取失败' });
        }
        res.send({ code: 200, msg: '获取成功', result: result[0] });
    });
};
//# sourceMappingURL=warranty.js.map