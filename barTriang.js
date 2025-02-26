function barTriang(p1, p2, p3){
  const xo = (p1[0] + p2[0] + p3[0]) / 3;
  const yo = (p1[1] + p2[1] + p3[1]) / 3;

return [Number(xo.toFixed(4)), Number(yo.toFixed(4))];
}