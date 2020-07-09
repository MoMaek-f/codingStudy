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
      { column: 'add_time', order: 'desc' }
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
async function getArticleById(ctx) {
  const { id: id } = ctx.query
  var results = await mysql("article_list").where({
    "article_id": id
  }).select()

  var dataString = JSON.stringify(results)
  var data = JSON.parse(dataString)

  ctx.body = {
    data: data
  }
}
async function getMyMess(ctx) {
  var results = await mysql("mymess").select()

  var dataString = JSON.stringify(results)
  var data = JSON.parse(dataString)
  console.log(data)
  ctx.body = {
    data: data
  }
}
module.exports = {
  getArticle,
  getNewestArticle,
  getArticleById,
  getMyMess
}