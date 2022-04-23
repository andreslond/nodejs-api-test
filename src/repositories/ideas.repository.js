const BaseReporitory = require('./base.repository');
let _idea = null;
class IdeaRepository extends BaseReporitory {
    constructor({ Idea }) {
        super(Idea);
        _idea = Idea;
    }

    // Ideas from specific user
    async getUserIdeas(author) {
        return await _idea.find({ author })
    }
}

module.exports = IdeaRepository;