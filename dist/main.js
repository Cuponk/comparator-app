/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("async function getIdByName(name) {\n  let res;\n  try {\n    const response = await fetch('../db/People.json');\n    if (response.ok) {\n      const arr = await response.json();\n      arr.forEach(el => {\n        if (el.nameFirst + \" \" + el.nameLast === name) {\n          res = el.playerID;\n        }\n      });\n      return res;\n    } else {\n      throw response;\n    }\n  } catch (error) {\n    console.error(error);\n  }\n}\nasync function getNameById(id) {\n  let res;\n  try {\n    const response = await fetch('../db/People.json');\n    if (response.ok) {\n      const arr = await response.json();\n      arr.forEach(el => {\n        if (el.playerID === id) {\n          res = el.nameFirst + ' ' + el.nameLast;\n        }\n      });\n      return res;\n    } else {\n      throw response;\n    }\n  } catch (error) {\n    console.error(error);\n  }\n}\nasync function getHittingStats(id) {\n  try {\n    const response = await fetch('../db/Batting.json');\n    if (response.ok) {\n      const arr = await response.json();\n      return arr.filter(el => el.playerID === id);\n    } else {\n      throw response;\n    }\n  } catch (error) {\n    console.error(error);\n  }\n}\nfunction calcAVG(hits, atBats) {\n  return hits / atBats;\n}\nfunction calcSLG(sing, doub, trip, hr, atBats) {\n  return (sing + doub * 2 + trip * 3 + hr * 4) / atBats;\n}\nfunction calcOBP(hits, walks, hbp, sacFly, atBats) {\n  return (hits + walks + hbp) / (ab + walks + hbp + sacFly);\n}\nfunction calcOPS(sing, doub, trip, hr, atBats, hits, walks, hbp, sacFly) {\n  return calcSLG(sing, doub, trip, hr, atBats) + calcOBP(hits, walks, hbp, sacFly, atBats);\n}\n\n// getIdByName(currentPlayer).then(id => {\n//     getHittingStats(id).then(res => console.log(res))\n// });\n\n// getHittingStats(currentPlayer).then(res => console.log(res));\n// fetch('../db/Batting.json')\n//     .then(res => res.json())\n//     .then(arr => {\n//         arr.forEach(el => {\n//             if(el.playerID === 'troutmi01') {\n//                 console.log(el);\n//             }\n//         })\n//     })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJnZXRJZEJ5TmFtZSIsIm5hbWUiLCJyZXMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJhcnIiLCJqc29uIiwiZm9yRWFjaCIsImVsIiwibmFtZUZpcnN0IiwibmFtZUxhc3QiLCJwbGF5ZXJJRCIsImVycm9yIiwiY29uc29sZSIsImdldE5hbWVCeUlkIiwiaWQiLCJnZXRIaXR0aW5nU3RhdHMiLCJmaWx0ZXIiLCJjYWxjQVZHIiwiaGl0cyIsImF0QmF0cyIsImNhbGNTTEciLCJzaW5nIiwiZG91YiIsInRyaXAiLCJociIsImNhbGNPQlAiLCJ3YWxrcyIsImhicCIsInNhY0ZseSIsImFiIiwiY2FsY09QUyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcGFyYXRvci1hcHAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmFzeW5jIGZ1bmN0aW9uIGdldElkQnlOYW1lKG5hbWUpIHtcbiAgICBsZXQgcmVzO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy4uL2RiL1Blb3BsZS5qc29uJylcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWwubmFtZUZpcnN0ICsgXCIgXCIgKyBlbC5uYW1lTGFzdCA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXMgPSBlbC5wbGF5ZXJJRFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZVxuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TmFtZUJ5SWQoaWQpIHtcbiAgICBsZXQgcmVzO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy4uL2RiL1Blb3BsZS5qc29uJylcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWwucGxheWVySUQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IGVsLm5hbWVGaXJzdCArICcgJyArIGVsLm5hbWVMYXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlXG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRIaXR0aW5nU3RhdHMoaWQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcuLi9kYi9CYXR0aW5nLmpzb24nKVxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgcmV0dXJuIGFyci5maWx0ZXIoZWwgPT4gZWwucGxheWVySUQgPT09IGlkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2VcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhbGNBVkcoaGl0cywgYXRCYXRzKSB7XG4gICAgcmV0dXJuIGhpdHMgLyBhdEJhdHM7XG59XG5cbmZ1bmN0aW9uIGNhbGNTTEcoc2luZywgZG91YiwgdHJpcCwgaHIsIGF0QmF0cykge1xuICAgIHJldHVybiAoKHNpbmcgKyAoZG91YiAqIDIpICsgKHRyaXAgKiAzKSArIChociAqIDQpKSAvIGF0QmF0cylcbn1cblxuZnVuY3Rpb24gY2FsY09CUChoaXRzLCB3YWxrcywgaGJwLCBzYWNGbHksIGF0QmF0cykge1xuICAgIHJldHVybiAoaGl0cyArIHdhbGtzICsgaGJwKSAvIChhYiArIHdhbGtzICsgaGJwICsgc2FjRmx5KVxufVxuXG5mdW5jdGlvbiBjYWxjT1BTKHNpbmcsIGRvdWIsIHRyaXAsIGhyLCBhdEJhdHMsIGhpdHMsIHdhbGtzLCBoYnAsIHNhY0ZseSkge1xuICAgIHJldHVybiBjYWxjU0xHKHNpbmcsIGRvdWIsIHRyaXAsIGhyLCBhdEJhdHMpICsgY2FsY09CUChoaXRzLCB3YWxrcywgaGJwLCBzYWNGbHksIGF0QmF0cyk7XG59XG5cbi8vIGdldElkQnlOYW1lKGN1cnJlbnRQbGF5ZXIpLnRoZW4oaWQgPT4ge1xuICAgIC8vICAgICBnZXRIaXR0aW5nU3RhdHMoaWQpLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgLy8gfSk7XG4gICAgXG4vLyBnZXRIaXR0aW5nU3RhdHMoY3VycmVudFBsYXllcikudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSk7XG4vLyBmZXRjaCgnLi4vZGIvQmF0dGluZy5qc29uJylcbi8vICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbi8vICAgICAudGhlbihhcnIgPT4ge1xuICAgIC8vICAgICAgICAgYXJyLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBpZihlbC5wbGF5ZXJJRCA9PT0gJ3Ryb3V0bWkwMScpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgfSlcbiJdLCJtYXBwaW5ncyI6IkFBQ0EsZUFBZUEsV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFO0VBQzdCLElBQUlDLEdBQUc7RUFDUCxJQUFJO0lBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztJQUNqRCxJQUFJRCxRQUFRLENBQUNFLEVBQUUsRUFBRTtNQUNiLE1BQU1DLEdBQUcsR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO01BQ2pDRCxHQUFHLENBQUNFLE9BQU8sQ0FBQ0MsRUFBRSxJQUFJO1FBQ2QsSUFBSUEsRUFBRSxDQUFDQyxTQUFTLEdBQUcsR0FBRyxHQUFHRCxFQUFFLENBQUNFLFFBQVEsS0FBS1YsSUFBSSxFQUFFO1VBQzNDQyxHQUFHLEdBQUdPLEVBQUUsQ0FBQ0csUUFBUTtRQUNyQjtNQUNKLENBQUMsQ0FBQztNQUNGLE9BQU9WLEdBQUc7SUFDZCxDQUFDLE1BQU07TUFDSCxNQUFNQyxRQUFRO0lBQ2xCO0VBRUosQ0FBQyxDQUFDLE9BQU9VLEtBQUssRUFBRTtJQUNaQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0VBQ3hCO0FBQ0o7QUFFQSxlQUFlRSxXQUFXQSxDQUFDQyxFQUFFLEVBQUU7RUFDM0IsSUFBSWQsR0FBRztFQUNQLElBQUk7SUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO0lBQ2pELElBQUlELFFBQVEsQ0FBQ0UsRUFBRSxFQUFFO01BQ2IsTUFBTUMsR0FBRyxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7TUFDakNELEdBQUcsQ0FBQ0UsT0FBTyxDQUFDQyxFQUFFLElBQUk7UUFDZCxJQUFJQSxFQUFFLENBQUNHLFFBQVEsS0FBS0ksRUFBRSxFQUFFO1VBQ3BCZCxHQUFHLEdBQUdPLEVBQUUsQ0FBQ0MsU0FBUyxHQUFHLEdBQUcsR0FBR0QsRUFBRSxDQUFDRSxRQUFRO1FBQzFDO01BQ0osQ0FBQyxDQUFDO01BQ0YsT0FBT1QsR0FBRztJQUNkLENBQUMsTUFBTTtNQUNILE1BQU1DLFFBQVE7SUFDbEI7RUFFSixDQUFDLENBQUMsT0FBT1UsS0FBSyxFQUFFO0lBQ1pDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDQSxLQUFLLENBQUM7RUFDeEI7QUFDSjtBQUVBLGVBQWVJLGVBQWVBLENBQUNELEVBQUUsRUFBRTtFQUMvQixJQUFJO0lBQ0EsTUFBTWIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztJQUNsRCxJQUFJRCxRQUFRLENBQUNFLEVBQUUsRUFBRTtNQUNiLE1BQU1DLEdBQUcsR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO01BQ2pDLE9BQU9ELEdBQUcsQ0FBQ1ksTUFBTSxDQUFDVCxFQUFFLElBQUlBLEVBQUUsQ0FBQ0csUUFBUSxLQUFLSSxFQUFFLENBQUM7SUFDL0MsQ0FBQyxNQUFNO01BQ0gsTUFBTWIsUUFBUTtJQUNsQjtFQUVKLENBQUMsQ0FBQyxPQUFPVSxLQUFLLEVBQUU7SUFDWkMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQztFQUN4QjtBQUNKO0FBRUEsU0FBU00sT0FBT0EsQ0FBQ0MsSUFBSSxFQUFFQyxNQUFNLEVBQUU7RUFDM0IsT0FBT0QsSUFBSSxHQUFHQyxNQUFNO0FBQ3hCO0FBRUEsU0FBU0MsT0FBT0EsQ0FBQ0MsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsRUFBRSxFQUFFTCxNQUFNLEVBQUU7RUFDM0MsT0FBUSxDQUFDRSxJQUFJLEdBQUlDLElBQUksR0FBRyxDQUFFLEdBQUlDLElBQUksR0FBRyxDQUFFLEdBQUlDLEVBQUUsR0FBRyxDQUFFLElBQUlMLE1BQU07QUFDaEU7QUFFQSxTQUFTTSxPQUFPQSxDQUFDUCxJQUFJLEVBQUVRLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxNQUFNLEVBQUVULE1BQU0sRUFBRTtFQUMvQyxPQUFPLENBQUNELElBQUksR0FBR1EsS0FBSyxHQUFHQyxHQUFHLEtBQUtFLEVBQUUsR0FBR0gsS0FBSyxHQUFHQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQztBQUM3RDtBQUVBLFNBQVNFLE9BQU9BLENBQUNULElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEVBQUUsRUFBRUwsTUFBTSxFQUFFRCxJQUFJLEVBQUVRLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxNQUFNLEVBQUU7RUFDckUsT0FBT1IsT0FBTyxDQUFDQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxFQUFFLEVBQUVMLE1BQU0sQ0FBQyxHQUFHTSxPQUFPLENBQUNQLElBQUksRUFBRVEsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sRUFBRVQsTUFBTSxDQUFDO0FBQzVGOztBQUVBO0FBQ0k7QUFDQTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDQSJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wYXJhdG9yLWFwcC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;