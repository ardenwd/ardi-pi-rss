export async function fetchSources() {
  const res = await fetch(
    "https://opensheet.elk.sh/1IhdPujHBj25PgEcI7EwPkBwwfxPPc4c8ry7bMLdCuhI/1"
  );
  return res.json();
}
