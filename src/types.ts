export type DrawOptionsContextType = {
    DrawContextStateOptions: {
        drawColor: string;
        drawMode: 'click' | 'FreeDraw';
    };
    setDrawContextStateOptions: React.Dispatch<React.SetStateAction<{
        drawColor: string;
        drawMode: string;
    }>>;
    imageColors: string[];
    setImageColors: React.Dispatch<React.SetStateAction<string[]>>;
    pixels: drawElement[];
    setPixels: React.Dispatch<React.SetStateAction<drawElement[]>>
}

export type drawElement = {
    id: number;
    color: string;
}