const testSudoku = (tab) => {
  let tableauTemoin = [];
  for (var i = 0; i < tab.length; i++) {
    if (tab[i] < 1 || tab[i] > 9) {
      return false;
    }
    if (tableauTemoin.includes(tab[i])) {
      return false;
    }
    tableauTemoin.push(tab[i]);
  }
  return true;
};
