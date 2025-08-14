// components/QuizPanel.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import type { CheckedState } from '@radix-ui/react-checkbox';

// Definições de tipos
interface Panel {
  name: "PERFORMA" | "PREVINA MAN" | "PREVINA FEM" | "PREVINA KIDS" | "BIOANÁLISE MASTER";
  characteristics: string;
  focus: string; // Será usado como a descrição principal do quiz
  highlights: string[];
  color: string;
  exams: string[];
  recommended?: boolean; // Para BIOANÁLISE MASTER
  // Propriedades adicionais para o contexto do quiz/modal, derivadas ou assumidas
  description?: string; // Descrição final para o display do quiz (derivada de focus)
  link?: string; // Link gerado para a seção do painel
  image?: string; // Caminho da imagem gerado
}

interface Answers {
  targetAudience: '' | 'self' | 'child' | 'other_adult';
  biologicalSex: '' | 'male' | 'female' | 'prefer_not_say';
  mainGoals: Array<
    | 'performance'
    | 'prevention_general'
    | 'female_specific'
    | 'male_specific'
    | 'master'
    | 'child_development'
    | 'allergies'
    | 'pediatric_nutrition'
    | 'child_prevention'
  >;
}

// Definição dos painéis (copiada diretamente do seu input)
const panels: Panel[] = [
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
    exams: [/* ... seus exames aqui ... */], // Conteúdo omitido para concisão do exemplo
  },
  {
    name: "PREVINA MAN",
    characteristics: "78-80 características",
    focus: "Prevenção de doenças específicas do sexo masculino",
    highlights: ["Saúde cardiovascular", "Próstata", "Metabolismo hormonal", "Prevenção de doenças"],
    color: "from-green-500 to-teal-500",
    exams: [/* ... seus exames aqui ... */], // Conteúdo omitido para concisão do exemplo
  },
  {
    name: "PREVINA FEM",
    characteristics: "78-80 características",
    focus: "Prevenção de doenças específicas do sexo feminino",
    highlights: ["Saúde hormonal", "Osteoporose", "Câncer de mama/ovário", "Fertilidade"],
    color: "from-pink-500 to-rose-500",
    exams: [/* ... seus exames aqui ... */], // Conteúdo omitido para concisão do exemplo
  },
  {
    name: "PREVINA KIDS",
    characteristics: "78-80 características",
    focus: "Monitoramento da saúde infantil",
    highlights: ["Desenvolvimento infantil", "Alergias e intolerâncias", "Nutrição pediátrica", "Prevenção precoce"],
    color: "from-orange-500 to-yellow-500",
    exams: [/* ... seus exames aqui ... */], // Conteúdo omitido para concisão do exemplo
  },
  {
    name: "BIOANÁLISE MASTER",
    characteristics: "244 características",
    focus: "O teste mais completo para prevenção e saúde personalizada",
    highlights: ["Análise completa", "Todas as especialidades", "Máxima personalização", "Melhor custo-benefício"],
    color: "from-purple-500 to-pink-500",
    recommended: true,
    exams: [/* ... seus exames aqui ... */], // Conteúdo omitido para concisão do exemplo
  },
];

// Estado inicial para as respostas
const initialAnswersState: Answers = {
  targetAudience: '',
  biologicalSex: '',
  mainGoals: [],
};

export const QuizPanel: React.FC = () => {
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Answers>(initialAnswersState);
  const [recommendedPanel, setRecommendedPanel] = useState<Panel | null>(null);

  // Resetar quiz ao fechar o modal ou abrir (para garantir estado limpo)
  useEffect(() => {
    if (!isQuizOpen) {
      resetQuiz();
    }
  }, [isQuizOpen]);

  const handleAnswerChange = <T extends keyof Answers>(question: T, value: Answers[T]) => {
    setAnswers(prev => ({
      ...prev,
      [question]: value,
    }));
  };

  const handleCheckboxChange = (question: 'mainGoals', value: Answers['mainGoals'][number]) => {
    setAnswers(prev => {
      // Cria uma cópia do array atual para manipulação
      const currentValues = (prev[question] as Answers['mainGoals']) || [];
      if (currentValues.includes(value)) {
        // Se o valor já existe, remove-o
        return {
          ...prev,
          [question]: currentValues.filter(item => item !== value),
        };
      } else {
        // Se o valor não existe, adiciona-o
        return {
          ...prev,
          [question]: [...currentValues, value],
        };
      }
    });
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
    setRecommendedPanel(null); // Limpa o resultado se voltar
  };

  const determineRecommendedPanel = (): Panel => {
    const { targetAudience, biologicalSex, mainGoals } = answers;

    let chosenPanel: Panel | undefined;
    let descriptionSuffix: string = '';

    if (targetAudience === 'child') {
      chosenPanel = panels.find(p => p.name === 'PREVINA KIDS');
    } else if (mainGoals.includes('master')) {
      chosenPanel = panels.find(p => p.name === 'BIOANÁLISE MASTER');
    } else {
      const wantsPerformance = mainGoals.includes('performance');
      const wantsPreventionGeneral = mainGoals.includes('prevention_general');
      const wantsFemaleSpecific = mainGoals.includes('female_specific');
      const wantsMaleSpecific = mainGoals.includes('male_specific');

      if (wantsPerformance) {
        chosenPanel = panels.find(p => p.name === 'PERFORMA');
      } else if (biologicalSex === 'female' && (wantsFemaleSpecific || wantsPreventionGeneral)) {
        chosenPanel = panels.find(p => p.name === 'PREVINA FEM');
      } else if (biologicalSex === 'male' && (wantsMaleSpecific || wantsPreventionGeneral)) {
        chosenPanel = panels.find(p => p.name === 'PREVINA MAN');
      } else if (mainGoals.length > 1) { // Se múltiplos objetivos, mas não master, sugere master
        chosenPanel = panels.find(p => p.name === 'BIOANÁLISE MASTER');
        descriptionSuffix = ' Suas diversas necessidades indicam uma solução abrangente.';
      } else { // Fallback para Master se nada muito específico encaixa
        chosenPanel = panels.find(p => p.name === 'BIOANÁLISE MASTER');
        descriptionSuffix = ' Ideal para quem busca a máxima personalização e uma análise completa.';
      }
    }

    // Garante que um painel seja sempre encontrado. Fallback final para BIOANÁLISE MASTER.
    if (!chosenPanel) {
      chosenPanel = panels.find(p => p.name === 'BIOANÁLISE MASTER');
      descriptionSuffix = ' Ideal para quem busca a máxima personalização e uma análise completa.'; // Reafirma a mensagem de fallback
    }

    // Constrói o objeto Panel final para exibição no quiz
    const finalPanel: Panel = {
      ...chosenPanel!, // Afirma que chosenPanel não é null/undefined aqui
      description: (chosenPanel!.focus || '') + descriptionSuffix, // Usa focus como descrição, anexa sufixo
      link: `#${chosenPanel!.name.toLowerCase().replace(/ /g, '-')}`, // Gera link a partir do nome
      // Caminho da imagem baseado no nome. Assumindo que os arquivos de imagem existem (ex: /images/performa.png)
      image: `/images/${chosenPanel!.name.toLowerCase().replace(/ /g, '-')}.png`,
    };

    return finalPanel;
  };

  const handleSubmit = () => {
    const result = determineRecommendedPanel();
    setRecommendedPanel(result);
    setCurrentStep(prev => prev + 1); // Avança para a tela de resultado
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setAnswers(initialAnswersState);
    setRecommendedPanel(null);
  };

  return (
    <div className="text-center mt-16">
      <Card className="border-0 shadow-xl bg-white max-w-4xl mx-auto">
        <CardContent className="p-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Não sabe qual painel escolher?</h4>
          <p className="text-lg text-gray-700 mb-6">
            Responda algumas perguntas simples e descubra qual painel BIOGENE é ideal para seus objetivos de
            saúde.
          </p>
          <Dialog open={isQuizOpen} onOpenChange={setIsQuizOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg shadow-lg">
                <HelpCircle className="mr-2 h-5 w-5" />
                Fazer Quiz Personalizado
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {recommendedPanel ? 'Seu Painel Recomendado' : 'Quiz Personalizado BIOGENE'}
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  {recommendedPanel ? 'Descubra o painel ideal para suas necessidades.' : 'Responda algumas perguntas para encontrarmos o painel perfeito para você.'}
                </DialogDescription>
              </DialogHeader>

              {!recommendedPanel ? (
                // QUIZ STEPS
                <>
                  {currentStep === 1 && (
                    <div className="space-y-4 py-4">
                      <h5 className="text-xl font-semibold mb-3">1. Para quem você está buscando o painel BIOGENE?</h5>
                      <RadioGroup
                        value={answers.targetAudience}
                        onValueChange={(value: Answers['targetAudience']) => handleAnswerChange('targetAudience', value)}
                      >
                        <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="self" id="self" />
                          <Label htmlFor="self" className="text-base">Para mim mesmo(a)</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="child" id="child" />
                          <Label htmlFor="child" className="text-base">Para um(a) filho(a)</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="other_adult" id="other_adult" />
                          <Label htmlFor="other_adult" className="text-base">Para outro(a) adulto(a)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {currentStep === 2 && answers.targetAudience !== 'child' && (
                    <div className="space-y-4 py-4">
                      <h5 className="text-xl font-semibold mb-3">2. Qual é o sexo biológico (da pessoa que fará o teste)?</h5>
                      <RadioGroup
                        value={answers.biologicalSex}
                        onValueChange={(value: Answers['biologicalSex']) => handleAnswerChange('biologicalSex', value)}
                      >
                        <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male" className="text-base">Masculino</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female" className="text-base">Feminino</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="prefer_not_say" id="prefer_not_say" />
                          <Label htmlFor="prefer_not_say" className="text-base">Prefiro não informar / Não se aplica</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {currentStep === 2 && answers.targetAudience === 'child' && (
                    <div className="space-y-4 py-4">
                      <h5 className="text-xl font-semibold mb-3">2. Quais são as principais preocupações com a saúde da criança? (Pode selecionar mais de uma)</h5>
                      <div className="grid gap-3">
                        <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <Checkbox
                            id="child_development"
                            checked={answers.mainGoals.includes('child_development')}
                            onCheckedChange={(checked: CheckedState) => handleCheckboxChange('mainGoals', 'child_development')}
                          />
                          <Label htmlFor="child_development" className="text-base font-normal cursor-pointer">
                            Monitoramento geral do desenvolvimento infantil
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <Checkbox
                            id="allergies"
                            checked={answers.mainGoals.includes('allergies')}
                            onCheckedChange={(checked: CheckedState) => handleCheckboxChange('mainGoals', 'allergies')}
                          />
                          <Label htmlFor="allergies" className="text-base font-normal cursor-pointer">
                            Investigar alergias e intolerâncias
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <Checkbox
                            id="pediatric_nutrition"
                            checked={answers.mainGoals.includes('pediatric_nutrition')}
                            onCheckedChange={(checked: CheckedState) => handleCheckboxChange('mainGoals', 'pediatric_nutrition')}
                          />
                          <Label htmlFor="pediatric_nutrition" className="text-base font-normal cursor-pointer">
                            Otimizar nutrição pediátrica
                          </Label>
                        </div>
                         <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <Checkbox
                            id="child_prevention"
                            checked={answers.mainGoals.includes('child_prevention')}
                            onCheckedChange={(checked: CheckedState) => handleCheckboxChange('mainGoals', 'child_prevention')}
                          />
                          <Label htmlFor="child_prevention" className="text-base font-normal cursor-pointer">
                            Prevenção precoce de condições de saúde
                          </Label>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && answers.targetAudience !== 'child' && (
                    <div className="space-y-4 py-4">
                      <h5 className="text-xl font-semibold mb-3">3. Quais são seus principais objetivos de saúde? (Pode selecionar mais de um)</h5>
                      <div className="grid gap-3">
                        <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <Checkbox
                            id="performance"
                            checked={answers.mainGoals.includes('performance')}
                            onCheckedChange={(checked: CheckedState) => handleCheckboxChange('mainGoals', 'performance')}
                          />
                          <Label htmlFor="performance" className="text-base font-normal cursor-pointer">
                            Otimizar performance física, ganho de massa muscular ou emagrecimento
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <Checkbox
                            id="prevention_general"
                            checked={answers.mainGoals.includes('prevention_general')}
                            onCheckedChange={(checked: CheckedState) => handleCheckboxChange('mainGoals', 'prevention_general')}
                          />
                          <Label htmlFor="prevention_general" className="text-base font-normal cursor-pointer">
                            Prevenção geral de doenças e longevidade
                          </Label>
                        </div>
                        {answers.biologicalSex === 'female' && (
                          <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                            <Checkbox
                              id="female_specific"
                              checked={answers.mainGoals.includes('female_specific')}
                              onCheckedChange={(checked: CheckedState) => handleCheckboxChange('mainGoals', 'female_specific')}
                            />
                            <Label htmlFor="female_specific" className="text-base font-normal cursor-pointer">
                              Monitorar saúde hormonal feminina, óssea (osteoporose) ou reprodutiva (câncer/fertilidade)
                            </Label>
                          </div>
                        )}
                        {answers.biologicalSex === 'male' && (
                          <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                            <Checkbox
                              id="male_specific"
                              checked={answers.mainGoals.includes('male_specific')}
                              onCheckedChange={(checked: CheckedState) => handleCheckboxChange('mainGoals', 'male_specific')}
                            />
                            <Label htmlFor="male_specific" className="text-base font-normal cursor-pointer">
                              Monitorar saúde cardiovascular ou da próstata
                            </Label>
                          </div>
                        )}
                        <div className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <Checkbox
                            id="master"
                            checked={answers.mainGoals.includes('master')}
                            onCheckedChange={(checked: CheckedState) => handleCheckboxChange('mainGoals', 'master')}
                          />
                          <Label htmlFor="master" className="text-base font-normal cursor-pointer">
                            Ter a análise mais completa e personalizada possível, cobrindo todas as áreas da saúde
                          </Label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <DialogFooter className="mt-6 flex justify-between">
                    {currentStep > 1 && (
                      <Button variant="outline" onClick={handleBack}>
                        Voltar
                      </Button>
                    )}
                    {/* Botão Próximo/Ver Resultado condicionalmente habilitado */}
                    {((currentStep === 1 && answers.targetAudience) ||
                      (currentStep === 2 && answers.targetAudience === 'child' && answers.mainGoals.length > 0) ||
                      (currentStep === 2 && answers.targetAudience !== 'child' && answers.biologicalSex) ||
                      (currentStep === 3 && answers.mainGoals.length > 0)) && (
                        <Button
                          onClick={currentStep === 3 || answers.targetAudience === 'child' ? handleSubmit : handleNext}
                          className="ml-auto"
                        >
                          {currentStep === 3 || answers.targetAudience === 'child' ? 'Ver Resultado' : 'Próximo'}
                        </Button>
                    )}
                  </DialogFooter>
                </>
              ) : (
                // RESULT SCREEN
                <div className="py-4 text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{recommendedPanel.name}</h3>
                  <p className="text-lg text-gray-700 mb-6">{recommendedPanel.description}</p>
                  
                  <Button
                    onClick={() => {
                      setIsQuizOpen(false);
                      // Opcional: Rolar para a seção do painel no site
                      if (recommendedPanel.link) {
                        window.location.href = recommendedPanel.link;
                      }
                    }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg shadow-lg"
                  >
                    Ver Detalhes do Painel
                  </Button>
                  <Button variant="link" onClick={resetQuiz} className="mt-4 text-purple-600 hover:text-purple-700">
                    Refazer Quiz
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};