class BaseReporitory {
    constructor(model) {
        //any kind of model
        this.model = model;
    }

    async get(id) {
        return await this.model.findById(id);
    }

    async getAll() {
        return await this.model.find();
    }

    async create() {
        return await this.model.create(entity);
    }

    async update(id, entity) {
        return await this.model.findByIdAndUpdate(id, entity, { new: true });
    }

    async delete(id) {
        await this.model.findByIdAndDelete(id);
        return true;
    }
}

module.exports = BaseReporitory;