const mysql = require("../mysql");

async function getArticle() {
  var data = await mysql('article_list').select()
  ctx.body = {
    data
  }
}

module.exports = {
  getArticle
}