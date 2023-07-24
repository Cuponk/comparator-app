
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
    
// getHittingStats(currentPlayer).then(res => console.log(res));
// fetch('../db/Batting.json')
//     .then(res => res.json())
//     .then(arr => {
    //         arr.forEach(el => {
        //             if(el.playerID === 'troutmi01') {
            //                 console.log(el);
            //             }
            //         })
            //     })
