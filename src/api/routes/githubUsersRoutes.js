const githubUsers = require('../controllers/githubUserController');

module.exports = function (app) {
    app.route('/users')
        .get(githubUsers.listUsers);

    app.route('/users/:userName/details')
        .get(githubUsers.getUserDetails);

    app.route('/users/:userName/repos')
        .get(githubUsers.getUserRepositories);
};
