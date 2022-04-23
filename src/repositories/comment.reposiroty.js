const BaseReporitory = require('./base.repository');
let _comment = null;
class CommentRepository extends BaseReporitory {
    constructor({ Comment }) {
        super(Comment);
        _comment = Comment;
    }
}

module.exports = CommentRepository