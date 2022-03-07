/*
esercizio di oggi: Our Team
nome repo: js-our-team
Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membro del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.
*/



// Definizione array di oggetti che rappresentano i membri del team
const arrMembersTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

// Definizione dell'elemento HTML che contiene le singole cards dei membri del team
const eleTeamContainer = document.querySelector('.team-container');

// Eseguo la funzione che genera la griglia di tutte le cards dei vari membri del team
createTeamGrid();

// TEST
console.log(arrMembersTeam);



// Funzione che esegue un ciclo for di tutte le singole cards che compongono l'array dei membri del team per visualizarle nella pagina
function createTeamGrid() {
// Ciclo for che crea una card per ogni membro del team
for (let i = 0; i < arrMembersTeam.length; i++) {
    createMemberCard(i);
}
}



// Funzione che genera  la card dell'"i-esimo" elemento dell'array dei membri del team e l'appende al contenitore HTML
function createMemberCard(i) {
    // generazione card per ogni membro
    let eleTeamCard = document.createElement('div');
    eleTeamCard.classList.add('team-card');
    eleTeamContainer.append(eleTeamCard);
    // generazione elemento che contiene l'immagine del membro pescandola dall'array dei membri
    let eleCardImage = document.createElement('div');
    eleCardImage.classList.add('card-image');
    eleTeamCard.append(eleCardImage);
    let eleImg = document.createElement('img')
    eleImg.src = `img/${arrMembersTeam[i].image}`;
    eleImg.alt = `${arrMembersTeam[i].name}`;
    eleCardImage.append(eleImg);
    // generazione elemento che contiene nome e ruolo del membro pescandoli dall'array dei membri
    let eleCardText = document.createElement('div');
    eleCardText.classList.add('card-text');
    eleTeamCard.append(eleCardText);
    let eleName = document.createElement('h3');
    eleName.innerHTML = `${arrMembersTeam[i].name}`;
    eleCardText.append(eleName);
    let eleRole = document.createElement('p');
    eleRole.innerHTML = `${arrMembersTeam[i].role}`;
    eleCardText.append(eleRole);
}





/*
BONUS:
Utilizziamo gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
*/

// Definizione dell'elemento che contiene il bottone per aggiungere nuovi membri
const eleAddMemberButton = document.getElementById('addMemberButton');
// Definzione del campo dove viene digitato il nome del membro
let eleInputName = document.getElementById('name');
// Definzione del campo dove viene digitato il nome del membro
let eleInputRole = document.getElementById('role');
// Definzione del campo dove viene digitato il nome dell'immagine
let eleInputImage = document.getElementById('image');

// Esecuzione della funzione addMember al click sul bottone
eleAddMemberButton.addEventListener('click', addMember);



// Funzione per aggiungere nuovi membri
function addMember() {
    // leggo il nome digitato
    let newMemberName = eleInputName.value;
    // leggo il ruolo digitato
    let newMemberRole = eleInputRole.value;

    // leggo il nome dell'immagine
    let newMemberImage = eleInputImage.value;

    // se non è stata inserita nessuna immagine la sostituisco con una di default
    if (newMemberImage == '') {
        newMemberImage = 'blank-profile-image.jpg';
    }

    // effettuo un controllo sul nome e ruolo digitati, impostandoli come campi obbligatori
    if (newMemberName == '' || newMemberRole == '') {
        // se uno dei due è vuoto, stampo un alert
        alert('Name and Role are mandatory to add a new member!');
        // altrimenti
    } else {
        /*
        Ottimizzato codice
        Questa parte dello script non serve più
        Evito di far rigenerare tutta la griglia ad ogni aggiunta
        (in caso di array molto numeroso genererebbe un rallentamento)

            // cancello la griglia precedente
            // eleTeamContainer.innerHTML = '';
        */

        // creo un nuovo object con i dati del nuovo membro
        let newMember = 
        {
        name: newMemberName,
        role: newMemberRole,
        image: newMemberImage
        }

        // aggiungo il nuovo membro nell'array dei membri del team
        arrMembersTeam.push(newMember);
        // testo che il nuovo membro sia stato aggiunto
        // console.log(arrMembersTeam);
        
        
        // Appendo con l'apposita funzione la card con i dati dell'ultimo membro aggiunto
        createMemberCard(arrMembersTeam.length - 1);
        
        // TEST
        console.log(arrMembersTeam);
        
    }
    // Ripulisco i campi dagli input digitati
    eleInputName.value = '';
    eleInputRole.value = '';
    eleInputImage.value = '';
};