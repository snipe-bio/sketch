import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import Worker from 'worker-loader!./sketcher.worker.ts';

const worker = new Worker();

@customElement('mgnify-sourmash-component')
class MGnifySourmash extends LitElement {
  @property({ type: Boolean, reflect: true })
  directory: boolean = false;
  @property({ type: Boolean })
  show_directory_checkbox: boolean = false;
  @property({ type: Boolean })
  show_signatures: boolean = false;

  // KmerMinHash parameters
  @property({ type: Number }) 
  num: number = 0;
  @property({ type: Number }) 
  ksize: number = 31;
  @property({ type: Boolean }) 
  is_protein: boolean = false;
  @property({ type: Boolean }) 
  dayhoff: boolean = false;
  @property({ type: Boolean }) 
  hp: boolean = false;
  @property({ type: Number }) 
  seed: number = 42;
  @property({ type: Number }) 
  scaled: number = 1000;
  @property({ type: Boolean }) 
  track_abundance: boolean = false;


  selectedFiles: Array<File> = null;
  progress: {
    [filename: string]: number;
  } = {};
  signatures: {
    [filename: string]: string;
  } = {};

  constructor() {
    super();
    worker.addEventListener('message', (event) => {
      switch (event?.data?.type) {
        case 'progress:read':
          this.progress[event.data.filename] = event.data.progress;
          this.requestUpdate();
          break;
        case 'signature:generated':
          this.signatures[event.data.filename] = event.data.signature;
          this.dispatchEvent(
            new CustomEvent("load", {
              bubbles: true,
              detail: {
                filename: event.data.filename,
                signature: event.data.signature,
              }
            })
          );
          if (this.haveCompletedAllSignatures()){
            this.dispatchEvent(
              new CustomEvent("loadend", {
                bubbles: true,
                detail: {
                  signatures: this.signatures,
                }
              })
            );  
          }
          this.requestUpdate();
          break;
        default:
          break;
      }
    });
  }

  private haveCompletedAllSignatures(){
    return Object.keys(this.progress).every(
      (key: string) => key in this.signatures
    )
  }

  setChecked(event: MouseEvent) {
    this.directory = (event.target as HTMLInputElement).checked;
  }
  static get styles() {
    return css`
      .mgnify-sourmash-component {
        display: flex;
        flex-direction: column;
      }
    `;
  }
  renderSelectedFiles() {
    return (this.selectedFiles?.length || 0) < 1
      ? ''
      : html`
          <div>
            <h2>Selected Files</h2>
            <ul>
              ${this.selectedFiles.map((file: File) => {
                const progress = this.progress?.[file.name] || 0;
                const signature = this.signatures[file.name];
                return html` <li>
                  ${file.name}
                  <progress id=${file.name} max="100" value=${progress}>
                    ${progress.toFixed(2)}%
                  </progress>
                  ${this.show_signatures && signature?.length
                    ? html`
                        <details>
                          <summary>See signature</summary>
                          <pre>${signature}</pre>
                        </details>
                      `
                    : ''}
                </li>`;
              })}
            </ul>
          </div>
        `;
  }
  render() {
    return html`
      <div class="mgnify-sourmash-component">
        <label for="sourmash-selector"
          >Select the FastA files (gzip supported) :</label
        >
        <input
          type="file"
          id="sourmash-selector"
          name="sourmash-selector"
          accept=".fa,.gz,.fasta"
          @change=${this.handleFileChanges}
          ?webkitdirectory=${this.directory}
          ?multiple=${!this.directory}
        />
        ${this.show_directory_checkbox ? html`
        <label>
          <input
            type="checkbox"
            @change=${this.setChecked}
            ?checked=${this.directory}
          />
          Select a directory
        </label>
        ` :''
        }
        ${this.renderSelectedFiles()}
      </div>
    `;
  }

  handleFileChanges(event: InputEvent) {
    event.preventDefault();
    this.selectedFiles = Array.from(
      (event.currentTarget as HTMLInputElement).files
    ).filter(
      (file: File) =>
        file.name.endsWith('.fa') ||
        file.name.endsWith('.fa.gz') ||
        file.name.endsWith('.fasta') ||
        file.name.endsWith('.fasta.gz')
    );

    worker.postMessage({ files: this.selectedFiles , options: {
      num: this.num,
      ksize: this.ksize,
      is_protein: this.is_protein,
      dayhoff: this.dayhoff,
      hp: this.hp,
      seed: this.seed,
      scaled: this.scaled,
      track_abundance: this.track_abundance,
    }});

    this.requestUpdate();
  }
}
