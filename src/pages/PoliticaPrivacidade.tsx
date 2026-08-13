/**
 * Página de Política de Privacidade — Studios Veneto / RAC Imóveis
 *
 * Versão definitiva — publicada em produção.
 */

interface SecaoProps {
    numero: string;
    titulo: string;
    children: React.ReactNode;
  }
  
  function Secao({ numero, titulo, children }: SecaoProps) {
    return (
      <section className="scroll-mt-24" id={`secao-${numero}`}>
        <div className="flex items-baseline gap-3 mb-3">
          <span className="font-mono text-sm text-terracota">{numero}</span>
          <h2 className="font-display text-2xl text-charcoal">{titulo}</h2>
        </div>
        <div className="text-charcoal/80 leading-relaxed space-y-3 pl-0 sm:pl-9">
          {children}
        </div>
      </section>
    );
  }
  
  const secoes = [
    { numero: "01", titulo: "Quem somos" },
    { numero: "02", titulo: "Quais dados coletamos" },
    { numero: "03", titulo: "Para que usamos seus dados" },
    { numero: "04", titulo: "Base legal" },
    { numero: "05", titulo: "Com quem compartilhamos" },
    { numero: "06", titulo: "Por quanto tempo guardamos" },
    { numero: "07", titulo: "Seus direitos" },
    { numero: "08", titulo: "Segurança" },
    { numero: "09", titulo: "Cookies" },
    { numero: "10", titulo: "Alterações desta política" },
    { numero: "11", titulo: "Fale com o encarregado" },
    { numero: "12", titulo: "Avisos legais" },
  ];
  
  export function PoliticaPrivacidade() {
    return (
      <div className="min-h-screen bg-base text-charcoal">
        <header className="border-b border-charcoal/10 px-6 py-10 sm:py-14">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm tracking-wide uppercase text-terracota mb-2">
              Studios Veneto — RAC Imóveis
            </p>
            <h1 className="font-display text-3xl sm:text-4xl text-charcoal">
              Política de Privacidade
            </h1>
            <p className="text-charcoal/60 text-sm mt-3">
              Última atualização: 13 de agosto de 2026
            </p>
          </div>
        </header>
  
        <div className="max-w-3xl mx-auto px-6 py-10 sm:py-14 grid sm:grid-cols-[180px_1fr] gap-10">
          <nav className="hidden sm:block sticky top-10 self-start">
            <p className="text-xs uppercase tracking-wide text-charcoal/40 mb-3">Índice</p>
            <ul className="space-y-2 text-sm">
              {secoes.map((s) => (
                <li key={s.numero}>
                  <a href={`#secao-${s.numero}`} className="text-charcoal/70 hover:text-terracota transition-colors">
                    {s.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
  
          <main className="space-y-12">
            <p className="text-charcoal/80 leading-relaxed">
              Esta política explica como a <strong>R. A. C. Imóveis Ltda</strong> coleta, usa e protege os dados pessoais fornecidos por você ao preencher o formulário de contato da landing page do <strong>Studios Veneto</strong>, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>
  
            <Secao numero="01" titulo="Quem somos">
              <p>
                A R. A. C. Imóveis Ltda - ME, inscrita no CNPJ nº 11.342.958/0001-87, com sede na Rua João Gbur, 1221, Santa Cândida, Curitiba/PR, CEP 82640-000, é a responsável pelo tratamento dos dados pessoais coletados através deste site, na qualidade de controladora, conforme definido pela LGPD.
              </p>
            </Secao>
  
            <Secao numero="02" titulo="Quais dados coletamos">
              <p>Coletamos apenas os dados que você mesmo nos fornece ao preencher o formulário de contato:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nome completo</li>
                <li>Telefone</li>
                <li>E-mail</li>
              </ul>
              <p>Não coletamos dados sensíveis (como origem racial, saúde, orientação sexual etc.) nem dados de menores de idade através deste formulário.</p>
            </Secao>
  
            <Secao numero="03" titulo="Para que usamos seus dados">
              <p>Os dados fornecidos são usados exclusivamente para:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Entrar em contato com você sobre o empreendimento Studios Veneto (informações, disponibilidade de unidades, condições de pagamento)</li>
                <li>Encaminhar seu contato à equipe comercial responsável pelo atendimento</li>
                <li>Enviar comunicações relacionadas ao empreendimento, quando aplicável</li>
              </ul>
              <p>Não utilizamos seus dados para finalidades diferentes das informadas aqui, nem os vendemos a terceiros.</p>
            </Secao>
  
            <Secao numero="04" titulo="Base legal">
              <p>
                O tratamento dos seus dados se baseia no <strong>legítimo interesse</strong> da R. A. C. Imóveis Ltda em responder a uma solicitação de contato ativamente feita por você, nos termos do art. 7º, IX, da LGPD, e/ou no seu <strong>consentimento</strong>, expresso ao marcar a caixa de aceite no momento do envio do formulário (art. 7º, I).
              </p>
            </Secao>
  
            <Secao numero="05" titulo="Com quem compartilhamos">
              <p>
                Seus dados podem ser acessados pelos seguintes operadores, que nos auxiliam na infraestrutura técnica do site e no atendimento comercial:
              </p>
  
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-charcoal">Equipe comercial da RAC Imóveis</p>
                  <p className="text-sm">Para realizar o contato solicitado por você através do formulário.</p>
                </div>
  
                <div>
                  <p className="font-medium text-charcoal">Neon Database (Neon, Inc.)</p>
                  <p className="text-sm">
                    Empresa de tecnologia com sede em Menlo Park, Califórnia, Estados Unidos, responsável pelo armazenamento seguro das informações enviadas pelo formulário. O banco de dados utilizado por este site está hospedado especificamente na região de São Paulo, Brasil, embora a empresa controladora da infraestrutura seja americana.
                  </p>
                </div>
  
                <div>
                  <p className="font-medium text-charcoal">Brevo (Sendinblue SAS)</p>
                  <p className="text-sm">
                    Empresa de tecnologia com sede em Paris, França, responsável pelo envio automatizado de notificações por e-mail relacionadas ao seu contato. O processamento dessas notificações pode ocorrer em servidores localizados fora do Brasil.
                  </p>
                </div>
              </div>
  
              <p>
                Nos casos em que há <strong>transferência internacional de dados</strong> (Neon e Brevo), essa transferência ocorre com base nas salvaguardas contratuais oferecidas por esses fornecedores, incluindo cláusulas contratuais padrão equivalentes às exigidas pela Autoridade Nacional de Proteção de Dados (ANPD), nos termos do art. 33 da LGPD.
              </p>
  
              <p>Não compartilhamos seus dados com terceiros para fins de publicidade ou revenda.</p>
            </Secao>
  
            <Secao numero="06" titulo="Por quanto tempo guardamos">
              <p>Mantemos seus dados pelo tempo necessário para cumprir a finalidade do contato comercial, ou por até 5 anos, correspondente ao prazo prescricional geral do Código de Defesa do Consumidor, o que ocorrer primeiro. Você pode solicitar a exclusão antecipada a qualquer momento, conforme a seção 7 abaixo.</p>
            </Secao>
  
            <Secao numero="07" titulo="Seus direitos">
              <p>Conforme os artigos 17 a 22 da LGPD, você tem direito a:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Confirmar a existência de tratamento dos seus dados</li>
                <li>Acessar os dados que temos sobre você</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a exclusão dos seus dados, quando não houver obrigação legal de mantê-los</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Solicitar a portabilidade dos dados a outro fornecedor</li>
              </ul>
              <p>Para exercer qualquer um desses direitos, entre em contato pelo canal indicado na seção 11.</p>
            </Secao>
  
            <Secao numero="08" titulo="Segurança">
              <p>Adotamos medidas técnicas razoáveis para proteger seus dados contra acessos não autorizados, perda ou uso indevido, incluindo conexões criptografadas (HTTPS) e controle de acesso ao banco de dados. Nenhum sistema é 100% livre de riscos, mas trabalhamos para manter esse risco o mais baixo possível.</p>
            </Secao>
  
            <Secao numero="09" titulo="Cookies">
              <p>Este site não utiliza cookies de rastreamento, análise de comportamento ou publicidade (como Google Analytics ou Meta Pixel). Utilizamos apenas os recursos técnicos estritamente necessários para o funcionamento do site e do formulário de contato.</p>
            </Secao>
  
            <Secao numero="10" titulo="Alterações desta política">
              <p>Esta política pode ser atualizada periodicamente para refletir melhorias no site ou mudanças na legislação. A data da última atualização estará sempre indicada no topo desta página.</p>
            </Secao>
  
            <Secao numero="11" titulo="Fale com o encarregado">
              <p>Para dúvidas, solicitações ou exercício dos seus direitos relacionados aos seus dados pessoais, entre em contato com o encarregado de proteção de dados (DPO) da R. A. C. Imóveis Ltda:</p>
              <p className="font-medium">E-mail: racimoveisltda@gmail.com</p>
            </Secao>

            <Secao numero="12" titulo="Avisos legais">
                <p>
                    Além das informações sobre proteção de dados descritas nesta política,
                    reforçamos os seguintes avisos sobre o conteúdo deste site:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                    As informações, valores e condições de pagamento apresentados neste
                    site são de caráter informativo e estão sujeitos a alteração sem
                    aviso prévio, devendo ser confirmados diretamente com a equipe
                    comercial responsável.
                    </li>
                    <li>
                    As imagens de perspectivas artísticas, plantas e simulações
                    exibidas são meramente ilustrativas e podem não retratar com
                    exatidão o produto final entregue.
                    </li>
                    <li>
                    Todo o conteúdo deste site (textos, imagens e identidade visual) é
                    de propriedade da RAC Imóveis e da MK2 Incorporadora, sendo vedada
                    sua reprodução sem autorização prévia.
                    </li>
                    <li>
                    A negociação, contratação e demais condições comerciais estão
                    sujeitas exclusivamente aos termos definidos em contrato formal de
                    compra e venda, não sendo este site, por si só, uma proposta
                    vinculante.
                    </li>
                </ul>
            </Secao>
          </main>
        </div>
      </div>
    );
  }