document.querySelector(".bap").onmousemove = (e) => {
  console.log(e);
  const { currentTarget: target } = e;
  // console.log(target.style.setProperty);
  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  console.log("rect :" + rect);
  console.log("x :" + x);
  console.log("y :" + y);

  document.querySelector(".write").innerHTML = `mouse at (x,y):(${parseInt(
    x
  )},${parseInt(y)})`;
  //   target.style.setProperty("--mouse-x", `${x}px`);
  //   target.style.setProperty("--mouse-y", `${y}px`);
  document.querySelector(".bap2").style.setProperty("--mouse-x", `${x}px`);
  document.querySelector(".bap2").style.setProperty("--mouse-y", `${y}px`);
};
