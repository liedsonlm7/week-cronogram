const cronograma = {
    segunda: [
      "8h-12h: Estudar React.js, TypeScript e NodeJS",
      "12h-13h: Almoço",
      "13h-14h: Estudar Banco de Dados (MongoDB)",
      "14h-16h: Estudos de Idiomas (Inglês e Espanhol)",
      "18h-22h: Material da faculdade / Aulas online"
    ],
    terca: [
      "8h-12h: Estudar C# e Banco de Dados (PostgreSQL)",
      "12h-13h: Almoço",
      "13h-14h: Estudar curso de Redes (cisco)",
      "14h-16h: Estudos de Idiomas (Inglês e Espanhol)",
      "18h-22h: Material da faculdade / Aulas online"
    ],
    quarta: [
      "8h-12h: Estudar React.js, TypeScript e NodeJS",
      "12h-13h: Almoço",
      "13h-14h: Estudar Banco de Dados (MongoDB)",
      "14h-16h: Estudos de Idiomas (Inglês e Espanhol)",
      "18h-22h: Material da faculdade / Aulas online"
    ],
    quinta: [
      "8h-12h: Estudar C# e Banco de Dados (PostgreSQL)",
      "12h-13h: Almoço",
      "13h-14h: Estudar curso de Redes (cisco)",
      "14h-16h: Estudos de Idiomas (Inglês e Espanhol)",
      "18h-22h: Material da faculdade / Aulas online"
    ],
    sexta: [
      "8h-12h: Estudar React.js, TypeScript e NodeJS",
      "12h-13h: Almoço",
      "13h-14h: Estudar Banco de Dados (MongoDB)",
      "14h-16h: Estudos de Idiomas (Inglês e Espanhol)",
      "18h-22h: Material da faculdade / Aulas online"
    ],
    sabado: [
      "Revisar conteúdos estudados",
      "Estudar Alemão",
      "Curso de AWS"
    ]
  };

function mostrarDia(dia) {
    const conteudo = document.getElementById("conteudo");  
    conteudo.innerHTML = "";
    if (cronograma[dia]) {
        const lista = document.createElement('ul');
        cronograma[dia].forEach(atividade => {
            const item = document.createElement('li');
            item.textContent = atividade;
            lista.appendChild(item);
        });
        conteudo.appendChild(lista);
    }
}

const botaoTema = document.getElementById('toggle-theme');
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});