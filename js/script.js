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
        image: 'wayne-barnett-founder-ceo.jpg'
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

// Ciclo for che crea una card per ogni membro del team
for (let i = 0; i < arrMembersTeam.length; i++) {
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
    eleImg.alt = `img/${arrMembersTeam[i].name}`;
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