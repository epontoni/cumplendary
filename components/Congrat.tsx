"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function Congrat({
  isOpen,
  name,
}: {
  isOpen: boolean;
  name: string;
}) {
  return (
    <Dialog open={isOpen}>
      {/* <DialogTrigger >Open</DialogTrigger> */}
      <DialogContent className="bg-[url('/banderin-bg.png')] bg-[length:auto_150px] bg-repeat-x bg-[position:0px_-30px]">
        <DialogHeader>
          <DialogTitle className="text-center mt-15 font-bold text-4xl">
            🎊¡Feliz cumpleaños!🎉
          </DialogTitle>
          <DialogDescription className="text-center text-2xl py-4">
            Felicitamos a <strong>{name}</strong> por su cumpleaños. Te deseamos
            un día lleno de alegría y amor.
            <br />
            ¡Disfruta de tu día!
            <br />
            <span className="block text-center text-7xl pt-4">🥳</span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
