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
  backgrcolor?: string;
}

const PersonalCards = () => {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // استرجاع المصفوفة كاملة من ملف الترجمة مع returnObjects: true
    const testimonialsData = t("personalCards.testimonials", {
      returnObjects: true,
    }) as Testimonial[];
    // يمكن إضافة خاصية id إذا لم تكن موجودة مسبقًا
    const testimonialsWithId = testimonialsData.map((item, index) => ({
      ...item,
      id: index,
    }));
    setTestimonials(testimonialsWithId);
  }, [t]);

  const primaryTheme = "#041742";
  const secondaryTheme = "#08b1d6";

  return (
    <Box
      sx={{
        pl: { xs: 3, md: 0 },
        backgroundColor: primaryTheme,
        py: { xs: 5, sm: 7, md: 10 },
        pt: { xs: 10, sm: 12, md: 15 },
        color: "#eaeaea",
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
            color: "#08b1d6",
            transform: "translateY(-50%)",
            backgroundColor: "#eaeaea",
            "&:hover": { backgroundColor: "#eaeaea", color: "#041742" },
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
            color: "#08b1d6",
            transform: "translateY(-50%)",
            backgroundColor: "#eaeaea",
            "&:hover": { backgroundColor: "#eaeaea", color: "#041742" },
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Box
                sx={{
                  // تحديد لون الخلفية بناءً على الخاصية backgrcolor
                  backgroundColor: testimonial.backgrcolor || secondaryTheme,
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
                        color: "#eaeaea",
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
                    color: "#eaeaea",
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
