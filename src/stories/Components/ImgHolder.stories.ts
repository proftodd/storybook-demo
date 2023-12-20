import type { Meta, StoryObj } from '@storybook/vue3'
import ImgHolder from '../../components/ImgHolder.vue'

const meta = {
    title: 'Components/ImgHolder',
    component: ImgHolder,
    tags: ['autodocs'],
    argTypes: { },
    args: { },
} satisfies Meta<typeof ImgHolder>

export default meta
type Story = StoryObj<typeof meta>

export const ImageHolder: Story = { }
