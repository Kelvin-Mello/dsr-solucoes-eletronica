import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  ArrowLeft, 
  Tag, 
  Mail, 
  PhoneCall, 
  Share2, 
  CheckCircle2,
  Cpu,
  Wrench,
  Newspaper
} from "lucide-react";
import { getAllPosts, getPostBySlug, PostItem } from "@/mock/posts";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Artigo Não Encontrado | DSR Soluções",
    };
  }

  return {
    title: `${post.title} | Novidades & Engenharia DSR`,
    description: post.summary,
  };
}

export default async function PostDetailPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <Link href="/novidades" className="hover:text-[#66c0f4] transition-colors">
            Novidades & Atividades
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] truncate max-w-xs font-semibold">
            {post.title}
          </span>
        </nav>

        {/* Article Header */}
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="rounded bg-[#101822] border border-[#66c0f4]/40 px-3 py-1 text-[#66c0f4] font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-[#8f98a0]">
              <Calendar className="h-3.5 w-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1 text-[#8f98a0]">
              <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed border-l-4 border-[#66c0f4] pl-4 py-1">
            {post.summary}
          </p>

          <div className="flex items-center gap-2 text-xs text-[#8f98a0] pt-1 font-mono">
            <User className="h-4 w-4 text-[#66c0f4]" />
            <span>Publicado por: <strong className="text-white">{post.author}</strong></span>
          </div>
        </div>

        {/* Main Layout: Article Body + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Article Content (8 Cols) */}
          <article className="lg:col-span-8 space-y-8">
            {/* Featured Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#2a475e] bg-[#101822] shadow-xl">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101822] via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-3 left-4 rounded bg-[#101822]/90 border border-[#2a475e] px-3 py-1 text-xs font-mono text-[#66c0f4] backdrop-blur-md">
                DSR Soluções em Eletrônica Industrial
              </span>
            </div>

            {/* Paragraphs */}
            <div className="rounded-xl border border-[#2a475e] bg-[#171a21]/90 p-6 sm:p-8 space-y-6 shadow-lg text-sm sm:text-base leading-relaxed text-[#c6d4df]">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="first-of-type:font-medium first-of-type:text-white">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-[#8f98a0] flex items-center gap-1 mr-1">
                <Tag className="h-3.5 w-3.5 text-[#66c0f4]" /> Tags:
              </span>
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-[#101822] border border-[#2a475e] px-3 py-1 text-xs font-mono text-[#66c0f4]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Box */}
            <div className="rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#171a21] to-[#101822] p-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2a475e] text-[#66c0f4] border border-[#66c0f4]/40 flex-shrink-0">
                <Cpu className="h-7 w-7" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-sm font-bold text-white">DSR Soluções em Eletrônica</h3>
                <p className="text-xs text-[#8f98a0]">
                  Especialistas nacionais em eletrônica de alta potência, retrofitting tiristorizado, retificadores industriais, estabilização de energia e telemetria para subestações.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Consultation CTA */}
            <div className="rounded-xl border border-[#3b678c] bg-gradient-to-b from-[#1b2838] to-[#101822] p-6 space-y-4 shadow-xl">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#66c0f4] tracking-wider block">
                  APLICAÇÃO INDUSTRIAL
                </span>
                <h3 className="text-lg font-bold text-white">
                  Precisa de uma Solução Similar na Sua Planta?
                </h3>
                <p className="text-xs text-[#8f98a0] leading-relaxed">
                  Fale diretamente com nossa equipe de engenharia para análise de viabilidade técnica e orçamento.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={`mailto:engenharia@dsrsolucoes.com.br?subject=Consulta Técnica - Referência Artigo: ${post.title}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] font-bold py-3 text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <Mail className="h-4 w-4" />
                  Falar com o Autor por E-mail
                </a>

                <a
                  href="https://wa.me/5511980389729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#101822] hover:bg-[#1a2c3f] text-emerald-400 border border-emerald-500/40 font-bold py-3 text-xs uppercase tracking-wider transition-all"
                >
                  <PhoneCall className="h-4 w-4" />
                  WhatsApp Engenharia (11) 98038-9729
                </a>
              </div>
            </div>

            {/* Other Articles */}
            <div className="rounded-xl border border-[#2a475e] bg-[#171a21] p-5 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-[#2a475e] pb-2">
                Outras Publicações & Casos
              </h4>
              <ul className="space-y-2">
                {otherPosts.map((other) => (
                  <li key={other.id}>
                    <Link
                      href={`/novidades/${other.slug}`}
                      className="group block p-2 rounded-lg hover:bg-[#2a475e]/40 transition-colors"
                    >
                      <span className="text-[10px] font-mono text-[#66c0f4] block">
                        {other.category}
                      </span>
                      <span className="text-xs text-white group-hover:text-[#66c0f4] transition-colors line-clamp-2 leading-snug">
                        {other.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-[#2a475e]/60">
                <Link
                  href="/novidades"
                  className="text-xs font-semibold text-[#66c0f4] hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Voltar para Todas as Novidades
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
