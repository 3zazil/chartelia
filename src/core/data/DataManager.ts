// src/core/data/DataManager.ts
import { DataSource } from './DataSources/DataSource';

export class DataManager {
    private sources: DataSource[] = [];

    registerSource(source: DataSource): void {
        this.sources.push(source);
    }

    async fetchData(): Promise<any[]> {
        const data = await Promise.all(this.sources.map((source) => source.fetchData()));
        return data.flat();
    }
}
