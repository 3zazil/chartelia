// src/core/data/DataTransform.ts

export class DataTransform {
    /**
     * Filters data based on a predicate function.
     * @param data The input data array.
     * @param predicate A function that returns true for items to include.
     * @returns A new array containing only the items that match the predicate.
     */
    static filter<T>(data: T[], predicate: (item: T) => boolean): T[] {
        return data.filter(predicate);
    }

    /**
     * Sorts data by a specified key or comparator function.
     * @param data The input data array.
     * @param compareFn A comparator function for sorting.
     * @returns A new array sorted by the comparator function.
     */
    static sort<T>(data: T[], compareFn: (a: T, b: T) => number): T[] {
        return [...data].sort(compareFn); // Clone data to avoid mutation
    }

    /**
     * Maps data to a new structure or format.
     * @param data The input data array.
     * @param transformFn A function that transforms each item.
     * @returns A new array with transformed items.
     */
    static map<T, U>(data: T[], transformFn: (item: T) => U): U[] {
        return data.map(transformFn);
    }

    /**
     * Aggregates data into a single value.
     * @param data The input data array.
     * @param reducer A reducer function for aggregation.
     * @param initialValue The initial value for the aggregation.
     * @returns The aggregated value.
     */
    static aggregate<T, U>(
        data: T[],
        reducer: (acc: U, item: T) => U,
        initialValue: U
    ): U {
        return data.reduce(reducer, initialValue);
    }

    /**
     * Groups data by a specific key.
     * @param data The input data array.
     * @param keyFn A function that returns the key for grouping.
     * @returns An object where keys are group identifiers and values are arrays of items.
     */
    static groupBy<T, K extends string | number | symbol>(
        data: T[],
        keyFn: (item: T) => K
    ): Record<K, T[]> {
        return data.reduce((acc, item) => {
            const key = keyFn(item);
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(item);
            return acc;
        }, {} as Record<K, T[]>);
    }
}
