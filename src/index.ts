import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import Worker from './sketcher.worker.ts';
import JSZip from 'jszip';
import style from './index.css';

const worker = new Worker();
const SUPPORTED_EXTENSIONS = ['.fa', '.fasta', '.fna', '.gz', '.fq', '.fastq'];


@customElement('snipe-sourmash-component')
export class MGnifySourmash extends LitElement {
  @property({ type: Boolean, reflect: true })
  directory = false;

  @property({ type: Boolean })
  show_directory_checkbox = false;

  @property({ type: Boolean })
  show_signatures = false;

  // KmerMinHash parameters
  @property({ type: Number }) num = 0;
  @property({ type: Number }) ksize = 51;
  @property({ type: Boolean }) is_protein = false;
  @property({ type: Boolean }) dayhoff = false;
  @property({ type: Boolean }) hp = false;
  @property({ type: Number }) seed = 42;
  @property({ type: Number }) scaled = 10000;
  @property({ type: Boolean }) track_abundance = true;

  selectedFiles: Array<File> = [];
  progress: { [filename: string]: number } = {};
  signatures: { [filename: string]: string } = {};
  errors: { [filename: string]: string } = {};


  // load unsafeCSS from lit to avoid security issues
  // static styles = [unsafeCSS(style)]; 

  constructor() {
    super();
    this.initWorker();
  }

  initWorker() {
    worker.addEventListener('message', (event) => {
      switch (event?.data?.type) {
        case 'progress:read':
          this.progress[event.data.filename] = event.data.progress;
          this.requestUpdate();
          break;
        case 'signature:error':
          this.errors[event.data.filename] = event.data.error;
          this.requestUpdate();
          break;
        case 'signature:generated':
          this.signatures[event.data.filename] = event.data.signature;
          this.progress[event.data.filename] = 100;
          this.requestUpdate();
          break;
        default:
          break;
      }
    });
  }

  handleFileChanges(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files).filter((file: File) =>
        SUPPORTED_EXTENSIONS.some((ext) => file.name.endsWith(ext))
      );
      this.requestUpdate();
    }
  }

  handleInputChange<T extends keyof MGnifySourmash>(event: InputEvent, key: T) {
    const input = event.target as HTMLInputElement;
    this[key] = input.type === 'checkbox' ? (input.checked as any) : (Number(input.value) as any);
  }

  startSketching() {
    if (!this.selectedFiles?.length) {
      alert('Please select files before starting sketching.');
      return;
    }

    worker.postMessage({
      files: this.selectedFiles,
      options: {
        num: this.num,
        ksize: this.ksize,
        is_protein: this.is_protein,
        dayhoff: this.dayhoff,
        hp: this.hp,
        seed: this.seed,
        scaled: this.scaled,
        track_abundance: this.track_abundance,
      },
    });
  }

  clearSession() {
    this.selectedFiles = [];
    this.progress = {};
    this.signatures = {};
    this.errors = {};
    this.requestUpdate();
  }

  downloadAllSketches() {
    const zip = new JSZip();
    Object.entries(this.signatures).forEach(([filename, signature]) => {
      const basename = filename.split('.').slice(0, -1).join('.');
      zip.file(`${basename}.sig`, signature);
    });
    zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'sketches.zip';
      link.click();
    });
  }

  downloadSketch(filename: string) {
    const signature = this.signatures[filename];
    const basename = filename.split('.').slice(0, -1).join('.');
    const blob = new Blob([signature], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${basename}.sig`;
    link.click();
  }

  renderSelectedFiles() {
    if ((this.selectedFiles?.length || 0) < 1) return '';
    return html`
      <div>
        <h2>Selected Files:</h2>
        <ul class="list-group">
          ${this.selectedFiles.map((file: File) => {
            const progress = this.progress?.[file.name] || 0;
            const signature = this.signatures[file.name];
            const error = this.errors[file.name];
            let statusIcon = '';
            if (signature) statusIcon = '✅';
            if (error) statusIcon = `⚠️`;
  
            return html`
              <li class="list-group-item">
                <div class="row align-items-center">
                  <!-- File name -->
                  <div class="col-md-3">
                    <h6 class="mb-0">${file.name} ${statusIcon}</h6>
                  </div>
  
                  <!-- Progress bar -->
                  <div class="col-md-6">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: ${progress}%;"
                        aria-valuenow="${progress}"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
  
                  <!-- Download button -->
                  <div class="col-md-3 text-end">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      @click=${() => this.downloadSketch(file.name)}
                      ?disabled=${progress < 100}
                    >
                      Download
                    </button>
                  </div>
                </div>
  
                <!-- Error message, if any -->
                ${error
                  ? html`<div class="alert alert-danger mt-2" role="alert">${error}</div>`
                  : ''}
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  }
  
  render() {
    return html`
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <style>
          /* Custom Styles */
          body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
              min-height: 100vh;
              margin: 0;
              display: flex;
              align-items: center;
              justify-content: center;
          }
          .container.snipe-sourmash-component {
              background-color: white;
              padding: 2rem;
              border-radius: 15px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
              max-width: 800px;
          }
          h1 {
              color: #2c3e50;
              text-align: center;
              margin-bottom: 2rem;
              font-size: 2.5rem;
              text-transform: uppercase;
              letter-spacing: 2px;
          }
          .card {
              border: none;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
          .card-body {
              padding: 2rem;
          }
          .form-label {
              font-weight: bold;
              color: #34495e;
          }
          .btn-primary {
              background-color: #3498db;
              border-color: #3498db;
          }
          .btn-primary:hover {
              background-color: #2980b9;
              border-color: #2980b9;
          }
          .btn-secondary {
              background-color: #95a5a6;
              border-color: #95a5a6;
          }
          .btn-secondary:hover {
              background-color: #7f8c8d;
              border-color: #7f8c8d;
          }
          .btn-success {
              background-color: #27ae60;
              border-color: #27ae60;
          }
          .btn-success:hover {
              background-color: #229954;
              border-color: #229954;
          }
          .form-control {
              border-radius: 10px;
          }
          .form-check-label {
              color: #34495e;
          }
          hr {
              border-top: 1px solid #ccc;
              margin: 2rem 0;
          }
          .d-flex {
              gap: 1rem;
          }
          .align-bottom {
              display: flex;
              align-items: flex-end;
          }
      </style>
        <body class="container snipe-sourmash-component py-5">
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5RW3TB3"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->
            
          <div class="container" style="max-width: 800px;">
            <h1 class="text-center mb-4">Snipe Sketch</h1>
            <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <label for="file-input" class="form-label">Select Files:</label>
                  <input
                    class="form-control"
                    type="file"
                    id="file-input"
                    @change=${this.handleFileChanges}
                    multiple
                    accept=${SUPPORTED_EXTENSIONS.join(',')}
                  />
                </div>
  
                <div class="mb-3">
                  <label for="folder-input" class="form-label">Select Folder:</label>
                  <input
                    class="form-control"
                    type="file"
                    id="folder-input"
                    webkitdirectory
                    @change=${this.handleFileChanges}
                  />
                </div>
  
                <!-- input row -->
                <div class="row mb-3 align-items-end">
                  <div class="col-md-4">
                    <label for="ksize" class="form-label">K-size:</label>
                    <input
                      type="number"
                      id="ksize"
                      class="form-control"
                      .value="${this.ksize}"
                      @input=${(e: InputEvent) => this.handleInputChange(e, 'ksize')}
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="scaled" class="form-label">Scaled:</label>
                    <input
                      type="number"
                      id="scaled"
                      class="form-control"
                      .value="${this.scaled}"
                      @input=${(e: InputEvent) => this.handleInputChange(e, 'scaled')}
                    />
                  </div>
                  <div class="col-md-4 d-flex align-items-end">
                    <div class="form-check form-switch align-self-end">
                      <input
                        class="form-check-input""
                        type="checkbox"
                        id="track-abundance"
                        .checked="${this.track_abundance}"
                        @input=${(e: InputEvent) => this.handleInputChange(e, 'track_abundance')}
                      />
                      <label class="form-check-label" for="track-abundance"> Track Abundance </label>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex justify-content-between mt-4">
                  <button class="btn btn-primary" @click=${this.startSketching}>Start Sketching</button>
                  <button class="btn btn-secondary ms-2" @click=${this.clearSession}>Clear</button>
                  ${Object.keys(this.signatures).length > 0
                    ? html`
                        <button class="btn btn-success ms-2" @click=${this.downloadAllSketches}>
                          Download All as Zip
                        </button>
                      `
                    : ''}
                </div>
                <hr />
  
                ${this.renderSelectedFiles()}
              </div>
            </div>
          </div>
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'snipe-sourmash-component': MGnifySourmash;
  }
}