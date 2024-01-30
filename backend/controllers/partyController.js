const PartyModel = require('../models/party');

const partyController = {
	create: async(req, res) =>{
		try {
			const party = {
				title: {
					title: req.body.title,
					author: req.body.author,
					description: req.body.description,
					budget: req.body.budget,
					image: req.body.image,
					services: req.body.services,
				}
			}
		} catch (error) {
			console.log(error)
		}
	}
}

module.exports = partyController;