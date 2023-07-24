
async function getIdByName(name) {
    let res;
    try {
        const response = await fetch('../db/People.json')
        if (response.ok) {
            const arr = await response.json()
            arr.forEach(el => {
                if (el.nameFirst + " " + el.nameLast === name) {
                    res = el.playerID
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
        const response = await fetch('../db/Batting.json')
        if (response.ok) {
            const arr = await response.json()
            return arr.filter(el => el.playerID === id)
        } else {
            throw response
        }

    } catch (error) {
        console.error(error)
    }
}

async function appendBatting(id) {
    arr = await getTotalBatting(id);
    document.querySelector('.stats-avg').textContent = calcAVG(arr[1], arr[0]).toFixed(3)
    
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
    obj.forEach((i) => {
        ab += i.AB
        hits += i.H
        doub += i['2B']
        trip += i['3B']
        hr += i.HR
        sf += i.SF
        bb += i.BB
        rbi += i.RBI
    })
    totals.push(ab, hits, doub, trip, hr, sf, bb, rbi);

    return totals
    
}

appendBatting('troutmi01');

function calcAVG(hits, atBats) {
    return hits / atBats;
}

function calcSLG(sing, doub, trip, hr, atBats) {
    return ((sing + (doub * 2) + (trip * 3) + (hr * 4)) / atBats)
}

function calcOBP(hits, walks, hbp, sacFly, atBats) {
    return (hits + walks + hbp) / (ab + walks + hbp + sacFly)
}

function calcOPS(sing, doub, trip, hr, atBats, hits, walks, hbp, sacFly) {
    return calcSLG(sing, doub, trip, hr, atBats) + calcOBP(hits, walks, hbp, sacFly, atBats);
}

// getIdByName(currentPlayer).then(id => {
    //     getHittingStats(id).then(res => console.log(res))
    // });
    
// getHittingStats('troutmi01').then(res => console.log(res));
// fetch('../db/Batting.json')
//     .then(res => res.json())
//     .then(arr => {
    //         arr.forEach(el => {
        //             if(el.playerID === 'troutmi01') {
            //                 console.log(el);
            //             }
            //         })
            //     })
