const plotColum = (i_offset, j_offset, l) => {
  const result = [];
  let iteration = 0;
  while (iteration < l) {
    result.push([i_offset, j_offset + iteration]);
    iteration++;
  }
  return result;
};

const plotRow = (i_offset, j_offset, l) => {
  const result = [];
  let iteration = 0;
  while (iteration < l - 1) {
    result.push([i_offset + iteration, j_offset]);
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

  let offset_l = 0;

  while (offset_l < l) {

    // draw column
    let i_offset_column = l + offset_l - 1;
    let j_offset_column = offset_l;
    result.push.apply(result, plotColum(i_offset_column, j_offset_column, l));


    // draw row
    let i_offset_row = offset_l;
    let j_offset_row = l + offset_l - 1;
    result.push.apply(result, plotRow(i_offset_row, j_offset_row, l));


    offset_l++;
  }

  return result;
};

export default generate;
