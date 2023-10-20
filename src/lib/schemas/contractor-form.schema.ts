import { z } from 'zod';

const schema = z.object({
  organizationName: z.string({
    required_error: 'You must enter the organization name',
  }),
  contactPerson: z.string({
    required_error: 'You must enter the contact person',
  }),
  email: z.string({ required_error: 'You must enter email address' }).email(),
  phone: z.string().optional(),
  vision: z.string({
    required_error: 'You must enter the vision of the Outcome',
  }),
  amount: z.number({ required_error: 'You must enter the name' }),
  endorserEmail: z.string().optional(),
  privacy: z.boolean({
    required_error: 'You must agree to the privacy policy',
  }),
});

export default schema;
