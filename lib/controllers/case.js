import db from '../config/db/index.js';
//通过标签获取案例
export const getCaseList = (req, res) => {
    console.log(req.query);
    const brandField = ['carModels', 'series', 'colors'];
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
    const brand = req.query.brand.split(' ');
    //获取语句补充
    let sqlEnd = '';
    let isHaveBrand = false;
    brand.map((item, index) => {
        if (item.indexOf('所有') != 0) {
            if (!isHaveBrand) {
                sqlEnd += ` WHERE ${brandField[index]}='${item}'`;
                isHaveBrand = true;
            }
            else {
                sqlEnd += ` AND ${brandField[index]}='${item}'`;
            }
        }
    });
    //获取数据总数
    const selectSql1 = `SELECT COUNT(*) AS total FROM cases ${sqlEnd}`;
    //获取每页对应的数据
    const selectSql2 = `SELECT * FROM cases ${sqlEnd} LIMIT ${pageSize} OFFSET ${page * pageSize}`;
    console.log(selectSql1);
    console.log(selectSql2);
    db.query(selectSql2, (err, items) => {
        if (err) {
            console.log(err);
            res.send({ code: 200, msg: '获取失败' });
        }
        db.query(selectSql1, (err, results) => {
            if (err) {
                console.log(err);
                res.send({ code: 200, msg: '获取失败' });
            }
            const counts = results[0].total;
            res.send({
                code: 200,
                msg: '获取成功',
                result: {
                    /** 列表数据 */
                    items,
                    /** 总条数 */
                    counts,
                    /** 当前页数 */
                    page,
                    /** 总页数 */
                    pages: Math.floor(counts / pageSize),
                    /** 每页条数 */
                    pageSize,
                },
            });
        });
    });
};
//获取案例详情
export const getCaseDetail = (req, res) => {
    const selectSql = `SELECT * FROM casesDetails WHERE id = ${req.query.id}`;
    db.query(selectSql, (err, result) => {
        if (err) {
            console.log(err);
            res.send({ code: 200, msg: '获取失败' });
        }
        res.send({ code: 200, msg: '获取成功', result: result[0] });
    });
};
//模糊查询案例
export const searchCaseList = (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
    //获取数据总数
    const selectSql1 = `SELECT COUNT(*) AS total FROM cases WHERE title LIKE '%${req.query.searchValue}%'`;
    const selectSql2 = `SELECT * FROM cases WHERE title LIKE '%${req.query.searchValue}%' LIMIT ${pageSize} OFFSET ${page * pageSize}`;
    db.query(selectSql2, (err, items) => {
        if (err) {
            console.log(err);
            res.send({ code: 200, msg: '获取失败' });
        }
        db.query(selectSql1, (err, result) => {
            if (err) {
                console.log(err);
                res.send({ code: 200, msg: '获取失败' });
            }
            const counts = result[0].total;
            res.send({
                code: 200,
                msg: '获取成功',
                result: {
                    /** 列表数据 */
                    items,
                    /** 总条数 */
                    counts,
                    /** 当前页数 */
                    page,
                    /** 总页数 */
                    pages: Math.floor(counts / pageSize),
                    /** 每页条数 */
                    pageSize,
                },
            });
        });
    });
};
//# sourceMappingURL=case.js.map