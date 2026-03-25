const app = express();    //Ici, on crée l’application Express. app représente ton serveur, ou plus précisément ton application web

app.get('/', (req, res) => {                    // app.get(...) veut dire : “quand le serveur reçoit une requête GET sur cette adresse, fais ceci”req = request → la requête envoyée par le client
                                                //res = response → la réponse que le serveur va renvoye
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

