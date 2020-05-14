const imgPika = ['https://i.ya-webdesign.com/images/anime-png-15.png',
                'https://i.ya-webdesign.com/images/gangster-pikachu-png-2.png'];
let i = 0;
const changeImg = () => {
    setInterval(() => {
        console.log('pika');
        $('.pikachu').attr('src', imgPika[i]);
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