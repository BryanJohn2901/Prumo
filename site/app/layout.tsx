import type { Metadata, Viewport } from "next";
import "jarallax/dist/jarallax.min.css";
import "./prumo.css";
import { site } from "@/content/copy";

export const metadata: Metadata = {
  title: `${site.nome} | ${site.descricao}`,
  description:
    "A Prumo mapeia as tarefas repetitivas da sua empresa e automatiza uma por vez, até o trabalho chato rodar sozinho e sua equipe poder focar no que traz resultado.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Template stylesheets served from /public so their relative font and image URLs keep working */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/vendors.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/colors/scheme-01.css" rel="stylesheet" />
      </head>
      <body className="dark-scheme">{children}</body>
    </html>
  );
}
