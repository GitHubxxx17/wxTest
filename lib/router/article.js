// 导入express
import { Router } from 'express';
import { getArticleDetail, getArticleList } from '../controllers/article.js';
// 引入路由模块
const router = Router();
//获取数据
router.get('/list', getArticleList);
router.get('/detail', getArticleDetail);
// 导出router
export default router;
//# sourceMappingURL=article.js.map