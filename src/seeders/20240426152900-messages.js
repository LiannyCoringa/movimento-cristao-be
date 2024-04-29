'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Messages', [
      {
        message: 'A LIMITADA VIDA CARNAL. Tem-se inserido em nossos dialetos e enraizados nas mentes de algumas pessoas que o corpo carnal tem vida em si mesmo. No entanto, é a alma que vivifica o corpo físico. Quando a alma deixa o corpo carnal, inexiste ‘médico’ que possa lhe fazer reviver. Pode-se dizer que nesta dimensão tudo tem vida. No entanto, por traz dos corpos existem uma força motriz (O Divino Amor de Deus) que os fazem vivificar. O nosso Redentor, o Cristo-Jesus, ao se reportar aos corpos físicos, profere: “Deixe que os mortos sepultem os seus próprios mortos; você, porém, vá e proclame o Reino de Deus.” (...) “É o Espírito quem dá vida; a carne em nada se aproveita; as palavras que Eu vos tenho dito são Espírito e são vida.” Em verdade é dito: felizes são aqueles que, ao se identificarem vida, cuidam com amor do seu corpo carnal. Tudo nesta dimensão é temporário, é limitado e transitório. É necessário e primordial se viver nesta morada e nos corpos que, no presente momento, encontramo-nos inseridos. São pelos corpos que adentramos nas moradas dimensionais e nestas moradas convivemos com desiguais. Assim sendo, aprendemos a perdoar, por fim às contendas, harmonizarmo-nos, amarmos, sermos simples e humildes, glorificarmos a Deus e com Ele unificarmos. É nesta morada terrena que nascemos no espírito e adentramos no Reino dos Céus. Medite e pense nisto. (Arca da Sagrada Aliança – Movimento Cristão – Natal/RN – Brasil).',
        date: '26-04-2024',
        userId: 1,
      },
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
