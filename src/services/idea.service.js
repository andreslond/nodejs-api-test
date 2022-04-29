const BaseService = require('./base.service');
let _ideaRepository = null;

class IdeaService extends BaseService {

    constructor({ IdeaRepository }) {
        super(IdeaRepository);
        _ideaRepository = IdeaRepository;
    }

    async getUsersIdeas(author) {
        if (!author) {
            const error = new Error();
            error.status = 400;
            error.message = 'userId must be sent';
            throw error;
        }

        return await _ideaRepository.getUsersIdeas(author);
    }

    async upVoteIdea(ideaId) {
        if (!ideaId) {
            const error = new Error();
            error.status = 400;
            error.message = 'ideaId must be sent';
            throw error;
        } //Create bad request exception en caso de un mal parámetro

        const idea = await _ideaRepository.get(ideaId);
        if(!idea){
            const error = new Error();
            error.status = 400;
            error.message = 'Idea does not exist';
            throw error;
        }

        idea.upVotes.push(true);

        return await _ideaRepository.update(ideaId, {upvotes: idea.upvotes});
    }

    async downVoteIdea(ideaId) {
        if (!ideaId) {
            const error = new Error();
            error.status = 400;
            error.message = 'ideaId must be sent';
            throw error;
        } //Create bad request exception en caso de un mal parámetro

        const idea = await _ideaRepository.get(ideaId);
        if(!idea){
            const error = new Error();
            error.status = 400;
            error.message = 'Idea does not exist';
            throw error;
        }

        idea.downVotes.push(true);

        return await _ideaRepository.update(ideaId, {downvotes: idea.downvotes});
    }
}