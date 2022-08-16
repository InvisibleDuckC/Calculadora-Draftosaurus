let iguales = [];
let trio = [];
let parejas = [];
let mvp = [];
let dispares = [];
let unico = [];
let nameConjunto = ["iguales","trio","parejas","mvp","dispares","unico"];
let dinosaurios = ["triceratops","apatosaurio","braquiosaurio","espinosaurio","t-rex","estegosaurio"];
var aplicaValor = false;
let conjunto = [[],[],[],[],[],[]];
let interruptor = false;

let botonesAgregar = document.getElementById("agregar-mvp");
let botonesConfirmar = document.getElementsByClassName("confirmar-valor");

/// botones zona iguales
const IgContenedor = document.querySelector(".iguales .agregar-dino")
const IgTricera = document.querySelector(".iguales .agregar-dino .triceratops")
const IgApato = document.querySelector(".iguales .agregar-dino .apatosaurio")
const IgBraquio = document.querySelector(".iguales .agregar-dino .braquiosaurio")
const IgEspino = document.querySelector(".iguales .agregar-dino .espinosaurio")
const IgRex = document.querySelector(".iguales .agregar-dino .t-rex")
const IgEstego = document.querySelector(".iguales .agregar-dino .estegosaurio")

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

let IgArray = [IgTricera,IgApato,IgBraquio,IgEspino,IgRex,IgEstego]
let DesArray = [DesTricera,DesApato,DesBraquio,DesEspino,DesRex,DesEstego]
let UniArray = [UniTricera,UniApato,UniBraquio,UniEspino,UniRex,UniEstego]


function agregarDino(lugar,dino){
    let nuevoBoton = document.createElement("button");
    nuevoBoton.classList.add("invalid");
    conjunto[lugar].push(dinosaurios[dino]);
    console.log(conjunto);
    if (lugar == 3){
        interruptor = true;
    }
    agregarDinoMapa(lugar,dino)
    controladorBotones();
    if(lugar == 0){
        let momentaneo = IgArray[dino]
        for (let i = 0; i < IgArray.length;i++){
            IgArray[i].remove();
        }
        IgContenedor.appendChild(momentaneo)
    }
    if(lugar == 4){
        DesArray[dino].remove();
        DesContenedor.appendChild(nuevoBoton)
    }
    if(lugar == 5){
        for (let i = 0; i < UniArray.length;i++){
            UniArray[i].remove();
        }
        UniContenedor.appendChild(nuevoBoton)
    }

}

function agregarDinoMapa(lugar, dino){
    let nuevoCuadro = document.createElement("div");
    nuevoCuadro.classList.add(dinosaurios[dino]);
    nuevoCuadro.classList.add("dino-agregado");
    let campo = document.getElementsByClassName(`campo-${lugar}`);
    campo[0].appendChild(nuevoCuadro)
    actualizar();
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
    mvp = conjunto[3];
    dispares = conjunto[4];
    unico = conjunto[5];
    let puntPares = calcularPuntajeIguales(iguales);
    let puntTrio = calcularPuntajeTrio(trio);
    let puntParejas = calcularPuntajeParejas(parejas);
    let puntMvp = calcularPuntajeMvp(mvp, aplicaValor);
    let puntDispares = calcularPuntajeDispares(dispares);
    let puntUnico = calcularPuntajeUnico(conjunto, unico);

    let puntajeTotal = puntPares+puntTrio+puntParejas+puntMvp+puntDispares+puntUnico;
    
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
    let placeholder = null;
    let contador = 0;
    let puntajeTrio = 0;
    /* calculo de puntos en zona pares */
    if (trio.length >= 1){
        for(i=0;i<trio.length;i++){
            if(placeholder == null){
                placeholder = trio[i];
                contador++
            }else if(placeholder == trio[i]){
                contador++
            }
        }
        if (contador == 3){
            puntajeTrio = 7;
        }
    }
    return puntajeTrio;
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

function calcularPuntajeMvp(mvp, aplicaValor){
    let puntajeMvp = 0;
    console.log(mvp)

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
