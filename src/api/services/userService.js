const gitRequest = require('./utils/githubRequest');


const getNextPageSince = (link) => {
    const match = (link || '').match(/(since)\=\d+/g);

    if (match && match[0])
        return match[0].replace(/(since)|\=|/g, "");

    return '';
}

const getUsers = async ({ since }) => {
    try {
        const response = await gitRequest.get('users', { params: { since, per_page: 10 } });

        const nextSince = getNextPageSince(response.headers.link);

        return { users: response.data, nextSince: nextSince };
    } catch (err) {
        console.log(err);
        throw 'Was not possible to get users from github';
    }
}

const getUserDetails = async ({ userName }) => {
    try {
        const response = await gitRequest.get(`users/${userName}`);
        return response.data;
    } catch{
        return `Was not possible to get ${userName} from github`;
    }
}

const getRepositoriesFromUser = async ({ userName }) => {
    try {
        const response = await gitRequest.get(`users/${userName}/repos`);
        return response.data;
    } catch{
        return `Was not possible to get ${userName}'s repositories from github`;
    }
}

module.exports = {
    getUsers,
    getUserDetails,
    getRepositoriesFromUser
}