type ModsType = Record<string, string | boolean>;

export function classNames(
    cls: string,
    mods?: ModsType,
    additional?: string[]
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(" ");
}
