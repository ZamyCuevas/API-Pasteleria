import PasteleriaDAO from "../dao/pastel.dao.js";

const pasteleriaController = {};

export const getAll = (req, res) => {
    PasteleriaDAO.getAll()
        .then(pasteles => {
            res.render('../src/views/index.ejs', { pasteles });
        })
        .catch(err => res.json({
            status: "Servidor no disponible"
        }));
}

export const getOne = (req, res) => {
    const codigo = req.params.codigo;
    PasteleriaDAO.getOne(codigo)
        .then(result => {
            if (result) {
                res.render("../src/views/edit.ejs", { pastel: result });
            } else {
                res.json({
                    status: "Pastel no encontrado"
                });
            }
        })
        .catch(err => res.json({
            status: "Servidor no disponible"
        }));
}

export const insertOne = (req, res) => {
    PasteleriaDAO.insertOne(req.body)
        .then(result => res.redirect('/pasteles/mostrar'))
        .catch(err => res.json({
            status: "Servidor no disponible"
        }));
}

export const updateOne = (req, res) => {
    const codigo = req.params.codigo;
    const updatedPastel = req.body;

    PasteleriaDAO.updateOne(codigo, updatedPastel)
        .then(result => {
            if (result) {
                res.redirect(`/pasteles/mostrar`);
            } else {
                res.json({
                    status: "Pastel no encontrado"
                });
            }
        })
        .catch(err => res.json({
            status: "Servidor no disponible"
        }));
}

export const deleteOne = (req, res) => {
    const codigo = req.params.codigo;
    PasteleriaDAO.deleteOne(codigo)
      .then(result => {
        if (result) {
        res.redirect(`/pasteles/mostrar`);  
        } else {
            res.json({
                status: "Pastel no encontrado"
            });
        }
    })
      .catch(err => res.json({
            status: "Servidor no disponible"
        }));
};

export const mostrarPaginaPasteles = async (req, res) => {
    try {
        const pasteles = await PasteleriaDAO.getAll();
        res.render('../src/views/pasteles.ejs', { pasteles });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};

export const mostrarPaginaAgregaPasteles = async (req, res) => {
    try {
        const pasteles = await PasteleriaDAO.getAll();
        res.render('../src/views/insertar.ejs', { pasteles });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};

export const mostrarPaginaEditarEliminar = async (req, res) => {
    try {
        const pasteles = await PasteleriaDAO.getAll();
        res.render('../src/views/edieli.ejs', { pasteles });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};

export const mostrarPaginaIndex = async (req, res) => {
    try {
        const pasteles = await PasteleriaDAO.getAll();
        res.render('../src/views/index.ejs', { pasteles });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};