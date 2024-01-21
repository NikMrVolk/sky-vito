'use client'

import BackLinkWithCross from '../common/BackTextWithCross'
import Button from '../UI/buttons/Button'
import InputWithTitle from '../UI/inputs/InputWithTitle'
import TextArea from '../UI/inputs/TextArea'

interface AddCommentProps {
    setActive: (v: boolean) => void
}

const ss = ['1', '1', '1', '1', '1']

export default function AddComment({ setActive }: AddCommentProps) {
    return (
        <div className="flex max-w-150 flex-col gap-7.5 overflow-y-scroll sm:max-w-120">
            <BackLinkWithCross
                text="Отзывы о товаре"
                onClick={() => setActive(false)}
                classes={{ wrapper: 'sm:flex', arrow: 'sm:hidden' }}
            />
            <InputWithTitle
                title="Описание"
                placeholder="Описание..."
                classes={{ title: 'text-black' }}
            >
                <TextArea placeholder="Ваш комментарий" />
            </InputWithTitle>
            <Button>Опубликовать</Button>
            <div className="flex flex-col gap-7.5 sm:max-h-75">
                {ss.map(el => (
                    <div key={el} className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-layoutGray/50 px-5" />
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2.5">
                                <div>Олег</div>
                                <div>14 августа</div>
                            </div>
                            <div>
                                Комментарий
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
