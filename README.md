# comparator-app

### Background

This web app provides the user the ability to lookup and compare any two different seasons from any two different players in Major League Baseball. The user is able to pick any two players and view either the hitting or pitching statistics of these two players. The app also provides an interactive graph that the user can view and even change what type of graph they will see.

[Link to App](https://cuponk.github.io/comparator-app/)

---

### Functionality & Features

In Comparator, users will be able to:

- Look up any current or past Major League Baseball Player and view their carrer pitching or hitting statistics
- Compare that player to another player and see the comparison in 3 different chart options

---

### Screenshot

![screenshot](https://media.cleanshot.cloud/media/52999/A07D6SIEaeU1Wk79URXlqKcLYrawNKExRh2eictw.jpeg?Expires=1690504880&Signature=LP~GYAUgLv2~jvg51saPllJQVEsN9~C8-uHhNDKmmObcDZHD1a1bgaxdoc3bFi8kopDkclvr2ykDgQXJyuAXewMsrvDg8793YpXwyjR67xCfMVqXQSfV3fIEzs73y4jIwtvaG8JgjkcFkRjNV3oEvv8BMO76ijYClc58jIq6kudXffo84bIKbygZykmE9~BtD5lFar~a0Osn~2KRTyYgOq1sJf~lTvgVJWxLNX0Cy-fdHkbsSI~ZJE48B07M7-Zs-4NeFaxXqZVyKA9wBSeYZANqFtz4925yP1sQrjJ-pSo1PNvaC2cVQAGvmf9yiEp~oYLyMvkno~1MXVnZkYtoJA__&Key-Pair-Id=K269JMAT9ZF4GZ)

---

### Technologies, Libraries, and APIs

- Chart.js

- The Lahman Baseabll database

---

### Pitfalls
  - The database was tough to use, as there is not that much detailed documentation and the tables are too large for anyone to look through then normally
  - D3 js might have been a better choice because of the power that it has, however, chart.js was easy to use
---

### Code Snippets

#### Search Function 
```js
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
```

#### Stat Calculations

```js
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
```