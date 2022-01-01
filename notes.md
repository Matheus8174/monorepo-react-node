# Monorepo

- monorepo isn't a monolith
- it is a kind of architecture or development pattern
- code in a same codebase
- the aplication in a monorepo can build and deliver idenpendent

### Company-wide monorepo

- Todas as aplicações e projetos dentro do mesmo repositório.

### Scoped monorepo

- aplicações de uma mesma tecnologia, ou mesma plataforma ou que faça sentido
dividir o mesmo repositório

## Compartilhamento de informações em um Monorepo

- share design system.
- share code style and design pattern
- each developer is owner of your project (
github have a feature called code owners that you can declare you is a owner of a package)

## comandos

- adicionar dependencia de desenvolvimento no root dir
```bash
yarn add jest -DW
```

- não é necessario ter que entrar em um package para executar uma ação nele, basta:
```bash
yarn workspace @monorepo/backend add axios
```
