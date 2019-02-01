const articlecontroller = require('./../controllers/article.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
    // getAll article
    router
        .route('/articles')
        .get(articlecontroller.getAll)
    // add an aritcle
    router
        .route('/article')
        .post(multipartWare, articlecontroller.addArticle)

    /**
     * comment on an article
     */
    router
        .route('/article/comment')
        .post(articlecontroller.commentArticle)
    /**
     * get a particlular article to view
     */
    router
        .route('/article/:id')
        .get(articlecontroller.getArticle)
}