import {
    FaWindows,
    FaXbox,
    FaPlaystation,
    FaApple,
    FaLinux,
    FaAndroid
} from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";
import Platform from "../entities/Platform.ts";

interface Props {
    platforms: Platform[]
}

function PlatformIconsList({platforms}: Props) {
    const iconsMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack marginY={2.5}>
            {platforms.map(platform =>
                <Icon key={platform.id} as={iconsMap[platform.slug]} color="gray.500"/>)}
        </HStack>
    );
}

export default PlatformIconsList;