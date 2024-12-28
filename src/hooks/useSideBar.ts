"use client";
import { useState, useEffect, useRef } from "react";

const useSideBar = (conversations: string[]) => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const popupRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  const togglePopup = () => {
    setShowPopup((prevState) => !prevState);
  };

  const filteredConversations = conversations.filter((conversation) =>
    conversation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    showPopup,
    setShowPopup,
    searchQuery,
    setSearchQuery,
    popupRef,
    buttonRef,
    togglePopup,
    filteredConversations,
  };
};

export default useSideBar;
