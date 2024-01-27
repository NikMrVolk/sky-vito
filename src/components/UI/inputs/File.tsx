import { ChangeEvent } from 'react'

interface FileProps {
    multiple?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function File({ multiple = false, onChange }: FileProps) {
    return (
        <input
            type="file"
            accept="image/*"
            className="hidden"
            multiple={multiple}
            onChange={e => onChange(e)}
        />
    )
}
