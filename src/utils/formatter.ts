export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "AKZ",
  minimumFractionDigits: 2,
});

export const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "numeric",
  minute: "numeric",
});
