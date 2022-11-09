import InputField from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'UI/InputField',
  component: InputField,
} as ComponentMeta<typeof InputField>

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
)

export const Primary = Template.bind({})
Primary.args = { name: 'inputName', label: 'Name: ' }

export const Secondary = Template.bind({})
Secondary.args = { name: 'inputEmail', label: 'Email: ' }

export const Default = () => <InputField name="inputName" label="Name: " />
