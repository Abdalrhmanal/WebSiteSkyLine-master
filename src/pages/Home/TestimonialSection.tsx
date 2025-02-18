import { useState, useEffect } from "react";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import quotes from "/assets/img/icon/quotes-sign.png";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

interface Testimonial {
  id: number;
  text: string;
  role: string;
}
const PersonalCards = () => {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonials([
      {
        id: 0,
        text: t("personalCards.testimonials.0.text"),
        role: t("personalCards.testimonials.0.role"),
      },
      {
        id: 1,
        text: t("personalCards.testimonials.1.text"),
        role: t("personalCards.testimonials.1.role"),
      },
      {
        id: 2,
        text: t("personalCards.testimonials.2.text"),
        role: t("personalCards.testimonials.2.role"),
      },
      {
        id: 3,
        text: t("personalCards.testimonials.3.text"),
        role: t("personalCards.testimonials.3.role"),
      },
      {
        id: 4,
        text: t("personalCards.testimonials.4.text"),
        role: t("personalCards.testimonials.4.role"),
      },
      {
        id: 5,
        text: t("personalCards.testimonials.5.text"),
        role: t("personalCards.testimonials.5.role"),
      },
    ]);

    console.log("Testimonial 5 Text:", t("personalCards.testimonials.5.text"));
    console.log("Testimonial 5 Role:", t("personalCards.testimonials.5.role"));
  }, [t]);

  const primaryTheme = "#2D0A31";
  const secondaryTheme = "#4c1e51";

  return (
    <Box
      sx={{
        pl: { xs: 3, md: 0 },
        backgroundColor: primaryTheme,
        py: { xs: 5, sm: 7, md: 10 },
        pt: { xs: 10, sm: 12, md: 15 },
        color: "#fff",
        direction: "ltr",
      }}
      id="aboutUs"
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* أزرار التحكم بالسلايدر */}
        <IconButton
          className="swiper-button-prev"
          sx={{
            p: 1.5,
            position: "absolute",
            top: "50%",
            left: { md: "3%" },
            zIndex: 3,
            color: "#fff",
            transform: "translateY(-50%)",
            backgroundColor: secondaryTheme,
            "&:hover": { backgroundColor: "#444" },
            display: { xs: "none", md: "block" },
          }}
        >
          <ArrowBack sx={{ fontSize: "30px" }} />
        </IconButton>

        <IconButton
          className="swiper-button-next"
          sx={{
            position: "absolute",
            p: 1.5,
            top: "50%",
            right: { md: "3%" },
            zIndex: 3,
            color: "#fff",
            transform: "translateY(-50%)",
            backgroundColor: secondaryTheme,
            "&:hover": { backgroundColor: "#444" },
            display: { xs: "none", md: "block" },
          }}
        >
          <ArrowForward sx={{ fontSize: "30px" }} />
        </IconButton>

        {/* أيقونة الاقتباس */}
        <Box
          component="img"
          src={quotes}
          alt="quotes"
          sx={{
            position: "absolute",
            left: "50%",
            top: { xs: "8%", sm: "14%", md: "22%" },
            zIndex: 3,
            transform: "translate(-50%, -150%)",
            width: { xs: "50px", sm: "70px", md: "90px" },
          }}
        />

        {/* سلايدر التوصيات */}
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          autoplay={{ delay: 6000 }}
          loop
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <Box
                sx={{
                  backgroundColor: secondaryTheme,
                  width: { xs: "85%", sm: "80%" },
                  py: { xs: 5, sm: 8, md: 10 },
                  px: { xs: 2, sm: 8, md: 8 },
                  borderRadius: 5,
                  m: "auto",
                  position: "relative",
                }}
              >
                <Stack
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    mb: 3,
                    gap: 3,
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: { xs: "16px", sm: "20px" },
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Stack>
                <Typography
                  sx={{
                    mb: { xs: 3, sx: 5 },
                    textAlign: "center",
                    fontSize: { xs: "14px", sm: "16px" },
                    color: "#fff",
                  }}
                >
                  {testimonial.text}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default PersonalCards;
