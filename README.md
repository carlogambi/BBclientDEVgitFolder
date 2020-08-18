# BBclientDEVgitFolder

-------------------------------------------------------------------------------------
-> istruzioni per la gestione di github (in progress) <-
-------------------------------------------------------------------------------------

!CLONARE LA REPOSITORY (DA FARE SOLO LA PRIMA VOLTA)!

 - nella cartella desiderata aprire git bash e scrivere 
    
    git clone https://github.com/carlogambi/BBclientDEVgitFolder.git

verrà creata all'interno della cartella un altra cartella contenente la repository presente su github
-------------------------------------------------------------------------------------

!COLLEGARE GITUHB ALLA CARTELLA IN LOCALE!

-nella cartella locale scrivere, NON NECESSARIO se nella stessa sessione è stata eseguita la procedura per clonare la repository di github in locale
    
    git remote add origin https://github.com/carlogambi/BBclientDEVgitFolder.git

-------------------------------------------------------------------------------------

!AGGIORNARE LA CARTELLA DI GITHUB CON LE MODIFICHE FATTE IN LOCALE!

- nella cartella principale del progetto locale aprire git bash e scrivere
  
  git add .
  (per fare il listing delle differenze tra locale/github)
  
  git commit -m "messaggio a scelta, dendenzialmente descrittivo"
  (per preparare il progetto all'upload)
  
  git push -u origin master
  (per eseguire l'upload vero e proprio)
