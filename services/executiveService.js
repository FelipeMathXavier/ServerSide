

var getExecutive = function () {
  var executives = [
    {
      id: 1,
      nome: 'Gabriel Back',
      cargo: 'CEO',
      imagem: 'gabriel.jpeg',
      linkedin: 'https://br.linkedin.com/in/gabriel-back-b3b48b178?trk=people-guest_profile-result-card_result-card_full-click',
    },
    {
      id: 2,
      nome: 'Linus Torvalds',
      cargo: 'Engenheiro de Software',
      imagem: 'Linus Torvalds.jpg',
      linkedin: 'https://www.linkedin.com/in/me/',
    }, 
    {
      id: 3,
      nome: 'Dennis Ritchie',
      cargo: 'Cientista da computação',
      imagem: 'Dennis Ritchie.jpg',
      linkedin: 'https://www.linkedin.com/in/me/',
    }, 
    {
      id: 4,
      nome: 'Davin Stuart',
      cargo: 'Analista de sistemas',
      imagem: 'davin.jpg',
      linkedin: 'https://www.linkedin.com/in/me/',
    }, 
    {
      id: 5,
      nome: 'Mark Zuckerberg',
      cargo: 'Desenvolvedor',
      imagem: 'mark.jpg',
      linkedin: 'https://www.linkedin.com/in/me/',
    }
  ];

    return executives;
}

module.exports = {
  getExecutive: getExecutive
}