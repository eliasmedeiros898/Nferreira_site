"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, MessageCircle, Menu, FileText, ArrowLeft, Clock, Users, CheckCircle, Dna } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const partners = [
  {
    name: "AFRAFEP",
    logo: "/images/partners/afrafep.avif",
    alt: "Logo AFRAFEP",
  },
  {
    name: "CAMED",
    logo: "/images/partners/camed.png",
    alt: "Logo CAMED Saúde",
  },
  {
    name: "CASSI",
    logo: "/images/partners/cassi.jpg",
    alt: "Logo CASSI",
  },
  {
    name: "COMSEDER",
    logo: "/images/partners/comseder.png",
    alt: "Logo COMSEDER",
  },
  {
    name: "FUNASA",
    logo: "/images/partners/funasa.avif",
    alt: "Logo FUSANA",
  },
  {
    name: "GEAP",
    logo: "/images/partners/geap.png",
    alt: "Logo GEAP Saúde",
  },
  {
    name: "HAPVIDA",
    logo: "/images/partners/hapvida.avif",
    alt: "Logo Hapvida",
  },
  {
    name: "LIFE",
    logo: "/images/partners/life-saude.jpg",
    alt: "Logo Life Empresarial Saúde",
  },
  {
    name: "POSTAL SAÚDE",
    logo: "/images/partners/postal-saude.avif",
    alt: "Logo Postal Saúde",
  },
  {
    name: "SAÚDE CAIXA",
    logo: "/images/partners/saude-caixa.png",
    alt: "Logo Saúde Caixa",
  },
]

export default function ConveniosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 py-3 text-sm border-b border-blue-100">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <div className="flex items-center space-x-2 text-slate-700">
            <MapPin className="h-4 w-4 text-teal-500" />
            <span>Rua Peregrino Filho, 215, Centro, Patos-PB</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-slate-700">
              <Phone className="h-4 w-4 text-blue-500" />
              <span>(83) 98767-7807</span>
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
              href="/#sobre-nos"
              className="text-sm font-medium text-slate-700 hover:text-[#252944] transition-all duration-200 relative group"
            >
              Sobre nós
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link href="/convenios" className="text-sm font-medium text-[#252944] transition-all duration-200 relative">
              Convênios
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-500"></span>
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
            src="/placeholder.svg?height=800&width=1200"
            alt="Convênios e planos de saúde"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">

          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Convênios aceitos em todas as unidades
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-[#252944] via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Nossos Convênios
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Trabalhamos com os principais convênios e planos de saúde da região, garantindo que você tenha acesso aos
              nossos serviços de excelência com a comodidade e segurança que merece.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-16">
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-[#252944] mb-2">10+</div>
              <div className="text-slate-600">Convênios Aceitos</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-teal-600 mb-2">15</div>
              <div className="text-slate-600">Unidades</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-slate-600">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id = "planos" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#252944] mb-4">Planos de Saúde Aceitos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Confira os convênios e planos de saúde que aceitamos em todas as nossas unidades
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto mb-16">
            {partners.map((partner, index) => (
              <Card
                key={partner.name}
                className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                <CardContent className="p-6 text-center">
                  <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.alt}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-[#252944] text-center">{partner.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Information Cards */}
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#252944] mb-3">Atendimento Especializado</h3>
                    <p className="text-slate-700 text-lg leading-relaxed mb-4">
                      Nossa equipe está preparada para atender todos os convênios listados, oferecendo um atendimento
                      ágil e personalizado para cada plano de saúde.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0" />
                        <span>Autorização rápida de exames</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0" />
                        <span>Sistema integrado com convênios</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0" />
                        <span>Atendimento em todas as unidades</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#252944] mb-3">Como Agendar</h3>
                    <p className="text-slate-700 text-lg leading-relaxed mb-4">
                      Para agendar seus exames com convênio, entre em contato conosco pelos canais disponíveis.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">(83) 98767-7807</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">WhatsApp disponível</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-teal-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">Atendimento presencial</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important Information */}
          <div className="mt-16">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Informações Importantes</h3>
                <div className="grid gap-6 md:grid-cols-2 text-left">
                  <div>
                    <h4 className="font-semibold mb-2">Documentos Necessários:</h4>
                    <ul className="space-y-1 text-blue-100">
                      <li>• Carteirinha do convênio atualizada</li>
                      <li>• Documento de identidade com foto</li>
                      <li>• Pedido médico (quando necessário)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Horários de Atendimento:</h4>
                    <ul className="space-y-1 text-blue-100">
                      <li>• Segunda a Sexta: 6h às 17h</li>
                      <li>• Sábado: 7h às 11h</li>
                      <li>• Algumas unidades 24h</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 text-lg font-medium mb-6">
              <Users className="w-5 h-5 mr-2" />
              Atendimento de qualidade para todos os convênios
            </div>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Não encontrou seu convênio na lista? Entre em contato conosco para verificar a disponibilidade e condições
              especiais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`https://wa.me/5583987677807`}>
                <Button className="bg-gradient-to-r from-[#252944] to-blue-600 hover:from-[#1a1d2e] hover:to-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  <Phone className="mr-2 h-5 w-5" />
                  Entrar em Contato
                </Button>
              </Link>
              <Link href="/unidades">
                <Button
                  variant="outline"
                  className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg bg-transparent"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Ver Unidades
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
              <h3 className="text-lg font-semibold text-teal-300">Convênios</h3>
              <div className="space-y-2 text-blue-100 text-sm">
                <p>• Mais de 10 convênios aceitos</p>
                <p>• Atendimento em todas as unidades</p>
                <p>• Autorização rápida de exames</p>
                <p>• Sistema integrado</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-300">Contato</h3>
              <div className="space-y-3 text-blue-100">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>(83) 98767-7807</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-emerald-400" />
                  <span>WhatsApp disponível</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-teal-400" />
                  <span>Rua Peregrino Filho, 215, Centro, Patos-PB</span>
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
