const mongoose = require('mongoose');

let ArticleSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description: String,
        feature_img: String,
        claps: Number,
        aauthor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        commments: [
            {
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                text: String
            }
        ]
    }

);
// use arrow function and see
ArticleSchema.methods.clap = function() {
    this.claps++;
    return this.save();
}

ArticleSchema.methods.comment = function(c) {
    this.commments.push(c);
    return this.save();
}

ArticleSchema.methods.addAuthor = function(author_id) {
    this.author = author_id;
    return this.save();
}

ArticleSchema.methods.getUserArticle = function(_id) {
    Article.find({'author': _id}).then((article) => {
        return article
    })
}

module.exports = mongoose.model('Article', ArticleSchema);
