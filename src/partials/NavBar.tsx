import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  HomeIcon,
  PaperPlaneIcon,
  ArchiveIcon,
  BellIcon,
} from "@radix-ui/react-icons";
import { Avatar, Button, Flex, Box, Text, IconButton } from "@radix-ui/themes";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon color="#9DA4B7" width={24} height={24} />,
  },
  {
    name: "Send",
    href: "/send",
    icon: <PaperPlaneIcon color="#9DA4B7" width={24} height={24} />,
  },
  {
    name: "Orders",
    href: "/orders",
    icon: <ArchiveIcon color="#9DA4B7" width={24} height={24} />,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="border-bottom fixed z-50 w-full border border-slate-50 bg-white shadow-sm">
      <Box className="mx-auto px-6 sm:max-w-2xl md:max-w-3xl lg:max-w-[1216px] lg:px-8">
        <div className="z-20 flex items-center justify-between py-5">
          <Link to="/">
            <img alt="Diaspora Logo" src="/logo.svg" />
          </Link>
          <ul className="hidden gap-x-12 text-secondary lg:flex">
            {navLinks.map((link) => {
              return (
                <Link
                  className={`transition-all text-slate-600 hover:text-slate-800 duration-100 hover:font-semibold`}
                  to={link.href}
                  key={link.name}
                >
                  <Flex className="group" align={"center"} gap={"3"}>
                    <Box>{link.icon}</Box>
                    <Text>{link.name}</Text>
                  </Flex>
                </Link>
              );
            })}
          </ul>

          <Flex align={"center"} gap={"5"} className="invisible md:visible">
            <Avatar
              fallback={"CC"}
              size={"2"}
              radius="full"
              src="https://media.istockphoto.com/id/508319768/photo/portrait-of-male-owner-standing-in-gift-store.jpg?s=612x612&w=0&k=20&c=FU3VvhPQqkKtOEfpcTPM17lU5by_Hj2bqkpwOZnlPXc="
            />
            <Button size={"3"} variant="ghost">
              Account
            </Button>
            <IconButton size={"3"} variant="ghost">
              <BellIcon width={24} height={24} />
            </IconButton>
          </Flex>

          <Flex
            onClick={toggleMobileMenu}
            align={"center"}
            gap={"4"}
            className="rounded-[4px] bg-primary px-2 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-primary/80 lg:hidden"
          >
            <IconButton size={"3"} variant="ghost">
              <BellIcon width={24} height={24} />
            </IconButton>
            {!menuOpen ? (
              <IconButton variant="surface">
                <HamburgerMenuIcon color="blue" />
              </IconButton>
            ) : (
              <IconButton variant="surface">
                <Cross1Icon color="blue" />
              </IconButton>
            )}
          </Flex>
        </div>
      </Box>

      {menuOpen && (
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -250 }}
          className="z-10 mx-auto px-6  sm:max-w-2xl sm:px-8 md:max-w-3xl"
        >
          <div className="w-full space-y-7 bg-white py-6 text-secondary lg:hidden">
            <ul className="space-y-7  text-xl">
              {navLinks.map((link) => {
                return (
                  <li onClick={() => setMenuOpen(false)} key={link.name}>
                    <Link
                      className={` transition-all duration-100 hover:font-semibold font-normal`}
                      to={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Flex align={"center"} gap={"5"}>
              <Avatar
                fallback={"CC"}
                size={"2"}
                radius="full"
                src="https://media.istockphoto.com/id/508319768/photo/portrait-of-male-owner-standing-in-gift-store.jpg?s=612x612&w=0&k=20&c=FU3VvhPQqkKtOEfpcTPM17lU5by_Hj2bqkpwOZnlPXc="
              />
              <Button size={"3"} variant="ghost">
                Account
              </Button>
            </Flex>
          </div>
        </motion.div>
      )}
    </header>
  );
}
