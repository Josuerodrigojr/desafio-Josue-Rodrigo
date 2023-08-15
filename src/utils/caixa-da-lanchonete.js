import  cardapio  from '../bancoDeDados.js';

function formaPagamento(metodoDePagamento) {
  if (metodoDePagamento != 'dinheiro' && metodoDePagamento != 'debito' && metodoDePagamento != 'credito'){
      return false
  } else {
      return true
  }
  
}

function itensEquantidade(itens) {
  let pedidos = []
  let quantidade = []
  let index = 0
  let itemExtra = true
  for (const item of itens) {
      index = item.indexOf(',')
      if (index != 0){
      pedidos.push(item.slice(0,index))
      quantidade.push(item.slice(index + 1)) 
}
  }

  const quantidadeNula = quantidade.every((elemento)=>{
      return elemento == 0
  })

  
  let itemExtraChantily = pedidos.some((elemento)=>{
      return elemento == 'chantily' 
  })

  if (itemExtraChantily){
      itemExtraChantily = pedidos.some((elemento)=>{
          return elemento == 'cafe'})
          if (!itemExtraChantily){
              itemExtra = false
              return {pedidos, quantidade, itemExtra, quantidadeNula}
          }
          
  }

  
  
  let itemExtraQueijo = pedidos.some((elemento)=>{
      return elemento == 'queijo'
  })

  if(itemExtraQueijo){
      itemExtraQueijo = pedidos.some((elemento)=>{
          return elemento == 'sanduiche'
      })
      if (!itemExtraQueijo){
          itemExtra = false
          return {pedidos, quantidade, itemExtra, quantidadeNula}
      }

  }

 

  

  return {pedidos, quantidade, itemExtra, quantidadeNula}

}

function itemCardapio(pedidos){
  const itensCardapio = Object.keys(cardapio)
  let itemValido = true

  for (const item of pedidos) {
      let alimentoCardapio = itensCardapio.some((elemento)=>{
          return elemento == item
      })

      if (!alimentoCardapio){
          itemValido = false
      }
      
  }

  return itemValido
}

function precoPedido(pedidos, quantidade, metodoDePagamento){
  let conta = 0
  for (let i = 0; i < pedidos.length; i++) {
      let valorProduto = cardapio[pedidos[i]].valor
      conta += Number(valorProduto)*Number(quantidade[i])
      

      
      
  }
  if (metodoDePagamento == 'dinheiro'){
      return (conta*0.95).toFixed(2)
  } else if (metodoDePagamento == 'credito'){
      return (conta*1.03).toFixed(2)
  } else {
      return conta.toFixed(2)
  }
}

export {formaPagamento,itensEquantidade,itemCardapio, precoPedido }