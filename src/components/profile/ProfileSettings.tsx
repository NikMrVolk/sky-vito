import ChangeProfilePhoto from './ChangeProfilePhoto'
import ProfileForm from './ProfileForm'

interface ProfileSettingsProps {
    blockTitle: string
}

export default function ProfileSettings({ blockTitle }: ProfileSettingsProps) {
    return (
        <section className="mb-10 mt-7.5 flex flex-col gap-7.5">
            <div className="text-lg sm:text-3.5xl">{blockTitle}</div>
            <div className="flex flex-col gap-7.5 sm:flex-row md:gap-12.5">
                <ChangeProfilePhoto />
                <ProfileForm />
            </div>
        </section>
    )
}
