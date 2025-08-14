"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ExamModal from "@/components/ui/exam-modal"
import { QuizPanel } from "@/components/ui/quiz-panel"
import {
  Phone,
  MessageCircle,
  Menu,
  FileText,
  Dna,
  Target,
  Heart,
  Activity,
  CheckCircle,
  Clock,
  Eye,
  Users,
  Star,
  ChevronDown,
  Mail,
  MapPin,
  Calendar,
  BookOpen,
  DollarSign,
  AlertCircle,
  HelpCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const faqData = [
  {
    question: "Eu não acho que preciso deste exame.",
    answer:
      "Muitas pessoas pensam assim até descobrirem informações valiosas sobre sua saúde. O BIOGENE não é apenas para quem tem problemas de saúde - é principalmente para prevenção. Mesmo pessoas saudáveis descobrem predisposições importantes e otimizam sua qualidade de vida com informações personalizadas sobre dieta, exercícios e suplementação.",
  },
  {
    question: "É muito caro.",
    answer:
      "O BIOGENE é um investimento único para toda a vida. Compare: uma consulta médica especializada custa entre R$ 300-800, exames de rotina custam centenas de reais anualmente, e suplementos inadequados podem custar milhares por ano. Com o BIOGENE, você investe uma vez e tem informações precisas para sempre, evitando gastos desnecessários e otimizando sua saúde.",
  },
  {
    question: "Não sei se vale o investimento.",
    answer:
      "O BIOGENE analisa até 244 características genéticas que influenciam sua saúde por toda a vida. É como ter um manual personalizado do seu corpo. Pacientes relatam economia significativa em suplementos desnecessários, dietas inadequadas e consultas repetitivas. Além disso, a prevenção de uma única doença já justifica o investimento.",
  },
  {
    question: "Tenho medo de descobrir algo ruim.",
    answer:
      "É natural ter essa preocupação, mas conhecimento é poder. O BIOGENE foca em prevenção e otimização, não em diagnóstico de doenças. Você descobrirá principalmente como potencializar sua saúde e prevenir problemas futuros. Nossa equipe médica especializada te acompanha na interpretação dos resultados, sempre com foco em soluções práticas e positivas.",
  },
  {
    question: "Não tenho tempo para fazer isso agora.",
    answer:
      "A coleta do BIOGENE leva apenas 5 minutos e pode ser feita na sua casa ou trabalho. O tempo investido agora economizará horas de consultas desnecessárias e anos de tentativa e erro com dietas e suplementos inadequados. É um pequeno investimento de tempo que otimizará toda sua vida.",
  },
  {
    question: "Já faço exames de sangue regulares.",
    answer:
      "Exames de sangue mostram como você está hoje. O BIOGENE revela como seu corpo funciona geneticamente - informações que nunca mudam e que explicam por que alguns tratamentos funcionam para você e outros não. É complementar aos seus exames de rotina, oferecendo uma visão muito mais profunda e personalizada.",
  },
  {
    question: "Já sigo dieta e treino com profissional.",
    answer:
      "Excelente! O BIOGENE tornará seu acompanhamento ainda mais eficaz. Você descobrirá exatamente quais tipos de exercício seu corpo responde melhor, quais nutrientes você precisa mais, como seu metabolismo funciona, e poderá personalizar completamente sua dieta e treino baseado na sua genética única.",
  },
  {
    question: "Não tenho problemas de saúde.",
    answer:
      "Perfeito! O BIOGENE é ideal para pessoas saudáveis que querem continuar assim. A prevenção é sempre mais eficaz que o tratamento. Você descobrirá como manter sua saúde otimizada, prevenir problemas futuros, e maximizar sua performance física e mental baseado no seu perfil genético único.",
  },
  {
    question: "Não acredito muito nesses testes genéticos.",
    answer:
      "Entendemos o ceticismo. A genética é uma ciência consolidada e o BIOGENE utiliza tecnologia de sequenciamento de última geração, com validação científica rigorosa. Mais de 5.000 pacientes já realizaram o exame e comprovaram os benefícios práticos. Oferecemos acompanhamento médico especializado para garantir que você aproveite ao máximo as informações.",
  },
  {
    question: "O que vou fazer com essas informações depois?",
    answer:
      "Você receberá o 'Livro da Vida' - um relatório detalhado e intuitivo, organizado por especialidade médica. Nossa equipe de nutricionistas, cardiologistas, endocrinologistas e outros especialistas oferece acompanhamento exclusivo para transformar as informações em ações práticas: dieta personalizada, plano de exercícios, suplementação adequada e estratégias de prevenção.",
  },
  {
    question: "E se o resultado não for útil para mim?",
    answer:
      "Isso é praticamente impossível. O BIOGENE analisa características fundamentais como metabolismo, resposta a nutrientes, predisposições, performance física e muito mais - informações úteis para qualquer pessoa. Além disso, nosso acompanhamento médico garante que você compreenda e aplique todas as informações relevantes para sua vida.",
  },
]

const testimonials = [
  {
    name: "Maria Silva",
    age: "45 anos",
    text: "Eu não acreditava muito, mas o BIOGENE me deu uma clareza incrível! Descobri que meu corpo não processa bem certos nutrientes e agora minha energia é completamente diferente. Valeu cada centavo!",
    highlight: "Energia completamente diferente",
  },
  {
    name: "João Santos",
    age: "38 anos",
    text: "Como atleta, sempre busquei performance. O BIOGENE revelou exatamente quais tipos de treino meu corpo responde melhor. Meus resultados melhoraram 300% em 6 meses!",
    highlight: "Resultados melhoraram 300%",
  },
  {
    name: "Ana Costa",
    age: "52 anos",
    text: "Gastava uma fortuna em suplementos que não funcionavam. Com o BIOGENE, descobri exatamente o que meu corpo precisa. Economizei dinheiro e ganhei saúde!",
    highlight: "Economizei dinheiro e ganhei saúde",
  },
  {
    name: "Carlos Oliveira",
    age: "41 anos",
    text: "Tinha histórico familiar de diabetes e estava preocupado. O BIOGENE me mostrou meus riscos reais e como prevenir. Agora tenho um plano claro para manter minha saúde.",
    highlight: "Plano claro para manter saúde",
  },
]

const panels = [
  {
    name: "PERFORMA",
    characteristics: "78-80 características",
    focus: "Performance, emagrecimento, ganho de massa muscular e nutrição",
    highlights: [
      "Metabolismo e queima de gordura",
      "Resposta ao exercício",
      "Nutrição esportiva",
      "Recuperação muscular",
    ],
    color: "from-blue-500 to-cyan-500",
    exams: [
    "Ansiedade",
    "Hipertensão Essencial",
    "Consumo de Doces",
    "Obesidade",
    "Obesidade Extrema",
    "Colesterol Basal",
    "Doença Celíaca (Alelo HLA-DQ2.2, Variante rs2395182)",
    "Doença Celíaca (Alelo HLA-DQ2.2, Variante rs7775228)",
    "Síndrome Metabólica",
    "Níveis de Triglicerídeos",
    "Gasto Energético",
    "Capacidade de Desintoxicação",
    "Doença Arterial Coronária",
    "Ganho de Peso após Gestação",
    "Metabolismo da Glicose",
    "Níveis de LDL",
    "Sensibilidade ao Sódio",
    "Vitamina A",
    "Vitamina B12",
    "Hipertensão Arterial Pulmonar",
    "Absorção de Gordura Saturada",
    "Desempenho em Atividades Físicas de Aceleração e Velocidade",
    "Eficiência da Contração Muscular em Resposta à Prática de Atividades Físicas",
    "Lesões de Tornozelo e Joelho",
    "Redução da Pressão Arterial em Resposta à Prática de Atividades Físicas",
    "Redução do IMC e da Circunferência Abdominal em Resposta à Prática de Atividades Físicas",
    "Resistência Física em Atividades Físicas de Longa Duração",
    "Tempo de Recuperação após Lesão Muscular",
    "Diabetes Tipo 2",
    "Doença Celíaca (Alelo HLA-DQ8)",
    "Doença de Crohn (Variante G908R)",
    "Comportamento de Petiscar Alimentos ao Longo do Dia",
    "Deficiência de Ferro (Sexo Feminino)",
    "Ômega 3",
    "Infarto do Miocárdio",
    "Hipercolesterolemia Familiar",
    "Vitamina B6",
    "Vitamina K",
    "Vitamina D",
    "Anemia por Deficiência de Ferro (Sexo Feminino)",
    "Sobrecarga de Ferro",
    "Intolerância à Lactose",
    "Sensibilidade à Cafeína",
    "Sensação de Saciedade",
    "Fome Emocional",
    "Ingestão de Açúcares",
    "Eficácia da Dieta Mediterrânea",
    "Eficácia das Dietas Low Fat e High Fat",
    "Eficácia da Dieta Low Carb",
    "Armazenamento de Gordura",
    "Folato (Vitamina B9)",
    "Manutenção de Resultados após Intervenção para Perda de Peso",
    "Folato (Vitamina B9 - Variante A1298C)",
    "Níveis de Ferro",
    "Metformina (Glifage®)",
    "Sulfonilureias",
    "Sinvastatina (Zocor®)",
    "Omeprazol",
    "Atorvastatina (Lipitor®)",
    "Resistência Física",
    "Performance Atlética",
    "Danos Musculares Induzidos pela Prática de Atividade Física",
    "Densidade Óssea (Força dos Ossos)",
    "Risco de Obesidade",
    "Índice de Massa Corporal (IMC)",
    "Ganho de Massa Muscular",
    "Redução dos Níveis de Colesterol Total em Resposta ao Exercício Físico",
    "Força Muscular",
    "Resistência Muscular",
    "Tendinopatia de Aquiles",
    "Capacidade Cardiorrespiratória",
    "Adesão ao Exercício Físico",
    "Habilidade Esportiva",
    "Níveis de Cálcio",
    "Osteoartrite de Joelho",
    "Predisposição para Desenvolver Osteoartrite de Quadril",
    "Comprimento dos Telômeros",
    "Vitamina C",
    "Vitamina E"
  ],
  },
  {
    name: "PREVINA MAN",
    characteristics: "78-80 características",
    focus: "Prevenção de doenças específicas do sexo masculino",
    highlights: ["Saúde cardiovascular", "Próstata", "Metabolismo hormonal", "Prevenção de doenças"],
    color: "from-green-500 to-teal-500",
    exams: [
    "Ansiedade",
    "Resistência ao tratamento com antidepressivos",
    "Hiperatividade",
    "Resposta a antidepressivos",
    "Câncer de pele do tipo melanoma (variante rs137854599)",
    "Câncer de pele do tipo melanoma (variante rs149617956)",
    "Esclerose Múltipla",
    "Aneurisma intracraniano",
    "Hipertensão essencial",
    "Risco para parada cardíaca",
    "Câncer de pulmão",
    "Câncer de próstata (sexo Masculino) (variante rs1447295)",
    "Câncer de próstata (sexo Masculino) (variante rs17879961)",
    "Câncer de estômago",
    "Acidente Vascular Cerebral",
    "Adenocarcinoma pulmonar",
    "Câncer de esôfago e estômago",
    "Obesidade",
    "Obesidade extrema",
    "Colesterol basal",
    "Doença celíaca (alelo HLA-DQ2.2 | variante rs2395182)",
    "Doença celíaca (alelo HLA-DQ2.2 - variante rs7775228)",
    "Níveis de triglicerídeos",
    "Gasto energético",
    "Câncer de pele (variante rs1805007)",
    "Câncer de pele (variante rs78378222)",
    "Deficiência da enzima butirilcolinesterase",
    "Doença arterial coronariana",
    "Doença Renal Crônica",
    "Esclerose Lateral Amiotrófica",
    "Inflamação",
    "Leucemia Linfóide Crônica",
    "Linfoma de Hodgkin",
    "Linfoma não Hodgkin",
    "Meningioma",
    "Metabolismo da Glicose",
    "Níveis de LDL",
    "Pancreatite Crônica",
    "Sensibilidade ao sódio",
    "Síndrome de Guillain",
    "Doença arterial coronariana (pessoas afrodescendentes)",
    "Doenças cardiovasculares (pessoas afrodescendentes)",
    "Doença renal crônica em pessoas africanas e afrodescendentes",
    "Hipertensão arterial pulmonar",
    "Redução da pressão arterial em resposta à prática de atividades físicas",
    "Diabetes tipo 2",
    "Doença celíaca (alelo HLA-DQ8)",
    "Doença de Crohn (variante G908R)",
    "Ômega 3",
    "Infarto do miocárdio",
    "Câncer",
    "Deficiência de fator XII",
    "Doença de Parkinson",
    "Doença de Wilson",
    "Doenças Mieloproliferativas",
    "Proteção para eventos tromboembólicos",
    "Polipose associada ao gene MUTYH (variante G396D)",
    "Hipercolesterolemia familiar",
    "Abetalipoproteinemia",
    "Metformina (Glifage®)",
    "Sildenafil (Viagra®)",
    "Bisfosfonatos",
    "Ácido acetilsalicílico (Aspirina Prevent®)",
    "Hidroclorotiazida (Clorana®)",
    "Sulfonilureias",
    "Anti-inflamatórios não-esteroidais",
    "Sinvastatina (Zocor®)",
    "Atorvastatina (Lipitor®)",
    "Redução dos níveis de colesterol total em resposta ao exercício físico",
    "Longevidade",
    "Osteoporose",
    "Calvície",
    "Tremor essencial não relacionado a Parkinson",
    "Osteoartrite de joelho",
    "Predisposição para desenvolver osteoartrite de quadril",
    "Comprimento dos telômeros",
    "Duração do sono",
    "Capacidade antioxidante"
  ],
  },
  {
    name: "PREVINA FEM",
    characteristics: "78-80 características",
    focus: "Prevenção de doenças específicas do sexo feminino",
    highlights: ["Saúde hormonal", "Osteoporose", "Câncer de mama/ovário", "Fertilidade"],
    color: "from-pink-500 to-rose-500",
    exams: [
    "Ansiedade",
    "Resistência ao tratamento com antidepressivos",
    "Hiperatividade",
    "Mioma uterino",
    "Câncer de pele do tipo melanoma (variante rs137854599)",
    "Câncer de pele do tipo melanoma (variante rs149617956)",
    "Síndrome do ovário policístico (variante rs10818854)",
    "Síndrome do ovário policístico (variante rs2293275)",
    "Esclerose Múltipla",
    "Aneurisma intracraniano",
    "Hipertensão essencial",
    "Risco para parada cardíaca",
    "Câncer de estômago",
    "Pneumonias intersticiais idiopáticas",
    "Bronquite crônica",
    "Acidente Vascular Cerebral",
    "Adenocarcinoma pulmonar",
    "Câncer de esôfago e estômago",
    "Obesidade",
    "Obesidade extrema",
    "Colesterol basal",
    "Doença celíaca (alelo HLA-DQ2.2 variante rs2395182)",
    "Doença celíaca (alelo HLA-DQ2.2 variante rs7775228)",
    "Deficiência da enzima AMPD",
    "Síndrome metabólica",
    "Níveis de triglicerídeos",
    "Câncer de mama-ovário (variante 5382insC)",
    "Câncer de mama-ovário (variante 6174delT)",
    "Câncer de pele (variante rs1805007)",
    "Câncer de pele (variante rs78378222)",
    "Capacidade de desintoxicação",
    "Deficiência da enzima butirilcolinesterase",
    "Doença arterial coronariana",
    "Doença Renal Crônica",
    "Esclerose Lateral Amiotrófica",
    "Inflamação",
    "Leucemia Linfóide Crônica",
    "Linfoma de Hodgkin",
    "Linfoma não Hodgkin",
    "Lúpus Eritematoso Sistêmico",
    "Meningioma",
    "Pancreatite Crônica",
    "Resposta ao tratamento de hiperestimulação ovariana",
    "Síndrome de Guillain-Barré",
    "Hipertensão arterial pulmonar",
    "Asma",
    "Diabetes tipo 2",
    "Doença celíaca (alelo HLA-DQ8)",
    "Doença de Crohn (variante G908R)",
    "Sensibilização a alérgenos associada à dermatite atópica",
    "Deficiência de ferro (sexo feminino)",
    "Infarto do miocárdio",
    "Lipedema (sexo feminino)",
    "Câncer",
    "Doença de Parkinson",
    "Doença de Wilson",
    "Doenças Mieloproliferativas",
    "Proteção para eventos tromboembólicos",
    "Trombofilia (Fator II - Protrombina)",
    "Trombofilia (Fator V de Leiden)",
    "Vitamina K",
    "Vitamina D",
    "Anemia por deficiência de ferro (sexo Feminino)",
    "Intolerância à Lactose",
    "Níveis de ferro",
    "Metformina (Glifage®)",
    "Hidroclorotiazida (Clorana®)",
    "Contraceptivos Orais (sexo Feminino)",
    "Longevidade",
    "Fotoenvelhecimento",
    "Osteoporose",
    "Menopausa relacionada à idade (sexo Feminino)",
    "Tremor essencial não relacionado a Parkinson",
    "Comprimento dos telômeros",
    "Impulsividade",
    "Capacidade antioxidante",
    "Rugas Faciais",
    'Rugas periorbitais ("pés de galinha")'
  ],
  },
  {
    name: "PREVINA KIDS",
    characteristics: "78-80 características",
    focus: "Monitoramento da saúde infantil",
    highlights: ["Desenvolvimento infantil", "Alergias e intolerâncias", "Nutrição pediátrica", "Prevenção precoce"],
    color: "from-orange-500 to-yellow-500",
    exams: [
    "Ansiedade",
    "Transtorno do espectro autista",
    "Resistência ao tratamento com antidepressivos",
    "Transtornos mentais",
    "Hiperatividade",
    "Hormônio folículo-estimulante (FSH)",
    "Resposta a antidepressivos",
    "Câncer de pele do tipo melanoma (variante rs137854599)",
    "Câncer de pele do tipo melanoma (variante rs149617956)",
    "Síndrome do ovário policistico (variante rs10818854)",
    "Síndrome do ovário policistico (variante rs2293275)",
    "Transtorno de Déficit de Atenção e Hiperatividade (TDAH) em idade adulta",
    "Risco para parada cardíaca",
    "Câncer de pulmão",
    "Câncer de próstata (sexo Masculino) (variante rs1447295)",
    "Câncer de próstata (sexo Masculino) (variante rs17879961)",
    "Câncer de estômago",
    "Pneumonias intersticiais idiopáticas",
    "Bronquite crônica",
    "Adenocarcinoma pulmonar",
    "Câncer de esôfago e estômago",
    "Consumo de doces",
    "Criatividade",
    "Reação ao Álcool",
    "Obesidade",
    "Obesidade extrema",
    "Doença celíaca (alelo HLA-DQ2.2 | variante rs2395182)",
    "Doença celíaca (alelo HLA-DQ2.2 - variante rs7775228)",
    "Síndrome metabólica",
    "Intolerância hereditária à frutose (variante rs1800546)",
    "Intolerância hereditária à frutose (variante rs78340951)",
    "Intolerância hereditária à frutose (variante rs76917243)",
    "Gasto energético",
    "Câncer de pele (variante rs1805007)",
    "Câncer de pele (variante rs78378222)",
    "Inflamação",
    "Leucemia Linfóide Crônica",
    "Linfoma de Hodgkin",
    "Linfoma não Hodgkin",
    "Lupus Eritematoso Sistêmico",
    "Meningioma",
    "Metabolismo da Glicose",
    "Síndrome de Guillain",
    "Hipertensão arterial pulmonar",
    "Absorção de gordura saturada",
    "Asma",
    "Intensidade do sono",
    "Desempenho em atividades físicas de aceleração e velocidade",
    "Desempenho em salto em distância e corrida de velocidade",
    "Resistência física em atividades físicas de longa duração",
    "Sensibilidade à proteina do leite",
    "Sensibilidade ao amendoim",
    "Diabetes tipo 2",
    "Doença celíaca (alelo HLA-DQ8)",
    "Doença de Crohn (variante G908R)",
    "Sensibilização a alérgenos associada à dermatite atópica",
    "Comportamento de petiscar alimentos ao longo do dia",
    "Capacidade de aprender com os erros",
    "Câncer",
    "Deficiência de alfa-1 antitripsina (variante PI*Z)",
    "Deficiência de alfa-1 antitripsina (variante PI*S)",
    "Hipercolesterolemia familiar",
    "Tirosinemia tipo I",
    "Intolerância à Lactose",
    "Ingestão de Açúcares",
    "Ácido acetilsalicílico (Aspirina®)",
    "Anti-inflamatórios não-esteroidais",
    "Ibuprofeno",
    "Resistência Física",
    "Risco de obesidade",
    "Ganho de massa muscular",
    "Habilidade esportiva",
    "Calvície",
    "Preferência por horários diurnos ou noturnos",
    "Habilidade matemática",
    "Miopia",
    "Impulsividade",
    "Predisposição ao alcoolismo",
    "Predisposição para dependência de nicotina",
    "Acne"
  ],
  },
  {
    name: "BIOGENE MASTER",
    characteristics: "244 características",
    focus: "O teste mais completo para prevenção e saúde personalizada",
    highlights: ["Análise completa", "Todas as especialidades", "Máxima personalização", "Melhor custo-benefício"],
    color: "from-purple-500 to-pink-500",
    recommended: true,
    exams: [
    "Ansiedade",
    "Transtorno do espectro autista",
    "Resistência ao tratamento com antidepressivos",
    "Transtornos mentais",
    "Endometriose",
    "Hiperatividade",
    "Hormônio folículo-estimulante (FSH)",
    "Mioma uterino",
    "Resposta a antidepressivos",
    "Câncer de pele do tipo melanoma (variante rs137854599)",
    "Câncer de pele do tipo melanoma (variante rs149617956)",
    "Síndrome do ovário policístico (variante rs10818854)",
    "Síndrome do ovário policístico (variante rs2293275)",
    "Transtorno de Déficit de Atenção e Hiperatividade (TDAH) em idade adulta",
    "Esclerose Múltipla",
    "Aneurisma intracraniano",
    "Hipertensão essencial",
    "Risco para parada cardíaca",
    "Câncer de pulmão",
    "Câncer de próstata (sexo Masculino) (variante rs1447295)",
    "Câncer de próstata (sexo Masculino) (variante rs17879961)",
    "Câncer de estômago",
    "Pneumonias intersticiais idiopáticas",
    "Bronquite crônica",
    "Acidente Vascular Cerebral",
    "Adenocarcinoma pulmonar",
    "Câncer de esôfago e estômago",
    "Capacidade de detectar fragrância floral",
    "Consumo de doces",
    "Criatividade",
    "Reação ao Álcool",
    "Obesidade",
    "Obesidade extrema",
    "Colesterol basal",
    "Doença celíaca (alelo HLA-DQ2.2 | variante rs2395182)",
    "Doença celíaca (alelo HLA-DQ2.2 - variante rs7775228)",
    "Deficiência da enzima AMPD",
    "Síndrome metabólica",
    "Intolerância hereditária à frutose (variante rs1800546)",
    "Intolerância hereditária à frutose (variante rs78340951)",
    "Intolerância hereditária à frutose (variante rs76917243)",
    "Lesões no ligamento cruzado",
    "Níveis de triglicerídeos",
    "Gasto energético",
    "Capacidade cardiorrespiratória (variante rs6552828)",
    "Câncer de mama-ovário (variante 5382insC)",
    "Câncer de mama-ovário (variante 6174delT)",
    "Câncer de pele (variante rs1805007)",
    "Câncer de pele (variante rs78378222)",
    "Capacidade de desintoxicação",
    "Deficiência da enzima butirilcolinesterase",
    "Doença arterial coronariana",
    "Doença Renal Crônica",
    "Esclerose Lateral Amiotrófica",
    "Ganho de peso após gestação",
    "Hanseníase",
    "Inflamação",
    "Leucemia Linfóide Crônica",
    "Linfoma de Hodgkin",
    "Linfoma não Hodgkin",
    "Lúpus Eritematoso Sistêmico",
    "Meningioma",
    "Metabolismo da Cafeína",
    "Metabolismo da Glicose",
    "Níveis de LDL",
    "Pancreatite Crônica",
    "Resposta ao tratamento de hiperestimulação ovariana",
    "Sensibilidade ao Sódio",
    "Síndrome de Guillain",
    "Vitamina A",
    "Vitamina B12",
    "Diabetes tipo 2 (pessoas africanas)",
    "Doença arterial coronariana (pessoas afrodescendentes)",
    "Doenças cardiovasculares (pessoas afrodescendentes)",
    "Doença renal crônica em pessoas africanas e afrodescendentes",
    "Intolerância à lactose (populações africanas)",
    "Linfoma não Hodgkin (populações africanas)",
    "Níveis de bilirrubina (pessoas afrodescendentes)",
    "Osteoporose (pessoas africanas)",
    "Hipertensão arterial pulmonar",
    "Absorção de gordura saturada",
    "Asma",
    "Intensidade do sono",
    "Benefício da atividade física na redução dos sintomas depressivos",
    "Desempenho em atividades físicas de aceleração e velocidade",
    "Desempenho em salto em distância e corrida de velocidade",
    "Eficiência da contração muscular em resposta à prática de atividades físicas",
    "Lesões de tornozelo e joelho",
    "Lesões musculares sem contato físico",
    "Lesões nos músculos isquiotibiais",
    "Redução da pressão arterial em resposta à prática de atividades físicas",
    "Redução do IMC e da circunferência abdominal em resposta à prática de atividades físicas",
    "Resistência física em atividades físicas de longa duração",
    "Tempo de recuperação após lesão muscular",
    "Sensibilidade à proteína do leite",
    "Sensibilidade ao amendoim",
    "Diabetes tipo 2",
    "Doença celíaca (alelo HLA-DQ8)",
    "Doença de Crohn (variante G908R)",
    "Sensibilização a alérgenos associada à dermatite atópica",
    "Comportamento de petiscar alimentos ao longo do dia",
    "Deficiência de ferro (sexo feminino)",
    "Desempenho cognitivo",
    "Hostilidade e euforia",
    "Impulsividade",
    "Metabolização do THC (variante rs1057910)",
    "Metabolização do THC (variante rs1799853)",
    "Qualidade do sono",
    "Sobrepeso e obesidade",
    "Transtornos psicóticos",
    "Deficiência da enzima diamina oxidase",
    "Ômega 3",
    "Capacidade de aprender com os erros",
    "Obesidade (pessoas afrodescendentes)",
    "Infarto do miocárdio",
    "Lipedema (sexo feminino)",
    "Amiloidose hereditária (variante V122I)",
    "Amiloidose hereditária (variante V50M)",
    "Amiloidose hereditária (variante T80A)",
    "Câncer",
    "Deficiência de alfa-1 antitripsina (variante PI*Z)",
    "Deficiência de alfa-1 antitripsina (variante PI*S)",
    "Deficiência de fator XII",
    "Doença de Parkinson",
    "Doença de Wilson",
    "Doenças Mieloproliferativas",
    "Proteção para eventos tromboembólicos",
    "Hemocromatose tipo 1 (variante C282Y)",
    "Hemocromatose tipo 1 (variante H63D)",
    "Hemocromatose tipo 1 (variante S65C)",
    "Polipose associada ao gene MUTYH (variante G396D)",
    "Trombofilia (Fator II – Protrombina)",
    "Trombofilia (Fator V de Leiden)",
    "Hipercolesterolemia familiar",
    "Abetalipoproteinemia",
    "Hiperinsulinismo familiar",
    "Retinite pigmentosa autossômica recessiva relacionada ao gene DHDDS",
    "Síndrome de Pendred",
    "Tirosinemia tipo I",
    "Vitamina B6",
    "Vitamina K",
    "Vitamina D",
    "Anemia por deficiência de ferro (sexo feminino)",
    "Sobrecarga de Ferro",
    "Intolerância à Lactose",
    "Sensibilidade à Cafeína",
    "Sensação de saciedade",
    "Fome emocional",
    "Ingestão de Açúcares",
    "Eficácia da dieta mediterrânea",
    "Eficácia das dietas low fat e high fat",
    "Eficácia da dieta low carb",
    "Armazenamento de gordura",
    "Folato (Vitamina B9)",
    "Manutenção de resultados após intervenção para perda de peso",
    "Folato (Vitamina B9 – variante A1298C)",
    "Níveis de ferro",
    "Metformina (Glifage®)",
    "Sildenafil (Viagra®)",
    "Bisfosfonatos",
    "Ácido acetilsalicílico (Aspirina®)",
    "Hidroclorotiazida (Clorana®)",
    "Sulfonilureias",
    "Nicotina",
    "Opioides",
    "Salbutamol (Aerolin®) e Salmeterol (Serevent®)",
    "Contraceptivos Orais (sexo Feminino)",
    "Sinvastatina (Zocor®)",
    "Anti-inflamatórios não-esteroidais",
    "Sinvastatina (Zocor®)",
    "Ibuprofeno",
    "Voriconazol",
    "Omeprazol",
    "Atorvastatina (Lipitor®)",
    "Resistência Física",
    "Performance atlética",
    "Danos musculares induzidos pela prática de atividade física",
    "Densidade óssea (força dos ossos)",
    "Risco de obesidade",
    "Índice de Massa Corporal (IMC)",
    "Ganho de massa muscular",
    "Redução dos níveis de colesterol total em resposta ao exercício físico",
    "Força muscular",
    "Resistência Muscular",
    "Tendinopatia de Aquiles",
    "Capacidade Cardiorrespiratória",
    "Recuperação da frequência cardíaca após exercício físico",
    "Adesão ao exercício físico",
    "Habilidade esportiva",
    "Longevidade",
    "Fotoenvelhecimento",
    "Osteoporose",
    "Calvície",
    "Menopausa relacionada à idade (sexo Feminino)",
    "Tremor essencial não relacionado a Parkinson",
    "Degeneração macular relacionada à idade",
    "Níveis de Cálcio",
    "Osteoartrite de joelho",
    "Predisposição para desenvolver osteoartrite de quadril",
    "Comprimento dos telômeros",
    "Gene Guerreiro",
    "Preferência por horários diurnos ou noturnos",
    "Habilidade matemática",
    "Miopia",
    "Impulsividade",
    "Percepção do gosto amargo",
    "Cera de ouvido",
    "Predisposição ao alcoolismo",
    "Predisposição para dependência de nicotina",
    "Duração do sono",
    "Sensibilidade à dor",
    "Cor dos olhos",
    "Capacidade antioxidante",
    "Acne",
    "Sensibilidade ao sol",
    "Vitamina C",
    "Risco para hiperpigmentação da pele",
    "Vitamina E",
    "Flacidez palpebral",
    "Rugas Faciais",
    "Dermatite atópica",
    'Rugas periorbitais ("pés de galinha")',
    "Doença de Alzheimer",
    "Moléstia de Dupuytren (Indica o risco de desenvolver moléstia de Dupuytren)",
    "Gota",
    "Câncer de Mama",
    "Câncer colorretal",
    "Doença de Crohn",
    "Doença celíaca",
    "Colite ulcerativa",
    "Doença intestinal inflamatória",
    "Diabetes tipo 2",
    "Diabetes tipo 1",
    "Câncer de próstata",
    "Câncer de bexiga",
    "Câncer de ovário",
    "Linfoma de Hodgkin",
    "Melanoma",
    "Câncer de tireoide",
    "Fibrilação atrial",
    "Doença arterial coronariana",
    "Leucemia linfocítica crônica",
    "Carcinoma basocelular"
  ]
  },
]

const images = [
  "/images/biogene/biogene_book_front.png",
  "/images/biogene/biogene_book_back.jpeg",
  "/images/biogene/caract.png",
  "/images/biogene/caractn.png",
  "/images/biogene/resumoalteracoes.png",
  "/images/biogene/sumario.png",
];

function SimpleSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl h-[500px] overflow-hidden rounded-2xl shadow-2xl">
      {images.map((src, index) => (
          <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}


function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-purple-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-purple-50 hover:bg-purple-100 transition-colors duration-200 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-purple-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function BiogenePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState<any>(null);

  function openModal(panel: any) {
    setSelectedPanel(panel);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedPanel(null);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-3 text-sm border-b border-purple-200">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <div className="flex items-center space-x-2 text-purple-800">
            <Dna className="h-4 w-4 text-purple-600" />
            <span>Desvende seu Mapa Genético: Saúde Personalizada para a Vida</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-purple-800">
              <Phone className="h-4 w-4 text-pink-600" />
              <span>Agende sua coleta</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-800">
              <Calendar className="h-4 w-4 text-indigo-600" />
              <span>Vagas limitadas esta semana</span>
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
            <a
              href="#o-que-e"
              className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-all duration-200"
            >
              O que é
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-all duration-200"
            >
              Benefícios
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-all duration-200"
            >
              Como Funciona
            </a>
            <a
              href="#paineis"
              className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-all duration-200"
            >
              Painéis
            </a>
            <a
              href="#depoimentos"
              className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-all duration-200"
            >
              Depoimentos
            </a>
            <a
              href="#agendar"
              className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-all duration-200"
            >
              Agendar
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => window.open("https://portal.worklabweb.com.br/resultados-on-line/1260", "_blank")}
            >
              <FileText className="mr-2 h-4 w-4" />
              RESULTADOS ONLINE
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
          <Image
            src="/images/biogene/dna_biogene.png"
            alt="DNA helix and genetic analysis"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium mb-4">
              <Dna className="w-5 h-5 mr-2" />
              Seu Código Genético, Sua Saúde Futura
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                Desvende seu Mapa do DNA:
              </span>
              <span className="block text-white mt-4 text-3xl md:text-4xl">Saúde Personalizada para a Vida</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              O teste genético que revela como seu corpo realmente funciona, permitindo decisões precisas de saúde e
              prevenção inteligente.
              <strong className="text-white"> BIOGENE é um teste genético que você faz apenas uma vez na vida.</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Agende seu Teste BIOGENE
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-4 text-xl font-bold rounded-full bg-transparent"
              onClick={() => document.getElementById("o-que-e")?.scrollIntoView({ behavior: "smooth" })}
            >
              <BookOpen className="mr-3 h-6 w-6" />
              Inicie sua Jornada de Saúde Personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1: What is BIOGENE */}
      <section id="o-que-e" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que é o{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                BIOGENE
              </span>
              ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
              <CardContent className="p-12">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div className="space-y-6">
                    <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                      <Dna className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Seu Mapa Completo do DNA</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      <strong>BIOGENE é um teste genético que você faz apenas uma vez na vida.</strong> Ele revela como
                      seu corpo funciona, seus riscos e como prevenir doenças, permitindo uma saúde personalizada.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Avaliamos até <strong className="text-purple-600">245 características genéticas</strong> que
                      influenciam sua saúde, oferecendo um mapa completo do seu DNA. É um investimento único para toda a
                      vida.
                    </p>
                  </div>

                  <div className="relative">
                    <Image
                      src="/images/biogene/dna_biogene.png"
                      alt="Estrutura do DNA"
                      width={500}
                      height={400}
                      className="rounded-2xl shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-purple-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">245</div>
                        <div className="text-sm text-gray-600">Características</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Transformational Benefits */}
      <section id="beneficios" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que o{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                BIOGENE
              </span>{" "}
              pode fazer por você?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios inovadores para transformar sua saúde e qualidade de vida
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Saúde Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Saiba como seu corpo responde à dieta, exercícios, nutrientes e medicamentos de forma única e
                  personalizada.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Prevenção Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Detecte riscos antes dos sintomas aparecerem e tome ações preventivas baseadas na sua genética.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Orientação Médica Especializada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Acompanhamento e orientação de especialistas baseados no seu DNA único.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Ações Práticas e Direcionadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Planos de dieta, exercícios e prevenção adaptados exatamente à sua genética.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Economia a Longo Prazo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Evite gastos desnecessários com suplementos, dietas e exames repetidos que não funcionam para você.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Longevidade e Vitalidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Mantenha-se jovem e saudável por mais tempo com estratégias personalizadas de antienvelhecimento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section id="como-funciona" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sua Jornada de Saúde em{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                3 Passos Simples
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Como o BIOGENE transforma sua saúde de forma simples e transparente
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto shadow-2xl">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Coleta Sem Esforço</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Coleta simples e rápida (saliva ou sangue), levando menos de 5 minutos, no local e horário mais
                conveniente para você.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-purple-700 font-semibold">✓ Coleta domiciliar disponível</p>
                <p className="text-purple-700 font-semibold">✓ Processo indolor</p>
                <p className="text-purple-700 font-semibold">✓ Apenas 5 minutos</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center mx-auto shadow-2xl">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-gradient-to-r from-indigo-400 to-pink-400 animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Análise Avançada</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Análise precisa do seu DNA em laboratório de última geração, com certificação internacional.
              </p>
              <div className="bg-pink-50 rounded-lg p-4">
                <p className="text-pink-700 font-semibold">✓ Tecnologia de ponta</p>
                <p className="text-pink-700 font-semibold">✓ Certificação internacional</p>
                <p className="text-pink-700 font-semibold">✓ Máxima precisão</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto shadow-2xl">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Relatório Detalhado e Acompanhamento</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Receba seu relatório personalizado e acompanhamento exclusivo da nossa equipe de especialistas médicos
                em 21 dias.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-indigo-700 font-semibold">✓ "Livro da Vida" personalizado</p>
                <p className="text-indigo-700 font-semibold">✓ Acompanhamento médico</p>
                <p className="text-indigo-700 font-semibold">✓ Orientações práticas</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-50 to-pink-50 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Interpretação do Relatório + Acompanhamento do Paciente
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Garantimos que as informações do exame se transformem em{" "}
                  <strong>mudanças reais no estilo de vida</strong>. Nossa equipe médica especializada acompanha você
                  durante todo o processo, assegurando que você aproveite ao máximo cada informação do seu DNA.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: BIOGENE Panels */}
      <section id="paineis" className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Encontre o Painel Perfeito{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                para suas Necessidades
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore as opções do BIOGENE e descubra qual se alinha melhor aos seus objetivos de saúde
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto py-8 px-4">
            {panels.map((panel, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden ${
                  panel.recommended ? "ring-4 ring-purple-400 ring-opacity-50" : ""
                }`}
              >
                {panel.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-bold rounded-bl-lg z-10">
                    RECOMENDADO
                  </div>
                )}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${panel.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${panel.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Dna className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{panel.name}</CardTitle>
                  <div className="text-sm text-gray-500 mt-1">{panel.characteristics}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center font-medium">{panel.focus}</p>
                  <ul className="space-y-2">
                    {panel.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {/* ONDE A MUDANÇA ACONTECE: Botão para abrir o modal */}
                  <Button
                    onClick={() => openModal(panel)} // Chama a função openModal passando o objeto 'panel' atual
                    className={`w-full bg-gradient-to-r ${panel.color} hover:opacity-90 text-white shadow-lg mt-6 py-3 text-base font-semibold`}
                  >
                    Ver Exames Detalhados
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Renderiza o Modal. Ele só será visível quando 'isModalOpen' for true. */}
            {/* As props 'panelName' e 'exams' são passadas do 'selectedPanel' para o modal. */}
            <ExamModal
              isOpen={isModalOpen}
              onClose={closeModal}
              panelName={selectedPanel?.name || ''} // Acessa o nome do painel, com fallback para string vazia
              exams={selectedPanel?.exams || []}   // Acessa os exames do painel, com fallback para array vazio
            />
          </div>

          <div className="text-center mt-16">
            <QuizPanel/>
          </div> 
        </div>
      </section>

      {/* Section 5: The BIOGENE Differential */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mais que um Teste:{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Um Guia para sua Vida
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso compromisso com sua saúde vai muito além do exame
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 max-w-7xl mx-auto items-center">
            <div className="space-y-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">O "Livro da Vida"</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Seu relatório BIOGENE é muito mais que números - é um guia intuitivo e detalhado, com
                        informações organizadas por grupo e especialidade, focando nas características que apresentaram
                        alteração, com um resumo final para seu médico.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-pink-50 to-indigo-50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Parceria Médica Especializada</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Você não estará sozinho nesta jornada. Nossa equipe de nutricionistas, cardiologistas,
                        endocrinologistas, pediatras, ginecologistas e outros especialistas garantem que você tenha todo
                        o suporte necessário.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative"> {/* Altura aumentada */}
              <SimpleSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Investment */}
      {/*<section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Um Investimento Único{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                na sua Saúde para Toda a Vida
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Invista em conhecimento, ganhe longevidade</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white overflow-hidden">
              <CardContent className="p-12">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div className="space-y-8">
                    <div className="text-center lg:text-left">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Preço Âncora</h3>
                      <p className="text-xl text-gray-700 leading-relaxed">
                        O BIOGENE entrega um mapa completo do seu DNA, feito apenas uma vez na vida,
                        <strong className="text-purple-600"> a partir de R$ 2.490,00</strong>, sem necessidade de
                        repetição.
                      </p>
                    </div>

                    <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                      <CardContent className="p-6">
                        <h4 className="text-2xl font-bold text-purple-600 mb-4">Destaque Custo-Benefício</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          O exame <strong>Bioanálise Master</strong> é o mais completo: avalia até 244 características
                          por apenas <strong className="text-purple-600">R$ 2.990,00</strong>. Os outros perfis analisam
                          entre 78 e 80 características por R$ 2.490,00 cada.
                        </p>
                        <p className="text-lg text-purple-700 font-semibold mt-4">
                          Por uma pequena diferença, você obtém quase 3 vezes mais informações para decisões de saúde e
                          prevenção durante toda sua vida!
                        </p>
                      </CardContent>
                    </Card>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <AlertCircle className="h-6 w-6 text-red-500" />
                        <h4 className="text-lg font-bold text-red-700">Vagas Limitadas!</h4>
                      </div>
                      <p className="text-red-700">
                        Temos vagas limitadas para coleta esta semana. Reserve agora para garantir sua vaga e receber o
                        relatório no formato "Livro da Vida" absolutamente grátis!
                      </p>
                    </div>
                  </div>

                  <div className="text-center space-y-8">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Investimento em saúde"
                        width={400}
                        height={400}
                        className="rounded-2xl shadow-xl mx-auto"
                      />
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-gray-900">Compare os Custos:</h4>
                      <div className="grid gap-4 text-left">
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-gray-700">Consultas médicas anuais</span>
                          <span className="font-bold text-red-600">R$ 3.600+</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-gray-700">Suplementos inadequados/ano</span>
                          <span className="font-bold text-red-600">R$ 2.400+</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-gray-700">Exames de rotina anuais</span>
                          <span className="font-bold text-red-600">R$ 1.200+</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-2 border-green-200">
                          <span className="text-gray-700 font-bold">BIOGENE (uma vez na vida)</span>
                          <span className="font-bold text-green-600">R$ 2.490</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                      onClick={() => document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      <Calendar className="mr-3 h-6 w-6" />
                      Sim, Quero Agendar meu BIOGENE!
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>*/}

      {/* Section 7: Testimonials */}
      <section id="depoimentos" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quem Fez o{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                BIOGENE Recomenda
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de transformação - Mais de 5.000 pacientes já fizeram o BIOGENE e melhoraram seus hábitos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold text-xl">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <span className="text-gray-500 text-sm">{testimonial.age}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.text}"</p>
                      <div className="bg-white rounded-lg p-3 border border-purple-200">
                        <p className="text-purple-600 font-semibold text-sm">✨ {testimonial.highlight}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Star className="h-8 w-8 text-yellow-300" />
                  <Star className="h-8 w-8 text-yellow-300" />
                  <Star className="h-8 w-8 text-yellow-300" />
                  <Star className="h-8 w-8 text-yellow-300" />
                  <Star className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Muitas Vidas Transformadas</h3>
                <p className="text-xl text-purple-100">
                  Junte-se aos milhares de pessoas que já descobriram o poder da medicina personalizada com o BIOGENE
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Suas Dúvidas{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Respondidas
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Perguntas comuns sobre o BIOGENE</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section
        id="agendar"
        className="py-20 md:py-32 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Não Espere Mais para Desvendar{" "}
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                sua Saúde Futura!
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Seu resultado traz informações que irão guiá-lo pelo resto da vida. Não deixe para amanhã o que pode
              transformar sua saúde hoje mesmo.
            </p>
          </div>

          <div className="flex justify-center max-w-4xl mx-auto mb-16">
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 w-full max-w-md">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Fale com um Especialista</h3>
                <p className="text-purple-100 mb-6">
                  Tire suas dúvidas sobre o BIOGENE com nossos geneticistas especializados antes de agendar.
                </p>
                <Link href={`https://wa.me/5583987677807?text=Olá, gostaria de saber mais sobre o Biogene!.`}>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white w-full shadow-lg">
                    <Phone className="mr-2 h-4 w-4" />
                    (83) 9.8767-7807
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto mt-16">
            <div className="text-center">
              <Phone className="h-8 w-8 text-purple-300 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Telefone</h4>
              <p className="text-purple-200">(83) 9.8767-7807</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-pink-300 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Email</h4>
              <p className="text-purple-200">laboratorio_bioanalise@hotmail.com.br</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-indigo-300 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Endereço</h4>
              <p className="text-purple-200">
                Rua Peregrino Filho, 215
                <br />
                Centro - Patos, PB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-16">
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
              <p className="text-purple-100">
                Pioneiros em genética personalizada, oferecendo o que há de mais avançado em análise genética.
              </p>
              <div className="flex items-center space-x-2">
                <Dna className="h-5 w-5 text-purple-400" />
                <span className="text-purple-200 font-semibold">BIOGENE - Seu DNA, Sua Saúde Futura</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-300">Painéis BIOGENE</h3>
              <div className="space-y-2 text-purple-100 text-sm">
                <p>• PERFORMA - Performance e Nutrição</p>
                <p>• PREVINA MAN - Prevenção Masculina</p>
                <p>• PREVINA FEM - Prevenção Feminina</p>
                <p>• PREVINA KIDS - Saúde Infantil</p>
                <p>• BIOGENE MASTER - Análise Completa</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-pink-300">Contato BIOGENE</h3>
              <div className="space-y-3 text-purple-100">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span>(83) 9.8767-7807</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-pink-400" />
                  <span>WhatsApp BIOGENE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-indigo-400" />
                  <span>laboratorio_bioanalise@hotmail.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-teal-400" />
                  <div>
                    <p>Consultoria Genética:</p>
                    <p>Segunda a Sexta: 8h às 17h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-700 mt-12 pt-8 text-center">
            <p className="text-purple-300 text-sm">
              © {new Date().getFullYear()} Laboratório Nferreira - BIOGENE. Todos os direitos reservados. | Seu DNA, Sua
              Saúde Futura - Medicina Personalizada para Toda a Vida
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
