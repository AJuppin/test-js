const verifierLigne = (tab) => {
  for (var i = 0; i < tab.length; i++) {
    if (testSudoku(tab[i]) === false) {
      console.log(
        `La ligne ${i + 1} est incorrecte. Les valeurs sont ${tab[i]}`
      );
    }
  }
};

verifierLigne(to_verify);

const verifierColonne = (tab) => {
  for (var j = 0; j < tab.length; j++) {
    let colonne = [];
    for (var i = 0; i < tab.length; i++) {
      colonne.push(tab[i][j]);
    }
    if (!testSudoku(colonne)) {
      console.log(
        `La colonne ${j + 1} est incorrecte. Les valeurs sont ${colonne}`
      );
    }
  }
};

verifierColonne(to_verify);

const verifierBox = (tab) => {
  for (var m = 0; m < tab.length; m++) {
    let box = [];
    for (var i = 0; i < tab.length; i += 3) {
      for (var j = i; j < i + 3; j++) {
        box.push(tab[i][j]);
      }
    }
    if (!testSudoku(box)) {
      console.log(`La boîte ${m + 1} est incorrecte. Les valeurs sont ${box}`);
    }
  }
};
// derniere fonction non fonctionnelle

const verifierBox1 = (tab) => {
  for (var m = 0; m < tab.length; m += 3) {
    for (var n = 0; n < tab.length; n += 3) {
      let box = [];
      for (var i = m; i < m + 3; i++) {
        for (var j = n; j < n + 3; j++) {
          box.push(tab[i][j]);
        }
      }
      if (!testSudoku(box)) {
        console.log(`La boîte est incorrecte. Les valeurs sont ${box}`);
      }
    }
  }
};

verifierBox1(to_verify);
