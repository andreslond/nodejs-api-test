const { IdeaRepository } = require("../repositories");
const BaseService = require('./base.service.js');

let _baseService = null,
    _ideaReporitory = null;

class CommentService extends BaseService {
    constructor({ CommentRepository, IdeaRepository }) {
        super(CommentRepository);
        _commentRepository = CommentRepository;
        _ideaReporitory = IdeaRepository;
    }

    async getIdeaComments(ideaId) {
        if (!ideaId) {
            const error = new Error();
            error.status = 400;
            error.message = 'ideaId must be sent';
            throw error;
        }

        const idea = await IdeaRepository.get(ideaId);

        if (!idea) {
            const error = new Error();
            error.status = 400;
            error.message = 'Idea does not exist';
            throw error;
        }

        const { comments } = idea;
        return comments;
    }

    async createComment(comment, ideaId) {
        if (!ideaId) {
            const error = new Error();
            error.status = 400;
            error.message = 'ideaId must be sent';
            throw error;
        }

        const idea = await IdeaRepository.get(ideaId);

        if (!idea) {
            const error = new Error();
            error.status = 400;
            error.message = 'Idea does not exist';
            throw error;
        }

        const createdComment = await _commentRepository.create(comment);
        idea.comment.push(createdComment);

        return await _ideaReporitory.update(ideaId, { comments: idea.comments });
    }

}

module.exports = CommentService;