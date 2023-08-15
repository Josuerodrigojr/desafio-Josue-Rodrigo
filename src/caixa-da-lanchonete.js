
import {formaPagamento,itensEquantidade,itemCardapio, precoPedido } from './utils/caixa-da-lanchonete.js'


class CaixaDaLanchonete {

   
    
    
    calcularValorDaCompra(metodoDePagamento, itens) {
      
        const pagamento = formaPagamento(metodoDePagamento)
        if (!pagamento){
            return "Forma de pagamento inválida!"
       }
            
       const {pedidos, quantidade, itemExtra, quantidadeNula} = itensEquantidade(itens)
            if (pedidos.length == 0 ){
                return 'Não há itens no carrinho de compra!'
            }
            if (quantidadeNula){
                return "Quantidade inválida!"
            }      
            const itemValido = itemCardapio(pedidos)
            if (!itemValido){
                return "Item inválido!"
            }              
            

            if(!itemExtra){
                return "Item extra não pode ser pedido sem o principal"
            }

            let conta = precoPedido(pedidos, quantidade, metodoDePagamento)
                conta = String(conta).replace('.', ',')
                return `R$ ${conta}`

        

    }

}

new CaixaDaLanchonete().calcularValorDaCompra('credito', ['combo1,1','cafe,2']);


export { CaixaDaLanchonete };
