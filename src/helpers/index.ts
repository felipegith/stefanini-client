export function formatDate(date : Date){
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export function formatCpf(value: string): string {
  const digits = value.replace(/\D/g, "");

  return digits
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})?/, "$1.$2.$3-$4")
    .slice(0, 14); 
}
