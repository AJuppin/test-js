const verifierLigne = (tab) => {
  for (var i = 0; i < tab.length; i++) {
    if (!testSudoku(tab[i])) {
      let ligne = document.createElement("tr");
      ligne.id = "ligne" + i;
      document.getElementById("tableErreur").appendChild(ligne);

      let entete = document.createElement("td");
      entete.innerHTML = `Ligne ${i} incorrect`;
      ligne.appendChild(entete);

      for (var k = 0; k < tab[i].length; k++) {
        let cellule = document.createElement("td");
        cellule.innerHTML = tab[i][k];
        ligne.appendChild(cellule);
      }
      return true;
    }
  }
};

const verifierColonne = (tab) => {
  for (var j = 0; j < tab.length; j++) {
    let colonne = [];
    for (var i = 0; i < tab.length; i++) {
      colonne.push(tab[i][j]);
    }
    if (!testSudoku(colonne)) {
      let ligne = document.createElement("tr");
      ligne.id = "colonne" + i;
      document.getElementById("tableErreur").appendChild(ligne);
      let entete = document.createElement("td");
      entete.innerHTML = `Colonne ${j} incorrect`;
      ligne.appendChild(entete);

      for (var k = 0; k < colonne.length; k++) {
        let cellule = document.createElement("td");
        cellule.innerHTML = tab[k][j];
        ligne.appendChild(cellule);
      }
      return true;
    }
  }
};

const verifierBox = (tab) => {
  for (var m = 0; m < tab.length; m += 3) {
    for (var n = 0; n < tab.length; n += 3) {
      let box = [];
      for (var i = m; i < m + 3; i++) {
        for (var j = n; j < n + 3; j++) {
          box.push(tab[i][j]);
        }
      }
      if (!testSudoku(box)) {
        let ligne = document.createElement("tr");
        ligne.id = "ligne" + i;
        document.getElementById("tableErreur").appendChild(ligne);

        let entete = document.createElement("td");
        entete.innerHTML = `Box ${i} incorrect`;
        ligne.appendChild(entete);

        for (var k = 0; k < box.length; k++) {
          let cellule = document.createElement("td");
          cellule.innerHTML = box[k];
          ligne.appendChild(cellule);
        }
        return true;
      }
    }
  }
};

const sudokuValider = (tab) => {
  let ligne = verifierLigne(tab);
  let colonne = verifierColonne(tab);
  let box = verifierBox(tab);
  let titre = document.createElement("h3");
  if (!ligne && !colonne && !box) {
    titre.innerHTML = "Le sudoku est correct";
  } else {
    titre.innerHTML = "Le sudoku est incorrect";
  }
  document.body.appendChild(titre);
};

sudokuValider(to_verify);
