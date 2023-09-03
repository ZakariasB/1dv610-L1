/**
 * The greeting app web component module.
 *
 * @author Zakarias Bergcrona <zb222cw@student.lnu.se>
 */

const template = document.createElement('template')
template.innerHTML = `
<div>
    Enter your name: <input type="text" id="usernameInput">
    <button id="generateButton">Generate Greeting</button>
</div>
<pre id="greetingDisplay"></pre>
` 
customElements.define('greeting-app',
/**
 * Represents a nickname-form element.
 */
  class extends HTMLElement {
    /**
     * The html button element to generate a greeting.
     */
    generateButton
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
      this.generateButton = this.shadowRoot.getElementById('generateButton')
      this.generateButton.addEventListener('click', () => {
        const username = this.shadowRoot.getElementById('usernameInput').value;
            const greeting = `
          Hello, ${username}!
          Here's a cat for you:

             /\\_/\\  (
            ( ^.^ ) _)
              \\"/  (
            ( | | )
           (__d b__)
            `
            this.shadowRoot.getElementById('greetingDisplay').textContent = greeting;
      })
    }
  })