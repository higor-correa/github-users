const githubUsers = require('../controllers/githubUserController');

module.exports = function (app) {
    app.route('/api/users')
        .get(githubUsers.listUsers);

    app.route('/api/users/:userName/details')
        .get(githubUsers.getUserDetails);

    app.route('/api/users/:userName/repos')
        .get(githubUsers.getUserRepositories);
};
