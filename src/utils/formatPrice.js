const euro = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
});

export function formatPrice(value) {
    return euro.format(value);
}
