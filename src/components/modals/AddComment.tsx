'use client'

import { useState } from 'react'

import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { toast } from 'react-toastify'

import BackLinkWithCross from '../common/BackTextWithCross'
import ProfilePhoto from '../profile/ProfilePhoto'
import Button from '../UI/buttons/Button'
import InputWrapper from '../UI/inputs/InputWrapper'
import TextArea from '../UI/inputs/TextArea'

import { itemsService } from '@/services/items/items.service'
import { IComments } from '@/services/items/items.types'
import { QueryKeys } from '@/utils/constants/reactQuery'
import { API_URL } from '@/utils/constants/routes'

interface AddCommentProps {
    setActive: (v: boolean) => void
    comments: IComments[]
}

export default function AddComment({ setActive, comments }: AddCommentProps) {
    const [value, setValue] = useState<string>('')
    const { slug } = useParams<{ slug: string }>()
    const sortedComments = [...comments].sort((a, b) => a.id - b.id)

    const { refetch } = useQuery({
        queryKey: [QueryKeys.GET_AD_COMMENTS + slug],
        queryFn: () => itemsService.getItemComments(slug),
        enabled: false,
    })

    const { mutate: addComment, isPending } = useMutation({
        mutationKey: [QueryKeys.ADD_COMMENT_TO_ITEM],
        mutationFn: itemsService.addComment,
        onSuccess: () => {
            refetch()
            setValue('')
        },
    })

    const handleAddComment = () => {
        if (value.length > 5) {
            const data = { data: { text: value }, slug }
            addComment(data)
            return
        }
        toast('Комментарий должен быть больше 5ти символов')
    }

    return (
        <div className="flex max-w-150 flex-col gap-7.5 overflow-y-scroll pr-4 sm:max-w-120">
            <BackLinkWithCross
                text="Отзывы о товаре"
                onClick={() => setActive(false)}
                classes={{ wrapper: 'sm:flex gap-40', arrow: 'sm:hidden' }}
            />
            <InputWrapper title="Отзыв о товаре" classes={{ title: 'text-black' }}>
                <TextArea
                    placeholder="Введите отзыв"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </InputWrapper>
            <Button onClick={handleAddComment} disabled={isPending}>
                {isPending ? 'Загрузка...' : 'Опубликовать'}
            </Button>
            <div className="flex flex-col gap-7.5 sm:max-h-75">
                {sortedComments.map(el => (
                    <div key={el.id} className="flex gap-3">
                        <ProfilePhoto
                            imgSrc={API_URL + el.author.avatar}
                            classes={{ wrapper: 'h-10 w-10 sm:h-10 sm:w-10' }}
                        />
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
