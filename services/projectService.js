

var getProjects = function() {
  var projects = [
    {
      id: 1,
      title: 'Calculadora de juros em python',
      image: 'python.png',
      description: 'Aplicativo feito em Python que calcula os juros compostos dentro de um determinado tempo.',
      body: 'Foi um aplicativo que criei que consiste em calcular os juros compostos de uma aplicação em uma conta de banco onde o usuário consegue definir todos os parâmetros que são necessários para a base de cálculo.',
    },
    
  ];

  return projects;
}

module.exports = {
  getProjects: getProjects
}