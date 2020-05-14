const pokemons = require('./models/pokemon');
const welcomePage = (req, res) => {
    res.render('welcome.ejs')
};

const indexPage = (req, res) => {
    res.render(
        'index.ejs',
        {
           pokemons: pokemons 
        }
    );
};

const showPage = (req, res) => {
    res.render('show.ejs', { poke: pokemons[req.params.id]})
}
module.exports = {
    welcomePage,
    indexPage,
    showPage
}