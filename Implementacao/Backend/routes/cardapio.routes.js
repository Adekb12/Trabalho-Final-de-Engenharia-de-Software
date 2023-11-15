import express from 'express'
import cardapioController from '../controllers/cardapio.controller.js'

const router = express.Router()

router.get('', cardapioController.visualizarItens)
router.post('', cardapioController.adicionarItem)
router.delete('/:nome', cardapioController.removerItem)
router.put('/:nome', cardapioController.alterarItem)

export default router