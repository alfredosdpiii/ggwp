// function checkCoord(e){
//     let x = document.getElementsByClassName('points')[0].getBoundingClientRect()
//     let a = document.getElementsByClassName('points')[1].getBoundingClientRect()
//     let z = document.getElementsByClassName('points')[0].offsetLeft
//     let y = document.getElementsByClassName('points')[0].offsetTop
//     console.log(x,a, y, z)
//     let parentPos = document.getElementById('plane').getBoundingClientRect(),
//     childPos = document.getElementsByClassName('points')[0].getBoundingClientRect(),
//     relativePos = {};
//     childPos2 = document.getElementsByClassName('points')[1].getBoundingClientRect(),
//     relativePos = {};

// relativePos.top = childPos.top - parentPos.top,
// relativePos.right = childPos.right - parentPos.right,
// relativePos.bottom = childPos.bottom - parentPos.bottom,
// relativePos.left = childPos.left - parentPos.left;

// console.log("black"+childPos, "blue"+childPos2)

// console.log(relativePos);
// }

// function createPoint(e){

// let point1 = document.getElementsByClassName('points')[0].getBoundingClientRect();
// let point2 = document.getElementsByClassName('points')[1].getBoundingClientRect();
// let x_pos = point1.top;
// let y_pos = point2.left;
// var div = document.createElement("div");
// div.style.width = "10px";
// div.style.height = "10px";
// div.style.background = "red";
// div.innerHTML = "";
// div.style.position = "relative";
// div.style.top = y_pos;
// div.style.left = x_pos;
// document.getElementById("plane").appendChild(div);
// console.log(div)
// console.log(x_pos, y_pos)
// console.log(div.getBoundingClientRect())
// }
// function createPoint2(e){
    
// }
// function measurer(e){
// let point1 = document.getElementById('plane').getBoundingClientRect();
// let x_pos = point1.width;
// let y_pos = point1.height;
// for(let i=0; i<point1.x; i++){
//     if ((i*10) > x_pos) {
//         break;
//     }
//     var p = document.createElement("p");
//     p.style.width = "2px";
//     p.style.height = "2px";
//     p.style.color ="red";
//     p.style.background = "red";
//     // p.innerHTML = "POINT";
//     p.style.position = "relative";
//     p.style.top = x_pos;
//     p.style.left = (i*10);
//     document.getElementById("plane").appendChild(p);
//     console.log(p)
//     console.log(x_pos, y_pos)
//     console.log(p.getBoundingClientRect())
// }


// }



// // return {
// //     top: box.top + window.pageYOffset,
// //     left: box.left + window.pageXOffset
// //   };
// // }