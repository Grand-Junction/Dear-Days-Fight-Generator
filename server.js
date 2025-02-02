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
app.post('/select', (req, res) => {

    //grab req.body dropdown choice
    console.log(req.body.nation);
    
    //filter through and grab only selected nation
    switch(req.body.nation) {
        case "keter":

            const newFightersKS = fighters.filter(
                function (e, i) {
                    if (e.nation === 'Keter Sanctuary') {
                        return i;
                    }
                }
            );

            // get random fighter
            const randomFighterKS = newFightersKS[Math.floor(Math.random() * newFightersKS.length)];

            // generate random fighter's name
            const randomFighterNameKS = randomFighterKS.name;
            console.log(randomFighterNameKS);

            //  generate random fighter's difficulty level
            const randomFighterDiffKS = randomFighterKS.level;
            const randomFighterTotalKS = randomFighterDiffKS[Math.floor(Math.random() * randomFighterDiffKS.length)];
            console.log(randomFighterTotalKS);

            // return result
            res.render('random.ejs', {RandomFighter: randomFighterNameKS, RandomLevel: randomFighterTotalKS});
            break;

            case "dragon":

            const newFightersDE = fighters.filter(
                function (e, i) {
                    if (e.nation === 'Dragon Empire') {
                        return i;
                    }
                }
            );

            // get random fighter
            const randomFighterDE = newFightersDE[Math.floor(Math.random() * newFightersDE.length)];

            // generate random fighter's name
            const randomFighterNameDE = randomFighterDE.name;
            console.log(randomFighterNameDE);

            //  generate random fighter's difficulty level
            const randomFighterDiffDE = randomFighterDE.level;
            const randomFighterTotalDE = randomFighterDiffDE[Math.floor(Math.random() * randomFighterDiffDE.length)];
            console.log(randomFighterTotalDE);

            // return result
            res.render('random.ejs', {RandomFighter: randomFighterNameDE, RandomLevel: randomFighterTotalDE});
            break;

            case "stoicheia":

            const newFightersS = fighters.filter(
                function (e, i) {
                    if (e.nation === 'Stoicheia') {
                        return i;
                    }
                }
            );

            // get random fighter
            const randomFighterS = newFightersS[Math.floor(Math.random() * newFightersS.length)];

            // generate random fighter's name
            const randomFighterNameS = randomFighterS.name;
            console.log(randomFighterNameS);

            //  generate random fighter's difficulty level
            const randomFighterDiffS = randomFighterS.level;
            const randomFighterTotalS = randomFighterDiffS[Math.floor(Math.random() * randomFighterDiffS.length)];
            console.log(randomFighterTotalS);

            // return result
            res.render('random.ejs', {RandomFighter: randomFighterNameS, RandomLevel: randomFighterTotalS});
            break;

            case "dark":

            const newFightersDS = fighters.filter(
                function (e, i) {
                    if (e.nation === 'Dark States') {
                        return i;
                    }
                }
            );

            // get random fighter
            const randomFighterDS = newFightersDS[Math.floor(Math.random() * newFightersDS.length)];

            // generate random fighter's name
            const randomFighterNameDS = randomFighterDS.name;
            console.log(randomFighterNameDS);

            //  generate random fighter's difficulty level
            const randomFighterDiffDS = randomFighterDS.level;
            const randomFighterTotalDS = randomFighterDiffDS[Math.floor(Math.random() * randomFighterDiffDS.length)];
            console.log(randomFighterTotalDS);

            // return result
            res.render('random.ejs', {RandomFighter: randomFighterNameDS, RandomLevel: randomFighterTotalDS});
            break;

            case "brandt":

            const newFightersBG = fighters.filter(
                function (e, i) {
                    if (e.nation === 'Brandt Gate') {
                        return i;
                    }
                }
            );

            // get random fighter
            const randomFighterBG = newFightersBG[Math.floor(Math.random() * newFightersBG.length)];

            // generate random fighter's name
            const randomFighterNameBG = randomFighterBG.name;
            console.log(randomFighterNameBG);

            //  generate random fighter's difficulty level
            const randomFighterDiffBG = randomFighterBG.level;
            const randomFighterTotalBG = randomFighterDiffBG[Math.floor(Math.random() * randomFighterDiffBG.length)];
            console.log(randomFighterTotalBG);

            // return result
            res.render('random.ejs', {RandomFighter: randomFighterNameBG, RandomLevel: randomFighterTotalBG});
            break;

            case "lyrical":

            const newFightersLM = fighters.filter(
                function (e, i) {
                    if (e.nation === 'Lyrical Monasterio') {
                        return i;
                    }
                }
            );

            // get random fighter
            const randomFighterLM = newFightersLM[Math.floor(Math.random() * newFightersLM.length)];

            // generate random fighter's name
            const randomFighterNameLM = randomFighterLM.name;
            console.log(randomFighterNameLM);

            //  generate random fighter's difficulty level
            const randomFighterDiffLM = randomFighterLM.level;
            const randomFighterTotalLM = randomFighterDiffLM[Math.floor(Math.random() * randomFighterDiffLM.length)];
            console.log(randomFighterTotalLM);

            // return result
            res.render('random.ejs', {RandomFighter: randomFighterNameLM, RandomLevel: randomFighterTotalLM});
            break;
    }
    

});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});


