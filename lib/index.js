import express from "express";
import article from "./router/article.js";

const app = express();
// 处理普通的键值对格式:Content-Type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// 处理JSON格式:Content-Type: application/json;
app.use(express.json());
//文章数据接口
app.use("/article", article);
app.get("/", (req, res) => {
  res.send("欢迎使用微信云托管!!!流水线测试");
});

const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log("服务启动成功，端口：", port);
});
