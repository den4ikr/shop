export type ListResponseType = {
    assets: {
        url: string,
    },
    name: string,
    description: string,
    price: {
        formatted_with_symbol: any,
    },
    id: string,
}

export type CartResponseType = {
    quantity: number,
    id: string,
    media: {
        source: string,
    },
    name: string,
    price: {
        formatted_with_symbol: any,
    },
    subtotal: {
        formatted_with_symbol: any,
    },
}