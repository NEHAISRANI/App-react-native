// function like (id) {

//   let findElement = document.getElementById(`icon-${id}`);
//   findElement.style.color = 'blue';
// } 

// function unlike (id) {
//   let findElement = document.getElementById(`unlick-icon-${id}`);
//   findElement.style.color = 'red';
// }


function like(id) {
  let findElement = document.getElementById(`icon-${id}`);
  // console.log(findElement.id)
  // console.log(findElement.style.colour)
  if(findElement.id==='icon-0'){
    if (findElement.style.color === "blue") {
      findElement.style.color = "black";
    } 
    else{
      findElement.style.color = "blue";
    }
  }
  else{
    console.log("nehga")
  }
}
// function unlike(id) {
//   let findElement = document.getElementById(`unlick-icon-${id}`);
//   console.log(findElement)
//   if (findElement.style.color === "red") {
//     findElement.style.color = "black";
//   } else {
//     findElement.style.color = "red";
//   }
// }


function renderData() {
  var data = [
    {
      img: "images/artwork_1.png",
      title: "Title",
    },
    {
      img: "images/artwork_2.png",
      title: "Title",
    },
    {
      img: "images/artwork_3.png",
      title: "Title",
    },
    {
      img: "images/artwork_4.png",
      title: "Title",
    },
    {
      img: "images/artwork_5.png",
      "title": "Title"
    },
    {
      img: "images/artwork_6.png",
      "title": "Title"
    },
    {
      "img": "images/artwork_7.png",
      "title": "Title"
    },
    {
      "img": "images/artwork_8.png",
      "title": "Title"
    },
    {
      "img": "images/artwork_9.png",
      "title": "Title"
    },
    {
      "img": "images/artwork_10.png",
      "title": "Title"
    },
  ];
  var html = "";
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const htmlElement =
      '<div class="card"><img class="brand_img" src="' +
      element.img +
      '" alt=""><div class="title">' +
      element.title +
      '</div><div class="btn-btn-icon"><i id="icon-' +
      index +
      '" onclick="like(' +
      index +
      ')" class="fa fa-thumbs-up"></i><i id="unlick-icon-' +
      index +
      '" onclick="unlike(' +
      index +
      ')" class="fa fa-thumbs-down"></i></div></div>';
    html += htmlElement;
  } 
  document.getElementById("app").innerHTML = html;
}

renderData();
