var hi = "PuroOsu"
var vitorias = 0
var derrotas = 0 
var inimigos = ["PULMAO!!" , "CORAÇÃO" , "JOELHO" , "MENTE" , "ESTOMAGO" , "COLUNA" , "OLHOS"]
var hpBoss = [150 , 300 , 450 , 600 , 750, 900 , 1200]
var dano = 30
var nvs = ["FERRO!" , "BRONZE!" , "PRATA!" , "OURO!" , "DIAMANTE!" , "LENDARIO!" , "IMORTAL!"]
var newNv = "parabens " + hi + "! Voce chegou Nivel "

console.log("Olá " + hi + ", que bom ter você aqui de novo")
console.log("Nesse desafio você não terá apenas uma batalha, terá uma partida inteira")
console.log("Finalize 1 inimos e ganhe uma partida")
console.log("Caso voce não tenha poder o suficiente, voce perde uma partida!!")
console.log("mas eu sei que voce não vai deixar isso acontecer, certo?")
console.log("Voce so tem estamina para dar 3 ataques em cada oponente, espero que seja o suficiente")

function subWins(wins, losers){
    let  sub = wins - losers
    return sub
}
function DefRank(wins){
    if(wins <= 10){
        console.log(newNv + nvs[0])   
    }else if((wins <= 20) && (wins >= 11)){
        console.log(newNv + nvs[1])
        dano += 50
    }else if((wins <= 50) && (wins >= 21)){
        console.log(newNv + nvs[2])
        dano += 50
    }else if((wins <= 80) && (wins >= 51)){
        console.log(newNv + nvs[3])
        dano += 50
    }else if((wins <= 90) && (wins >= 81)){
        console.log(newNv + nvs[4])
        dano += 50 
    }else if((wins <= 100) && (wins >= 91)){
        console.log(newNv + nvs[5])
        dano += 50
    }else{
        console.log(newNv + nvs[6])
        dano += 50
    }
}
function Luta(bossLife , DanPlay){
    for(let i = 0; i < 4; i++){
        bossLife = bossLife - DanPlay    
    }if(bossLife <= 0){
        console.log("YEAS!!! ELE NÂO TEM MAIS PONTOS DE VIDA")
        vitorias += 1
    }else{
        console.log("DROGA! Não foi o suficiente, vamos tentar mais uma vez")
        derrotas += 1
        dano += 10
    }
}
function novoIni(ini){
    console.log("OLHA SO, PARECE QUE CHEGOU OUTRO")
    console.log("VOCE VAI ENFRENTAR O " + ini)
}
console.log("Olha so,  O " + inimigos[0] + " apareceu!! LUTEM")
Luta(hpBoss[0], dano)
Luta(hpBoss[0], dano)
console.log("Parece que uma vez não é o suficiente, Vença dele ate que ele não aguente mais")
Luta(hpBoss[0], dano)
Luta(hpBoss[0], dano)
Luta(hpBoss[0], dano)
Luta(hpBoss[0], dano)
Luta(hpBoss[0], dano)
Luta(hpBoss[0], dano)
Luta(hpBoss[0], dano)
Luta(hpBoss[0], dano)
Luta(hpBoss[0], dano)

DefRank(subWins(vitorias, derrotas))

console.log("Aqui o inimigo é outro, mas isso não é um problema pra voce, certo?")
console.log("aqui vamos enfrentar o " + inimigos[1])

Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
Luta(hpBoss[1], dano)
DefRank(subWins(vitorias, derrotas))
console.log("OLHA SO, PARECE QUE CHEGOU OUTRO")
console.log("VOCE VAI ENFRENTAR O " + inimigos[2])
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
Luta(hpBoss[2], dano)
DefRank(subWins(vitorias, derrotas))
novoIni(inimigos[3])
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
Luta(hpBoss[3], dano)
DefRank(subWins(vitorias, derrotas))
novoIni(inimigos[4])
Luta(hpBoss[4], dano)
Luta(hpBoss[4], dano)
Luta(hpBoss[4], dano)
Luta(hpBoss[4], dano)
Luta(hpBoss[4], dano)
Luta(hpBoss[4], dano)
Luta(hpBoss[4], dano)
Luta(hpBoss[4], dano)
Luta(hpBoss[4], dano)
Luta(hpBoss[4], dano)
DefRank(subWins(vitorias, derrotas))
novoIni(inimigos[5])
Luta(hpBoss[5], dano)
Luta(hpBoss[5], dano)
Luta(hpBoss[5], dano)
Luta(hpBoss[5], dano)
Luta(hpBoss[5], dano)
Luta(hpBoss[5], dano)
Luta(hpBoss[5], dano)
Luta(hpBoss[5], dano)
Luta(hpBoss[5], dano)
Luta(hpBoss[5], dano)
DefRank(subWins(vitorias, derrotas))
novoIni(inimigos[6])
Luta(hpBoss[6], dano)
Luta(hpBoss[6], dano)
Luta(hpBoss[6], dano)
Luta(hpBoss[6], dano)
Luta(hpBoss[6], dano)
Luta(hpBoss[6], dano)
Luta(hpBoss[6], dano)
Luta(hpBoss[6], dano)
Luta(hpBoss[6], dano)
Luta(hpBoss[6], dano)
DefRank(subWins(vitorias, derrotas))
console.log("Parece que esse é o fim, chegamos no nivel mais alto, PARABENS " + hi + "MAIS UMA PARTE DA SUA JORNADA CONCLUIDA!!")
console.log("O Herói tem de saldo de " + subWins(vitorias, derrotas) + ", está no nível de " + nvs[6])
