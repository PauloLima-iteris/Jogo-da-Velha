const jog1 = "Pica-Pau";
const jog2 = "Zeca Urubu";
var jogador = jog1;
var fim = false;

atualizajogador();
inicializacaocampos();

function atualizajogador(){
    if(fim){
        return;
    }
    if(jogador == jog1){
        var play = document.querySelectorAll("div#inicio img")[0];
        play.setAttribute("src", "imagem/1.png");
    }
    else{
        var play = document.querySelectorAll("div#inicio img")[0];
        play.setAttribute("src", "imagem/2.png");
    }
}

function inicializacaocampos(){
    var campos = document.getElementsByClassName("campo");
    for(var i = 0; i < campos.length; i++){
        campos[i].addEventListener("click", function(){
            if(fim){
                return;
            }
            if(this.getElementsByTagName("img").length == 0){
                if(jogador == jog1){
                    this.innerHTML = "<img src='imagem/1.png'>";
                    this.setAttribute("jogada", jog1);
                    jogador = jog2;
                }
                else{
                    this.innerHTML = "<img src='imagem/2.png'>";
                    this.setAttribute("jogada", jog2);
                    jogador = jog1;
                }
                atualizajogador();
                verificavitoria();
            }
        });
    }
}

async function verificavitoria() {
    var campo_a1 = document.getElementById('campo_a1').getAttribute("jogada");
    var campo_a2 = document.getElementById('campo_a2').getAttribute("jogada");
    var campo_a3 = document.getElementById('campo_a3').getAttribute("jogada");
 
    var campo_b1 = document.getElementById('campo_b1').getAttribute("jogada");
    var campo_b2 = document.getElementById('campo_b2').getAttribute("jogada");
    var campo_b3 = document.getElementById('campo_b3').getAttribute("jogada");
 
    var campo_c1 = document.getElementById('campo_c1').getAttribute("jogada");
    var campo_c2 = document.getElementById('campo_c2').getAttribute("jogada");
    var campo_c3 = document.getElementById('campo_c3').getAttribute("jogada");
 
    var vencedor = "";
 
    if (((campo_a1 == campo_b1 && campo_a1 == campo_c1) || (campo_a1 == campo_a2 && campo_a1 == campo_a3) || (campo_a1 == campo_b2 && campo_a1 == campo_c3)) && campo_a1 != "") {
        vencedor = campo_a1;
    } else if
 
    ((campo_b2 == campo_b1 && campo_b2 == campo_b3 && campo_b2 != "") || (campo_b2 == campo_a2 && campo_b2 == campo_c2 && campo_b2 != "") || (campo_b2 == campo_a3 && campo_b2 == campo_c1 && campo_b2 != "")) {
        vencedor = campo_b2;
 
    } else if
 
    (((campo_c3 == campo_c2 && campo_c3 == campo_c1) || (campo_c3 == campo_a3 && campo_c3 == campo_b3)) && campo_c3 != "") {
        vencedor = campo_c3;
    }
 
    if (vencedor != "") {
        fim = true;
        await new Promise(resolve => setTimeout(resolve, 50))
        alert("" + vencedor + "'");
        document.location.reload(true);
    } else if (
        vencedor != campo_a1 &&
        vencedor != campo_a2 &&
        vencedor != campo_a3 &&
        vencedor != campo_b1 &&
        vencedor != campo_b2 &&
        vencedor != campo_b3 &&
        vencedor != campo_c1 &&
        vencedor != campo_c2 &&
        vencedor != campo_c3) {
        await new Promise(resolve => setTimeout(resolve, 50))
        alert('Deu velha!');
        document.location.reload(true);
    }
}