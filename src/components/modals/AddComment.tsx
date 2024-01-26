'use client'

import BackLinkWithCross from '../common/BackTextWithCross'
import Button from '../UI/buttons/Button'
import InputWrapper from '../UI/inputs/InputWrapper'
import TextArea from '../UI/inputs/TextArea'

import { IComments } from '@/services/items/items.types'
interface AddCommentProps {
    setActive: (v: boolean) => void
    comments: IComments[]
}

export default function AddComment({ setActive, comments }: AddCommentProps) {
    return (
        <div className="flex max-w-150 flex-col gap-7.5 overflow-y-scroll sm:max-w-120">
            <BackLinkWithCross
                text="Отзывы о товаре"
                onClick={() => setActive(false)}
                classes={{ wrapper: 'sm:flex', arrow: 'sm:hidden' }}
            />
            <InputWrapper title="Описание" classes={{ title: 'text-black' }}>
                <TextArea placeholder="Описание..." value="" onChange={() => {}} />
            </InputWrapper>
            <Button>Опубликовать</Button>
            <div className="flex flex-col gap-7.5 sm:max-h-75">
                {comments?.map(el => (
                    <div key={el.id} className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-layoutGray/50 px-5" />
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2.5">
                                <div>{el.author.name}</div>
                                <div>{el.created_on}</div>
                            </div>
                            <div>
                                <p>{el.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
