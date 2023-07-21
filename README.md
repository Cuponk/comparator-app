# comparator-app

### Background

This web app provides the user the ability to lookup and compare any two different seasons from any two different players in Major League Baseball. The user is able to pick any two players and view either the hitting or pitching statistics of these two players. The app also provides an interactive graph that the user can view and even change what type of graph they will see.

---

### Functionality & Features

In Comparator, users will be able to:

- Look up any current or past Major League Baseball Player
- View the statistics of that player on a per season basis
- Compare with another player of the users choosing
- View the stats and comparisons on an interactive graph

#### In addition, this project will include:
- The abiltiy to select stats per season of any player
- Use of an external database that is current and correct

---

### Wireframe

![wireframe](https://media.cleanshot.cloud/media/52999/hMP4PvfBp00t8HntVYuxCoGjzLZn8ceN2GqH9adW.jpeg?Expires=1689929871&Signature=lX2F57qevR6dq5KgkLHi~c5TFAjsXBMCPj0tzr44DS4G1NwYFHq7SK44jsjKtNNs7~10VU8bBJkiswLYAYjafp3hjwIkhK8-gmUm0QdtYpEo1IvhiSMr-s9u6WwM~3xYt2lWHoG0DXtHAr6k~Foik0imx7CU-T~lP7sAZiL4srnqVDx-ygAyNpRvsRv-1hSzU84s~HIzAwCiOXu7f~A9icwUNZ3tWXCtzgAWRh7rFZlJhcrc2Utr3r9ccMJWowLXdJTkESkkpZ1P3xaIxcEx1BfyM7ENP0uax23avTK19Coeym770P0ayyrCmUlKC8clDmYwJO0i~qZylS5ciTuSmw__&Key-Pair-Id=K269JMAT9ZF4GZ)

---

### Potential Technologies, Libraries, and APIs

- D3.js
- Chart.js, depending on the database as d3.js has the ability to parse csv files)
- MLB Stat Cast Api, need an account so might not be possible, but the easiest if I can get access to it)
- The Lahman Baseabll database, as a primary backup, the two main drawbacks are 1. The database consists of csv files so I will have to figure out how to fetch that data, will probanly use D3.js, see above)
- SportsRadar API, secondary backup if needed, still considering as a potential main option, the one drawback is that I might need to pay for it :(
- Express, lightweight backend, if needed

---

### Implementation Timeline

- Friday Afternoon and Weekend
  - finish initial project setup
  - html, css, and js mockup and initial skeleton
  - will not be final design, just want the main layout
  - will start on database if time
  - will try to not focus on fancy css
- Monday
    - database implementation
    - the goal is to understand the database and be able to navigate through the db to get the data I want
    - this will be the main goal before implementing that graph
- Tuesday
    - implement charts and graphs
    - use and understand either d3.js or chart.js to make charts for the database
    - add interactive features to change the type of graph
    - this and the database will be the bulk of the project
- Wednesday
  - finish database and graph features
  - after the main portion is done, add css elements to make it look better
  - fix issues
- Thursday Moring
   - finishing touches and css
   - fix issues
