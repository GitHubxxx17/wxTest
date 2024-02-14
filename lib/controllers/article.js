import db from '../config/db/index.js';
//通过标签获取文章
export const getArticleList = (req, res) => {
    console.log(req.query);
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
    const type = req.query.type;
    //获取数据总数
    const selectSql1 = type == '0' ? `SELECT COUNT(*) AS total FROM article` : `SELECT COUNT(*) AS total FROM article WHERE type=${type}`;
    //获取每页对应的数据
    const selectSql2 = type == '0'
        ? `SELECT * FROM article LIMIT ${pageSize} OFFSET ${page * pageSize}`
        : `SELECT * FROM article WHERE type=${type} LIMIT ${pageSize} OFFSET ${page * pageSize}`;
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
//获取文章详情
export const getArticleDetail = (req, res) => {
    const selectSql1 = `SELECT * FROM article WHERE id = '${req.query.id}'`;
    const selectSql2 = `SELECT * FROM articleDetail WHERE id = '${req.query.id}'`;
    db.query(selectSql1, (err, article) => {
        if (err) {
            console.log(err);
            res.send({ code: 200, msg: '获取失败' });
        }
        db.query(selectSql2, (err, articleDetail) => {
            if (err) {
                console.log(err);
                res.send({ code: 200, msg: '获取失败' });
            }
            res.send({
                code: 200,
                msg: '获取成功',
                result: {
                    /** 文章标题 */
                    title: article[0].title,
                    /** 创作时间 */
                    create_time: article[0].create_time,
                    /** 内容 */
                    content: articleDetail[0].content,
                },
            });
        });
    });
};
//# sourceMappingURL=article.js.map