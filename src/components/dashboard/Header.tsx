"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <Box mb="20px">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
    </Box>
  );
};

export default Header;
