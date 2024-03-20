var to_verify = new Array(9);

const remplirTableau = (tableau1, tableau2) => {
  for (var i = 0; i < 9; i++) {
    tableau1[i] = tableau2[i].split(" ").map(Number);
  }
};

const afficherTableau = (tableau) => {
  for (var i = 0; i < tableau.length; i++) {
    let ligne = document.createElement("tr");
    ligne.id = "ligne" + i;
    document.getElementById("sudoku").appendChild(ligne);
    for (var j = 0; j < tableau[i].length; j++) {
      let colonne = document.createElement("td");
      colonne.innerHTML = tableau[i][j];
      document.getElementById("ligne" + i).appendChild(colonne);
    }
  }
};

remplirTableau(to_verify, array_number);
afficherTableau(to_verify);
