
async function getById(id) {
    let res;
    try {
        const response = await fetch('../db/People.json')
        if (response.ok) {
            const arr = await response.json()
            arr.forEach(el => {
                if (el.playerID === id) {
                    res = el;
                }
            })
            return res;
        } else {
            throw response
        }

    } catch (error) {
        console.error(error)
    }
}

async function getNameById(id) {
    let res;
    try {
        const response = await fetch('../db/People.json')
        if (response.ok) {
            const arr = await response.json()
            arr.forEach(el => {
                if (el.playerID === id) {
                    res = el.nameFirst + ' ' + el.nameLast
                }
            })
            return res
        } else {
            throw response
        }

    } catch (error) {
        console.error(error)
    }
}

async function getHittingStats(id) {
    try {
        const response = await fetch('/db/Batting.json')
        if (response.ok) {
            const arr = await response.json();
            return arr.filter(el => el.playerID === id);
        } else {
            throw response;
        }

    } catch (error) {
        console.error(error);
    }
}

async function getTotalBatting(id) {
    let totals = [];
    const obj = await getHittingStats(id)
    let ab = 0;
    let hits = 0;
    let doub = 0;
    let trip = 0;
    let hr = 0;
    let sf = 0;
    let bb = 0;
    let rbi = 0;
    let hbp = 0;
    obj.forEach((i) => {
        ab += i.AB
        hits += i.H
        doub += i['2B']
        trip += i['3B']
        hr += i.HR
        sf += i.SF
        bb += i.BB
        rbi += i.RBI
        hbp += i.HBP
    });
    totals.push(ab, hits, doub, trip, hr, sf, bb, rbi, hbp);

    return totals;
    
}

async function getPitchingStats(id) {
    try {
        const response = await fetch('/db/Pitching.json')
        if (response.ok) {
            const arr = await response.json();
            return arr.filter(el => el.playerID === id);
        } else {
            throw response;
        }

    } catch (error) {
        console.error(error);
    }
}

async function getPitchingTotals(id) {
    let totals = [];
    const obj = await getPitchingStats(id)
    let w = 0;
    let l = 0;
    let er = 0;
    let so = 0;
    let ip = 0;
    let h = 0
    let g = 0
    let bb = 0;
    obj.forEach((i) => {
        w += i.W
        l += i.L
        er += i.ER
        so += i.SO
        ip += i.IPouts
        h += i.H
        g += i.G
        bb += i.BB
    });
    totals.push(w, l, er, so, g, Math.round(ip / 3), bb, h);

    return totals;
    
}

getPitchingTotals('ohtansh01').then(res => console.log(res))

async function getAwards(id) {
    let res = [];
    let obj = {};
    try {
        const response = await fetch('/db/AwardsPlayers.json')
        if (response.ok) {
            const arr = await response.json();
            arr.forEach((el) => {
                if (el.playerID === id) {
                    res.push(el.awardID)
                }
            });
            for(let i = 0; i < res.length; i++) {
                !obj[res[i]] ? obj[res[i]] = 1 : obj[res[i]]++;
            }
            return obj;
        } else {
            throw response;
        }
    } catch (error) {
        console.error(error);
    }
}

async function getDetails(id) {
    let res = [];
    try {
        const response = await fetch('/db/People.json')
        if (response.ok) {
            const arr = await response.json();
            arr.forEach((el) => {
                if (el.playerID === id) {
                    res.push(el.nameFirst, el.nameLast, el.birthYear, el.birthCity, el.birthState, el.height, Number(el.finalGame.slice(0,4)) - Number(el.debut.slice(0,4)), el.bats, el.throws)
                }
            });
            return res;
        } else {
            throw response;
        }
    } catch (error) {
        console.error(error);
    }
}

async function appendBatting(id, num) {
    arr = await getTotalBatting(id);
    document.querySelector(`.stats-${num}-avg`).textContent = 'AVG: ' + calcAVG(arr[1], arr[0]).toFixed(3);
    document.querySelector(`.stats-${num}-slg`).textContent = 'SLG: ' + calcSLG(arr[1], arr[2], arr[3], arr[4], arr[0]).toFixed(3);
    document.querySelector(`.stats-${num}-obp`).textContent = 'OBP: ' + calcOBP(arr[1], arr[6], arr[8], arr[5], arr[0]).toFixed(3);
    document.querySelector(`.stats-${num}-opb`).textContent = 'OPB: ' + calcOPS(arr[1], arr[2], arr[3], arr[4], arr[0], arr[1], arr[6], arr[8], arr[5]).toFixed(3)
    document.querySelector(`.stats-${num}-hr`).textContent = 'HR: ' + arr[4];
    document.querySelector(`.stats-${num}-rbi`).textContent = 'RBI: ' + arr[7];
    document.querySelector(`.stats-${num}-ab`).textContent = 'AB: ' + arr[0];
}

async function appendPitching(id, num) {
    arr = await getPitchingTotals(id);
    document.querySelector(`.stats-${num}-w`).textContent = 'W: ' + arr[0];
    document.querySelector(`.stats-${num}-l`).textContent = 'L: ' + arr[1]
    document.querySelector(`.stats-${num}-g`).textContent = 'G: ' + arr[4]
    document.querySelector(`.stats-${num}-era`).textContent = 'ERA: ' + calcERA(arr[2], arr[5]).toFixed(2);
    document.querySelector(`.stats-${num}-so`).textContent = 'SO: ' + arr[3];
    document.querySelector(`.stats-${num}-ip`).textContent = 'IP: ' + arr[5];
    document.querySelector(`.stats-${num}-whip`).textContent = 'WHIP: ' + calcWHIP(arr[6], arr[7], arr[5]).toFixed(3);
}

async function appendDetails(id, num) {
    arr = await getDetails(id);
    document.querySelector(`.bio-${num}-birth-year`).textContent = 'Birth Year: ' + arr[2];
    document.querySelector(`.bio-${num}-height`).textContent = 'Height: ' + Math.round(Number(arr[5])/12) + "'" + Number(arr[5]) % 12;
    document.querySelector(`.bats-${num}`).textContent = 'Bats: ' + arr[7];
    document.querySelector(`.throws-${num}`).textContent = 'Throws: ' + arr[8];
    document.querySelector(`.bio-${num}-years`).textContent = 'Years Played: ' + arr[6];
    document.querySelector(`.bio-${num}-home`).textContent = 'Home Town: ' + arr[3] + ', ' + arr[4];
    document.querySelector(`.name-${num}`).textContent = arr[0] + ' ' + arr[1];
}

async function appendAwards(id, num) {
    arr = await getAwards(id);
    !arr['TSN All-Star'] ? document.querySelector(`.award-${num}-all-star`).textContent = '' : document.querySelector(`.award-${num}-all-star`).textContent = 'All-Star: ' + arr['TSN All-Star']
    !arr['Most Valuable Player'] ? document.querySelector(`.award-${num}-mvp`).textContent = '' : document.querySelector(`.award-${num}-mvp`).textContent = 'MVP: ' + arr['Most Valuable Player']
    !arr['Gold Glove'] ? document.querySelector(`.award-${num}-gold-glove`).textContent = '' : document.querySelector(`.award-${num}-gold-glove`).textContent = 'Gold Glove: ' + arr['Gold Glove']
    !arr['Silver Slugger'] ? document.querySelector(`.award-${num}-silver-slugger`).textContent = '' : document.querySelector(`.award-${num}-silver-slugger`).textContent = 'Silver Slugger: ' + arr['Silver Slugger']
}


appendDetails('ohtansh01', 1);
appendPitching('ohtansh01', 1)
appendBatting('ohtansh01', 1);
appendAwards('ohtansh01', 1);
appendDetails('ruthba01', 2);
appendPitching('ruthba01', 2)
appendBatting('ruthba01', 2);
appendAwards('ruthba01', 2);

const button = document.querySelector('.toggle');

button.addEventListener('click', () => toggle());

function toggle() {
    document.querySelector('.stats-1-list-batting').classList.toggle('hidden')
    document.querySelector('.stats-2-list-batting').classList.toggle('hidden')
    document.querySelector('.stats-1-list-pitching').classList.toggle('hidden')
    document.querySelector('.stats-2-list-pitching').classList.toggle('hidden')
}

function calcAVG(hits, atBats) {
    return hits / atBats;
}

function calcSLG(sing, doub, trip, hr, atBats) {
    return ((sing + (doub * 2) + (trip * 3) + (hr * 4)) / atBats);
}

function calcOBP(hits, walks, hbp, sacFly, atBats) {
    return (hits + walks + hbp) / (atBats + walks + hbp + sacFly);
}

function calcOPS(sing, doub, trip, hr, atBats, hits, walks, hbp, sacFly) {
    return calcSLG(sing, doub, trip, hr, atBats) + calcOBP(hits, walks, hbp, sacFly, atBats);
}

function calcERA(er, ip) {
    return 9  * (er/ip);
}

function calcWHIP(bb, hits, ip) {
    return (bb + hits) / ip;
}

