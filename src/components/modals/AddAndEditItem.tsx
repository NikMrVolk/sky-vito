'use client'

import BackLinkWithCross from '../common/BackTextWithCross'
import Button from '../UI/buttons/Button'
import InputWithTitle from '../UI/inputs/InputWithTitle'

interface AddAndEditItemProps {
    setActive: (v: boolean) => void
}

const ss = ['1', '1', '1', '1', '1']

export default function AddAndEditItem({ setActive }: AddAndEditItemProps) {
    return (
        <div className="flex flex-col gap-7.5">
            <BackLinkWithCross
                text="Новое объявление"
                onClick={() => setActive(false)}
                classes={{ wrapper: 'sm:flex', arrow: 'sm:hidden' }}
            />
            <InputWithTitle
                title="Название"
                placeholder="Я хочу продать..."
                classes={{ title: 'text-black' }}
            />
            <InputWithTitle
                title="Описание"
                placeholder="Описание..."
                classes={{ title: 'text-black' }}
            >
                <textarea
                    className="min-h-27 resize-none rounded-5 border border-black/20 px-4.25 py-2.5 
                    text-sm focus:border-layoutBlue focus:outline-none sm:rounded-md sm:text-base"
                    placeholder="Самый..."
                />
            </InputWithTitle>
            <InputWithTitle
                title="Описание товара"
                description="не более 5 фотографий"
                placeholder=""
                classes={{
                    title: 'text-black flex gap-0 flex-col',
                    description: 'text-layoutLightGray',
                }}
            >
                <div className="flex gap-2.5 overflow-x-scroll pb-2 sm:overflow-x-hidden">
                    {ss.map(el => (
                        <label
                            key={el}
                            className="flex h-22.5 w-22.5 items-center justify-center bg-gray-400"
                        >
                            <input type="file" accept="image/*" className="hidden" multiple />
                            <div className="px-11">+</div>
                        </label>
                    ))}
                </div>
            </InputWithTitle>
            <InputWithTitle title="Цена" placeholder="" classes={{ wrapper: '-mt-2' }}>
                <div className="relative">
                    <input
                        type="number"
                        className="w-full rounded-5 border border-black/20 py-2.5 pl-4.25 pr-10 
                    text-sm focus:border-layoutBlue focus:outline-none sm:rounded-md sm:text-base"
                    />
                    <span className="absolute bottom-1/3 right-4 text-base leading-4">₽</span>
                </div>
            </InputWithTitle>
            <Button>Опубликовать</Button>
        </div>
    )
}
