import Pasteleria from "../models/pastel.model.js";

const PasteleriaDAO = {};

PasteleriaDAO.getAll = async () => {
    const pasteles = await Pasteleria.find({});
    return pasteles;
};

PasteleriaDAO.getOne = async (codigo) => {
    const pastel = await Pasteleria.findOne({ codigo: codigo });
    return pastel;
};

PasteleriaDAO.insertOne = async (pastel) => {
    return await Pasteleria.create(pastel);
};

PasteleriaDAO.updateOne = async (codigo, pastel) => {
    return await Pasteleria.findOneAndUpdate({ codigo: codigo }, pastel);
};

PasteleriaDAO.deleteOne = async (codigo) => {
    return await Pasteleria.findOneAndDelete({ codigo: codigo });
};

export default PasteleriaDAO;
