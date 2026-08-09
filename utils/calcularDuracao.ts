export function calcularDuracao(startDate: string, endDate?: string): string {
    const inicio = new Date(startDate);
    const fim = endDate ? new Date(endDate) : new Date();

    let meses =
        (fim.getFullYear() - inicio.getFullYear()) * 12 +
        (fim.getMonth() - inicio.getMonth());

    if (fim.getDate() < inicio.getDate()) meses--;
    if (meses < 0) meses = 0;

    const anos = Math.floor(meses / 12);
    const mesesRestantes = meses % 12;

    const partes: string[] = [];
    if (anos > 0) partes.push(`${anos} ano${anos > 1 ? "s" : ""}`);
    if (mesesRestantes > 0 || anos === 0)
        partes.push(`${mesesRestantes} ${mesesRestantes === 1 ? "mês" : "meses"}`);

    return partes.join(" e ");
}