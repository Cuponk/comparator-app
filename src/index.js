import Chart from "chart.js/auto";
import { getIdByName, chartHR, chartAB, chartAVG, chartOBP, chartOPS, chartRBI, chartSLG } from "./database.js";
import {
    appendBatting,
    appendPitching,
    appendDetails,
    appendAwards
} from "./render.js";
import { async } from "regenerator-runtime";

let current2;
let current1;
let mainPlayer;
let updatePlayer;

let submit1 = document.getElementById("s-icon-1");
let submit2 = document.getElementById("s-icon-2");
let test1 = document.getElementById("s-text-1");
let test2 = document.getElementById("s-text-2");

submit1.addEventListener("click", () => search(test1.value, 1, chartAVG));
submit2.addEventListener("click", () => search(test2.value, 2, chartAVG));

const hr = document.getElementById('hr');
const avg = document.getElementById('avg');
const obp = document.getElementById('obp');
const slg = document.getElementById('slg');
const ops = document.getElementById('ops');
const rbi = document.getElementById('rbi');
const ab = document.getElementById('ab');

let playerName;
let compareName;

async function search(val, num, callback) {
    compareName = undefined;
    let id = await getIdByName(val);
    num === 1 ? current1 = id : current2 = id;
    appendBatting(id, num);
    appendDetails(id, num);
    appendAwards(id, num);
    appendPitching(id, num);
    if (num === 2) {
        if (!current1) {
            playerName = val;
            mainPlayer = current2;
            updatePlayer = current1;
            chartBar(id, callback);
        } else {
            mainPlayer = current1;
            updatePlayer = current2;
            compareName = val;
            addData(id, callback);
        }
    } else {
        if (!current2) {
            playerName = val;
            mainPlayer = current1;
            updatePlayer = current2;
            chartBar(id, callback);
        } else {
            compareName = val;
            mainPlayer = current2;
            updatePlayer = current1;
            addData(id, callback);
        }
    }
}

let chart;

async function chartBar(id, callback) {
    const data = await callback(id);
    if (chart) {
        chart.destroy();
    }
    let chartEle = document.getElementById("chart")
    chart = new Chart(chartEle, {
        type: "line",
        data: {
            labels: data.map((row) => 'Year: ' + row.year),
            datasets: [
                {
                    label:  playerName,
                    data: data.map((row) => row.count)
                },
            ],
        },
    });

    if (updatePlayer) {
        await addData(updatePlayer, callback);
    }
}


async function addData(id, callback) {
    const data = await callback(id);
    let newData = {
        label: compareName,
        data: data.map((row) => row.count),
        borderColor: '#FF6384',
        backgroundColor: '#FFB1C1',
    };
    chart.data.datasets.push(newData);
    chart.data.labels = data.map((row) => 'Year: ' + row.year);
    chart.update();
}

let chartInit;

function initializeChart(id, callback) {
    chartInit = chartBar(id, callback);
}

async function addDataToChart(id, callback) {
    await chartInit;
    addData(id, callback);
}


hr.addEventListener('click', () => {
    chartBar(mainPlayer, chartHR)
});

avg.addEventListener('click', () => {
    chartBar(mainPlayer, chartAVG)
});

obp.addEventListener('click', () => {
    chartBar(mainPlayer, chartOBP)
});

slg.addEventListener('click', () => {
    chartBar(mainPlayer, chartSLG)
});

ops.addEventListener('click', () => {
    chartBar(mainPlayer, chartOPS)
});

rbi.addEventListener('click', () => {
    chartBar(mainPlayer, chartRBI)
});

ab.addEventListener('click', () => {
    chartBar(mainPlayer, chartAB)
});
// console.log(button)

// const button = document.getElementById("toggle");
document.getElementById("toggle").addEventListener("click", () => {
    document.querySelector(".stats-1-list-batting").classList.toggle("hidden");
    document.querySelector(".stats-2-list-batting").classList.toggle("hidden");
    document.querySelector(".stats-1-list-pitching").classList.toggle("hidden");
    document.querySelector(".stats-2-list-pitching").classList.toggle("hidden");
});




// function test12() {
// }






