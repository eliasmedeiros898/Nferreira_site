"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, MessageCircle, Menu, FileText, ArrowLeft, Clock, Navigation, Dna } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const branches = [
  {
    name: "Matriz",
    phone: "(83) 9.8767-7807",
    address: "Rua Peregrino Filho, 215, Centro, Patos-PB",
    city: "Patos",
    state: "PB",
  },
  {
    name: "Jatobá",
    phone: "(83) 9.9646-7306",
    address: "Rua Manoel Mota, 519, Jatobá, Patos-PB",
    city: "Patos",
    state: "PB",
  },
  {
    name: "Morro - Detran",
    phone: "(83) 9.9601-8783",
    address: "Rua Januncio Nobrega, 131, Morro, Patos-PB",
    city: "Patos",
    state: "PB",
  },
  {
    name: "Teixeira",
    phone: "(83) 9.8768-4962",
    address: "Rua Padre Vicente Xavier, Água Azul",
    city: "Teixeira",
    state: "PB",
  },
  {
    name: "Condado",
    phone: "(83) 9.9390-3094",
    address: "Rua Seri, Rui Carneiro, Centro",
    city: "Condado",
    state: "PB",
  },
  {
    name: "Vista Serrana",
    phone: "(83) 9.8111-1276",
    address: "Rua Fidelino Gomes de Araújo, S/N, Centro",
    city: "Vista Serrana",
    state: "PB",
  },
  {
    name: "Cacimba de Areia",
    phone: "(83) 9.9979-2963",
    address: "Rua Coração de Jesus, Centro",
    city: "Cacimba de Areia",
    state: "PB",
  },
  {
    name: "Catingueira",
    phone: "(83) 9.9678-0570",
    address: "Rua Tenente Nicolau Lopes, Centro",
    city: "Catingueira",
    state: "PB",
  },
  {
    name: "S. José de Espinharas",
    phone: "(83) 9.8220-6093",
    address: "Rua Padre Aquiles, Centro",
    city: "São José de Espinharas",
    state: "PB",
  },
  {
    name: "S. José do Sabugi",
    phone: "(83) 9.9606-4259",
    address: "Rua João Veneriavel da Nobrega, 93, Centro",
    city: "São José do Sabugi",
    state: "PB",
  },
  {
    name: "Rodoshopping",
    phone: "(83) 9.8639-1968",
    address: "Ac. ao Terminal Rodoviário - Ana Leite",
    city: "Patos",
    state: "PB",
  },
  {
    name: "Serra Negra",
    phone: "(84) 9.9987-6308",
    address: "Rua Nelson Faria, 525 D, Centro",
    city: "Serra Negra do Norte",
    state: "RN",
  },
  {
    name: "Santa Terezinha",
    phone: "(87) 9.8875-7092",
    address: "Rua Horácio José de Souza, 97, Centro",
    city: "Santa Terezinha",
    state: "PE",
  },
  {
    name: "Brejinho",
    phone: "(87) 9.9140-4492",
    address: "Rua João Nunes, N° 181, Centro",
    city: "Brejinho",
    state: "PE",
  },
  {
    name: "São José do Egito",
    phone: "(87) 9.9926-1085",
    address: "Rua Dom José Pereira Alves, N° 244, Centro",
    city: "São José do Egito",
    state: "PE",
  },
  
  
]

export default function Unidades() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 py-3 text-sm border-b border-blue-100">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <div className="flex items-center space-x-2 text-slate-700">
            <MapPin className="h-4 w-4 text-teal-500" />
            <span>{branches.length} unidades para melhor atendê-lo</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-slate-700">
              <MessageCircle className="h-4 w-4 text-emerald-500" />
              <span>WhatsApp disponível</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-700">
              <Phone className="h-4 w-4 text-blue-500" />
              <span>Atendimento personalizado</span>
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
            <Link href="/unidades" className="text-sm font-medium text-[#252944] transition-all duration-200 relative">
              Unidades
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-500"></span>
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
            alt="Mapa das unidades do laboratório"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          

          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 text-sm font-medium mb-4">
              <Navigation className="w-4 h-4 mr-2" />
              {branches.length} unidades estrategicamente localizadas
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-[#252944] via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Nossas Unidades
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Encontre a unidade mais próxima de você. Estamos presentes em diversas cidades da Paraíba para oferecer o
              melhor atendimento em análises clínicas e diagnósticos.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-16">
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-[#252944] mb-2">{branches.length}</div>
              <div className="text-slate-600">Unidades</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-teal-600 mb-2">12</div>
              <div className="text-slate-600">Cidades</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-slate-600">Algumas unidades</div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#252944] mb-4">Encontre a unidade mais próxima</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Branches Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {branches.map((branch, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-[#252944] flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <span>{branch.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <div className="text-slate-700">
                        <p className="font-medium">{branch.address}</p>
                        <p className="text-sm text-slate-500">
                          {branch.city} - {branch.state}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <a
                        href={`tel:${branch.phone.replace(/[^\d]/g, "")}`}
                        className="text-slate-700 hover:text-[#252944] transition-colors duration-200 font-medium"
                      >
                        {branch.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">   
                      <MessageCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <a
                        href={`https://wa.me/55${branch.phone.replace(/[^\d]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
                      >
                        WhatsApp
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                      <div className="text-slate-700 text-sm">
                        <p>Segunda a Sexta: 6h às 17h</p>
                        <p>Sábado: 7h às 11h</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white shadow-lg"
                      onClick={() => {
                        const address = encodeURIComponent(`${branch.address}, ${branch.city} - ${branch.state}`)
                        window.open(`https://maps.google.com/?q=${address}`, "_blank")
                      }}
                    >
                      <Navigation className="mr-2 h-4 w-4" />
                      Ver no Mapa
                    </Button>

                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                        onClick={() => window.open(`tel:${branch.phone.replace(/[^\d]/g, "")}`, "_self")}
                      >
                        <Phone className="mr-1 h-3 w-3" />
                        Ligar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                        onClick={() => window.open(`https://wa.me/55${branch.phone.replace(/[^\d]/g, "")}`, "_blank")}
                      >
                        <MessageCircle className="mr-1 h-3 w-3" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 text-lg font-medium mb-6">
              <MapPin className="w-5 h-5 mr-2" />
              Atendimento de qualidade em todas as unidades
            </div>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Todas as nossas unidades oferecem os mesmos padrões de excelência em atendimento, equipamentos modernos e
              profissionais qualificados.
            </p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-[#252944] to-blue-600 hover:from-[#1a1d2e] hover:to-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                Voltar à página inicial
              </Button>
            </Link>
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
                    width={200}
                    height={100}
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
              <h3 className="text-lg font-semibold text-teal-300">Unidade Principal</h3>
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
              <h3 className="text-lg font-semibold text-cyan-300">Contato Geral</h3>
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
