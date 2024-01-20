import Button from '../UI/Button'
import InputWithTitle from '../UI/inputs/InputWithTitle'
import ProfileAvatar from './ProfileAvatar'

export default function ProfileInfo() {
    return (
        <section className="mb-10 mt-7.5 flex flex-col gap-7.5">
            <div className="text-lg sm:text-3.5xl">Настройки профиля</div>
            <div className="flex flex-col gap-7.5 sm:flex-row md:gap-12.5">
                <ProfileAvatar />
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
