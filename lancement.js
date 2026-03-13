const app = express();    //Ici on crée le serveur web et app represente notre application

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

listen(3000) → le serveur est lancé, écoute sur le port 3000 et attend des requêtes clients .
Donc ton site sera accessible sur :
http://localhost:3000
Quand le serveur démarre, il affiche dans le terminal :
Server running on port 3000

