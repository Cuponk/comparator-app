import * as utils from './utils.js'
import {
    getTotalBatting,
    getDetails,
    getAwards,
    getPitchingTotals
} from "./database.js";

async function appendBatting(id, num) {
    let arr = await getTotalBatting(id);
    document.getElementById(`stats-${num}-avg`).textContent =
        "AVG: " + utils.calcAVG(arr[1], arr[0]).toFixed(3);
    document.getElementById(`stats-${num}-slg`).textContent =
        "SLG: " + utils.calcSLG(arr[1], arr[2], arr[3], arr[4], arr[0]).toFixed(3);
    document.getElementById(`stats-${num}-obp`).textContent =
        "OBP: " + utils.calcOBP(arr[1], arr[6], arr[8], arr[5], arr[0]).toFixed(3);
    document.getElementById(`stats-${num}-ops`).textContent =
        "OPS: " +
        utils.calcOPS(
            arr[1],
            arr[2],
            arr[3],
            arr[4],
            arr[0],
            arr[1],
            arr[6],
            arr[8],
            arr[5]
        ).toFixed(3);
    document.getElementById(`stats-${num}-hr`).textContent = "HR: " + arr[4];
    document.getElementById(`stats-${num}-rbi`).textContent = "RBI: " + arr[7];
    document.getElementById(`stats-${num}-ab`).textContent = "AB: " + arr[0];
}

async function appendPitching(id, num) {
    let arr = await getPitchingTotals(id);
    document.getElementById(`stats-${num}-w`).textContent = "W: " + arr[0];
    document.getElementById(`stats-${num}-l`).textContent = "L: " + arr[1];
    document.getElementById(`stats-${num}-g`).textContent = "G: " + arr[4];
    document.getElementById(`stats-${num}-era`).textContent =
        "ERA: " + utils.calcERA(arr[2], arr[5]).toFixed(2);
    document.getElementById(`stats-${num}-so`).textContent = "SO: " + arr[3];
    document.getElementById(`stats-${num}-ip`).textContent = "IP: " + arr[5];
    document.getElementById(`stats-${num}-whip`).textContent =
        "WHIP: " + utils.calcWHIP(arr[6], arr[7], arr[5]).toFixed(3);
}

async function appendDetails(id, num) {
    let arr = await getDetails(id);
    document.querySelector(`.bio-${num}-birth-year`).textContent =
        "Birth Year: " + arr[2];
    document.querySelector(`.bio-${num}-height`).textContent =
        "Height: " + Math.round(Number(arr[5]) / 12) + "'" + (Number(arr[5]) % 12);
    document.querySelector(`.bats-${num}`).textContent = "Bats: " + arr[7];
    document.querySelector(`.throws-${num}`).textContent = "Throws: " + arr[8];
    document.querySelector(`.bio-${num}-years`).textContent =
        "Years Played: " + arr[6];
    document.querySelector(`.bio-${num}-home`).textContent =
        "Home Town: " + arr[3] + ", " + arr[4];
    document.querySelector(`.name-${num}`).textContent = arr[0] + " " + arr[1];
}

async function appendAwards(id, num) {
    let arr = await getAwards(id);
    !arr["TSN All-Star"]
        ? (document.querySelector(`.award-${num}-all-star`).textContent = "")
        : (document.querySelector(`.award-${num}-all-star`).textContent =
            "All-Star: " + arr["TSN All-Star"]);
    !arr["Most Valuable Player"]
        ? (document.querySelector(`.award-${num}-mvp`).textContent = "")
        : (document.querySelector(`.award-${num}-mvp`).textContent =
            "MVP: " + arr["Most Valuable Player"]);
    !arr["Gold Glove"]
        ? (document.querySelector(`.award-${num}-gold-glove`).textContent = "")
        : (document.querySelector(`.award-${num}-gold-glove`).textContent =
            "Gold Glove: " + arr["Gold Glove"]);
    !arr["Silver Slugger"]
        ? (document.querySelector(`.award-${num}-silver-slugger`).textContent = "")
        : (document.querySelector(`.award-${num}-silver-slugger`).textContent =
            "Silver Slugger: " + arr["Silver Slugger"]);
}

export {
    appendBatting,
    appendPitching,
    appendDetails,
    appendAwards
};