import { CHALLENGES } from '@/utils/constants';
import { z } from 'zod';

const schema = z.object({
  type: z.enum(['Individual', 'Team'], {
    required_error: 'You must select the submitter type',
  }),
  challenge: z.enum(CHALLENGES, {
    invalid_type_error: 'You must select challange for submittion',
  }),
  name: z.string({ required_error: 'You must enter the name' }),
  email: z.string({ required_error: 'You must enter email address' }).email(),
  phone: z.string().optional(),

  participants: z.array(z.string()).optional(),
  links: z.object(
    {
      document: z.string().nonempty({ message: 'You must pass document link' }),
      github: z.string().nonempty({ message: 'You must pass github link' }),
      video: z.string().nonempty({ message: 'You must pass video demo link' }),
    },
    { required_error: 'You must pass links' },
  ),
  privacy: z.boolean({
    required_error: 'You must agree to the privacy policy',
  }),
});

export default schema;
