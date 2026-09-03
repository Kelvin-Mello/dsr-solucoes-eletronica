"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  Tag, 
  Filter, 
  ArrowRight,
  BookOpen,
  Sparkles,
  Zap,
  Wrench
} from "lucide-react";
import { getAllPosts, PostItem } from "@/mock/posts";

const CATEGORIES = [
  "Todos",
  "Serviços Recentes",
  "Novos Produtos",
  "Artigos Técnicos",
  "Desenvolvimentos"
] as const;

export default function NovidadesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const posts = getAllPosts();

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "Todos") return posts;
    return posts.filter((p) => p.category === selectedCategory);
  }, [posts, selectedCategory]);

  const featuredPost = posts[0];

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] font-semibold">Atividades, Novidades & Engenharia</span>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                <Newspaper className="h-3.5 w-3.5" />
                CONHECIMENTO & CASOS DE CAMPO
              </span>
              <span className="rounded bg-[#2a475e]/60 px-2.5 py-1 text-xs font-mono text-[#8f98a0]">
                Engenharia em Ação
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Atividades, <span className="text-[#66c0f4]">Novidades & Engenharia</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed">
              Acompanhe os serviços recentes executados pela DSR Soluções, lançamentos de equipamentos industriais, desenvolvimentos de P&D e artigos técnicos que demonstram nossa competência em eletrônica de potência.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#2a475e] pb-4">
          <span className="text-xs font-mono text-[#8f98a0] mr-2 flex items-center gap-1.5">
            <Filter className="h-3.5 w-3.5 text-[#66c0f4]" /> Filtrar por Tópico:
          </span>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#66c0f4] text-[#101822] font-bold shadow-[0_0_12px_rgba(102,192,244,0.3)]"
                    : "bg-[#101822] text-[#8f98a0] border border-[#2a475e] hover:border-[#66c0f4]/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Post Card (When 'Todos' is selected) */}
        {selectedCategory === "Todos" && featuredPost && (
          <div className="rounded-xl border border-[#3b678c] bg-gradient-to-r from-[#171a21] via-[#1b2838] to-[#101822] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="relative lg:col-span-6 h-64 lg:h-auto min-h-[280px]">
                <Image
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#171a21]/90 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 rounded bg-[#66c0f4] text-[#101822] px-3 py-1 text-xs font-bold font-mono">
                  DESTAQUE
                </span>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#8f98a0]">
                    <span className="rounded bg-[#101822] px-2.5 py-0.5 text-[#66c0f4] border border-[#2a475e]">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {featuredPost.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/novidades/${featuredPost.slug}`}
                    className="text-xl sm:text-2xl font-bold text-white hover:text-[#66c0f4] transition-colors leading-snug block"
                  >
                    {featuredPost.title}
                  </Link>

                  <p className="text-xs sm:text-sm text-[#8f98a0] leading-relaxed">
                    {featuredPost.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2a475e]/60 flex items-center justify-between">
                  <span className="text-xs text-[#8f98a0] flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-[#66c0f4]" /> {featuredPost.author}
                  </span>

                  <Link
                    href={`/novidades/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] px-4 py-2 text-xs font-bold transition-all"
                  >
                    <span>Ler Artigo Completo</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              {selectedCategory === "Todos" ? "Todas as Publicações" : selectedCategory}
            </h2>
            <span className="text-xs font-mono text-[#66c0f4]">
              {filteredPosts.length} {filteredPosts.length === 1 ? "artigo" : "artigos"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#1b2838] to-[#171a21] overflow-hidden shadow-lg hover:border-[#66c0f4]/80 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101822]">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171a21] via-transparent to-transparent pointer-events-none" />

                  <span className="absolute top-2.5 left-2.5 rounded bg-[#101822]/90 border border-[#2a475e] px-2.5 py-0.5 text-[10px] font-mono text-[#66c0f4] backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-[#8f98a0]">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/novidades/${post.slug}`}
                    className="text-base font-bold text-white group-hover:text-[#66c0f4] transition-colors line-clamp-2 leading-snug"
                  >
                    {post.title}
                  </Link>

                  <p className="text-xs text-[#8f98a0] line-clamp-3 leading-relaxed flex-1">
                    {post.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-[#101822] border border-[#2a475e]/50 px-2 py-0.5 text-[10px] font-mono text-[#8f98a0]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer */}
                  <div className="mt-auto pt-3 border-t border-[#2a475e]/60 flex items-center justify-between">
                    <span className="text-[11px] text-[#8f98a0] truncate max-w-[140px]">
                      {post.author}
                    </span>

                    <Link
                      href={`/novidades/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#66c0f4] hover:text-white transition-colors"
                    >
                      <span>Ler Artigo</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
