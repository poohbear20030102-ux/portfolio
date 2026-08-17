const unsplash = (id, w = 1200, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  heroGlow: unsplash("1580927752452-89d86da3fa0a", 1600, 80),
  aboutServerRoom: unsplash("1573164713988-8665fc963095", 1200, 80),
  codeGlow: unsplash("1607799279861-4dd421887fb3", 1200, 75),
  datacenter: unsplash("1558494949-ef010cbdcc31", 1000, 75),
  circuit: unsplash("1518770660439-4636190af475", 1000, 75),
  chart: unsplash("1591696205602-2f950c417cb9", 1000, 75),
  matrix: unsplash("1526374965328-7f61d4dc18c5", 1000, 75),
};
