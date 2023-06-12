import { Block } from "./Block";

export default function renderDOM(block: Block | null, selector = "#app") {
    const root = document.querySelector(selector);
    root!.innerHTML = "";
    root!.appendChild(block!.getContent());
}
  