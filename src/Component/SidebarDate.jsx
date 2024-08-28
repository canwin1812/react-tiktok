import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PeopleIcon from "@mui/icons-material/People";
import VideocamIcon from "@mui/icons-material/Videocam";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

export const SidebarData = [
  {
    title: "For you",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Explore",
    icon: <ExploreIcon />,
    link: "/home",
  },
  {
    title: "Following",
    icon: <PersonRemoveIcon />,
    link: "/home",
  },
  {
    title: "Friend",
    icon: <PeopleIcon />,
    link: "/home",
  },
  {
    title: "Live",
    icon: <VideocamIcon />,
    link: "/home",
  },
  {
    title: "Upload",
    icon: <DriveFolderUploadIcon />,
    link: "/home",
  },
];
