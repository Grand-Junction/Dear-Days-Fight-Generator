import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

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
    'Masuru Kita',
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
    res.render('home.ejs');
});

// random-opponent route
app.post('/submit', (req, res) => {
    const randomNumber = Math.floor(Math.random() * fighters.length);
    const randomFighter = fighters[randomNumber];
    console.log(randomFighter);
    res.render('home.ejs', {RandomFighter: randomFighter});
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});


