// components/Header.tsx
"use client";
import { useState, useEffect } from "react";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { ChevronDown, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Gestion club", href: "/gestion-club" },
  {name: "Gestion équipe", href: "/gestionequipe" },
  {
    name: "Solutions",
    dropdown: [
      { name: "Offres", href: "/offres" },
      { name: "Fonctionnalités", href: "/fonctionnalites" },
      { name: "Tarifs", href: "/tarifs" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "À propos", href: "/a-propos" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-200",
        isScrolled
          ? "bg-[#14482F] shadow-lg py-3 backdrop-blur-md"
          : "bg-[#14482F]/70 backdrop-blur-md py-6"
      )}
    >
      <nav
        role="navigation"
        aria-label="Navigation principale"
        className="mx-auto max-w-7xl flex items-center justify-between px-6"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="SimplyFoot" width={40} height={40} priority />
          <span className="text-2xl font-bold text-[#D9C6A3]">
            Simply<span className="text-[#5BE37D]">Foot</span>
          </span>
        </Link>

        <ul className="hidden lg:flex gap-8 text-[#D9C6A3] font-medium">
          {links.map((link) => (
            <li key={link.name} className="relative">
              {link.dropdown ? (
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center hover:text-[#5BE37D] transition">
                    {link.name}
                    <ChevronDown className="ml-1 h-5 w-5" />
                  </Menu.Button>

                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 translate-y-1"
                    enterTo="transform opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="transform opacity-100 translate-y-0"
                    leaveTo="transform opacity-0 translate-y-1"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-48 bg-[#232729]/90 backdrop-blur-md border border-[#5BE37D]/30 rounded-lg shadow-xl p-2">
                      {link.dropdown.map((sublink) => (
                        <Menu.Item key={sublink.name}>
                          {({ active }) => (
                            <Link
                              href={sublink.href}
                              className={clsx(
                                "block px-4 py-2",
                                active ? "text-[#5BE37D]" : "text-[#D9C6A3]"
                              )}
                            >
                              {sublink.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link href={link.href} className="hover:text-[#5BE37D] transition relative">
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#5BE37D] scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left" />
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link
          href="/inscription"
          className="hidden lg:inline-flex ml-4 px-5 py-2 bg-[#5BE37D] text-[#14482F] font-semibold rounded-full shadow-md transition-all duration-200 animate-[pulse_5s_infinite]"
        >
          Tester gratuitement
        </Link>

        <button
          className="lg:hidden text-[#D9C6A3] p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <MenuIcon className="w-8 h-8" />
        </button>
      </nav>

      <Transition show={mobileMenuOpen} as="div">
        <Dialog onClose={setMobileMenuOpen} className="fixed inset-0 z-50">
          <Dialog.Panel className="fixed inset-0">
            <div className="fixed inset-0 bg-[#14482F]/90 backdrop-blur-lg" />
            <div className="fixed inset-0 flex flex-col justify-center items-center text-center gap-6">
            <button
              className="absolute top-6 right-6 text-[#D9C6A3]"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <XIcon className="w-8 h-8" />
            </button>

            {links.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <Menu>
                    <Menu.Button className="text-3xl text-[#5BE37D] font-bold">
                      {link.name}
                    </Menu.Button>
                    <Menu.Items className="mt-2">
                      {link.dropdown.map((sublink) => (
                        <Menu.Item key={sublink.name}>
                          <Link
                            href={sublink.href}
                            className="block text-xl text-[#D9C6A3] hover:text-[#5BE37D] mt-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sublink.name}
                          </Link>
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu>
                ) : (
                  <Link
                    href={link.href}
                    className="text-3xl text-[#5BE37D] font-bold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/inscription"
              className="mt-8 px-6 py-2 bg-[#5BE37D] text-[#14482F] rounded-full shadow-md text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tester gratuitement
            </Link>
          </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  );
}


