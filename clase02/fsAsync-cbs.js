const fs = require('fs')

fs.readFile('./clase02/fsAsync-cbs.js', 'utf-8', (err, res) => {
    if(err)console.log('hubo un error,' + err)
    else console.log(res);
    console.log('terminé');
    fs.writeFile('./clase02/copia.txt', err => {
        if(err) console.log('hubo un error,' + err)
        else console.log('Terminó el proceso');
    })
})


/* console.log(result) */