import ProfileAvatar from './ProfileAvatar'
import ProfileForm from './ProfileForm'

export default function ProfileInfo() {
    return (
        <section className="mb-10 mt-7.5 flex flex-col gap-7.5">
            <div className="text-lg sm:text-3.5xl">Настройки профиля</div>
            <div className="flex flex-col gap-7.5 sm:flex-row md:gap-12.5">
                <ProfileAvatar />
                <ProfileForm />
            </div>
        </section>
    )
}
