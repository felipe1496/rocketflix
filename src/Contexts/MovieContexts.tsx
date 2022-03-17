import { createContext, ReactNode, useState } from "react";

type MovieContextType = {
    page: number | undefined;
    setPage: (page: number) => void;
    movie: number | undefined;
    setMovie: (movie: number) => void;
}

type MovieContextProviderProps = {
    children: ReactNode;
}

export const MovieContext = createContext({} as MovieContextType);

export function MovieContextProvider(props: MovieContextProviderProps) {
    const [page, setPage] = useState<number>();
    const [movie, setMovie] = useState<number>();

    return (
        <MovieContext.Provider value={{ page, setPage, movie, setMovie }}>
            {props.children}
        </MovieContext.Provider>
    );
}