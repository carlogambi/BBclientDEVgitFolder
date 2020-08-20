# BBclientDEVgitFolder

-------------------------------------------------------------------------------------
 istruzioni per la gestione di github  
-------------------------------------------------------------------------------------

CLONARE LA REPOSITORY (DA FARE SOLO LA PRIMA VOLTA)

 nella cartella desiderata aprire git bash e scrivere 
    
    git clone https://github.com/carlogambi/BBclientDEVgitFolder.git

verrà creata all'interno della cartella un altra cartella contenente la repository presente su github

-------------------------------------------------------------------------------------

COLLEGARE GITUHB ALLA CARTELLA IN LOCALE  (SOLO SE NON TROVA L'ORIGINE DEL REMOTO)

nella cartella locale scrivere
    
    git remote add origin https://github.com/carlogambi/BBclientDEVgitFolder.git

-------------------------------------------------------------------------------------

AGGIORNARE LA CARTELLA DI GITHUB CON LE MODIFICHE FATTE IN LOCALE

nella cartella principale del progetto locale aprire git bash e scrivere
  
  ` git add . `
  
  poi
  
  ` git add . `
  
  (per fare il listing delle differenze tra locale/github)
  
  ` git commit -m "messaggio a scelta, dendenzialmente descrittivo" `
  
  (per preparare il progetto all'upload)
  
 ` git push -u origin master `
  
  (per eseguire l'upload vero e proprio)
  
 -------------------------------------------------------------------------------------
 istruzioni per la gestione React  
-------------------------------------------------------------------------------------

PREPARARE IL PROGETTO

La cartella di github nonn comprende i moduli di node js per mantenere i trasferimenti leggeri
se nella cartella locale del progetto dove è presente il file 'package.json' non è presente la cartella 'node_modules'
aprire il terminale nella cartella e scrivere
  
 ` npm i `

per scaricare i moduli necessari al progetto

--------------------------------------------------------------------------------------

GESTIRE IL PROGETTO

SVILUPPO
per mandare il server di sviluppo di React, nella cartella principale (quella con il file package.json) aprire il terminale e scrivere

 ` npm start `

verrà lanciato il server locale per lo sviluppo, dopo qualche secondo il browser preferito aprirà una pagina contenente l'anteprima, 
che si aggiornerà ad ogni salvataggio che verrà fatto nei dentro alla cartella del progetto

PREPARAZIONE DELLA BUILD
Per creare il file bundle necessario per il deploy(in development mode, al momento, non in production mode) scrivere
  
 ` npm run-script build `

verrà aggiornato il contenuto della cartella denominata 'build' presente nella cartella principale del progetto,
dentro alla cartella di build ci sono tutti i file statici necessari al progetto.
