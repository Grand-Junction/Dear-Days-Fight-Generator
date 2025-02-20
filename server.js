import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import pg from "pg";

//Database for Fighter Arrays

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "deardaysfight",
    password: "BGudemy022490!$",
    port: 5432
  });
  db.connect();
  

const app = express();
const port = 3000;

// bodyparser for handling input
app.use(bodyParser.urlencoded({extended: true}));
// mounting middleware for rendering static files
app.use(express.static('public'));

// home-page route
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

// random-opponent & difficulty route
app.get('/random', async (req, res) => {

    // query db 
        try {
            const fighters = await db.query('SELECT * FROM fighters_array');
            const fightersArray = fighters.rows;
            console.log(fightersArray);

            // get random fighter
            const randomFighter = fightersArray[Math.floor(Math.random() * fightersArray.length)];

            // generate random fighter's name
            const randomFighterName = randomFighter.name;
            console.log(randomFighterName);

            //  generate random fighter's difficulty level
            const randomFighterDiff = randomFighter.level;
            const randomFighterTotal = randomFighterDiff[Math.floor(Math.random() * randomFighterDiff.length)];
            console.log(randomFighterTotal);

            // return result
            res.render('random.ejs', {RandomFighter: randomFighterName, RandomLevel: randomFighterTotal});
            
        } catch (error) {
            console.log(`It didn't work`, error);
        } 
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


