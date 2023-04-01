import { Box } from "@chakra-ui/react";
import Menu from "./Menu";

export default function Layout({ children }) {
    return (
        <Box>
            <Menu />
            {children}
        </Box>
    );
}
