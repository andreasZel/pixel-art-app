export type DrawOptionsContextType = {
    DrawContextStateOptions: {
        drawColor: string;
        drawMode: string;
    };
    setDrawContextStateOptions: React.Dispatch<React.SetStateAction<{
        drawColor: string;
        drawMode: string;
    }>>;
}