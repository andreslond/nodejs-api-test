const res = require("express/lib/response");

let ideaService = null;
class IdeaController {
    constructor({ IdeaService }) {
        ideaService = IdeaService;
    }

    async get(req, res) {
        const { ideaId } = req.params;
        const idea = await ideaService.get(ideaId);
        return res.send(idea);
    }

    async getAll(req, res) {
        const ideas = await ideaService.getAll();
        return res.send(ideas);
    }

    async create(req, res) {
        const { body } = req;
        const createdIdea = await ideaService.create(body);
        return res.satus(200).send(createdIdea);
    }

    async update(req, res) {
        const { body } = req;
        const { ideaId } = req.params;
        const updatedIdea = ideaService.update(ideaId, body);
        return res.send(updatedIdea);
    }

    async delete(req, res) {
        const { ideaId } = req.params;
        const deletedIdea = ideaService.delete(ideaId);
        return res.send(deletedIdea);
    }

    async getUserIdeas(req, res) {
        const { userId } = req.params;
        const ideas = await ideaService.getUserIdeas(userId);
        return res.send(ideas);
    }

    async upvoteIdea(req, res) {
        const { ideaId } = req.params;
        const idea = await ideaService.updatedIdea(ideaId);
        return res.send(idea);
    }

    async downvoteIdea(req, res) {
        const { ideaId } = req.params;
        const idea = await ideaService.downvoteIdea(ideaId);
        return res.send(idea);
    }
}

module.exports = IdeaController;