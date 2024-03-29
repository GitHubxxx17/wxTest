// 导入express
import express from "express";
import {
  getCaseDetail,
  getCaseList,
  searchCaseList,
} from "../controllers/case.js";
// 引入路由模块
const router = express.Router();
//获取数据
router.get("/list", getCaseList);
router.get("/details", getCaseDetail);
router.get("/search", searchCaseList);
// 导出router
export default router;
//# sourceMappingURL=case.js.map
