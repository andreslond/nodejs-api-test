let commentService = null;
class CommentController {
    constructor({ CommentService }) {
        commentService = CommentService;
    }

    async get(req, res) {
        const { commentId } = req.params;
        const comments = await commentService.get(commentId);
        return res.send(comments);
    }

    async update(req, res) {
        const { body } = req;
        const { commentId } = req.params;
        const updatedComment = commentService.update(commentId, body);
        return res.send(updatedComment);
    }

    async delete(req, res) {
        const { commentId } = req.params;
        const deletedComment = commentService.delete(commentId);
        return res.send(deletedComment);
    }

    async getIdeaComments(req, res) {
        const { ideaId } = req.params;
        const ideaComments = await commentService.getIdeaComments(ideaId);
        return res.send(ideaComments);
    }

    async createComment(req, res) {
        const { body } = req;
        const { ideadId } = req.params
        const createdComment = await commentService.createComment(body, ideadId);
        return res.status(201).send(createdComment);
    }
}

module.exports = CommentController;