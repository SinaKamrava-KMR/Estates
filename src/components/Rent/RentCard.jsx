import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, styled } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
const CardMediaStyle = styled(CardMedia)({
  width: "100%",
  "&:hover": {
    filter: "blur(8px)",
  },

  "&:hover + div": {
    visibility: "visible",
  },
});
const CardImageWrapper = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const DitailsBox = styled("div")({
  position: "absolute",
  zIndex: 11,
  color: "#fff",
  padding: "5px 10px",
  borderRadius: 50,
  backgroundColor: "#1111113b",
  display: "flex",
  fontSize: 20,
  gap: 5,
  alignItems: "center",
  visibility: "hidden",
});

function RentCard({ card, delay = 0 }) {
  return (
    <Link to={`/file/${card.fileId}`}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay, duration: 0.8 }}
      >
        <Card
          sx={{
            maxWidth: "100%",
            boxShadow: "0 2px 10px #d7d7d7",
            borderRadius: 4,
          }}
        >
          <CardActionArea>
            <CardImageWrapper>
              <CardMediaStyle>
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt="green iguana"
                />
              </CardMediaStyle>
              <DitailsBox>
                <p>See More</p>
                <ArrowOutwardIcon />
              </DitailsBox>
            </CardImageWrapper>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Relesed at {card.date} in {card.location}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 18, fontWeight: "bold", color: "#404040" }}
                >
                  $ {card.price}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
    </Link>
  );
}

export default RentCard;
