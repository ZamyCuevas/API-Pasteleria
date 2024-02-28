import { Router } from "express";
import { 
    getAll, 
    getOne, 
    insertOne,
    updateOne,
    deleteOne, 
    mostrarPaginaPasteles,
    mostrarPaginaAgregaPasteles,
    mostrarPaginaEditarEliminar,
    mostrarPaginaIndex
} from "../controllers/pastel.controller.js";

const router = Router();

// Ruta para obtener todos los pasteles
router.get('/', getAll);

// Ruta para obtener un solo pastel por código
router.get('/:codigo', getOne);

// Ruta para insertar un pastel
router.post('/', insertOne);

// Ruta para actualizar un pastel
router.post("/:codigo", updateOne)

// Ruta para eliminar un pastel
router.get("/deleteOne/:codigo", deleteOne);

router.get('/pasteles/mostrar', mostrarPaginaPasteles);

router.get('/pasteles/agregar', mostrarPaginaAgregaPasteles);

router.get('/pasteles/edieli', mostrarPaginaEditarEliminar);

router.get('/pasteles/inicio', mostrarPaginaIndex);

export default router;
