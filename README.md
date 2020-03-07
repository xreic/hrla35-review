# Fullstack Review

## GOAL

As of right now there are only 3 pokemons displayed on the static mockup.html and none of the buttons are functioning:

- WE WANT TO DISPLAY ALL THE POKEMONS IN THE pokemon.json file.
- WE WANT TO FILTER THE POKEMONS BY TYPE.

### Step 1
- Build out server to serve the front end.
- Create a script for webpack then run the webpack.
- Refactor your client to dynamically render using the information from your server.
- You will know if you have done this correctly if you see bulbasaur, ivysaur, venasaur.

### Step 2
- Using mongoDB, build out the back-end (establish connection, seeding pokemons from pokemon.json)
- Ensure that your back end is completely set-up. Check your database folder and your server folder.

### Step 3
- Create a GET route to retrieve all pokemons.
- Implement the select options dropdown to filter pokemons by type.

### Step 4
- When clicking on a pokemons name, implement a input field to change the name of the pokemon. (hint: PUT)
- Create a delete button to delete a pokemon (hint: DELETE)
- Finish implementing the INSERT button, so you can add a pokemon to the list: Name, Type, Image of anything (hint: INSERT).