export interface estimateState {
    estimateList: estimateListData[];
    loading: boolean;
    errors: string;
}

export type estimateListData = {
    id?: number | string;
    name: string;
    group: string;
    order: number | string;
    image: string;
    created_at: string;
    updated_at: string;
    image_url: string;
}