import {Box, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {Fragment} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function GameGrid() {
    const {
        data,
        error,
        isLoading,
        fetchNextPage,
        hasNextPage
    } = useGames();

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

    const fetchedGamesCount = data?.pages.reduce(
        (accumulator, currentPage) =>
            accumulator + currentPage.results.length,
        0
    ) || 0;

    if (error) return <Text>{error.message}</Text>;

    return (
        <Box>
            <InfiniteScroll
                next={fetchNextPage}
                hasMore={hasNextPage}
                loader={<Spinner/>}
                dataLength={fetchedGamesCount}
            >
                <SimpleGrid
                    columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                    spacing={5}
                    margin={2}
                >
                    {isLoading && skeletons.map(skeleton =>
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton/>
                        </GameCardContainer>
                    )}
                    {data?.pages.map((page, index) => (
                        <Fragment key={index}>
                            {page.results.map(game =>
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game}/>
                                </GameCardContainer>)}
                        </Fragment>
                    ))}
                </SimpleGrid>
            </InfiniteScroll>
        </Box>
    );
}

export default GameGrid;
