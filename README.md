# foge-foge-she-she

> Status do projeto: Concluído

Foge Foge She She é um jogo estilo pacman feito em homenagem a uma amiga e seu gato Sherlock.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Foge Foge She She**
| :label: Tecnologias | React, TypeScript, HTML, CSS
| :rocket: URL         | https://foge-foge-she-she.vercel.app/

![](https://github.com/BrenoMorim/foge-foge-she-she/blob/main/imagem-do-projeto.png#vitrinedev)

## Detalhes do projeto

O jogo contém apenas três páginas: a inicial, onde se escolhe qual fase você quer jogar; a interface do jogo em si, com o mapa da fase, os botões de comando e a pontuação; e uma página de não encontrado.

## Comandos para configurar e executar o projeto

O projeto utiliza o npm para gerenciar as dependências e contém testes automatizados com jest. Os testes são divididos em 4 suits, três para garantir que cada uma das páginas (Página inicial, interface do jogo e não encontrado) são renderizadas corretamente, com todos os elementos necessários, e uma para garantir que o jogo pode ser jogado, contendo o comportamento esperado.

```bash
git clone https://github.com/BrenoMorim/foge-foge-she-she.git foge-foge-she-she
cd foge-foge-she-she
npm install
npm test
npm start
```

## Inicializando com Docker

O projeto também dá suporte a inicialização com Docker, usando a imagem base node:18-alpine, o container está configurado para rodar na porta 3000.

```bash
git clone https://github.com/BrenoMorim/foge-foge-she-she.git foge-foge-she-she
cd foge-foge-she-she
./criar_imagem_docker.sh
docker compose up
```
