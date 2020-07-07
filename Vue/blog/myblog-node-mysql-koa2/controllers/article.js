const { mysql } = require("../mysql");

async function getArticle(ctx) {
  var results = await mysql('article_list').select()

  var dataString = JSON.stringify(results);
  var data = JSON.parse(dataString);

  // console.log(data)
  ctx.body = {
    data: data,
    status: 200
  }
}
async function getNewestArticle(ctx) {
  var results = await mysql("article_list")
    .orderBy([
      { column: 'add_time',order: 'desc' }
    ])
    .limit(5).select()

  var dataString = JSON.stringify(results);
  var data = JSON.parse(dataString);

  // console.log(data)
  ctx.body = {
    data: data,
    status: 200
  }
}
module.exports = {
  getArticle,
  getNewestArticle
}