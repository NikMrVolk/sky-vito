import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import ItemBaseInfo from '@/components/item/page/ItemBaseInfo'
import ItemPhotos from '@/components/item/page/ItemPhotos'
import Button from '@/components/UI/buttons/Button'

export default function ItemPage() {
    return (
        <BlockWrapper className="flex flex-col gap-7.5 overflow-x-hidden sm:overflow-x-visible">
            <div className="flex flex-col gap-7.5 sm:flex-row xl:gap-15">
                <ItemPhotos />
                <div className="flex flex-col gap-7.5">
                    <ItemBaseInfo />
                    <div className="flex w-full flex-col gap-2.5 lg:flex-row">
                        <Button className="w-full lg:w-auto">Редактировать</Button>
                        <Button className="w-full lg:w-auto">Снять с публикации</Button>
                    </div>
                    <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-layoutGray/30" />
                        <div>
                            <div className="text-lg text-layoutBlue lg:text-lg">Антон</div>
                            <div className="text-sm text-layoutGray lg:text-base">
                                Продает товары с мая 2022
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-20 flex flex-col gap-3.5 sm:mb-15">
                <div className="bold text-lg font-semibold lg:text-3.5xl lg:font-medium">
                    Описание товара
                </div>
                <p className="text-sm sm:max-w-200 lg:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </BlockWrapper>
    )
}
