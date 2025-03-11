export const Button = (buttonText: string) => {
  const template = document.createElement("template");

  template.innerHTML = `
    <button>${buttonText}</button>
      <h1>hello</h1>
    <div>242343</div>
  `;

  template.content.querySelector("button")!.onclick = () => {
    console.log("123123123");
  };

  return template.content;
};
