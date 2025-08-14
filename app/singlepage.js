"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Star,
  Shield,
  Clock,
  Users,
  Gift,
  Zap,
  Heart,
  Award,
  Target,
} from "lucide-react";

export default function HeightEbookLanding() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 37,
    seconds: 0,
  });
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Rotating testimonials
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(testimonialTimer);
  }, []);

  const testimonials = [
    {
      name: "Ana Carolina, 22 anos",
      text: "Cresci 7cm em 4 meses! Minha vida amorosa mudou completamente!",
      city: "São Paulo, SP",
    },
    {
      name: "Marcus Vinícius, 19 anos",
      text: "De 1,67m para 1,74m! Agora tenho confiança para tudo!",
      city: "Rio de Janeiro, RJ",
    },
    {
      name: "Gabriela Santos, 24 anos",
      text: "Incrível! 5cm a mais e uma postura de modelo!",
      city: "Belo Horizonte, MG",
    },
    {
      name: "Pedro Henrique, 26 anos",
      text: "Funcionou mesmo depois dos 25! Cresci 6cm!",
      city: "Brasília, DF",
    },
    {
      name: "Larissa Oliveira, 20 anos",
      text: "Método simples que realmente funciona! +8cm!",
      city: "Fortaleza, CE",
    },
    {
      name: "João Victor, 23 anos",
      text: "Minha autoestima foi às alturas junto com minha altura!",
      city: "Porto Alegre, RS",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Urgency Header */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-90"></div>
        <div className="relative z-10 flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 animate-pulse" />
            <span className="font-bold text-lg">OFERTA RELÂMPAGO!</span>
          </div>
          <div className="flex items-center gap-4 bg-black/20 px-4 py-2 rounded-full">
            <Clock className="w-4 h-4" />
            <span className="font-mono text-lg font-bold">
              {String(timeLeft.hours).padStart(2, "0")}:
              {String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
          <span className="text-yellow-300 font-bold">
            67% OFF - Apenas hoje!
          </span>
        </div>
      </div>

      {/* Hero Section - Problema + Solução */}
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Pain Point Hook */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 rounded-full mb-8 transform rotate-2 shadow-2xl">
              <span className="font-bold text-lg">
                ⚡ PARE DE SOFRER EM SILÊNCIO!
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sua ALTURA está
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                ARRUINANDO sua vida?
              </span>
            </h1>

            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
                <Heart className="w-8 h-8 text-red-400 mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2 text-red-300">
                  Vida Amorosa
                </h3>
                <p className="text-gray-300">
                  Se sente rejeitado(a) por causa da sua altura?
                </p>
              </div>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-2xl p-6 backdrop-blur-sm">
                <Users className="w-8 h-8 text-orange-400 mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2 text-orange-300">
                  Autoestima
                </h3>
                <p className="text-gray-300">
                  Evita fotos e se sente inferior aos outros?
                </p>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-2xl p-6 backdrop-blur-sm">
                <Target className="w-8 h-8 text-yellow-400 mb-4 mx-auto" />
                <h3 className="font-bold text-lg mb-2 text-yellow-300">
                  Oportunidades
                </h3>
                <p className="text-gray-300">
                  Perdeu chances por falta de presença?
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 border border-emerald-500/30 rounded-3xl p-8 backdrop-blur-sm mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  AGORA VOCÊ PODE MUDAR TUDO!
                </span>
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-200 mb-8">
                Descubra o método científico que já transformou a vida de{" "}
                <strong className="text-emerald-400">+47.382 pessoas</strong>
                que ganharam até{" "}
                <strong className="text-blue-400">12cm de altura</strong> em
                apenas 90 dias!
              </p>

              {/* Social Proof Numbers */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-400">
                    47,382
                  </div>
                  <div className="text-sm text-gray-400">
                    Pessoas transformadas
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-400">96.3%</div>
                  <div className="text-sm text-gray-400">Taxa de sucesso</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-400">
                    12cm
                  </div>
                  <div className="text-sm text-gray-400">Máximo alcançado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Oferta Principal */}
          <div className="bg-gradient-to-br from-white via-gray-100 to-white text-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto border-4 border-emerald-400 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-6 py-2 rounded-full font-bold text-lg transform rotate-12 shadow-lg">
              HOJE APENAS!
            </div>

            <div className="text-center mb-8">
              <div className="text-6xl font-black mb-4">
                <span className="text-gray-400 line-through text-3xl mr-4">
                  R$ 59,90
                </span>
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  R$ 19,90
                </span>
              </div>
              <div className="bg-red-500 text-white px-4 py-2 rounded-full inline-block font-bold text-xl">
                67% DE DESCONTO
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 hover:from-emerald-600 hover:via-blue-600 hover:to-purple-600 text-white font-black py-6 px-8 rounded-2xl text-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mb-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3">
                🔥 QUERO CRESCER AGORA! <ArrowRight className="w-6 h-6" />
              </span>
            </button>

            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-bold">Garantia total de 30 dias</span>
              </div>
              <div className="text-sm text-gray-500">
                ✅ Acesso imediato • ✅ Compatível com todos dispositivos • ✅
                Suporte 24h
              </div>
            </div>
          </div>
        </div>

        {/* Floating testimonial */}
        <div className="fixed bottom-6 right-6 bg-white text-gray-900 rounded-xl p-4 shadow-2xl max-w-sm border-l-4 border-emerald-500 z-50 transform transition-all duration-500 hover:scale-105">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {testimonials[testimonialIndex].name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-sm font-semibold mb-1">
                &quot;{testimonials[testimonialIndex].text}&quot;
              </p>
              <p className="text-xs text-gray-500">
                <strong>{testimonials[testimonialIndex].name}</strong> •{" "}
                {testimonials[testimonialIndex].city}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Método Científico */}
      <div className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full mb-6">
              <span className="font-bold text-lg flex items-center gap-2">
                <Award className="w-5 h-5" />
                MÉTODO 100% CIENTÍFICO
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BASEADO EM PESQUISAS REAIS!
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Nosso método é fundamentado em{" "}
              <strong className="text-blue-400">
                análises de mais de 200 estudos científicos
              </strong>
              sobre crescimento humano, hormônio do crescimento, alongamento
              vertebral e otimização postural.
              <strong className="text-purple-400">
                {" "}
                Não é mágica, é CIÊNCIA!
              </strong>
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="font-bold text-lg mb-3 text-blue-300">
                Hormônio HGH
              </h3>
              <p className="text-gray-300 text-sm">
                Ativação natural da produção do hormônio do crescimento
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">📏</div>
              <h3 className="font-bold text-lg mb-3 text-purple-300">
                Descompressão
              </h3>
              <p className="text-gray-300 text-sm">
                Técnicas para liberar espaço entre as vértebras
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/50 to-red-900/50 border border-pink-500/30 rounded-2xl p-6 backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">🥗</div>
              <h3 className="font-bold text-lg mb-3 text-pink-300">
                Nutrição Específica
              </h3>
              <p className="text-gray-300 text-sm">
                Alimentos que estimulam o crescimento celular
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="font-bold text-lg mb-3 text-emerald-300">
                Exercícios Direcionados
              </h3>
              <p className="text-gray-300 text-sm">
                Movimentos que alongam e fortalecem
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transformações Reais */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                RESULTADOS QUE FALAM!
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mais de{" "}
              <strong className="text-emerald-400">47 mil pessoas</strong> já
              transformaram suas vidas. Veja alguns depoimentos{" "}
              <strong className="text-blue-400">100% REAIS:</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                name: "Sofia Mendes, 21 anos",
                before: "1,58m",
                after: "1,66m",
                text: "8CM A MAIS! Minha vida amorosa explodiu! Os caras me notam muito mais agora!",
                city: "São Paulo, SP",
                time: "em 3 meses",
              },
              {
                name: "Rafael Costa, 24 anos",
                before: "1,70m",
                after: "1,78m",
                text: "De complexado a confiante! Consegui o emprego dos sonhos após crescer!",
                city: "Rio de Janeiro, RJ",
                time: "em 4 meses",
              },
              {
                name: "Camila Oliveira, 19 anos",
                before: "1,62m",
                after: "1,71m",
                text: "9CM! Não acredito! Virei modelo e minha autoestima está nas alturas!",
                city: "Belo Horizonte, MG",
                time: "em 5 meses",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-emerald-500/30 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-emerald-400">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{testimonial.city}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-900/30 to-emerald-900/30 rounded-2xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-red-400 font-bold">ANTES</div>
                      <div className="text-2xl font-black">
                        {testimonial.before}
                      </div>
                    </div>
                    <ArrowRight className="w-8 h-8 text-emerald-400" />
                    <div className="text-center">
                      <div className="text-emerald-400 font-bold">DEPOIS</div>
                      <div className="text-2xl font-black">
                        {testimonial.after}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-2 text-purple-400 font-bold">
                    {testimonial.time}
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-200 font-semibold text-lg leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* O que você vai descobrir */}
      <div className="py-20 bg-gradient-to-r from-emerald-900/30 to-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  SEGREDOS REVELADOS!
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Tudo que você precisa para{" "}
                <strong className="text-emerald-400">EXPLODIR</strong> sua
                altura:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "🎯 O protocolo EXATO de 90 dias (passo a passo)",
                "💪 15 exercícios SECRETOS de alongamento vertebral",
                "🥗 Lista COMPLETA de alimentos que turbam o crescimento",
                "😴 Técnica do SONO PERFEITO (cresce até dormindo!)",
                "⚡ Como corrigir sua postura em 14 dias",
                "🚫 Os 7 ERROS FATAIS que impedem você de crescer",
                "💊 Suplementos NATURAIS que aceleram resultados",
                "📏 Sistema de medição PRECISO para acompanhar progresso",
                "🧘 Exercícios de respiração para descomprimir vértebras",
                "📱 Plano de ação DIÁRIO com cronograma completo",
                "💡 HACK psicológico para parecer 5cm mais alto HOJE",
                "🔥 Método TURBO para resultados em 30 dias",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-emerald-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300"
                >
                  <Check className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-lg font-semibold text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bônus Irresistíveis */}
      <div className="py-20 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full mb-8 animate-pulse">
              <span className="font-black text-2xl flex items-center gap-3">
                <Gift className="w-8 h-8" />
                BÔNUS EXPLOSIVOS!
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                GRÁTIS POR TEMPO LIMITADO!
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 border-purple-500 rounded-3xl p-8 backdrop-blur-sm text-center">
              <div className="text-6xl mb-6">📚</div>
              <h3 className="text-4xl font-bold text-purple-300 mb-6">
                eBook EXCLUSIVO: &quot;Autoconfiança Inabalável&quot;
              </h3>
              <div className="bg-red-500 text-white px-6 py-3 rounded-full inline-block font-bold text-xl mb-6">
                Valor: R$ 39,90 - GRÁTIS!
              </div>
              <p className="text-xl text-gray-200 leading-relaxed">
                Guia completo com{" "}
                <strong className="text-purple-400">
                  50 técnicas comprovadas
                </strong>{" "}
                para
                <strong className="text-pink-400">
                  {" "}
                  turbinar sua autoestima
                </strong>
                , eliminar a timidez e se tornar uma pessoa{" "}
                <strong className="text-yellow-400">
                  magnética e confiante
                </strong>
                ! O complemento perfeito para sua nova altura!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="text-4xl font-black text-emerald-400 mb-4">
              TOTAL EM BÔNUS: R$ 39,90
            </div>
            <div className="text-2xl font-bold text-white">
              VOCÊ LEVA TUDO POR APENAS R$ 19,90!
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final Poderoso */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              SUA ÚLTIMA CHANCE!
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Pare de sofrer com sua altura! Em 90 dias você pode estar{" "}
            <strong className="text-emerald-400">8cm mais alto</strong>, com{" "}
            <strong className="text-blue-400">autoestima nas alturas</strong> e
            uma{" "}
            <strong className="text-purple-400">
              vida completamente transformada
            </strong>
            !
          </p>

          <div className="bg-gradient-to-br from-white via-gray-100 to-white text-gray-900 rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto border-4 border-red-500 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-8 py-3 rounded-full font-black text-xl animate-bounce">
              ÚLTIMAS HORAS!
            </div>

            <div className="text-center mb-8">
              <div className="text-8xl font-black mb-6">
                <span className="text-gray-400 line-through text-4xl mr-4">
                  R$ 59,90
                </span>
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  R$ 19,90
                </span>
              </div>
              <div className="text-emerald-600 font-bold text-2xl mb-4">
                67% OFF - Economia de R$ 40,00!
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 hover:from-red-600 hover:via-pink-600 hover:to-purple-600 text-white font-black py-8 px-8 rounded-3xl text-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mb-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-4">
                🚀 SIM! QUERO CRESCER AGORA! <ArrowRight className="w-8 h-8" />
              </span>
            </button>

            <div className="space-y-3 text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="font-bold text-lg">
                  Garantia BLINDADA de 30 dias
                </span>
              </div>
              <div className="text-lg">
                ✅ Acesso IMEDIATO • ✅ Funciona em qualquer idade • ✅ Suporte
                VIP incluso
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Garantia Absoluta */}
      <div className="py-20 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-24 h-24 text-emerald-400 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                GARANTIA BLINDADA 30 DIAS
              </span>
            </h2>

            <div className="bg-gradient-to-br from-emerald-900/50 to-green-900/50 border-2 border-emerald-500 rounded-3xl p-12 backdrop-blur-sm">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                Estou TÃO confiante que você vai{" "}
                <strong className="text-emerald-400">AMAR</strong> os resultados
                que dou{" "}
                <strong className="text-green-400">30 dias COMPLETOS</strong>{" "}
                para testar tudo!
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Se em 30 dias você não estiver{" "}
                <strong className="text-emerald-400">
                  completamente satisfeito
                </strong>
                , não perceber{" "}
                <strong className="text-green-400">resultados incríveis</strong>
                , ou simplesmente
                <strong className="text-yellow-400"> mudar de ideia</strong> -
                eu devolvo{" "}
                <strong className="text-red-400">100% do seu dinheiro</strong>!
              </p>

              <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-2xl inline-block font-bold text-xl">
                💰 SEM PERGUNTAS, SEM BUROCRACIA!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Escassez e Urgência Final */}
      <div className="py-16 bg-gradient-to-br from-red-900/50 to-pink-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-full inline-block mb-8 animate-pulse">
              <span className="font-black text-xl">
                ⚠️ ATENÇÃO: OFERTA LIMITADA!
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Apenas 127 cópias restantes!
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-red-900/50 border border-red-500 rounded-2xl p-6">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="font-bold text-xl mb-2 text-red-300">
                  Tempo Limitado
                </h3>
                <p className="text-gray-300">Oferta expira em algumas horas!</p>
              </div>

              <div className="bg-orange-900/50 border border-orange-500 rounded-2xl p-6">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="font-bold text-xl mb-2 text-orange-300">
                  Alta Demanda
                </h3>
                <p className="text-gray-300">+500 pessoas compraram hoje!</p>
              </div>

              <div className="bg-purple-900/50 border border-purple-500 rounded-2xl p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold text-xl mb-2 text-purple-300">
                  Exclusividade
                </h3>
                <p className="text-gray-300">Não encontrará em lugar nenhum!</p>
              </div>
            </div>

            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8">
              Não seja mais uma pessoa que SONHA em ser mais alta...
              <br />
              <span className="text-emerald-400">
                SEJA ALGUÉM QUE REALMENTE CRESCE!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Rápido */}
      <div className="py-20 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DÚVIDAS FREQUENTES
              </span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "🤔 Funciona mesmo depois dos 25 anos?",
                  a: "SIM! Nosso método funciona em qualquer idade. Já ajudamos pessoas de até 35 anos a ganharem altura!",
                },
                {
                  q: "⏱️ Em quanto tempo vejo resultados?",
                  a: "Os primeiros sinais aparecem em 15 dias, mas os maiores ganhos acontecem entre 60-90 dias!",
                },
                {
                  q: "📱 Funciona no meu celular/tablet?",
                  a: "PERFEITAMENTE! O eBook funciona em qualquer dispositivo - celular, tablet, computador!",
                },
                {
                  q: "💰 E se não funcionar comigo?",
                  a: "Impossível! Mas se acontecer, você tem 30 dias de garantia total. Devolvo 100% do seu dinheiro!",
                },
                {
                  q: "🏃‍♂️ Preciso ir na academia?",
                  a: "NÃO! Todos os exercícios são feitos em casa, sem equipamentos. Apenas 15 minutos por dia!",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600 rounded-2xl p-8 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">
                    {faq.q}
                  </h3>
                  <p className="text-lg text-gray-200">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Mega Final */}
      <div className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-12">
            <div className="text-6xl md:text-8xl font-black mb-8">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                É AGORA OU NUNCA!
              </span>
            </div>

            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
              Você tem duas opções: continuar sofrendo com sua altura por mais
              anos...
              <br />
              <strong className="text-red-400">
                OU MUDAR TUDO HOJE MESMO!
              </strong>
            </p>
          </div>

          <div className="bg-gradient-to-br from-white via-gray-100 to-white text-gray-900 rounded-3xl shadow-2xl p-16 max-w-3xl mx-auto border-8 border-emerald-400 relative transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-12 py-4 rounded-full font-black text-2xl animate-bounce shadow-2xl">
              ÚLTIMA CHAMADA! 🔥
            </div>

            <div className="text-center mb-12">
              <div className="text-9xl font-black mb-8">
                <span className="text-gray-400 line-through text-5xl mr-6">
                  R$ 59,90
                </span>
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  R$ 19,90
                </span>
              </div>

              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-full inline-block font-black text-3xl mb-8 animate-pulse">
                67% OFF - ECONOMIZE R$ 40,00!
              </div>

              <div className="text-emerald-600 font-bold text-2xl mb-8">
                + R$ 144,00 em BÔNUS GRÁTIS!
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 hover:from-emerald-600 hover:via-blue-600 hover:to-purple-600 text-white font-black py-10 px-12 rounded-3xl text-4xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mb-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-6">
                🚀 CRESCER AGORA POR R$ 19,90!{" "}
                <ArrowRight className="w-10 h-10" />
              </span>
            </button>

            <div className="space-y-4 text-gray-600 text-xl">
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-8 h-8 text-green-600" />
                <span className="font-bold">Garantia TOTAL de 30 dias</span>
              </div>
              <div className="text-lg">
                ✅ Acesso em 2 minutos • ✅ Suporte VIP • ✅ Resultados
                garantidos
              </div>
              <div className="text-red-600 font-bold text-2xl animate-pulse">
                ⏰ Restam apenas {String(timeLeft.hours).padStart(2, "0")}:
                {String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")} para esta oferta!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-6 text-lg">
              © 2024 Cresça Naturalmente. Todos os direitos reservados.
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contato
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Suporte
              </a>
            </div>
            <div className="mt-8 text-gray-500 text-sm">
              <p>Este produto não substitui orientação médica profissional.</p>
              <p>Resultados podem variar de pessoa para pessoa.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
