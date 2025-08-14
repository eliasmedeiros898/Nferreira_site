"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Phone,
  MapPin,
  MessageCircle,
  Microscope,
  Stethoscope,
  Shield,
  Users,
  Clock,
  Award,
  ArrowRight,
  Menu,
  Mail,
  FileText,
  Star,
  CheckCircle,
  Dna,
  Zap,
  Target,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LaboratorioNferreira() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 py-3 text-sm border-b border-blue-100">
        <div className="container flex justify-between items-center mx-auto px-4 md:px-6">
          <div className="flex items-center space-x-2 text-slate-700">
            <MapPin className="h-4 w-4 text-teal-500" />
            <span>Rua Peregrino Filho, 215, Centro, Patos-PB</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-slate-700">
              <MessageCircle className="h-4 w-4 text-emerald-500" />
              <span>(83) 98767 - 7807</span>
            </div>

          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="container flex h-20 items-center mx-auto justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            {/* Adicione 'flex' e 'items-center' AQUI nesta div */}
            <div className="h-20 w-auto flex items-center">
              <Link href="/">
                <Image
                  src="/images/NFERREIRA Lateralizada.png"
                  alt="Laboratório Nferreira"
                  // IMPORTANTE: Mantenha estes valores com as dimensões intrínsecas REAIS da sua imagem.
                  width={600}  // Exemplo: Largura real da imagem em pixels
                  height={150} // Exemplo: Altura real da imagem em pixels
                  // As classes da Image estão corretas para manter a proporção e limitar a altura.
                  className="max-h-12 w-auto object-contain"
                />
              </Link>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/#sobre-nos"
              className="text-sm font-medium text-slate-700 hover:text-[#252944] transition-all duration-200 relative group"
            >
              Sobre nós
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/convenios"
              className="text-sm font-medium text-slate-700 hover:text-[#252944] transition-all duration-200 relative group"
            >
              Convênios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/unidades"
              className="text-sm font-medium text-slate-700 hover:text-[#252944] transition-all duration-200 relative group"
            >
              Unidades
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/trabalhe-conosco"
              className="text-sm font-medium text-slate-700 hover:text-[#252944] transition-all duration-200 relative group"
            >
              Trabalhe Conosco
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => window.open("https://portal.worklabweb.com.br/resultados-on-line/1260", "_blank")}
            >
              <FileText className="mr-2 h-4 w-4" />
              RESULTADOS ONLINE
            </Button>
            <Link href="/biogene">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                <Dna className="mr-2 h-4 w-4" />
                BIOGENE
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
</header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-slate-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <Image
            src="images/photos/biomedicos.jpg"
            alt="Profissional de saúde com paciente"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Mais de 10 anos de excelência
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-[#252944] via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Cuidando da sua saúde
              </span>
              <span className="block text-slate-700">com excelência e precisão</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos serviços laboratoriais de alta qualidade, com tecnologia de ponta e profissionais
              especializados para cuidar da sua saúde.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Microscope className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#252944]">Exames Laboratoriais</CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Seu diagnóstico com a precisão e qualidade que você espera.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href={`https://wa.me/5583987677807`}>
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg">
                    Agendar Exame
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#252944]">Consultas e Procedimentos</CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Agende sua consulta com um dos nossos especialistas.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href={`https://wa.me/5583987677807`}>
                  <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-lg">
                    Agendar Consulta
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#252944]">Exame Toxicológico</CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Mantenha seu exame toxicológico em dia e evite imprevistos no trânsito.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href={`https://wa.me/5583987677807`}>
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg">
                    Agendar Toxicológico
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Biogene Highlight Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <Image
            src="images/biogene/dna_biogene.png"
            alt="DNA e genética"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium mb-4">
              <Dna className="w-5 h-5 mr-2" />
              Novidade em Genética
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                BIOGENE
              </span>
              <span className="block text-white mt-2">Exame Genético Avançado</span>
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Descubra o poder da sua genética com o exame mais avançado do mercado. Análise completa do seu DNA para
              prevenção, diagnóstico e tratamento personalizado.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-16">
            <div className="text-center space-y-6 p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mx-auto shadow-xl">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Medicina Personalizada</h3>
              <p className="text-purple-100">
                Tratamentos e medicações específicas baseadas no seu perfil genético único.
              </p>
            </div>

            <div className="text-center space-y-6 p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-pink-400 to-indigo-500 flex items-center justify-center mx-auto shadow-xl">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Prevenção Inteligente</h3>
              <p className="text-purple-100">
                Identifique predisposições genéticas e previna doenças antes que se manifestem.
              </p>
            </div>

            <div className="text-center space-y-6 p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center mx-auto shadow-xl">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Resultados Rápidos</h3>
              <p className="text-purple-100">
                Tecnologia de ponta para análises precisas e resultados em tempo otimizado.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/biogene">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <Dna className="mr-3 h-6 w-6" />
                Conheça o BIOGENE
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <p className="text-purple-200 mt-4 text-sm">Revolucione sua abordagem à saúde com a genética</p>
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section
        id="sobre-nos"
        className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#252944] mb-4">Sobre nós</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2 max-w-7xl mx-auto">
            {/* Left Column - Mission and Vision */}
            <div className="space-y-12">
              {/* Mission */}
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-[#252944] mb-6">Missão</h3>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Garantir a satisfação e bem-estar dos nossos pacientes firmando a certeza de que somos a melhor
                    empresa para atender as suas necessidades no âmbito laboratorial e de diagnósticos na área da saúde.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-[#252944] mb-6">Visão</h3>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Ser reconhecido por pacientes e profissionais da área da saúde, como a melhor opção em análises
                    clínicas no sertão paraibano até 2027.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Values */}
            <div>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-[#252944] mb-6">Valores</h3>
                  <ul className="space-y-4 text-slate-700 text-lg">
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Comprometimento em ajudar ao próximo.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Fazer o melhor todos os dias.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Criar aconchego através dos serviços.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Ser um time positivo.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Ter espírito de família.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Abraçar e conduzir mudanças.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Ser bem humorado.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Buscar crescimento e aprendizado.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Valorizar a vida e o meio ambiente.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Agir com determinação implacável.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="font-semibold">Qualidade sempre!</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Reinforcement Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#252944] via-slate-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10"></div>
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Laboratório moderno"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Nossos Serviços Especializados
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tecnologia avançada e equipe qualificada para cuidar da sua saúde
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="text-center space-y-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mx-auto shadow-xl">
                <Microscope className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Análises Clínicas</h3>
              <p className="text-blue-100">
                Exames de sangue, urina, fezes e outros materiais biológicos com resultados precisos e rápidos.
              </p>
              <ul className="text-left space-y-3 text-blue-100">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0" />
                  <span>Hemograma completo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0" />
                  <span>Perfil lipídico</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0" />
                  <span>Glicemia e diabetes</span>
                </li>
              </ul>
            </div>

            <div className="text-center space-y-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center mx-auto shadow-xl">
                <Stethoscope className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Medicina Ocupacional</h3>
              <p className="text-blue-100">Consultas especializadas e procedimentos para empresas e trabalhadores.</p>
              <ul className="text-left space-y-3 text-blue-100">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span>Exames admissionais</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span>Exames periódicos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span>Atestados de saúde ocupacional</span>
                </li>
              </ul>
            </div>

            <div className="text-center space-y-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto shadow-xl">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Toxicologia</h3>
              <p className="text-blue-100">Exames toxicológicos para renovação de CNH e outras necessidades legais.</p>
              <ul className="text-left space-y-3 text-blue-100">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>Renovação de CNH</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>Primeira habilitação</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>Mudança de categoria</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Boxes Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white hover:-translate-y-2 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
              <CardContent className="p-8 text-center space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#252944] mb-4">Planos de Saúde que Aceitamos</h3>
                  <p className="text-slate-600 mb-6">
                    Trabalhamos com os principais convênios médicos para facilitar seu atendimento.
                  </p>
                  <Link href="/convenios#planos">
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full shadow-lg">
                    Ver Planos Aceitos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white hover:-translate-y-2 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
              <CardContent className="p-8 text-center space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#252944] mb-4">Conheça Mais o Laboratório</h3>
                  <p className="text-slate-600 mb-6">
                    Descubra nossa história, estrutura e compromisso com a excelência em saúde.
                  </p>
                  <Link href="#sobre-nos">
                    <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white w-full shadow-lg">
                      Sobre o Laboratório
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#252944] via-slate-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3 items-start">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-12 w-auto">
                  <Image
                    src="/images/nferreira-logo.svg"
                    alt="Laboratório Nferreira"
                    width={100}
                    height={50}
                    className="h-12 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <span className="text-2xl font-bold">Laboratório Nferreira</span>
              </div>
              <p className="text-blue-100">
                Cuidando da sua saúde com excelência, precisão e tecnologia de ponta há mais de 10 anos.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal-300">Endereço</h3>
              <div className="space-y-2 text-blue-100">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-teal-400" />
                  <div>
                    <p>Rua Peregrino Filho, 215</p>
                    <p>Centro - Patos, PB</p>
                    <p>CEP: 58700-450</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-300">Contato</h3>
              <div className="space-y-3 text-blue-100">
                
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-emerald-400" />
                  <span>(83) 98767 - 7807</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>laboratorio_bioanalise@hotmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-teal-400" />
                  <div>
                    <p>Segunda a Sexta: 6h às 17h</p>
                    <p>Sábado: 7h às 11h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Laboratório Nferreira. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
