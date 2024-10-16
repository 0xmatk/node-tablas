const fs = require('fs'); //import fs from 'fs'; para ES6
const colors = require('colors');


const crearArchivo = async (base,  listar = false, hasta=10) => {

    try{

    let salida = '';


    for(let i=1; i<=hasta; i++){
        salida +=`${base} x ${i} = ${base * i}\n`;
    }

    if(listar){
        console.log('=========================='.green);
        console.log('   Tabla del:', colors.blue( base ) );
        console.log('=========================='.green);
        console.log(salida);
    }
    


    fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida)


    return `tabla-${base}.txt`;
    
    }catch(err){
        throw err
    }
    
    

}

module.exports = {
    crearArchivo }