import type { ButtonProps } from "@mui/material/Button";
import type { Theme, SxProps } from "@mui/material/styles";

import { varAlpha } from "minimal-shared/utils";

import Button from "@mui/material/Button";

import { paths } from "src/routes/paths";

import { AnimateBorder } from "src/components/animate";
import path from "path";

// ----------------------------------------------------------------------

export type PurchaseButtonProps = {
  sx?: SxProps<Theme>;
  slotProps?: {
    button?: ButtonProps<"a">;
  };
};

export function PurchaseButton({ slotProps, sx }: PurchaseButtonProps) {
  return (
    <AnimateBorder
      sx={[
        {
          borderRadius: 1,
          position: "relative",
          bgcolor: "text.primary",
          color: "background.paper",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      duration={6}
      slotProps={{
        outlineColor: (theme) =>
          `linear-gradient(135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)})`,
        primaryBorder: {
          size: 32,
          width: "4px",
          sx: (theme) => ({
            color: theme.vars.palette.info.main,
          }),
        },
        secondaryBorder: {
          width: "4px",
          sx: (theme) => ({
            color: theme.vars.palette.info.main,
          }),
        },
      }}
    >
      <Button
        variant="text"
        target="_blank"
        rel="noopener"
        href={"#"}
        {...slotProps?.button}
        sx={[
          { px: 2, borderRadius: "inherit" },
          ...(Array.isArray(slotProps?.button?.sx)
            ? (slotProps?.button?.sx ?? [])
            : [slotProps?.button?.sx]),
        ]}
      >
        Contato
      </Button>
    </AnimateBorder>
  );
}
