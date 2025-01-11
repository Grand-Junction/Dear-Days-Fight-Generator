import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';

const app = express();
const port = 3000;

// bodyparser for handling input
app.use(bodyParser.urlencoded({extended: true}));
// mounting middleware for rendering static files
app.use(express.static('public'));

// fighters array for randomly selected opponents
let fighters = [
    'Yuki Ichidoji',
    'Yu-Yu Kondo',
    'Danji Momoyama',
    'Tohya Ebata',
    'Megumi Okura',
    'Tomari Seto',
    'Masanori Iseki',
    'Zakusa Ishimgame',
    'Mirei Minae',
    'Shinobu Kajita',
    'Haruka Sokawa',
    'Rasen Ichidoji',
    'Gosetsu Katsushika',
    'Kanji Meguro',
    'Tatsuki Bunkyo',
    'Masaru Kita',
    'Mika Shibuya',
    'Doshi Nakano',
    'Kuro Minato',
    'Haru Shinagawa',
    'Kana Aoyama',
    'Yui Itabashi',
    'Taiji Arakawa',
    'Noi Taito',
    'Aichi Sendou',
    'Toshiki Kai',
    'Ren Suzugamori',
    'Urara Haneyama',
    'Raika Koshiba',
    'Chrono Shindou',
    'Taizo Kiyokura',
    'Jinki Mukae',
    'Sophie Belle',
    'Samuel Fredson'
];



// home-page route
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

// random-opponent route
app.get('/random', (req, res) => {
    const randomFighter = fighters[Math.floor(Math.random() * fighters.length)];
    console.log(randomFighter);
    res.render('home.ejs', {RandomFighter: randomFighter});
});

app.get('/return', (req, res) => {
    console.log('return to home page');
    res.redirect('/');
});


app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});


