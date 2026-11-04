function parseYearMonth(dateStr: string): { year: number; month: number } {
    const match = dateStr.match(/^(\d{4})[-/](\d{1,2})/);
    if (match) {
        return {
            year: parseInt(match[1], 10),
            month: parseInt(match[2], 10),
        };
    }
    const d = new Date(dateStr);
    return {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
    };
}

export function calcularDuracao(startDate: string, endDate?: string): string {
    const inicio = parseYearMonth(startDate);

    let fim: { year: number; month: number };
    if (endDate && endDate.trim() !== "") {
        fim = parseYearMonth(endDate);
    } else {
        const now = new Date();
        fim = {
            year: now.getFullYear(),
            month: now.getMonth() + 1,
        };
    }

    // Padrão LinkedIn / profissional: cálculo inclusivo de meses no período
    let meses = (fim.year - inicio.year) * 12 + (fim.month - inicio.month) + 1;
    if (meses < 1) meses = 1;

    const anos = Math.floor(meses / 12);
    const mesesRestantes = meses % 12;

    const partes: string[] = [];
    if (anos > 0) partes.push(`${anos} ano${anos > 1 ? "s" : ""}`);
    if (mesesRestantes > 0 || anos === 0)
        partes.push(`${mesesRestantes} ${mesesRestantes === 1 ? "mês" : "meses"}`);

    return partes.join(" e ");
}
