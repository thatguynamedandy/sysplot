const FermatSpiral = (w, h, cx, cy, xDist, yDist, c = 1.5) => {
  const vectors = [];
  let rx, ry, tx = 0, ty = 0, vx = 1, vy = 1;

  while (vx > 0 || vy > 0) {
    rx = (xDist / Math.PI) * Math.sqrt(tx += c);
    ry = (yDist / Math.PI) * Math.sqrt(ty += c);
    vx = cx + rx * Math.cos(tx);
    vy = cy + ry * Math.sin(ty);

    if (vx > 0 && vy > 0 && vx < w && vy < h) {
      vectors.push([vx, vy]);
    }
  }

  return vectors;
};

FermatSpiral.NORMALISATION_FACTOR = 2.55;

export default FermatSpiral;
