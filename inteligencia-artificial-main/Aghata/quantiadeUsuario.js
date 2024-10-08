import { getCSS } from "./common.js";


async function quantidadeUsuario() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuario.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuario = Object.values(dados)
  
    const data = [
        {
          x: 'nomeDasRedes',
          y: quantidadeDeUsuarios,
          type: 'bar',
          marker: {
            color: getCSS('--primary-color')
          }
        }
      ]
  
  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data)
  
  }
  
  quantidadeUsuario()
  