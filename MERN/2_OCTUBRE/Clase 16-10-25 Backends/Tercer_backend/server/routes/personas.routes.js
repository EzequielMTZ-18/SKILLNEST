import { Router } from 'express'
import personaController from '../controllers/personas.controller.js';

const routePersona = Router();


routePersona.get('/', personaController.obtenerTodos)

routePersona.post('/', personaController.crearPersona)

routePersona.get('/:name', personaController.buscarPersona)

export default routePersona;
