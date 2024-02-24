// 导入express
import express from "express";
import { getWarranty, postWarranty } from "../controllers/warranty.js";
// 引入路由模块
const router = express.Router();
//获取数据
router.post("/", postWarranty);
router.get("/", getWarranty);
// 导出router
export default router;
//# sourceMappingURL=warranty.js.map
