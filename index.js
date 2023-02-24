bigBang = () => {
  let range = [...Array(101).keys()];
  range.shift();
  console.log(JSON.stringify(range));

  for (i in range) {
    if (range[i] % 3 === 0 && range[i] % 5 === 0) {
      range[i] = "BIG BANG";
    //   console.log(range[i]);
    } else if (range[i] % 5 === 0) {
      range[i] = "BANG";
    //   console.log(range[i]);
    } else if (range[i] % 3 === 0) {
      range[i] = "BIG";
    //   console.log(range[i]);
    } else {
        // console.log(range[i]);
    }
  }

  console.log(JSON.stringify(range))
};

bigBang();
