import { LitElement } from 'lit';
export declare class MGnifySourmash extends LitElement {
    directory: boolean;
    show_directory_checkbox: boolean;
    show_signatures: boolean;
    num: number;
    ksize: number;
    is_protein: boolean;
    dayhoff: boolean;
    hp: boolean;
    seed: number;
    scaled: number;
    track_abundance: boolean;
    selectedFiles: Array<File>;
    progress: {
        [filename: string]: number;
    };
    signatures: {
        [filename: string]: string;
    };
    errors: {
        [filename: string]: string;
    };
    constructor();
    initWorker(): void;
    handleFileChanges(event: InputEvent): void;
    handleInputChange<T extends keyof MGnifySourmash>(event: InputEvent, key: T): void;
    startSketching(): void;
    clearSession(): void;
    downloadAllSketches(): void;
    downloadSketch(filename: string): void;
    renderSelectedFiles(): import("lit-html").TemplateResult<1> | "";
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'snipe-sourmash-component': MGnifySourmash;
    }
}
