export function calcAVG(hits, atBats) {
    return hits / atBats;
}

export function calcSLG(sing, doub, trip, hr, atBats) {
    return (sing + doub * 2 + trip * 3 + hr * 4) / atBats;
}

export function calcOBP(hits, walks, hbp, sacFly, atBats) {
    return (hits + walks + hbp) / (atBats + walks + hbp + sacFly);
}

export function calcOPS(sing, doub, trip, hr, atBats, hits, walks, hbp, sacFly) {
    return (
        calcSLG(sing, doub, trip, hr, atBats) +
        calcOBP(hits, walks, hbp, sacFly, atBats)
    );
}

export function calcERA(er, ip) {
    return 9 * (er / ip);
}

export function calcWHIP(bb, hits, ip) {
    return (bb + hits) / ip;
}