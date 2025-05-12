export function formatDate(date : Date | string){
  const d = new Date(date);
  return new Intl.DateTimeFormat("pt-BR").format(d);
}

export function formatCpf(value: string): string {
  const digits = value.replace(/\D/g, "");

  return digits
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})?/, "$1.$2.$3-$4")
    .slice(0, 14); 
}

export const formatDateInput = (value: string): string => {
  let cleaned = value.replace(/\D/g, '');
  
  if (cleaned.length > 2) cleaned = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
  if (cleaned.length > 5) cleaned = `${cleaned.slice(0, 5)}/${cleaned.slice(5, 9)}`;
  
  return cleaned;
};