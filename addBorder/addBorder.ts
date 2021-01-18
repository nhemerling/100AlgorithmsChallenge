export function addBorder(picture: string[]): string[] {
  // const borderWidth = picture[0].length + 2;
  // let wall = '';

  // for (let i = 0; i < borderWidth; i++) {
  //   wall = wall.concat('*');
  // }

  // The above code simplifies to:
  const wall = '*'.repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = '*'.concat(picture[i], '*');
  }

  return picture;
}

console.log(addBorder(["abc", "ded"]));