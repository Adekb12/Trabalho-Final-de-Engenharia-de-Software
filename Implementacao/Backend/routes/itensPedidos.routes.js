import express from 'express'
import itensPedidosController from '../controllers/itensPedidos.controller.js'

const router = express.Router()

router.post('/:idPedido', itensPedidosController.adicionarItemPedido)
router.put('/:idPedido', itensPedidosController.alterarQuantidadeItemPedido)
router.delete('/:idPedido', itensPedidosController.removerItemPedido)

export default router