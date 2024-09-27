export interface PaginatedMeta {
    total: number;
    page: number;
    limit: number;
}

export interface PaginatedResult<T> {
    items: T[];
    meta: PaginatedMeta;
}
