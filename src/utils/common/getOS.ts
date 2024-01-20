/* eslint-disable prefer-const */
/* eslint-disable complexity */

export function getOS(): string | undefined {
    let uA = navigator.userAgent || navigator.vendor
    if (/iPad|iPhone|iPod/.test(uA) || (uA.includes('Mac') && 'ontouchend' in document))
        return 'iOS'

    let i,
        os = ['Windows', 'Android', 'Unix', 'Mac', 'Linux', 'BlackBerry']
    for (i = 0; i < os.length; i++) if (new RegExp(os[i], 'i').test(uA)) return os[i]
}
