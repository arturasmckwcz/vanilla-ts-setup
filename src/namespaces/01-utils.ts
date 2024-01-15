module utils {
  export const createBox = (clr: number) => {
    const div = document.createElement("div");
    div.classList.add("box");
    div.classList.add(`fill_primary__${clr}`);
    config.container?.appendChild(div);
  };
}
