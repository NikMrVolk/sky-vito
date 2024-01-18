import Button from '../UI/Button'
import InputWithTitle from '../UI/inputs/InputWithTitle'

export default function ProfileInfo() {
    return (
        <section className="mb-10 flex flex-col gap-7.5">
            <div className="text-lg sm:text-3.5xl">Настройки профиля</div>
            <div className="flex flex-col gap-7.5 sm:flex-row md:gap-12.5">
                <div className="flex flex-col items-center gap-2.5">
                    <div className="h-33 w-33 rounded-full bg-layoutGray/30 sm:h-42.5 sm:w-42.5" />
                    <div className="cursor-pointer text-layoutBlue">Заменить</div>
                </div>
                <div className="flex max-w-153.5 flex-col gap-4.5 sm:w-full">
                    <div className="flex flex-col gap-4.5 lg:flex-row">
                        <InputWithTitle
                            title="Имя"
                            placeholder="Антон"
                            classes={{ wrapper: 'w-full' }}
                        />
                        <InputWithTitle
                            title="Фамилия"
                            placeholder="Городецкий"
                            classes={{ wrapper: 'w-full' }}
                        />
                    </div>
                    <InputWithTitle
                        title="Город"
                        placeholder="Санкт-Петербург"
                        classes={{ wrapper: 'lg:max-w-75' }}
                    />
                    <InputWithTitle
                        title="Телефон"
                        placeholder="89161234567"
                        type="number"
                        classes={{ wrapper: 'mb-3' }}
                    />
                    <Button className="py-2.75">Сохранить</Button>
                </div>
            </div>
        </section>
    )
}
