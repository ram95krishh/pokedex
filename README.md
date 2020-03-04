# Pokédex

### Overview
The poké world is a vast world and there are many species yet to be discovered. This Pokedex gives users access to a collection information for already discovered pokémon and also gives them the ability to add fields of their own for newly discovered pokémon.

## Installation

Clone the repositiory into a folder and get into the folder

```
        $ git clone https://github.com/ram95krishh/pokedex.git pokedex
        $ cd pokedex
```

Now make sure node is installed, then install the dependencies with the following command

```
        $ npm install
```

Start the web app locally with the command.. This will start the app in port 8080.

```
        $ npm start
```
## Logic
1. Using the `pokédex.json` file it renders the list of pokémon's names.
2. Has a display area that shows the following:
  - name
  - type(s)
  - attack level (listed under base)
  - defense level (listed under base)

## Features
1. Gives users the ability to update current pokémon in the system.
2. Users can add new pokémon and new attributes.
3. Truncate all pokemons with id greater than 151 using TRUNCATE button.
4. Search screen to find pokémon by name
5. Search screen to find pokémon by type
6. Autofill suggestions for the search bar.
