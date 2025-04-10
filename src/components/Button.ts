export const Button = (buttonText: string) => {
  const template = document.createElement("template");

  template.innerHTML = `
    <button>${buttonText}</button>
  `;

  template.content.querySelector("button")!.onclick = () => {
    console.log("123123123");
  };

  return template.content;
};
