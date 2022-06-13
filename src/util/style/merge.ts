import deepmerge from "deepmerge";

/**
 * Merge an array of objects with a transformer.
 *
 * @param entries Objects to merge
 * @param callback Callback to transform entries with
 */
export function merge<T>(entries: T[], callback: (entry: T) => T) {
    let merged = {};

    // Iterate every entry
    for (const entry of entries) {
        // Deep merge the two objects
        merged = deepmerge(merged, callback(entry));
    }

    return merged;
}
