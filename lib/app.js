import express from "express";
import article from "./router/article.js";
import cases from "./router/case.js";
import quotation from "./router/quotation.js";
import warranty from "./router/warranty.js";
const app = express();
// 处理普通的键值对格式:Content-Type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// 处理JSON格式:Content-Type: application/json;
app.use(express.json());
//静态资源
app.use(express.static("public"));
//文章数据接口
app.use("/article", article);
//案例数据接口
app.use("/case", cases);
//报价查询接口
app.use("/quotation", quotation);
//质保数据接口
app.use("/warranty", warranty);
app.get("/", (req, res) => {
  res.send("欢迎使用微信云托管!!!流水线测试!!!!!!!");
});
const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log("服务启动成功，端口：", port);
});
//# sourceMappingURL=app.js.map
