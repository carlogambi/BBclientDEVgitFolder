const fs = require('fs');

const lingue = [
    fs.readFileSync('./src/langs/lang-pack-ita.json', 'utf8'),
    fs.readFileSync('./src/langs/lang-pack-eng.json', 'utf8'),
    fs.readFileSync('./src/langs/lang-pack-fr.json', 'utf8'),
    
].map(l => JSON.parse(l));

// lingue[0].pagine.forEach((p,i) => {
//     let id = Math.round(Math.random()*10000000000000)+'';
//     console.log({id})
//     console.log(p.voce)
//     console.log(lingue[1].pagine[i].voce)
//     console.log(lingue[2].pagine[i].voce)
//     p.id = id;
//     lingue[1].pagine[i].id = id;
//     lingue[2].pagine[i].id = id;
// })

// const idProva = '6699756649637';
//  console.log((lingue[0].pagine.find(p => p.id === idProva)).voce)
//  console.log((lingue[1].pagine.find(p => p.id === idProva)).voce)
//  console.log((lingue[2].pagine.find(p => p.id === idProva)).voce)
lingue.forEach(l => {
    const voce = 'lavora con noi ' + l.lang.toUpperCase();
    const nuovapagina = l.pagine[0];
    nuovapagina.voce = voce;
    delete nuovapagina.isFirstPage;
    // console.log(nuovapagina);
    const nuovavoce = l.vociFooter[0];
    nuovavoce.voce = 'lavora con noi'
    console.log(nuovavoce)
    // l.pagine.push(nuovapagina);
    // l.vociFooter.push(nuovavoce);
});



fs.writeFileSync('./DANGER/lang-pack-ita.json', JSON.stringify(lingue[0]))
fs.writeFileSync('./DANGER/lang-pack-eng.json', JSON.stringify(lingue[1]))
fs.writeFileSync('./DANGER/lang-pack-fr.json', JSON.stringify(lingue[2]))