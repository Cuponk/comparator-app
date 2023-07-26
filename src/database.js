import * as utils from './utils.js'

async function getById(id) {
    let res;
    try {
        const response = await fetch("https://cuponk.github.io/comparator-app/db/People.json");
        if (response.ok) {
            const arr = await response.json();
            arr.forEach((el) => {
                if (el.playerID === id) {
                    res = el;
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

async function getIdByName(name) {
    let res;
    try {
        const response = await fetch("https://cuponk.github.io/comparator-app/db/People.json");
        if (response.ok) {
            const arr = await response.json();
            arr.forEach((el) => {
                if (el.nameFirst + " " + el.nameLast === name) {
                    res = el.playerID;
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

async function getHittingStats(id) {
    try {
        const response = await fetch("https://cuponk.github.io/comparator-app/db/Batting.json");
        if (response.ok) {
            const arr = await response.json();
            return arr.filter((el) => el.playerID === id);
        } else {
            throw response;
        }
    } catch (error) {
        console.error(error);
    }
}


async function getTotalBatting(id) {
    let totals = [];
    const obj = await getHittingStats(id);
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
        ab += i.AB;
        hits += i.H;
        doub += i["2B"];
        trip += i["3B"];
        hr += i.HR;
        sf += i.SF;
        bb += i.BB;
        rbi += i.RBI;
        hbp += i.HBP;
    });
    totals.push(ab, hits, doub, trip, hr, sf, bb, rbi, hbp);

    return totals;
}

async function getPitchingStats(id) {
    try {
        const response = await fetch("https://cuponk.github.io/comparator-app/db/Pitching.json");
        if (response.ok) {
            const arr = await response.json();
            return arr.filter((el) => el.playerID === id);
        } else {
            throw response;
        }
    } catch (error) {
        console.error(error);
    }
}

async function getPitchingTotals(id) {
    let totals = [];
    const obj = await getPitchingStats(id);
    let w = 0;
    let l = 0;
    let er = 0;
    let so = 0;
    let ip = 0;
    let h = 0;
    let g = 0;
    let bb = 0;
    obj.forEach((i) => {
        w += i.W;
        l += i.L;
        er += i.ER;
        so += i.SO;
        ip += i.IPouts;
        h += i.H;
        g += i.G;
        bb += i.BB;
    });
    totals.push(w, l, er, so, g, Math.round(ip / 3), bb, h);

    return totals;
}



async function getAwards(id) {
    let res = [];
    let obj = {};
    try {
        const response = await fetch("https://cuponk.github.io/comparator-app/db/AwardsPlayers.json");
        if (response.ok) {
            const arr = await response.json();
            arr.forEach((el) => {
                if (el.playerID === id) {
                    res.push(el.awardID);
                }
            });
            for (let i = 0; i < res.length; i++) {
                !obj[res[i]] ? (obj[res[i]] = 1) : obj[res[i]]++;
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
        const response = await fetch("https://cuponk.github.io/comparator-app/db/People.json");
        if (response.ok) {
            const arr = await response.json();
            arr.forEach((el) => {
                if (el.playerID === id) {
                    res.push(
                        el.nameFirst,
                        el.nameLast,
                        el.birthYear,
                        el.birthCity,
                        el.birthState,
                        el.height,
                        Number(el.finalGame.slice(0, 4)) - Number(el.debut.slice(0, 4)),
                        el.bats,
                        el.throws
                    );
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

async function chartHR(id) {
    let filterStat = []
    const obj = await getHittingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': i.HR})
    });
    return filterStat;
}

async function chartAVG(id) {
    let filterStat = []
    const obj = await getHittingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': utils.calcAVG(i.H, i.AB)})
    });
    return filterStat;
}

async function chartOBP(id) {
    let filterStat = []
    const obj = await getHittingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': utils.calcOBP(i.H, i.BB, i.HBP, i.SF, i.AB)})
    });
    return filterStat;
}

async function chartSLG(id) {
    let filterStat = []
    const obj = await getHittingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': utils.calcSLG(i.H, i['2B'], i['3B'], i.HR, i.AB) })
    });
    return filterStat;
}

async function chartOPS(id) {
    let filterStat = []
    const obj = await getHittingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': utils.calcOPS(i.H, i['2B'], i['3B'], i.HR, i.AB, i.H, i.BB, i.HBP, i.SF)})
    });
    return filterStat;
}

async function chartRBI(id) {
    let filterStat = []
    const obj = await getHittingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': i.RBI})
    });
    return filterStat;
}

async function chartAB(id) {
    let filterStat = []
    const obj = await getHittingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': i.AB})
    });
    return filterStat;
}

async function chartL(id) {
    let filterStat = []
    const obj = await getPitchingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': i.L})
    });
    return filterStat;
}

async function chartW(id) {
    let filterStat = []
    const obj = await getPitchingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': i.W})
    });
    return filterStat;
}

async function chartG(id) {
    let filterStat = []
    const obj = await getPitchingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': i.G})
    });
    return filterStat;
}

async function chartERA(id) {
    let filterStat = []
    const obj = await getPitchingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': utils.calcERA(i.ER, i.IPouts / 3)})
    });
    return filterStat;
}

async function chartSO(id) {
    let filterStat = []
    const obj = await getPitchingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': i.SO })
    });
    return filterStat;
}

async function chartIP(id) {
    let filterStat = []
    const obj = await getPitchingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': i.IPouts / 3})
    });
    return filterStat;
}

async function chartWHIP(id) {
    let filterStat = []
    const obj = await getPitchingStats(id);
    let yrCount = 0;
    obj.forEach((i) => {
        yrCount++;
        filterStat.push({'year': yrCount, 'count': utils.calcWHIP(i.BB, i.H, i.IPouts / 3)})
    });
    return filterStat;
}

export {
    getById,
    getIdByName,
    getHittingStats,
    getTotalBatting,
    getPitchingStats,
    getPitchingTotals,
    getAwards,
    getDetails,
    chartHR,
    chartAB,
    chartAVG,
    chartOBP,
    chartOPS,
    chartRBI,
    chartSLG,
    chartERA,
    chartG,
    chartIP,
    chartL,
    chartSO,
    chartW,
    chartWHIP
};