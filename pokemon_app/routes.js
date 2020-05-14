const {welcomePage, indexPage, showPage} = require('./controller');
module.exports = (app) => {
    app.get('/', welcomePage);
    app.get('/pokemon', indexPage);
    app.get('/pokemon/:id', showPage)
}