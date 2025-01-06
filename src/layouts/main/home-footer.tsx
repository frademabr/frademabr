import type { BoxProps } from "@mui/material/Box";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Logo } from "src/components/logo";

import { Typebot } from "src/components/typebot/typebot";

import { APP_NAME } from "lib/constants";
import { varAlpha } from "minimal-shared/utils";

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }: BoxProps) {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box
        component="footer"
        sx={[
          (theme) => ({
            ...theme.mixins.bgGradient({
              images: [
                `radial-gradient(50% 160% at 50% 50%, ${varAlpha(theme.vars.palette.common.blackChannel, 0.75)}, ${theme.vars.palette.common.black})`,
                // `url(${CONFIG.assetsDir}/assets/images/home/for-designer.webp)`,
              ],
            }),
          }),
          { pt: { xs: 10, md: 15 }, pb: { xs: 5, md: 10 } },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typebot />
          <Logo
            isSingle
            className="border-white border-2"
            sx={{ mb: 4, justifyContent: "center", alignContent: "center" }}
          />
          <h6 className="text-pretty text-white">
            {currentYear} {APP_NAME} © All rights reserved.
          </h6>
        </Container>
      </Box>
    </>
  );
}
