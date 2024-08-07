import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {Center, Divider, GridItem, Heading, SimpleGrid, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttributes from "../components/GameAttributes.tsx";
import GameTrailer from "../components/GameTrailer.tsx";
import GameScreenshots from "../components/GameScreenshots.tsx";

function GameDetailPage() {
    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);

    if (isLoading) return <Spinner/>

    if (error || !game) throw error;

    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
            <GridItem>
                <Heading>{game.name}</Heading>
                <ExpandableText>{game.description_raw}</ExpandableText>
                <Center><Divider width={300} marginY={5}/></Center>
                <GameAttributes game={game}/>
            </GridItem>
            <GridItem>
                <GameTrailer slug={game.slug}/>
                <GameScreenshots slug={game.slug}/>
            </GridItem>
        </SimpleGrid>
    );
}

export default GameDetailPage;