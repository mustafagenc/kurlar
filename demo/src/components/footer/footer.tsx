/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import IconNextjs from "../icons/nextjs";
import { IconBrandVercel } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <header className="border-grid w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-row h-14 m-auto items-center w-3xl">
        <div className="text-sm text-muted-foreground flex gap-2 grow">
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="nofollow"
            className="items-center flex gap-1 dark:hover:text-white"
          >
            Built with <IconNextjs className="size-4 inline" />
          </Link>
          <Link
            href="https://www.vercel.com"
            target="_blank"
            rel="nofollow"
            className="items-center flex gap-1 dark:hover:text-white"
          >
            Deployed on <IconBrandVercel className="size-4 inline" />
          </Link>
        </div>
        <div className="text-sm text-muted-foreground flex gap-2">
          <Link
            href="https://www.codefactor.io/repository/github/mustafagenc/kurlar"
            target="_blank"
            rel="nofollow"
          >
            <img
              src="https://img.shields.io/codefactor/grade/github/mustafagenc/kurlar"
              alt="alt"
            />
          </Link>
          <Link
            href="https://github.com/mustafagenc/kurlar/pkgs/npm/kurlar"
            target="_blank"
            rel="nofollow"
          >
            <img
              src="https://img.shields.io/github/package-json/v/mustafagenc/kurlar"
              alt="alt"
            />
          </Link>
          <Link
            href="https://www.npmjs.com/package/kurlar"
            target="_blank"
            rel="nofollow"
          >
            <img
              src="https://img.shields.io/npm/v/%40mustafagenc%2Fkurlar?color=green&style=flat"
              alt="alt"
            />
          </Link>
          <Link
            href="https://github.com/mustafagenc/kurlar/stargazers"
            target="_blank"
            rel="nofollow"
          >
            <img
              src="https://img.shields.io/github/stars/mustafagenc/kurlar"
              alt="alt"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
