# foge-foge-she-she

> Status do projeto: Concluído

Foge-foge-she-she é um jogo estilo pacman em React com TypeScript, feito em homenagem a uma amiga e seu gato Sherlock. O jogo contém apenas três páginas: a inicial, onde se escolhe qual fase você quer jogar; a interface do jogo em si, com o mapa da fase, os botões de comando e a pontuação; e uma página de não encontrado.

## Comandos para configurar e executar o projeto

O projeto utiliza o npm para gerenciar as dependências e contém testes automatizados com jest. Os testes são divididos em 4 suits, três para garantir que cada uma das páginas (Página inicial, interface do jogo e não encontrado) são renderizadas corretamente, com todos os elementos necessários, e uma para garantir que o jogo pode ser jogado e que contém o comportamento esperado.

```bash
git clone https://github.com/BrenoMorim/foge-foge-she-she.git foge-foge-she-she
cd foge-foge-she-she
npm install
npm test
npm start
```
