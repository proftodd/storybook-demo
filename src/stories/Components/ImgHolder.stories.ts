import type { Meta, StoryObj } from '@storybook/vue3'
import ImgHolder from '../../components/ImgHolder.vue'

const iconOptions = [
    'fa-solid fa-check',
    'fa-regular fa-user-circle'
]
const meta = {
    title: 'Components/ImgHolder',
    component: ImgHolder,
    tags: ['autodocs'],
    argTypes: {
        icon: { control: 'select', options: iconOptions }
    },
    args: {
        icon: 'fa-solid fa-check'
    },
} satisfies Meta<typeof ImgHolder>

export default meta
type Story = StoryObj<typeof meta>

export const ImageHolder: Story = { }
