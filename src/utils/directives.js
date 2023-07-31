export const color = {
  inserted(el, binding) {
    el.style.color = binding.value;
  },
};
export const focus = {
  inserted(el) {
    el.focus();
  },
};
