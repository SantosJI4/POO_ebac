//rodadas do campeonat carioca, ignore as datas
// ############################################################################################################
// ############################################################################################################
function rodadaBr(times, rodada, resultadoDaPartida, data) {
  this.times = times;
  this.rodada = rodada;
  this.resultadoDaPartida = resultadoDaPartida;
  this.data = data;
}

rodadaBr.prototype.displayInfo = function () {
  console.log(
    "\x1b[32m" +
      "Campeonato Brasileiro:" +
      "\x1b[0m" +
      "\n🏆 Times: " +
      "\x1b[33m" +
      this.times +
      "\x1b[0m" +
      "\n📅 Rodada: " +
      "\x1b[36m" +
      this.rodada +
      "\x1b[0m" +
      "\n⚽ Resultado: " +
      "\x1b[31m" +
      this.resultadoDaPartida +
      "\x1b[0m" +
      "\n📆 Data: " +
      "\x1b[35m" +
      this.data +
      "\x1b[0m" +
      "\n------------------------------------------"
  );
};

function resultadosBR(times, rodada, resultadoDaPartida, data) {
  rodadaBr.call(this, times, rodada, resultadoDaPartida, data);
}

resultadosBR.prototype = Object.create(rodadaBr.prototype);
resultadosBR.prototype.constructor = resultadosBR;

resultadosBR.prototype.displayInfo = function () {
  rodadaBr.prototype.displayInfo.call(this);
};

//rodadas da europa, ignore as datas
//#############################################################################################################
//#############################################################################################################

function rodadaER(times, rodada, resultadoDaPartida, data) {
  this.times = times;
  this.rodada = rodada;
  this.resultadoDaPartida = resultadoDaPartida;
  this.data = data;
}

rodadaER.prototype.displayInfo = function () {
  console.log(
    "\x1b[34m" +
      "Champions League:" +
      "\x1b[0m" +
      "\n🏆 Times: " +
      "\x1b[33m" +
      this.times +
      "\x1b[0m" +
      "\n📅 Rodada: " +
      "\x1b[36m" +
      this.rodada +
      "\x1b[0m" +
      "\n⚽ Resultado: " +
      "\x1b[31m" +
      this.resultadoDaPartida +
      "\x1b[0m" +
      "\n📆 Data: " +
      "\x1b[35m" +
      this.data +
      "\x1b[0m" +
      "\n------------------------------------------"
  );
};

function resultadosER(times, rodada, resultadoDaPartida, data) {
  rodadaER.call(this, times, rodada, resultadoDaPartida, data);
}

resultadosER.prototype = Object.create(rodadaER.prototype);
resultadosER.prototype.constructor = resultadosER;

const reultados1 = new resultadosBR(
  "flamengo x vasco",
  "rodada 12",
  "2x0",
  "12/12/2099"
);
const reultados2 = new resultadosBR(
  "Botafogo x Fluminense",
  "rodada 12",
  "1x1",
  "14/10/2099"
);
const rodadaER1 = new resultadosER(
  "Real Madrid x Livepool",
  "4x2",
  "rodada 03",
  "24/24/2047"
);
const rodadaER2 = new resultadosER(
  "Barcelona x Manchester City",
  "7x5",
  "rodada 03",
  "22/24/2047"
);

reultados1.displayInfo();
reultados2.displayInfo();
rodadaER1.displayInfo();
rodadaER2.displayInfo();
