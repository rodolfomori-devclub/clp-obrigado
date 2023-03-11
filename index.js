const [ diasEl,horasEl,minutosEl,segundosEl ] = [ "dias","horas","minutos","segundos" ].map(item => document.getElementById(item))

function contadorDias(){
    const dataCurso = new Date("19 Mar 2023 23:59:59")
    const dataAtual = new Date()

    const totalSegundos = (dataCurso - dataAtual) / 1000
    const dias = Math.floor(totalSegundos / 3600 / 24)
    const horas = Math.floor(totalSegundos / 3600) % 24
    const minutos = Math.floor(totalSegundos / 60) % 60
    const segundos = Math.floor(totalSegundos) % 60

    diasEl.innerHTML = formatacaoTempo(dias)
    horasEl.innerHTML = formatacaoTempo(horas)
    minutosEl.innerHTML = formatacaoTempo(minutos)
    segundosEl.innerHTML = formatacaoTempo(segundos)
}


function formatacaoTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo
}
contadorDias()
setInterval(contadorDias, 1000)
