// 导入express
import express from "express";
import { getQuotation } from "../controllers/quotation.js";
// 引入路由模块
const router = express.Router();
//获取数据
router.get("/details", getQuotation);
// 导出router
export default router;
//# sourceMappingURL=quotation.js.map
