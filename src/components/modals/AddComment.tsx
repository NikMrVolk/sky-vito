'use client'

import Image from 'next/image'

import BackLinkWithCross from '../common/BackTextWithCross'
import Button from '../UI/buttons/Button'
import InputWrapper from '../UI/inputs/InputWrapper'
import TextArea from '../UI/inputs/TextArea'

import { IComments } from '@/services/items/items.types'
import { API_URL } from '@/utils/constants/routes'

interface AddCommentProps {
    setActive: (v: boolean) => void
    comments: IComments[]
}

export default function AddComment({ setActive, comments }: AddCommentProps) {
    const sortedComments = [...comments].sort((a, b) => a.id - b.id)

    console.log(sortedComments)
    return (
        <div className="flex max-w-150 flex-col gap-7.5 overflow-y-scroll pr-4 sm:max-w-120">
            <BackLinkWithCross
                text="Отзывы о товаре"
                onClick={() => setActive(false)}
                classes={{ wrapper: 'sm:flex gap-40', arrow: 'sm:hidden' }}
            />
            <InputWrapper title="Отзыв о товаре" classes={{ title: 'text-black' }}>
                <TextArea placeholder="Введите отзыв" value="" onChange={() => {}} />
            </InputWrapper>
            <Button>Опубликовать</Button>
            <div className="flex flex-col gap-7.5 sm:max-h-75">
                {sortedComments.map(el => (
                    <div key={el.id} className="flex gap-3">
                        {el.author.avatar ? (
                            <Image
                                src={API_URL + el.author.avatar}
                                alt="avatar"
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full "
                            />
                        ) : (
                            <div className="h-10 w-10 rounded-full bg-layoutGray/50 px-5" />
                        )}
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
