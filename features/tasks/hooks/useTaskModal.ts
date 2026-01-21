"use client";
import { useState } from "react";
const useTaskModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openAdd = () => setIsOpen(true);
    const closeAdd = () => setIsOpen(false)
    return { isOpen, openAdd, closeAdd }


}
export default useTaskModal;