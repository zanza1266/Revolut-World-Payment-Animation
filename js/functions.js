
/*Preso un singolo oggetto, cambia il valore di più chiavi contemporaneamente ad un valore uguale per tutte. Argomenti da passare: obj, l'oggetto in questione da modificare/ assignValue, il valore da assegnare a più chiavi contemporaneamente/ keys, le chiavi dell'oggetto che si vogliono modificare (le chiavi inserite nella funzione DEVONO esistere nell'oggetto in questione e devono essere passate come stringa).
NON CREA UN NUOVO oggetto, modifica solo quello esistente passatogli come argomento 'obj'*/
function modifyMultipleValue (obj, assignValue, ...keys) {
  // console.log(keys);
  keys.forEach((element, i) => {

    // console.log(element);
    // console.log(obj);

    obj[element] = assignValue

  });

  return obj;
}

/*Presi n oggetti (non appertenenti ad un array) cambia il valore della chiave che questi hanno in comune, con un valore uguale per tutti gli oggetti in questione (non restituisce nulla, cambia solo i valori degli oggetti specificati come argomento dopo che la funzione è stata eseguita)*/
function modifySameValueInMultipleObj (keyToModify, value, ...objects) {

  objects.forEach((element, i) => {

    element[keyToModify] = value;

  });
}

function numberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
