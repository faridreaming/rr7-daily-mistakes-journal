interface FormField {
  type: 'textarea' | 'date'
  name: string
  label: string
  placeholder: string
}

export const formFields: FormField[] = [
  {
    type: 'date',
    name: 'date',
    label: 'Date',
    placeholder: 'Select date',
  },
  {
    type: 'textarea',
    name: 'mistakes',
    label: 'List down all the mistakes you made today. One by one.',
    placeholder:
      '- Tired after class\n- Distracted by phone\n- Poor time planning',
  },
  {
    type: 'textarea',
    name: 'triggers',
    label:
      'Try to think deeply and list down exactly what triggered you to make those mistakes.(Answering this will change your life. So, take your time.)',
    placeholder:
      '- Slept late last night\n- Checked social media too often\n- Felt overwhelmed by too many tasks',
  },
  {
    type: 'textarea',
    name: 'impacts',
    label: 'List down how those mistakes affected your day.',
    placeholder:
      '- Missed important deadline\n- Felt stressed and guilty\n- Productivity dropped significantly',
  },
  {
    type: 'textarea',
    name: 'futureImpacts',
    label:
      'List down what happens in 3 months if you keep making these mistakes every day.',
    placeholder:
      '- Grades may decline\n- Confidence keeps decreasing\n- Bad habits become harder to break',
  },
  {
    type: 'textarea',
    name: 'preventionSteps',
    label: 'List down practical steps you can take to prevent these mistakes.',
    placeholder:
      '- Set sleep alarm at 11 PM\n- Use app blocker during study time\n- Plan top 3 priorities every morning',
  },
]
