function addProjectCards() {
    var projectcontainer = document.getElementById("proj-container");
    $.getJSON('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=adiswami14', function(data) {
        for(let i =0; i< data.length; i++) {
          var card = document.createElement("div");
          card.className = "card";
          createCard(data[i], card);
          projectcontainer.appendChild(card);
        }
    });
  }

  function createCard(data, card) {
    var cardbox = document.createElement("div");
    cardbox.className = "cardbox";
    var cardcontent = document.createElement("div");
    cardcontent.className = "card-content";

    var proj_name = document.createElement("h3");
    var anchor_link = document.createElement("a");
    anchor_link.href = data.link;
    anchor_link.innerHTML = formatName(data.repo);
    cardcontent.appendChild(proj_name);

    var desc = document.createElement("p");
    desc.innerHTML = data.description;
    cardcontent.appendChild(desc);

    var lang = document.createElement("h5");
    lang.innerHTML = data.language;
    cardcontent.appendChild(lang);

    proj_name.appendChild(anchor_link);
    cardbox.appendChild(cardcontent);
    card.appendChild(cardbox);
  }

  function formatName(name) {
    name = name.replace(/-/g, " ");
    for(let i = 0; i<name.length; i++) {
        if(i == 0) {
            name = capitalizeLetters(name, i);
        }
        else if(name[i] == ' ') {
            name = capitalizeLetters(name, i+1);
        }
    }
    return name;
  }

  function capitalizeLetters(name, pos) {
    var chars = name.split('');
    chars[pos] = chars[pos].toUpperCase();
    name = chars.join('');
    return name;
  }