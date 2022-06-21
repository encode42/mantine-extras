/**
 * Convert a {@link https://nodejs.org/api/buffer.html Buffer} to an {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ArrayBuffer}
 */
export function toArrayBuffer(buffer: Buffer) {
    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}
