let users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
  {
    name: "Thomes shelby",
    pic: "https://i.pinimg.com/736x/27/f8/f1/27f8f1b6dd4743af35f9100033a0269a.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
];

let input = document.querySelector(".inp");
let cards = document.querySelector(".cards");
// Sare users show karna
// filter karna har bar input karne pe
// show karna filtered users

function showUsers(arr) {
  arr.forEach(function (user) {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.style.backgroundImage = `url(${user.pic})`;
    img.classList.add("bg-img");

    let blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");

    let content = document.createElement("div");
    content.classList.add("content");

    let h3 = document.createElement("h3");
    h3.textContent = `${user.name}`;

    let p = document.createElement("p");
    p.textContent = `${user.bio}`;

    card.appendChild(img);
    card.appendChild(blurredLayer);

    content.appendChild(h3);
    content.appendChild(p);
    card.appendChild(content);

    cards.appendChild(card);
  });
}

showUsers(users);

input.addEventListener("input", function () {
  let filteredValu = users.filter(function (items) {
    return items.name.startsWith(input.value);
  });

  cards.innerHTML = "";

  showUsers(filteredValu);
});
