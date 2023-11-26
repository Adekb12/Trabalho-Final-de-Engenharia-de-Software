import itensPedidosServices from '../services/itensPedidos.services.js'
import pedidosPersistence from "../persistence/pedidos.persistence.js";
import cardapioPersistence from '../persistence/cardapio.persistence.js';

async function visualizarItensPedido(req, res) {
    const idPedido = req.params.idPedido;
    var resultado = null;
    if (await pedidosPersistence.existePedido(idPedido)) {
        resultado = await itensPedidosServices.visualizarItensPedido(idPedido)
    }
    res.send(JSON.stringify(resultado))
}

async function adicionarItemPedido(req, res) {
    const idPedido = req.params.idPedido;
    const idItemCardapio = req.body.idItem;
    const quantidade = req.body.quantidade;

    var resultado = null;
    resultado = await itensPedidosServices.adicionarItemPedido(idPedido, idItemCardapio, quantidade);

    res.send(resultado)
}

async function removerItemPedido(req, res) {
    //const idPedido = req.params.idPedido;
    const idItemPedido = req.params.idItemPedido;
    var resultado = null;

    if (true) { //seu coloco await pedidosPersistence.existePedido(idPedido) dá erro de muitas conexões
        resultado = await itensPedidosServices.removerItemPedido(idItemPedido);
    } else {
        resultado = { success: false, mensagem: "Id do pedido não existe" };
    }

    res.send(resultado)
}

async function alterarQuantidadeItemPedido(req, res) {
    const idItemPedido = req.params.idItemPedido;
    const quantidade = req.body.quantidade;
    console.log(idItemPedido + "?????" + quantidade)
    //validar os dados
    var resultado = null
    if (verificarQuantidade(quantidade)) {
        resultado = await itensPedidosServices.alterarQuantidadeItemPedido(idItemPedido, quantidade);
    }
    res.send(resultado)
}

function verificarQuantidade(quantidade) {
    return quantidade > 0;
}

export default { visualizarItensPedido, adicionarItemPedido, removerItemPedido, alterarQuantidadeItemPedido };