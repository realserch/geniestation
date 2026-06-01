"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { IconMenu, IconX } from "@/lib/icons";

const LINKS = [
  { href: "/produkte", label: "Produkte" },
  { href: "/elektro-mopeds", label: "Elektro Mopeds" },
  { href: "/informationen", label: "Infos" },
  { href: "/videos", label: "Videos" },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, damping: 26, stiffness: 200 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring" as const, damping: 26, stiffness: 200 },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 + i * 0.04, duration: 0.25 },
  }),
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydration guard — wait until client-side mount before showing interactive UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, mounted]);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 56,
          background: "#fff",
          borderBottom: "1px solid #e8e4df",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "#1a1a1a",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          <Logo className="w-8 h-8" />
          <span className="hidden sm:inline">GenieStation</span>
        </Link>

        {/* Desktop nav — hidden below lg */}
        <div className="hidden lg:flex" style={{ gap: 4 }}>
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "8px 14px",
                textDecoration: "none",
                color: "#5c5c5c",
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 999,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/kontakt"
          className="hidden lg:inline"
          style={{
            textDecoration: "none",
            color: "#5c5c5c",
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          Kontakt
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="flex lg:hidden items-center justify-center"
          style={{
            width: 48,
            height: 48,
            padding: 0,
            border: "none",
            background: "transparent",
            color: "#1a1a1a",
            cursor: "pointer",
            WebkitTapHighlightColor: "transparent",
            touchAction: "manipulation",
            userSelect: "none",
            WebkitUserSelect: "none",
            borderRadius: 8,
          }}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {mounted ? (
            open ? (
              <IconX className="w-6 h-6" />
            ) : (
              <IconMenu className="w-6 h-6" />
            )
          ) : (
            <IconMenu className="w-6 h-6" />
          )}
        </button>
      </header>

      {/* Mobile menu with framer-motion animations */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
            }}
          >
            {/* Backdrop overlay */}
            <motion.button
              type="button"
              onClick={closeMenu}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.25 }}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.3)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation",
              }}
              aria-label="Schließen"
            />

            {/* Slide-out panel */}
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: 280,
                maxWidth: "100vw",
                background: "#fff",
                padding: "80px 24px 24px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "-4px 0 24px rgba(0,0,0,0.08)",
              }}
            >
              {/* Close button inside panel */}
              <button
                type="button"
                onClick={closeMenu}
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color: "#5c5c5c",
                  padding: 0,
                  WebkitTapHighlightColor: "transparent",
                  touchAction: "manipulation",
                }}
                aria-label="Menü schließen"
              >
                <IconX className="w-5 h-5" />
              </button>

              {/* Navigation links with stagger animation */}
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  variants={linkItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      textDecoration: "none",
                      color: "#5c5c5c",
                      fontSize: 18,
                      fontWeight: 500,
                      borderRadius: 12,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                style={{ marginTop: "auto", paddingBottom: 16 }}
                variants={linkItemVariants}
                initial="hidden"
                animate="visible"
                custom={LINKS.length}
              >
                <Link
                  href="/kontakt"
                  onClick={closeMenu}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "14px",
                    textAlign: "center",
                    background: "#e84c3d",
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: 999,
                    textDecoration: "none",
                  }}
                >
                  Kontakt
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
