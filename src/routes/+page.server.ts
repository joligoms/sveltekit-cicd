import type { PageServerLoad } from "./$types";

export const load = (({ params }): { fruits: Fruit[] } => {
    return {
        fruits: [
            {id: 1, name: 'Maçãs'},
            {id: 2, name: 'Bananas'},
            {id: 3, name: 'Morangos'},
            {id: 4, name: 'Mangas'},
            {id: 5, name: 'Abacaxis'},
        ],
    };
}) satisfies PageServerLoad;