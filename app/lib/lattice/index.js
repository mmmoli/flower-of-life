const plotColum = (iOffset, jOffset, l) => {
  const result = [];
  let iteration = 0;
  while (iteration < l) {
    result.push([iOffset, jOffset + iteration]);
    iteration++;
  }

  return result;
};

const plotRow = (iOffset, jOffset, l) => {
  const result = [];
  let iteration = 0;
  while (iteration < l - 1) {
    result.push([iOffset + iteration, jOffset]);
    iteration++;
  }

  return result;
};

const generate = l => {
  const result = [];

  let i = 0;
  let j = 0;
  while (i < l - 1) {
    while (j < l - 1) {
      result.push([i, j]);
      j++;
    }

    i++;
    j = 0;
  }

  let lOffset = 0;

  while (lOffset < l) {
    // draw column
    const iOffsetColumn = l + lOffset - 1;
    const jOffsetColumn = lOffset;
    result.push.apply(result, plotColum(iOffsetColumn, jOffsetColumn, l));

    // draw row
    const iOffsetRow = lOffset;
    const jOffsetRow = l + lOffset - 1;
    result.push.apply(result, plotRow(iOffsetRow, jOffsetRow, l));

    lOffset++;
  }

  return result;
};

export default generate;
