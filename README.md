# Tabuada Interativa — Planejamento de Evolução

## Visão
Transformar este projeto em uma plataforma educacional de matemática simples, divertida e eficaz, ajudando:
- crianças e alunos a aprenderem com autonomia;
- pais a acompanharem o progresso em casa;
- professores a planejarem atividades e monitorarem aprendizagem.

## Missão
Facilitar o aprendizado de matemática com prática guiada, feedback imediato e recursos pedagógicos úteis para escola e família.

## Público-alvo
- **Crianças (6 a 10 anos):** foco em engajamento, repetição leve e confiança.
- **Alunos (11+):** prática por nível, desafios e evolução contínua.
- **Pais e responsáveis:** visão clara de desempenho e pontos de reforço.
- **Professores:** criação rápida de atividades, relatórios e acompanhamento da turma.

## Estado atual do projeto
Atualmente a aplicação já possui:
- gerador de tabuada;
- desafio de multiplicação com pontuação e taxa de acerto;
- modo professor com geração de lista e impressão/PDF.

---

## Roadmap de futuras implementações

## Fase 1 — Base pedagógica sólida (curto prazo)
**Objetivo:** consolidar experiência de uso e ampliar conteúdo básico.

Funcionalidades planejadas:
- prática por operação: adição, subtração, multiplicação e divisão;
- seleção de tema por número (ex.: tabuada do 7) e por intervalo;
- níveis adaptativos automáticos (aumenta/diminui dificuldade conforme desempenho);
- revisão de erros recentes com re-tentativas guiadas;
- cronômetro opcional para treino de fluência.

Critérios de sucesso:
- aumento da taxa de acerto por sessão;
- redução de erros repetidos na mesma operação.

## Fase 2 — Perfis e acompanhamento (médio prazo)
**Objetivo:** permitir trilhas personalizadas para aluno, família e escola.

Funcionalidades planejadas:
- perfis de usuário (aluno, responsável, professor);
- histórico de sessões e progresso por operação;
- metas semanais de estudo com lembretes;
- painel para responsáveis com evolução simples e recomendações;
- exportação de relatórios em PDF para acompanhamento escolar.

Critérios de sucesso:
- maior frequência de estudo semanal;
- melhor consistência de uso por usuário ativo.

## Fase 3 — Ferramentas para professores (médio/longo prazo)
**Objetivo:** tornar a plataforma útil no planejamento e na rotina da sala.

Funcionalidades planejadas:
- criação de turmas e cadastro de alunos;
- montagem de atividades por dificuldade e tema;
- banco de questões reutilizáveis;
- correção automática de atividades digitais;
- visão da turma (acertos, dificuldades por assunto, alunos em risco).

Critérios de sucesso:
- redução de tempo de preparação de atividades;
- maior capacidade de identificar dificuldades da turma cedo.

## Fase 4 — Gamificação educativa e inclusão (longo prazo)
**Objetivo:** elevar engajamento sem perder foco pedagógico.

Funcionalidades planejadas:
- sistema de missões, medalhas e trilhas de progresso;
- desafios cooperativos (aluno + família);
- avatares e recompensas visuais educativas;
- recursos de acessibilidade ampliados (alto contraste, leitura em voz, navegação por teclado completa);
- modo offline para uso em ambientes com internet limitada.

Critérios de sucesso:
- maior retenção de alunos;
- melhora da participação de usuários com diferentes necessidades.

---

## Planejamento técnico sugerido

## Arquitetura
- separar front-end em módulos (UI, lógica de exercícios, relatórios);
- preparar API para persistência de usuários, desempenho e atividades;
- adotar estrutura de dados por competência matemática (habilidades).

## Qualidade e segurança
- testes unitários para regras de cálculo e pontuação;
- testes de interface para fluxos críticos (aluno e professor);
- validação de dados de entrada e proteção de informações pessoais;
- política simples de backup e recuperação de dados.

## Métricas de produto
- taxa de acerto por habilidade;
- tempo médio por questão;
- frequência semanal de uso;
- evolução individual e da turma;
- taxa de conclusão de atividades.

---

## Princípios pedagógicos do projeto
- aprendizado progressivo (do simples ao complexo);
- prática com feedback rápido e claro;
- reforço dos erros para consolidação;
- linguagem acessível e acolhedora;
- protagonismo de aluno, parceria com família e suporte ao professor.

## Próximos passos práticos (sprint sugerida)
1. Implementar seleção por tema (tabuada específica e operação).
2. Salvar histórico local de sessões (navegador).
3. Criar tela de progresso com gráficos simples.
4. Evoluir modo professor para montar listas por objetivo.
5. Definir base inicial de testes automatizados.

## Objetivo final
Evoluir de um app de tabuada para uma plataforma de matemática com impacto real no aprendizado, conectando escola e família com dados claros, prática inteligente e experiência inclusiva.