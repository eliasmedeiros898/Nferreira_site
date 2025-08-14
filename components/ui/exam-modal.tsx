import React, { useEffect, useRef, useState } from 'react'; // Importar useState
import { X } from 'lucide-react'; // Ícone de fechar

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  panelName: string;
  exams: string[];
}

const ExamModal: React.FC<ExamModalProps> = ({ isOpen, onClose, panelName, exams }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de busca

  // Efeito para gerenciar o foco e o fechamento com a tecla ESC
  useEffect(() => {
    if (isOpen) {
      // Foca no modal quando ele é aberto para acessibilidade
      modalRef.current?.focus();

      // Desabilita o scroll do body para evitar scroll duplo
      document.body.style.overflow = 'hidden';

      // Adiciona event listener para fechar com a tecla ESC
      const handleEscape = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEscape);

      return () => {
        // Restaura o scroll do body ao fechar o modal
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      // Garante que o scroll é restaurado se o modal for fechado por outros meios
      document.body.style.overflow = 'unset';
      // Limpa o termo de busca quando o modal é fechado para uma nova abertura limpa
      setSearchTerm('');
    }
  }, [isOpen, onClose]); // Dependências: re-executa quando isOpen ou onClose mudam

  // Filtra os exames com base no termo de busca
  const filteredExams = exams.filter(exam =>
    exam.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    // Overlay do modal: fundo escuro que ocupa toda a tela
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 overflow-y-auto"
      onClick={onClose} // Fecha o modal ao clicar fora do conteúdo
      role="dialog" // Semântica ARIA para indicar que é um diálogo
      aria-modal="true" // Indica que o conteúdo principal está inativo
      aria-labelledby="modal-title" // Associa o título do modal para leitores de tela
      tabIndex={-1} // Permite que o div seja focado programaticamente
      ref={modalRef} // Referência para focar no modal
    >
      {/* Conteúdo do modal: previne o fechamento ao clicar dentro */}
      <div
        className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-xl md:w-[700px] relative animate-fade-in-up transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()} // Impede que o clique no conteúdo feche o modal
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
          aria-label="Fechar modal" // Acessibilidade para leitores de tela
          title="Fechar" // Dica de ferramenta ao passar o mouse
        >
          <X className="h-6 w-6" />
        </button>
        <h2 id="modal-title" className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          {panelName} - Exames Detalhados
        </h2>

        {/* Barra de busca */}
        <input
          type="text"
          placeholder="Buscar exame..."
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar exames"
        />

        {filteredExams.length > 0 ? (
          <ul className="space-y-3 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            {filteredExams.map((exam, index) => (
              <li key={index} className="flex items-start space-x-3 text-gray-700">
                <span className="text-purple-600 text-xl font-semibold flex-shrink-0">•</span>
                <span className="text-base leading-relaxed">{exam}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 italic">
            {exams.length > 0
              ? `Nenhum exame encontrado com o termo "${searchTerm}".`
              : 'Nenhum exame listado para este painel no momento. Por favor, entre em contato para mais informações.'
            }
          </p>
        )}
        <div className="mt-6 pt-4 border-t text-sm text-gray-500">
          <p>Para informações mais detalhadas sobre cada exame, incluindo preparo, prazos e valores, entre em contato com nossa equipe de atendimento.</p>
        </div>
      </div>
    </div>
  );
};

export default ExamModal;