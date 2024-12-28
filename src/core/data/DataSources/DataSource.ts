// src/core/data/DataSources/DataSource.ts
export interface DataSource {
    fetchData(): Promise<any>;
}
