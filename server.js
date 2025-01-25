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
const fighters = [
    {
        name: 'Yuki Ichidoji',
        nation: 'Keter Sanctuary',
        level: ['Hard']
    }, 
    {
        name: 'Yuyu Kondo',
        nation: 'Dragon Empire',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Danji Momoyama',
        nation: 'Dark States',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Tohya Ebata',
        nation: 'Keter Sanctuary',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Megumi Okura',
        nation: 'Stoicheia',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Tomari Seto',
        nation: 'Brandt Gate',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Masanori Iseki',
        nation: 'Stoicheia',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Zakusa Ishigame',
        nation: 'Brandt Gate',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Mirei Minae',
        nation: 'Dragon Empire',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Shinobu Kajita',
        nation: 'Dark States',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Haruka Sokawa',
        nation: 'Brandt Gate',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Rasen Ichidoji',
        nation: 'Stoicheia',
        level: ['Easy', 'Hard']
    },
    {
        name: 'Gosetsu Katsushika',
        nation: 'Stoicheia',
        level: ['Easy', 'Hard']
    },
    {
        name: 'Kanji Meguro',
        nation: 'Dark States',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Tatsuki Bunkyo',
        nation: 'Dark States',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Masaru Kita',
        nation: 'Dark States',
        level: ['Easy', 'Normal', 'Hard']
    },
    {
        name: 'Mika Shibuya',
        nation: 'Lyrical Monasterio',
        level: ['Normal', 'Hard']
    },
    {
        name: 'Doshi Nakano',
        nation: 'Dragon Empire',
        level: ['Easy', 'Normal', 'Hard']
    },
    {
        name: 'Kuro Minato',
        nation: 'Keter Sanctuary',
        level: ['Easy', 'Normal', 'Hard']
    },
    {
        name: 'Haru Shinagawa',
        nation: 'Keter Sanctuary',
        level: ['Easy', 'Normal', 'Hard']
    },
    {
        name: 'Kana Aoyama',
        nation: 'Lyrical Monasterio',
        level: ['Easy', 'Normal', 'Hard']
    },
    {
        name: 'Yui Itabashi',
        nation: 'Lyrical Monasterio',
        level: ['Easy', 'Normal', 'Hard']
    },
    {
        name: 'Taiji Arakawa',
        nation: 'Brandt Gate',
        level: ['Easy', 'Normal', 'Hard']
    },
    {
        name: 'Noi Taito',
        nation: 'Dragon Empire',
        level: ['Easy', 'Normal', 'Hard']
    },
    {
        name: 'Aichi Sendou',
        nation: 'Keter Sanctuary',
        level: ['Hard']
    },
    {
        name: 'Toshiki Kai',
        nation: 'Dragon Empire',
        level: ['Hard']
    },
    {
        name: 'Ren Suzugamori',
        nation: 'Keter Sanctuary',
        level: ['Hard']
    },
    {
        name: 'Urara Haneyama',
        nation: 'Stoicheia',
        level: ['Hard']
    },
    {
        name: 'Raika Koshiba',
        nation: 'Keter Sanctuary',
        level: ['Hard']
    },
    {
        name: 'Chrono Shindou',
        nation: 'Dark States',
        level: ['Hard']
    },
    {
        name: 'Taizo Kiyokura',
        nation: 'Brandt Gate',
        level: ['Hard']
    },
    {
        name: 'Jinki Mukae',
        nation: 'Dragon Empire',
        level: ['Hard']
    },
    {
        name: 'Sophie Belle',
        nation: 'Dark States',
        level: ['Hard']
    },
    {
        name: 'Samuel Fredson',
        nation: 'Brandt Gate',
        level: ['Hard']
    }
    
];

// home-page route
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

// random-opponent & difficulty route
app.get('/random', (req, res) => {
    // get random fighter
    const randomFighter = fighters[Math.floor(Math.random() * fighters.length)];

    // generate random fighter's name
    const randomFighterName = randomFighter.name;
    console.log(randomFighterName);

    //  generate random fighter's difficulty level
    const randomFighterDiff = randomFighter.level;
    const randomFighterTotal = randomFighterDiff[Math.floor(Math.random() * randomFighterDiff.length)];
    console.log(randomFighterTotal);

    // return result
    res.render('random.ejs', {RandomFighter: randomFighterName, RandomLevel: randomFighterTotal});
});

// random-opponent & difficulty route (chosen nation)
app.get('/random-nation', (req, res) => {

    //grab req.body dropdown choice
    console.log(req.body);
    
    //filter through and grab only selected nation
    const newFightersKS = [];
    const randomFighterNation = fighters.filter(
            function (fighter) {
                if (fighter.nation === 'Keter Sanctuary') {
                    newFightersKS.push(fighter);
                }
            }
    );
    console.log(newFightersKS);
    
    // get random fighter
    const randomFighter = fighters[Math.floor(Math.random() * fighters.length)];

    // generate random fighter's name
    const randomFighterName = randomFighter.name;
    console.log(randomFighterName);

    //  generate random fighter's difficulty level
    const randomFighterDiff = randomFighter.level;
    const randomFighterTotal = randomFighterDiff[Math.floor(Math.random() * randomFighterDiff.length)];
    console.log(randomFighterTotal);

    // return result
    res.render('random.ejs', {RandomFighter: randomFighterName, RandomLevel: randomFighterTotal});
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});


