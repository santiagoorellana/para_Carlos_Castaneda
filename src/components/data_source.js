

function getRandomInt(minValue, maxValue) {
    const min = Math.ceil(minValue);
    const max = Math.floor(maxValue);
    return Math.floor(Math.random() * (max - min) + min);
  }
  

function createRandomValuesForYear(){
    const mons = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let result = [];
    mons.forEach(monId => { result.push({mon: monId, value: getRandomInt(0, 10000)}); });
    return result;
}


function createRandomValuesForOperations(){
    const operations = ["Buy", "Sell", "Hold", "Invest", "Staking"];
    let result = {};
    operations.forEach(operation => {
        if (getRandomInt(0, 10) > 5) 
            result[operation] = createRandomValuesForYear();
    });
    if (Object.keys(result).length == 0) 
        result[operations[getRandomInt(0, operations.length-1)]] = createRandomValuesForYear();
    return result;
}


function createRandomValuesForEntity(){
    const cryptos = ["BTC", "ETH", "SOL", "BNB", "TRX", "ADA", "DOGE", "USDT"];
    let result = {};
    cryptos.forEach(crypto => {
        if (getRandomInt(0, 10) > 5) 
            result[crypto] = createRandomValuesForOperations();
    });
    if (Object.keys(result).length == 0) 
        result[cryptos[getRandomInt(0, cryptos.length-1)]] = createRandomValuesForOperations();
    return result;
}

/**
 * Devuelve los datos de cada empresa.
 * @returns - Objeto con los datos de las empresa.
 */
function getData(){
    return {
        AgileSolution: createRandomValuesForEntity(),
        Tesla: createRandomValuesForEntity(),
        SetVmas: createRandomValuesForEntity(),
        Microsoft: createRandomValuesForEntity(),
        Apple: createRandomValuesForEntity(),
        Facebook: createRandomValuesForEntity()
    }
}

export default getData;