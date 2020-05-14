const imgArr = ['https://www.serebii.net/pokemonmasters/pokemon/025.png',
    'https://cdn.bulbagarden.net/upload/b/b8/025Pikachu_LG.png'];
let i = 0;
const changeImg = () => {
    setInterval(() => {
        console.log('pika');
        $('.pika').attr('src', imgArr[i]);
        if(i === 1) {
            i = 0;
        }
        else {
            i = 1
        }
    }, '500')
};
$(() => {
    changeImg();
})