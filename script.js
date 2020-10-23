//Schiffe Spieler 1
var aSchiff1P1 = [],
  aSchiff2P1 = [],
  aSchiff3P1 = [],
  aTrefferP1 = [],
  aDanebenP1 = [];

//Schiffe Spieler 2
var aSchiff1P2 = [],
  aSchiff2P2 = [],
  aSchiff3P2 = [],
  aTrefferP2 = [],
  aDanebenP2 = [];

function saveToLocalStorage() {
  window.localStorage.setItem("aSchiff1P1", JSON.stringify(aSchiff1P1));
  window.localStorage.setItem("aSchiff2P1", JSON.stringify(aSchiff2P1));
  window.localStorage.setItem("aSchiff3P1", JSON.stringify(aSchiff3P1));
  window.localStorage.setItem("aSchiff1P2", JSON.stringify(aSchiff1P2));
  window.localStorage.setItem("aSchiff2P2", JSON.stringify(aSchiff2P2));
  window.localStorage.setItem("aSchiff3P2", JSON.stringify(aSchiff3P2));
  window.localStorage.setItem("aTrefferP1", JSON.stringify(aTrefferP1));
  window.localStorage.setItem("aTrefferP2", JSON.stringify(aTrefferP2));
  window.localStorage.setItem("aDanebenP1", JSON.stringify(aDanebenP1));
  window.localStorage.setItem("aDanebenP2", JSON.stringify(aDanebenP2));
}

function getFromLocalStorage() {
  //LocalStorage auslesen. Wenn null dann leeres Array
  aSchiff1P1 =
    JSON.parse(window.localStorage.getItem("aSchiff1P1")) === null
      ? []
      : JSON.parse(window.localStorage.getItem("aSchiff1P1"));
  aSchiff2P1 =
    JSON.parse(window.localStorage.getItem("aSchiff2P1")) === null
      ? []
      : JSON.parse(window.localStorage.getItem("aSchiff2P1"));
  aSchiff3P1 =
    JSON.parse(window.localStorage.getItem("aSchiff3P1")) === null
      ? []
      : JSON.parse(window.localStorage.getItem("aSchiff3P1"));
  aSchiff1P2 =
    JSON.parse(window.localStorage.getItem("aSchiff1P2")) === null
      ? []
      : JSON.parse(window.localStorage.getItem("aSchiff1P2"));
  aSchiff2P2 =
    JSON.parse(window.localStorage.getItem("aSchiff2P2")) === null
      ? []
      : JSON.parse(window.localStorage.getItem("aSchiff2P2"));
  aSchiff3P2 =
    JSON.parse(window.localStorage.getItem("aSchiff3P2")) === null
      ? []
      : JSON.parse(window.localStorage.getItem("aSchiff3P2"));
  aTrefferP1 =
    JSON.parse(window.localStorage.getItem("aTrefferP1")) === null
      ? []
      : JSON.parse(window.localStorage.getItem("aTrefferP1"));
  aTrefferP2 =
    JSON.parse(window.localStorage.getItem("aTrefferP2")) === null
      ? []
      : JSON.parse(window.localStorage.getItem("aTrefferP2"));
  aDanebenP1 =
    JSON.parse(window.localStorage.getItem("aDanebenP1")) === null
      ? []
      : JSON.parse(window.localStorage.getItem("aDanebenP1"));
  aDanebenP2 =
    JSON.parse(window.localStorage.getItem("aDanebenP2")) === null
      ? []
      : JSON.parse(window.localStorage.getItem("aDanebenP2"));
}

function setShipsToLayout(sPlayer) {
  getFromLocalStorage();
  if (sPlayer === "S1") {
    //forEach durchläuft jedes element im Datenbehälter
    aSchiff1P1.forEach(function(oElement) {
      //X eintragen, da wo eine Koordinate des Schiffs ist.
      document.getElementById(oElement).innerHTML = "X";
    });

    aSchiff2P1.forEach(function(oElement) {
      document.getElementById(oElement).innerHTML = "X";
    });

    aSchiff3P1.forEach(function(oElement) {
      document.getElementById(oElement).innerHTML = "X";
    });

    aTrefferP1.forEach(function(oElement) {
      //Hintergrundfarbe auf Grün, da wo Treffer
      document.getElementById(oElement).style.backgroundColor = "greenyellow";
    });

    aDanebenP1.forEach(function(oElement) {
      //Hintergrundfarbe auf Grün, da wo Daneben
      document.getElementById(oElement).style.backgroundColor = "red";
    });
  } else {
    //forEach durchläuft jedes element im Datenbehälter
    aSchiff1P2.forEach(function(oElement) {
      document.getElementById(oElement).innerHTML = "X";
    });

    aSchiff2P2.forEach(function(oElement) {
      document.getElementById(oElement).innerHTML = "X";
    });

    aSchiff3P2.forEach(function(oElement) {
      document.getElementById(oElement).innerHTML = "X";
    });

    aTrefferP2.forEach(function(oElement) {
      document.getElementById(oElement).style.backgroundColor = "greenyellow";
    });

    aDanebenP2.forEach(function(oElement) {
      document.getElementById(oElement).style.backgroundColor = "red";
    });
  }
}

function startPlaying() {
  window.location = "/player1.html";
}

function startGame() {
  window.location = "/gamep1.html";
}

function attackPlayer(sPlayer, sId) {
  if (sPlayer === "S1") {
    var sCoord = document.getElementById(sId).value;

    var iIndexS1 = aSchiff1P2.findIndex(oElement => oElement === sCoord);
    var iIndexS2 = aSchiff2P2.findIndex(oElement => oElement === sCoord);
    var iIndexS3 = aSchiff3P2.findIndex(oElement => oElement === sCoord);

    if (iIndexS1 === -1 && iIndexS2 === -1 && iIndexS3) {
      aDanebenP1.push(sCoord);
      saveToLocalStorage();
      alert("Daneben");
      window.location = "/gamep2.html";
    } else {
      aTrefferP1.push(sCoord);
      saveToLocalStorage();
      alert("Treffer");
      if (
        aTrefferP2.length ===
        iIndexS1.length + iIndexS2.length + iIndexS2.length
      ) {
        window.location = "/wingame1.html";
      } else {
        window.location = "/gamep2.html";
      }
    }
  } else {
    var sCoord = document.getElementById(sId).value;

    var iIndexS1 = aSchiff1P1.findIndex(oElement => oElement === sCoord);
    var iIndexS2 = aSchiff2P1.findIndex(oElement => oElement === sCoord);
    var iIndexS3 = aSchiff3P1.findIndex(oElement => oElement === sCoord);

    if (iIndexS1 === -1 && iIndexS2 === -1 && iIndexS3) {
      aDanebenP2.push(sCoord);
      saveToLocalStorage();
      alert("Daneben");
      window.location = "/gamep1.html";
    } else {
      aTrefferP2.push(sCoord);
      saveToLocalStorage();
      alert("Treffer");
      if (
        aTrefferP2.length ===
        iIndexS1.length + iIndexS2.length + iIndexS2.length
      ) {
        window.location = "/wingame2.html";
      } else {
        window.location = "/gamep1.html";
      }
    }
  }
}

function setShips(sPlayer) {
  var bOK = true; //Prüfvariable, ob alles okay ist.
  if (sPlayer === "S1") {
    //Prüfen, ob ein Eintrag vorhanden oder nicht. Wenn nicht dann wird bOK auf False gesetzt.
    //Schiff 1
    document.getElementById("s1z1").value === ""
      ? (bOK = false)
      : aSchiff1P1.push(document.getElementById("s1z1").value);
    document.getElementById("s1z2").value === ""
      ? (bOK = false)
      : aSchiff1P1.push(document.getElementById("s1z2").value);
    document.getElementById("s1z3").value === ""
      ? (bOK = false)
      : aSchiff1P1.push(document.getElementById("s1z3").value);

    //Schiff 2
    document.getElementById("s2z1").value === ""
      ? (bOK = false)
      : aSchiff2P1.push(document.getElementById("s2z1").value);
    document.getElementById("s2z2").value === ""
      ? (bOK = false)
      : aSchiff2P1.push(document.getElementById("s2z2").value);
    document.getElementById("s2z3").value === ""
      ? (bOK = false)
      : aSchiff2P1.push(document.getElementById("s2z3").value);

    //Schiff 3
    document.getElementById("s3z1").value === ""
      ? (bOK = false)
      : aSchiff3P1.push(document.getElementById("s3z1").value);
    document.getElementById("s3z2").value === ""
      ? (bOK = false)
      : aSchiff3P1.push(document.getElementById("s3z2").value);
    document.getElementById("s3z3").value === ""
      ? (bOK = false)
      : aSchiff3P1.push(document.getElementById("s3z3").value);
    document.getElementById("s3z4").value === ""
      ? (bOK = false)
      : aSchiff3P1.push(document.getElementById("s3z4").value);

    if (!bOK) {
      // gleiche wie bOK === false
      alert("Bitte alle Schiffe vollständig ausfüllen");
      return;
    }
    saveToLocalStorage();
    window.location = "/player2.html";
  } else {
    //Prüfen, ob ein Eintrag vorhanden oder nicht. Wenn nicht dann wird bOK auf False gesetzt.
    //Schiff 1
    document.getElementById("s1z1").value === ""
      ? (bOK = false)
      : aSchiff1P2.push(document.getElementById("s1z1").value);
    document.getElementById("s1z2").value === ""
      ? (bOK = false)
      : aSchiff1P2.push(document.getElementById("s1z2").value);
    document.getElementById("s1z3").value === ""
      ? (bOK = false)
      : aSchiff1P2.push(document.getElementById("s1z3").value);

    //Schiff 2
    document.getElementById("s2z1").value === ""
      ? (bOK = false)
      : aSchiff2P2.push(document.getElementById("s2z1").value);
    document.getElementById("s2z2").value === ""
      ? (bOK = false)
      : aSchiff2P2.push(document.getElementById("s2z2").value);
    document.getElementById("s2z3").value === ""
      ? (bOK = false)
      : aSchiff2P2.push(document.getElementById("s2z3").value);

    //Schiff 3
    document.getElementById("s3z1").value === ""
      ? (bOK = false)
      : aSchiff3P2.push(document.getElementById("s3z1").value);
    document.getElementById("s3z2").value === ""
      ? (bOK = false)
      : aSchiff3P2.push(document.getElementById("s3z2").value);
    document.getElementById("s3z3").value === ""
      ? (bOK = false)
      : aSchiff3P2.push(document.getElementById("s3z3").value);
    document.getElementById("s3z4").value === ""
      ? (bOK = false)
      : aSchiff3P2.push(document.getElementById("s3z4").value);

    if (!bOK) {
      // gleiche wie bOK === false
      alert("Bitte alle Schiffe vollständig ausfüllen");
      return;
    }
    window.location = "/gamep1.html";

    //spieler 1 daten im Browser speichern, damit Zugriff immernoch möglich nach refresh
    saveToLocalStorage();
  }
}
