"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Phone,
  MessageCircle,
  Menu,
  FileText,
  ArrowLeft,
  Mail,
  Users,
  Heart,
  Award,
  TrendingUp,
  Clock,
  Shield,
  Briefcase,
  GraduationCap,
  Target,
  Dna,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TrabalheConosco() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 py-3 text-sm border-b border-blue-100">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <div className="flex items-center space-x-2 text-slate-700">
            <Users className="h-4 w-4 text-teal-500" />
            <span>Junte-se à nossa equipe de excelência</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-slate-700">
              <MessageCircle className="h-4 w-4 text-emerald-500" />
              <span>Oportunidades de crescimento</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-700">
              <Mail className="h-4 w-4 text-blue-500" />
              <span>Envie seu currículo</span>
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
              href="/"
              className="text-sm font-medium text-slate-700 hover:text-[#252944] transition-all duration-200 relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/sobre-nos"
              className="text-sm font-medium text-slate-700 hover:text-[#252944] transition-all duration-200 relative group"
            >
              Sobre nós
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
              href="/convenios"
              className="text-sm font-medium text-slate-700 hover:text-[#252944] transition-all duration-200 relative group"
            >
              Convênios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/trabalhe-conosco"
              className="text-sm font-medium text-[#252944] transition-all duration-200 relative"
            >
              Trabalhe Conosco
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-500"></span>
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
            src="/placeholder.svg?height=800&width=1200"
            alt="Equipe de profissionais de saúde"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="container mx-auto ms-auto px-4 md:px-6 relative z-10">

          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 text-sm font-medium mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Faça parte da nossa família
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-[#252944] via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Faça parte da nossa
              </span>
              <span className="block text-slate-700">Equipe</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Desde 2015, o Laboratório Nferreira tem o objetivo de ser referência em todos os serviços que presta,
              sempre estando em busca de novos talentos para engrandecer nossa área profissional em todos os setores.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Mission Statement */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 mb-16">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#252944] mb-6">Nossa Missão com Você</h2>
                </div>

                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p>
                    Buscamos oferecer sempre oportunidades para início de carreira, proporcionando um engrandecimento
                    profissional para novos colaboradores e novos aspectos de trabalho para os que já estão conosco.
                  </p>

                  <p>
                    Se você é uma pessoa que ama o que faz, é apaixonado pela área da saúde, demonstra proatividade, tem
                    interesse em crescer e se desenvolver e quer participar de algo grandioso numa empresa que se mostra
                    um diferencial na área laboratorial e de saúde, então você está no lugar certo.
                  </p>

                  <p className="font-semibold text-[#252944]">
                    Venha somar em nossa equipe! Nos mande seu currículo atualizado com foto que iremos te adicionar ao
                    nosso banco de talentos e, em um momento oportuno, entraremos em contato com você!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#252944]">Crescimento Profissional</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">
                    Oportunidades reais de crescimento e desenvolvimento de carreira em um ambiente dinâmico e inovador.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#252944]">Capacitação Contínua</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">
                    Investimos na formação e atualização constante de nossos colaboradores com cursos e treinamentos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#252944]">Ambiente Familiar</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">
                    Trabalhamos com espírito de família, criando um ambiente acolhedor e colaborativo para todos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#252944]">Reconhecimento</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">
                    Valorizamos e reconhecemos o esforço e dedicação de cada membro da nossa equipe.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#252944]">Estabilidade</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">
                    Mais de 10 anos no mercado oferecendo estabilidade e segurança para nossos colaboradores.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#252944]">Benefícios</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">
                    Pacote completo de benefícios competitivos para garantir seu bem-estar e de sua família.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#252944] to-blue-900 text-white overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
              <CardContent className="p-8 md:p-12 text-center">
                <div className="mb-8">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Mail className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Envie seu Currículo</h2>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Pronto para fazer parte da nossa equipe? Envie seu currículo atualizado com foto e aguarde nosso
                    contato!
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-teal-300 mb-4">Email Principal</h3>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <Mail className="h-8 w-8 text-teal-400 mx-auto mb-3" />
                      <a
                        href="mailto:administrativo@laboratorionferreira.com.br"
                        className="text-lg font-medium text-white hover:text-teal-300 transition-colors duration-200 break-all"
                      >
                        administrativo@bioanalisepb.com.br
                      </a>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4">Contato Direto</h3>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <Phone className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                      <a
                        href="tel:+5583987677807"
                        className="text-lg font-medium text-white hover:text-cyan-300 transition-colors duration-200"
                      >
                        (83) 9.8767-7807
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 mr-4"
                    onClick={() =>
                      window.open(
                        "mailto:administrativo@laboratorionferreira.com.br?subject=Candidatura - Trabalhe Conosco&body=Olá, gostaria de fazer parte da equipe do Laboratório Nferreira. Segue em anexo meu currículo.",
                        "_blank",
                      )
                    }
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Currículo por Email
                  </Button>

                  <Button
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold bg-transparent"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5583987677807?text=Olá! Gostaria de saber mais sobre as oportunidades de trabalho no Laboratório Nferreira.",
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar via WhatsApp
                  </Button>
                </div>

                <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-lg font-semibold text-teal-300 mb-3">Dicas para seu currículo:</h4>
                  <ul className="text-left space-y-2 text-blue-100 max-w-2xl mx-auto">
                    <li className="flex items-start space-x-2">
                      <div className="h-2 w-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Inclua uma foto profissional recente</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-2 w-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Destaque sua experiência na área da saúde</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-2 w-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mencione cursos e certificações relevantes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-2 w-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Demonstre sua paixão pela área laboratorial</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 text-lg font-medium mb-6">
                <Users className="w-5 h-5 mr-2" />
                Junte-se à nossa família
              </div>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Estamos sempre em busca de profissionais dedicados e apaixonados pela área da saúde. Venha fazer a
                diferença conosco!
              </p>
              <Link href="/">
                <Button className="bg-gradient-to-r from-[#252944] to-blue-600 hover:from-[#1a1d2e] hover:to-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  Voltar à página inicial
                </Button>
              </Link>
            </div>
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
              <h3 className="text-lg font-semibold text-teal-300">Recursos Humanos</h3>
              <div className="space-y-2 text-blue-100">
                <div className="flex items-start space-x-2">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-teal-400" />
                  <div>
                    <p>administrativo@bioanalisepb.com.br</p>
                    <p className="text-sm text-slate-400">Envio de currículos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-300">Contato RH</h3>
              <div className="space-y-3 text-blue-100">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>(83) 9.8767-7807</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-emerald-400" />
                  <span>WhatsApp disponível</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-teal-400" />
                  <div>
                    <p>Segunda a Sexta: 8h às 17h</p>
                    <p>Atendimento RH</p>
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
