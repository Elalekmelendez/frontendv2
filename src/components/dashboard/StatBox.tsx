import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

interface StatBoxProps {
  title: string;
  subtitle: string;
  progress: number;
  increase: string;
}

const StatBox: React.FC<StatBoxProps> = ({ title, subtitle, progress, increase }) => {
  return (
    <Box
      p="20px"
      border="1px solid #e0e0e0"
      borderRadius="8px"
      textAlign="center"
    >
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        {subtitle}
      </Typography>
      <Box mt="10px">
        <LinearProgress variant="determinate" value={progress * 100} />
      </Box>
      <Typography variant="body2" color="success.main" mt="5px">
        {increase}
      </Typography>
    </Box>
  );
};

export default StatBox;
