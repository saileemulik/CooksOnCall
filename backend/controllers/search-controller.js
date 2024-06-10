const Cook = require('../models/cook-model');
const Team = require('../models/team-model');

const searchListings = async (userInput) => {
    try {
        const searchTerm = new RegExp(userInput, 'i');
        const query = {
            $or: [
                { speciality: { $regex: searchTerm } },
                { dish: { $regex: searchTerm } }
            ]
        };

        const cookSearchResults = Cook.find(query);
        const teamSearchResults = Team.find(query);

        const [cookResults, teamResults] = await Promise.all([cookSearchResults, teamSearchResults]);

        // Combine the results
        const combinedResults = [...cookResults, ...teamResults];

        return combinedResults;
    } catch (error) {
        console.error("Error during search:", error);
        throw error;
    }
};

module.exports = searchListings;
