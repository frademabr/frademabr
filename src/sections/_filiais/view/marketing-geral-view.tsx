"use client";

import type { ICaseStudyProps } from "src/types/case-study";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// import { _testimonials, _marketingPosts } from "src/_mock";

import { MarketingCaseStudyList } from "../list/marketing-case-study-list";

// ----------------------------------------------------------------------

type Props = {
  caseStudies: ICaseStudyProps[];
};

// const latestPosts = _marketingPosts.slice(0, 4);

export function MarketingCaseStudiesView({ caseStudies }: Props) {
  const renderTexts = () => (
    <Box
      sx={{
        py: { xs: 3, md: 5 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <h1 className="text-green-600 font-bold text-4xl"> Filiais</h1>
      <Typography sx={{ mt: 3, color: "text.secondary" }}>
        Conheça um pouco sobre elas.
        <br />
      </Typography>
    </Box>
  );

  return (
    <>
      <Box component="section">
        <Container>
          {renderTexts()}
          <MarketingCaseStudyList caseStudies={caseStudies} />
        </Container>
      </Box>
    </>
  );
}
