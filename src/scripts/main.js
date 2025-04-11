AOS.init();

const dataDoEvento = new Date('Dec 12, 2025 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(() => {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaAteOevento = timeStampDoEvento - timeStampAtual
    
    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diasAteOevento =  Math.floor((distanciaAteOevento / diaEmMs))
    const horasAteOevento =  Math.floor((distanciaAteOevento % diaEmMs) / horaEmMs)
    const minutosAteOevento =  Math.floor((distanciaAteOevento % horaEmMs) / minutoEmMs)
    const segundosAteOevento =  Math.floor((distanciaAteOevento % minutoEmMs) / 1000)

    document.getElementById("contador").innerHTML = `${diasAteOevento}d ${horasAteOevento}h ${minutosAteOevento}m ${segundosAteOevento}s.`

    if(distanciaAteOevento < 0){
        clearInterval(contaAsHoras)
        document.getElementById("contador").innerHTML = "Evento Expirado."
    }
}, 1000)