/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
      }
    `;
  }

  static get properties() {
    return {
      height: {type: Number},
	  width: {type: Number},
	  url: {type: String} 
    };
  }

  constructor() {
    super();
    this.height = 400;
	this.width = 1000;
	this.url = `https://picsum.photos/${this.width}/${this.height}`;
  }

  render() {
    return html`
      <h1>Random Image Generator</h1>
	  <p>
		<input type="text" name="width" id="width" value="${this.width}" />
		<input type="text" name="height" id="height" value="${this.height}" />
		<button @click=${this._updateImage} part="button">Generate</button>
	  </p>
      
	  <img src="${this.url}" height="${this.height}" width="${this.width}" style="border: 1px solid #eeeeee;" />
	`;
  }
 
  	_updateImage() {
	  const widthElement = this.shadowRoot.getElementById('width');
	  const heightElement = this.shadowRoot.getElementById('height');
	  
	  this.width = widthElement.value;
	  this.height = heightElement.value;
	  
	  //this.url = `https://picsum.photos/${this.width}/${this.height}`;
	  const uniqueParam = new Date().getTime();
	  this.url = `https://picsum.photos/${this.width}/${this.height}?${uniqueParam}`;
	}
  
}

window.customElements.define('image-generator', MyElement);
