export const CreateFastForm = (place) => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");
  form.className = "fast__container";
  input.className = "fast__input";
  input.placeholder = "For fast task";
  button.className = "fast__button";
  button.textContent = "Create";

  form.append(input);
  form.append(button);
  place.append(form);
  return { form, input, button };
};
