app.set("view engine", "pug");          
app.set("views", "./views"); 

Cela dit à Express :

utilise Pug

les templates sont dans le dossier views



const express = require('express');                  
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const data = ['Item 1', 'Item 2', 'Item 3'];
  res.render('index', { items: data });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

Navigateur
     ↓
Express route
     ↓
data = ['Item1','Item2','Item3']
     ↓
Pug template
     ↓
HTML généré
     ↓
page affichée

Il yaura quelque chose comme ca dans pug :
each item in items
  li= item



---------------------------------------------------------------------------
  Layout.png                               Pug fusionne les deux fichiers. Genre 
html            
  head
    title= title
  body
    block content

index.pug
block content
    h1 Welcome to Pug ! 


------------------------------------------------------------------------------
Mixins 

mixin userCard(name)                       Create reusable blocks of coding using mixins 
  div.card
    h2= name

+userCard("Aziz")
+userCard("Alice")

--------------------------------------------------------------------------------


