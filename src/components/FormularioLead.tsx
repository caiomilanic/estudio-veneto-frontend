import { useState, type FormEvent } from "react";
import { submitLead } from "../services/api";

type Status = "idle" | "loading" | "success" | "error";
type Errors = { nome?: string; telefone?: string; email?: string; preferenciaContato?: string };

const opcoesContato = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "E-mail" },
  { value: "ligacao", label: "Ligação" },
];

function formatarTelefone(valor: string) {
  const digits = valor.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validar(nome: string, telefone: string, email: string, preferenciaContato: string): Errors {
  const errors: Errors = {};

  if (nome.trim().length < 3) errors.nome = "Digite seu nome completo";

  const telefoneDigits = telefone.replace(/\D/g, "");
  if (telefoneDigits.length < 10) errors.telefone = "Telefone incompleto";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) errors.email = "Digite um e-mail válido";

  if (!preferenciaContato) errors.preferenciaContato = "Escolha uma forma de contato";

  return errors;
}

export function FormularioLead() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [preferenciaContato, setPreferenciaContato] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validar(nome, telefone, email, preferenciaContato);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      await submitLead({ nome, telefone, email, preferenciaContato });
      setStatus("success");
      setNome("");
      setTelefone("");
      setEmail("");
      setPreferenciaContato("");
      setErrors({});
    } catch (err) {
      console.error("Erro ao enviar lead:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="bg-charcoal py-20 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <span className="font-sans text-madeira text-sm tracking-[0.2em] uppercase">
          Fale com um especialista
        </span>

        <h2 className="font-display text-surface text-4xl md:text-5xl mt-3">
          Quero conhecer o Studios Vêneto
        </h2>

        <p className="font-sans text-surface/70 text-base mt-4 max-w-lg mx-auto">
          Preencha o formulário e receba todas as informações sobre plantas,
          valores e condições de pagamento.
        </p>

        {status === "success" ? (
          <div className="mt-10 bg-surface/10 border border-oliva rounded-2xl p-8">
            <p className="font-display text-surface text-xl">Recebemos seu contato!</p>
            <p className="font-sans text-surface/70 text-sm mt-2">
              Um de nossos corretores vai falar com você em breve.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-10 flex flex-col gap-4 text-left">
            <div>
              <label htmlFor="nome" className="font-sans text-surface/70 text-sm">Nome</label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={`w-full mt-1 bg-surface/5 border rounded-lg px-4 py-3 text-surface font-sans focus:outline-none focus:border-terracota ${errors.nome ? "border-terracota" : "border-surface/20"}`}
              />
              {errors.nome && <p className="text-terracota text-xs mt-1 font-sans">{errors.nome}</p>}
            </div>

            <div>
              <label htmlFor="telefone" className="font-sans text-surface/70 text-sm">Telefone</label>
              <input
                id="telefone"
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                placeholder="(41) 99999-9999"
                className={`w-full mt-1 bg-surface/5 border rounded-lg px-4 py-3 text-surface font-sans focus:outline-none focus:border-terracota ${errors.telefone ? "border-terracota" : "border-surface/20"}`}
              />
              {errors.telefone && <p className="text-terracota text-xs mt-1 font-sans">{errors.telefone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="font-sans text-surface/70 text-sm">E-mail</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full mt-1 bg-surface/5 border rounded-lg px-4 py-3 text-surface font-sans focus:outline-none focus:border-terracota ${errors.email ? "border-terracota" : "border-surface/20"}`}
              />
              {errors.email && <p className="text-terracota text-xs mt-1 font-sans">{errors.email}</p>}
            </div>

            <fieldset>
              <legend className="font-sans text-surface/70 text-sm mb-2">Prefere ser contatado por:</legend>
              <div className="flex gap-2">
                {opcoesContato.map((opcao) => (
                  <label
                    key={opcao.value}
                    className={`flex-1 text-center cursor-pointer rounded-lg px-3 py-3 text-sm font-sans border transition-colors ${
                      preferenciaContato === opcao.value
                        ? "bg-terracota border-terracota text-surface"
                        : "bg-surface/5 border-surface/20 text-surface/70 hover:border-surface/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="preferenciaContato"
                      value={opcao.value}
                      checked={preferenciaContato === opcao.value}
                      onChange={(e) => setPreferenciaContato(e.target.value)}
                      className="sr-only"
                    />
                    {opcao.label}
                  </label>
                ))}
              </div>
              {errors.preferenciaContato && <p className="text-terracota text-xs mt-1 font-sans">{errors.preferenciaContato}</p>}
            </fieldset>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-4 bg-terracota text-surface font-sans text-sm px-6 py-4 rounded-full hover:bg-terracota/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Enviando..." : "Receber informações"}
            </button>

            {status === "error" && (
              <p className="font-sans text-terracota text-sm text-center">
                Algo deu errado ao enviar. Tente novamente ou fale direto pelo WhatsApp.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}