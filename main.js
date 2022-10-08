let iguales = [];
let trio = [];
let parejas = [];
let rio = [];
let mvp = [];
let dispares = [];
let unico = [];
const nameConjunto = ["iguales","trio","parejas","rio","mvp","dispares","unico"];
const dinosaurios = ["triceratops","apatosaurio","braquiosaurio","espinosaurio","t-rex","estegosaurio"];
var aplicaValor = false;
let conjunto = [[],[],[],[],[],[],[]];
let interruptor = false;
let isEliminated = false;

const botonesAgregar = document.getElementById("agregar-mvp");
const botonesConfirmar = document.getElementsByClassName("confirmar-valor");

/// botones zona iguales
const IgContenedor = document.querySelector(".iguales .agregar-dino")
const IgTricera = document.querySelector(".iguales .agregar-dino .triceratops")
const IgApato = document.querySelector(".iguales .agregar-dino .apatosaurio")
const IgBraquio = document.querySelector(".iguales .agregar-dino .braquiosaurio")
const IgEspino = document.querySelector(".iguales .agregar-dino .espinosaurio")
const IgRex = document.querySelector(".iguales .agregar-dino .t-rex")
const IgEstego = document.querySelector(".iguales .agregar-dino .estegosaurio")

/// botones zona trio
const TrioContenedor = document.querySelector(".trio .agregar-dino")
const TrioTricera = document.querySelector(".trio .agregar-dino .triceratops")
const TrioApato = document.querySelector(".trio .agregar-dino .apatosaurio")
const TrioBraquio = document.querySelector(".trio .agregar-dino .braquiosaurio")
const TrioEspino = document.querySelector(".trio .agregar-dino .espinosaurio")
const TrioRex = document.querySelector(".trio .agregar-dino .t-rex")
const TrioEstego = document.querySelector(".trio .agregar-dino .estegosaurio")

/// botones zona parejas
const ParejasContenedor = document.querySelector(".parejas .agregar-dino")
const ParejasTricera = document.querySelector(".parejas .agregar-dino .triceratops")
const ParejasApato = document.querySelector(".parejas .agregar-dino .apatosaurio")
const ParejasBraquio = document.querySelector(".parejas .agregar-dino .braquiosaurio")
const ParejasEspino = document.querySelector(".parejas .agregar-dino .espinosaurio")
const ParejasRex = document.querySelector(".parejas .agregar-dino .t-rex")
const ParejasEstego = document.querySelector(".parejas .agregar-dino .estegosaurio")

/// botones zona rio
const RioContenedor = document.querySelector(".rio .agregar-dino")
const RioTricera = document.querySelector(".rio .agregar-dino .triceratops")
const RioApato = document.querySelector(".rio .agregar-dino .apatosaurio")
const RioBraquio = document.querySelector(".rio .agregar-dino .braquiosaurio")
const RioEspino = document.querySelector(".rio .agregar-dino .espinosaurio")
const RioRex = document.querySelector(".rio .agregar-dino .t-rex")
const RioEstego = document.querySelector(".rio .agregar-dino .estegosaurio")

/// botones zona desiguales
const DesContenedor = document.querySelector(".dispares .agregar-dino")
const DesTricera = document.querySelector(".dispares .agregar-dino .triceratops")
const DesApato = document.querySelector(".dispares .agregar-dino .apatosaurio")
const DesBraquio = document.querySelector(".dispares .agregar-dino .braquiosaurio")
const DesEspino = document.querySelector(".dispares .agregar-dino .espinosaurio")
const DesRex = document.querySelector(".dispares .agregar-dino .t-rex")
const DesEstego = document.querySelector(".dispares .agregar-dino .estegosaurio")

/// botones zona unico
const UniContenedor = document.querySelector(".unico .agregar-dino")
const UniTricera = document.querySelector(".unico .agregar-dino .triceratops")
const UniApato = document.querySelector(".unico .agregar-dino .apatosaurio")
const UniBraquio = document.querySelector(".unico .agregar-dino .braquiosaurio")
const UniEspino = document.querySelector(".unico .agregar-dino .espinosaurio")
const UniRex = document.querySelector(".unico .agregar-dino .t-rex")
const UniEstego = document.querySelector(".unico .agregar-dino .estegosaurio")

/// arrays de botones
let IgArray = [IgTricera,IgApato,IgBraquio,IgEspino,IgRex,IgEstego]
let TrioArray = [TrioTricera,TrioApato,TrioBraquio,TrioEspino,TrioRex,TrioEstego]
let ParejasArray = [ParejasTricera,ParejasApato,ParejasBraquio,ParejasEspino,ParejasRex,ParejasEstego]
let RioArray = [RioTricera,RioApato,RioBraquio,RioEspino,RioRex,RioEstego]
let DesArray = [DesTricera,DesApato,DesBraquio,DesEspino,DesRex,DesEstego]
let UniArray = [UniTricera,UniApato,UniBraquio,UniEspino,UniRex,UniEstego]


function buttonCreator(lugar, dino){
    /* (".unico .agregar-dino .estegosaurio") */
    let newbutton = document.createElement("button");
    newbutton.classList.add(dinosaurios[dino]);
    newbutton.setAttribute("onclick", `agregarDino(${lugar},${dino})`)
    return newbutton
}


function agregarDino(lugar,dino){
    console.log(`lugar: ${lugar} conjunto.length: ${conjunto[lugar].length} entrada agregar`)
    conjunto[lugar].push(dinosaurios[dino]);
/*     console.log(conjunto); */
    agregarDinoMapa(lugar,dino);
    buttonControl(lugar, dino);
    if(lugar == 4){
        controladorBotones();
    }
}

function buttonControl(lugar, dino){
    console.log(`lugar: ${lugar} conjunto.length: ${conjunto[lugar].length} entrada funcion`)
    let nuevoBoton = document.createElement("button");
    nuevoBoton.classList.add("invalid");
    if(lugar == 0){
        console.log("se inicio la primera condicion")
        for(let din in dinosaurios){
            IgArray[din].classList.remove(dinosaurios[din])
            IgArray[din].removeAttribute("onclick")
            IgArray[din].classList.add("invalid");
        }
        IgArray[dino].classList.add(dinosaurios[dino])
        IgArray[dino].classList.remove("invalid");
        IgArray[dino].setAttribute("onclick", `agregarDino(${lugar},${dino})`)
        if (conjunto[lugar].length == 0){
            for(let din in dinosaurios){
                console.log(`estamos en el bucle: ${din}`)
                IgArray[din].classList.add(dinosaurios[din])
                IgArray[din].setAttribute("onclick", `agregarDino(${lugar},${din})`)
                IgArray[din].classList.remove("invalid");
            }
        }
        if (conjunto[lugar].length == 6){
            for(let din in dinosaurios){
                IgArray[din].classList.remove(dinosaurios[din])
                IgArray[din].removeAttribute("onclick")
                IgArray[din].classList.add("invalid");
            }
        }
    }
    if (lugar == 1){
        if(conjunto[lugar].length == 6){
            for(let din in dinosaurios){
                TrioArray[din].classList.remove(dinosaurios[din])
                TrioArray[din].removeAttribute("onclick")
                TrioArray[din].classList.add("invalid");
            }
        }
        if (conjunto[lugar].length == 0){
            for(let din in dinosaurios){
                TrioArray[din].classList.add(dinosaurios[din])
                TrioArray[din].setAttribute("onclick", `agregarDino(${lugar},${din})`)
                TrioArray[din].classList.remove("invalid");
            }
        }
        
    }
    if (lugar == 2){
        if(conjunto[lugar].length == 6){
            for(let din in dinosaurios){
                ParejasArray[din].classList.remove(dinosaurios[din])
                ParejasArray[din].removeAttribute("onclick")
                ParejasArray[din].classList.add("invalid");
            }
        }
        if (conjunto[lugar].length == 0){
            for(let din in dinosaurios){
                ParejasArray[din].classList.add(dinosaurios[din])
                ParejasArray[din].setAttribute("onclick", `agregarDino(${lugar},${din})`)
                ParejasArray[din].classList.remove("invalid");
            }
        }
    }
    if (lugar == 3){
        if(conjunto[lugar].length == 6){
            for(let din in dinosaurios){
                RioArray[din].classList.remove(dinosaurios[din])
                RioArray[din].removeAttribute("onclick")
                RioArray[din].classList.add("invalid");
            }
        }
        if (conjunto[lugar].length == 0){
            for(let din in dinosaurios){
                RioArray[din].classList.add(dinosaurios[din])
                RioArray[din].setAttribute("onclick", `agregarDino(${lugar},${din})`)
                RioArray[din].classList.remove("invalid");
            }
        }
    }
    if (lugar == 4){
        interruptor = true;
    }
    if(lugar == 5){
        DesArray[dino].classList.remove(dinosaurios[dino])
        DesArray[dino].removeAttribute("onclick")
        DesArray[dino].classList.add("invalid");
        if(isEliminated){
            DesArray[dino].classList.add(dinosaurios[dino])
            DesArray[dino].setAttribute("onclick", `agregarDino(${lugar},${dino})`)
            DesArray[dino].classList.remove("invalid");
        }
    }
    if(lugar == 6){
        for(let din in dinosaurios){
            UniArray[din].classList.remove(dinosaurios[din])
            UniArray[din].removeAttribute("onclick")
            UniArray[din].classList.add("invalid");
        }
        if (conjunto[lugar].length == 0){
            for(let din in dinosaurios){
                UniArray[din].classList.add(dinosaurios[din])
                UniArray[din].setAttribute("onclick", `agregarDino(${lugar},${din})`)
                UniArray[din].classList.remove("invalid");
            }
        }
        if (conjunto[lugar].length == 1){
            for(let din in dinosaurios){
                UniArray[din].classList.remove(dinosaurios[din])
                UniArray[din].removeAttribute("onclick")
                UniArray[din].classList.add("invalid");
            }
        }
    }
}

function agregarDinoMapa(lugar, dino){
    let nuevoCuadro = document.createElement("button");
    nuevoCuadro.classList.add(dinosaurios[dino]);
    nuevoCuadro.classList.add("dino-agregado");
    nuevoCuadro.classList.add(`camp${lugar}`)
    nuevoCuadro.setAttribute("onclick", `eliminarDino(${lugar},${dino})`)
    let campo = document.getElementsByClassName(`campo-${lugar}`);
    campo[0].appendChild(nuevoCuadro)
    actualizar();
}

function eliminarDino(lugar, dino){
    isEliminated = true;
    console.log(`lugar: ${lugar} conjunto.length: ${conjunto[lugar].length} entrada eliminar`)
    let dinoTarget = document.getElementsByClassName(`${dinosaurios[dino]} dino-agregado camp${lugar}`);
    dinoTarget[0].remove();
    conjunto[lugar].pop(dinosaurios[dino]);
    if(lugar == 4){
        interruptor = false;
        controladorBotones();
    }
    buttonControl(lugar, dino);
    actualizar();
    isEliminated = false;
}

function agregarPuntaje(puntajeCalc){
    borrarPuntajeCreado();
    let nuevoPuntaje = document.createElement("p");
    nuevoPuntaje.classList.add("puntaje");
    let textParrafo = document.createTextNode(puntajeCalc);
    let bloque = document.getElementsByClassName("bloque-puntaje");
    bloque[0].appendChild(nuevoPuntaje);
    nuevoPuntaje.appendChild(textParrafo);
}

function borrarPuntajeCreado(){
    document.getElementsByClassName("puntaje")[0].remove();
}

function calcularPuntaje(conjunto){
    iguales = conjunto[0];
    trio = conjunto[1];
    parejas = conjunto[2];
    rio = conjunto[3];
    mvp = conjunto[4];
    dispares = conjunto[5];
    unico = conjunto[6];
    let puntPares = calcularPuntajeIguales(iguales);
    let puntTrio = calcularPuntajeTrio(trio);
    let puntParejas = calcularPuntajeParejas(parejas);
    let puntRio = calcularPuntajeRio(rio);
    let puntMvp = calcularPuntajeMvp(mvp, aplicaValor);
    let puntDispares = calcularPuntajeDispares(dispares);
    let puntUnico = calcularPuntajeUnico(conjunto, unico);

    let puntajeTotal = puntPares+puntTrio+puntParejas+puntMvp+puntDispares+puntUnico+puntRio;
    
    return puntajeTotal;
}

function calcularPuntajeIguales(iguales){
    let placeholder = null;
    let contador = 0;
    let puntajeIguales = 0;
    /* calculo de puntos en zona pares */
    if (iguales.length >= 1){
        for(i=0;i<iguales.length;i++){
            if(placeholder == null){
                placeholder = iguales[i];
                contador++
            }else if(placeholder == iguales[i]){
                contador++
            }
        }
        if (contador == 1){
            puntajeIguales = 2;
        }else if (contador == 2){
            puntajeIguales = 4;
        }else if (contador == 3){
            puntajeIguales = 8;
        }else if (contador == 4){
            puntajeIguales = 12;
        }else if (contador == 5){
            puntajeIguales = 18;
        }else if (contador == 6){
            puntajeIguales = 24;
        }
    }
    return puntajeIguales;
}

function calcularPuntajeTrio(trio){
    let contador = 0;
    let repetidos = {};
    let valor1 = 0
    let valor2 = 0
    let valor3 = 0
    let valor4 = 0
    let valor5 = 0
    let valor6 = 0

    trio.forEach(function(numero){
    repetidos[numero] = (repetidos[numero] || 0) + 1;
    });

    if (repetidos[dinosaurios[0]] > 1){
        valor1 = repetidos[dinosaurios[0]]
    }
    if (repetidos[dinosaurios[1]] > 1){
        valor2 = repetidos[dinosaurios[1]]
    }
    if (repetidos[dinosaurios[2]] > 1){
        valor3 = repetidos[dinosaurios[2]]
    }
    if (repetidos[dinosaurios[3]] > 1){
        valor4 = repetidos[dinosaurios[3]]
    }
    if (repetidos[dinosaurios[4]] > 1){
        valor5 = repetidos[dinosaurios[4]]
    }
    if (repetidos[dinosaurios[5]] > 1){
        valor6 = repetidos[dinosaurios[5]]
    }

    contador += Math.floor(parseInt(valor1/3));
    contador += Math.floor(parseInt(valor2/3));
    contador += Math.floor(parseInt(valor3/3));
    contador += Math.floor(parseInt(valor4/3));
    contador += Math.floor(parseInt(valor5/3));
    contador += Math.floor(parseInt(valor6/3));

    return (contador*7);
}

function calcularPuntajeParejas(parejas){
    let contador = 0;
    let repetidos = {};
    let valor1 = 0
    let valor2 = 0
    let valor3 = 0
    let valor4 = 0
    let valor5 = 0
    let valor6 = 0

    parejas.forEach(function(numero){
    repetidos[numero] = (repetidos[numero] || 0) + 1;
    });

    if (repetidos[dinosaurios[0]] > 1){
        valor1 = repetidos[dinosaurios[0]]
    }
    if (repetidos[dinosaurios[1]] > 1){
        valor2 = repetidos[dinosaurios[1]]
    }
    if (repetidos[dinosaurios[2]] > 1){
        valor3 = repetidos[dinosaurios[2]]
    }
    if (repetidos[dinosaurios[3]] > 1){
        valor4 = repetidos[dinosaurios[3]]
    }
    if (repetidos[dinosaurios[4]] > 1){
        valor5 = repetidos[dinosaurios[4]]
    }
    if (repetidos[dinosaurios[5]] > 1){
        valor6 = repetidos[dinosaurios[5]]
    }

    contador += Math.floor(parseInt(valor1/2));
    contador += Math.floor(parseInt(valor2/2));
    contador += Math.floor(parseInt(valor3/2));
    contador += Math.floor(parseInt(valor4/2));
    contador += Math.floor(parseInt(valor5/2));
    contador += Math.floor(parseInt(valor6/2));

    return (contador*5);
}

function calcularPuntajeRio(rio){
    return puntos = rio.length
}

function calcularPuntajeMvp(mvp, aplicaValor){
    let puntajeMvp = 0;
/*     console.log(mvp) */

    if(mvp.length >= 1){
        if (aplicaValor){
            puntajeMvp = 7;
        }else{
            puntajeMvp = 1;
        }
    }

    return puntajeMvp;
}

function calcularPuntajeDispares(dispares){
    let puntajeDesiguales = 0;
    let contador = dispares.length;

    if (contador == 1){
        puntajeDesiguales = 1;
    }else if (contador == 2){
        puntajeDesiguales = 3;
    }else if (contador == 3){
        puntajeDesiguales = 6;
    }else if (contador == 4){
        puntajeDesiguales = 10;
    }else if (contador == 5){
        puntajeDesiguales = 15;
    }else if (contador == 6){
        puntajeDesiguales = 21;
    }

    return puntajeDesiguales;
}

function calcularPuntajeUnico(conjunto, unico){
    let puntajeUnico = 0;

    if (unico.length >= 1){
        puntajeUnico = 7;
    }
    for (numconj=0;numconj<conjunto.length-1;numconj++){
        for (numdino=0;numdino<conjunto.length;numdino++){
            if(conjunto[numconj].includes(dinosaurios[numdino]) && unico.length >= 1 && dinosaurios[numdino] == unico[0]){
                puntajeUnico = 1;
            }
        }
    }
    return puntajeUnico;
}

function actualizar(){
    agregarPuntaje(calcularPuntaje(conjunto));
    
    
}

function cambiarBool(asignacion){
    aplicaValor = asignacion;
    console.log(aplicaValor);
    actualizar();
    return aplicaValor;
/*     calcularPuntajeMvp(mvp, aplicaValor) */
}

function ocultarBotonesDino(){
    botonesAgregar.style.display = "none";
    botonesConfirmar[0].style.display = "flex";
}

function ocultarBotonesConfirm(){
    botonesAgregar.style.display = "flex";
    botonesConfirmar[0].style.display = "none";
}

function controladorBotones(){
    if(interruptor){
        ocultarBotonesDino();
    }else{
        ocultarBotonesConfirm();
    }
}

controladorBotones();

