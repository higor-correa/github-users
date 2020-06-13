const userService = require('../services/userService');

exports.listUsers = async function (req, res) {
    const usersReturn = await userService.getUsers({ since: req.query.since });

    if (typeof usersReturn === 'string')
        res.status = 500;

    res.json({ users: usersReturn.users, nextPage: `${req.route.path}?since=${usersReturn.nextSince}` });
}

exports.getUserDetails = async function (req, res) {
    const userReturn = await userService.getUserDetails({ userName: req.params.userName });
    if (typeof usersReturn === 'string')
        res.status = 500;
        
    res.json(userReturn);
}

exports.getUserRepositories = async function (req, res) {
    const userReturn = await userService.getRepositoriesFromUser({ userName: req.params.userName });
    if (typeof usersReturn === 'string')
        res.status = 500;

    res.json(userReturn);
}