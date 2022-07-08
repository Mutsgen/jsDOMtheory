export const createLight = () => {
  const light = document.createElement("div");
  const wire = document.createElement("div");
  const bulb = document.createElement("div");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const switcher = document.createElement("div");
  const btn = document.createElement("div");

  light.className = "light";
  wire.className = "wire";
  bulb.className = "bulb";
  switcher.className = "switch";
  btn.className = "btn";

  btn.onclick = function () {
    light.classList.toggle("on");
  };

  light.append(wire, bulb, switcher);
  bulb.append(span1, span2);
  switcher.append(btn);
  return light
};
