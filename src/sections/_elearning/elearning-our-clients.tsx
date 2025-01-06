import type { BoxProps } from "@mui/material/Box";

import AutoScroll from "embla-carousel-auto-scroll";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { SvgColor } from "src/components/svg-color";
import { Carousel, useCarousel } from "src/components/carousel";

// ----------------------------------------------------------------------

type Props = BoxProps & {
  brands: {
    id: string;
    name: string;
    image: string;
  }[];
};

export function ElearningOurClients({ brands, sx, ...other }: Props) {
  const carousel = useCarousel({ loop: true, slidesToShow: "auto", slideSpacing: "80px" }, [
    AutoScroll({ playOnInit: true, speed: 0.5 }),
  ]);

  return (
    <Box
      component="section"
      sx={[{ pt: 10, pb: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <div className="flex justify-center font-semibold text-3xl mb-5 mx-auto px-8">
          <h1 className="text-4xl">
            Sobre a <span className="text-indigo-400">Empresa</span>
          </h1>
        </div>

        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 10 } }}>
          <Typography className="px-8" sx={{ color: "text.secondary" }}>
            A Fradema Consultores Tributários está há 36 anos no mercado, possuindo vasta
            experiência e qualificação para pensar nas melhores soluções em consultoria tributária
            para o seu negócio. Com atuação desde 1988, a Fradema Consultores Tributários possui
            forte atuação em estratégias empresariais e procedimento administrativos nas esferas
            federal, estadual e municipal, com filiais em todo o território nacional. Nossos
            escritórios estão localizados no Distrito Federal, Bahia, Pernambuco, Espírito Santo,
            Minas Gerais, Rio de Janeiro, Santa Catarina, São Paulo, Paraná e Amazonas.
          </Typography>
        </Box>

        <Carousel carousel={carousel}>
          {brands.map((brand) => (
            <SvgColor
              key={brand.id}
              src={brand.image}
              sx={{ width: 106, height: 32, color: "text.primary" }}
            />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
