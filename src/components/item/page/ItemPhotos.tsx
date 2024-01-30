'use client'

import { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { EffectCube, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import { ImageType } from '@/services/items/items.types'
import { getOS } from '@/utils/common/getOS'
import { API_URL, MAIN_ROUTE } from '@/utils/constants/routes'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

// const images = [
//     '/images/items/backlit.webp',
//     '/images/items/download.jpeg',
//     '/images/items/images.jpeg',
//     '/images/items/sunflower.jpeg',
//     '/images/items/download.jpeg',
// ]

export default function ItemPhotos({ images }: { images: ImageType[] | undefined }) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>()
    const router = useRouter()

    return (
        <div className="gap-7.5 sm:flex sm:flex-col">
            <div className="relative -mx-4.5 -mb-2.5 h-80 sm:mx-0 sm:h-80 sm:w-80 lg:h-120 lg:w-120">
                <Swiper
                    // effect={'cube'}
                    grabCursor={true}
                    cubeEffect={
                        {
                            // shadow: true,
                            // slideShadows: true,
                            // shadowOffset: 10,
                            // shadowScale: 0.94,
                        }
                    }
                    loop={getOS() === 'iOS' ? false : true}
                    pagination={true}
                    modules={[EffectCube, Pagination, Thumbs, FreeMode]}
                    className="mySwiper2 h-80 w-full lg:h-120"
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {images?.map(el => (
                        <SwiperSlide key={el.url} className="relative">
                            <Image
                                src={API_URL + el.url}
                                alt="item"
                                height={320}
                                width={200}
                                className="h-80 w-full object-cover lg:h-120"
                            />
                            <Image
                                src="/images/icons/itemVector.png"
                                alt="back"
                                width={12}
                                height={23}
                                className="absolute left-6 top-5 z-1 sm:hidden"
                                onClick={() => {
                                    router.push(MAIN_ROUTE)
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {images && images?.length > 1 && (
                <div className="hidden w-80 sm:block lg:w-120">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {images?.map(el => (
                            <SwiperSlide key={el.url}>
                                <Image
                                    src={API_URL + el.url}
                                    alt="item"
                                    height={320}
                                    width={200}
                                    className="h-14 w-14 bg-layoutGray/50 lg:h-22 lg:w-22"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    )
}
