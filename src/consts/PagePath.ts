export const SWPagePath = {
    Root: '/',
    Films: '/films',
    Characters: '/characters',
    Vehicles: '/vehicles',
} as const;
export type SWPagePath = typeof SWPagePath [keyof typeof SWPagePath];