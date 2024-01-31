const PartyModel = require('../models/party');

function checkPartyBudget(budget, services){
	const priceSum = services.reduce((sum, services) => sum + services.price, 0);
	return (priceSum <= budget);
}

const partyController = {
	create: async(req, res) =>{
		try {
			const party = {
				title: req.body.title,
				author: req.body.author,
				description: req.body.description,
				budget: req.body.budget,
				image: req.body.image,
				services: req.body.services,
			}

			if(party.services && !checkPartyBudget(party.budget, party.services)){
				res.status(406).json({message: 'Seu saldo é insuficiente para criar essa festa.'});
				return;
			}

			const response = await PartyModel.create(party);

			res.status(201).json({response, message: 'Festa criada com sucesso!'});
		} catch (error) {
			console.log(error)
		}
	},
	getAll: async(req, res) => {
		try {
			const response = await PartyModel.find();
			if(!response.length){
				res.status(404).json({message: 'Nenhuma festa encontrada.'});
				return;
			}
			res.status(200).json(response);
		} catch (error) {
			console.log(error)
		}
	},
	get: async(req, res) => {
		try {
			const response = await PartyModel.findById(req.params.id);
			if(!response){
				res.status(404).json({message: 'Festa não encontrada.'});
				return;
			}
			res.status(200).json(response);
		} catch (error) {
			console.log(error)
		}
	},
	update: async(req, res) => {
		try {
			const id = req.params.id;

			const response = await PartyModel.findByIdAndUpdate(id, req.body);

			if(!response){
				res.status(404).json({message: 'Festa não encontrada.'});
				return;
			}

			res.status(200).json({message: 'Festa atualizada com sucesso!'});
		} catch (error) {
			console.log(error)
		}
	},
	delete: async(req, res) => {
		try {
			const response = await PartyModel.findByIdAndDelete(req.params.id);
			if(!response){
				res.status(404).json({message: 'Festa não encontrada.'});
				return;
			}
			res.status(200).json({message: 'Festa deletada com sucesso!'});
		} catch (error) {
			console.log(error)
		}
	}

}

module.exports = partyController;