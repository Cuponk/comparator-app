
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

getDetails('troutmi01').then(el => console.log(el));

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


async function getTotalBatting(id) {
    let totals = []
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
        hbp += i.HBP;
    })
    totals.push(ab, hits, doub, trip, hr, sf, bb, rbi, hbp);

    return totals
    
}

async function appendDetails(id, num) {
    arr = await getDetails(id);
    document.querySelector(`.bio-${num}-birth-year`).textContent = 'Year Born: ' + arr[2]
    document.querySelector(`.bio-${num}-height`).textContent = Math.round(Number(arr[5])/12) + "'" + Number(arr[5]) % 12
    document.querySelector(`.bats-${num}`).textContent = 'Bats: ' + arr[7]
    document.querySelector(`.throws-${num}`).textContent = 'Throws: ' + arr[8]
    document.querySelector(`.bio-${num}-years`).textContent = 'Years Played: ' + arr[6]
    document.querySelector(`.bio-${num}-home`).textContent = 'Home Town: ' + arr[3] + ', ' + arr[4]
    document.querySelector(`.name-${num}`).textContent = arr[0] + ' ' + arr[1]
}

appendDetails('ruthba01', 2)
appendDetails('troutmi01', 1)
appendBatting('troutmi01', 1);
appendBatting('ruthba01', 2);

function calcAVG(hits, atBats) {
    return hits / atBats;
}

function calcSLG(sing, doub, trip, hr, atBats) {
    return ((sing + (doub * 2) + (trip * 3) + (hr * 4)) / atBats)
}

function calcOBP(hits, walks, hbp, sacFly, atBats) {
    return (hits + walks + hbp) / (atBats + walks + hbp + sacFly)
}

function calcOPS(sing, doub, trip, hr, atBats, hits, walks, hbp, sacFly) {
    return calcSLG(sing, doub, trip, hr, atBats) + calcOBP(hits, walks, hbp, sacFly, atBats);
}


// getById('troutmi01').then(res => console.log(res));
