const BaseReporitory = require('./base.repository');
let _user = null;
class UserRepository extends BaseReporitory {
    constructor({ User }) {
        super(User)
        _user = User;
    }

    async getUserByUsername(username) {
        return await _user.findOne({ username });
    }
}

module.exports = UserRepository;