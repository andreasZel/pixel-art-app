export type DrawOptionsContextType = {
    DrawContextStateOptions: {
        drawColor: string;
        drawMode: 'click' | 'FreeDraw';
    };
    setDrawContextStateOptions: React.Dispatch<React.SetStateAction<{
        drawColor: string;
        drawMode: string;
    }>>;
}