export const cuttingItemNameInCard = (itemName: string, windowWidth: number): string => {
    if (itemName.length > 35) {
        const arr = itemName.split('')

        if (windowWidth < 640 && itemName.length > 30) {
            arr.splice(25)
        } else {
            arr.splice(35)
        }
        arr.push('...')
        return arr.join('')
    }

    return itemName
}
