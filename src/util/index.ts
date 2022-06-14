import { saveAs } from "file-saver";

/**
 * Wrap an object in an array if not already an array.
 *
 * @param object Object to wrap
 */
export function arrayify(object: any): any[] {
    let array = object;

    if (!Array.isArray(object)) {
        array = [object];
    }

    return array;
}

/**
 * Save text to a file.
 *
 * @param contents Contents of the file
 * @param filename Name of the file
 */
export function saveText(contents: string, filename: string): void {
    save(contents, "text/plain", filename);
}

/**
 * Save contents to a file.
 *
 * @param contents Contents of the file
 * @param mime {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types MIME type} of the file
 * @param filename Name of the file
 */
export function save(contents: any, mime: string, filename: string): void {
    // eslint-disable-next-line no-undef
    const blob = new Blob([contents], {
        "type": mime
    });

    saveAs(blob, filename);
}

/**
 * Convert a {@link Buffer} to an {@link ArrayBuffer}
 */
export function toArrayBuffer(buffer: Buffer) {
    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

export * from "./type";
export * from "./style";
