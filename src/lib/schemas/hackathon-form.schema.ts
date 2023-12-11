import { z } from 'zod';

const schema = z.object({
  name: z.string({
    required_error: 'You must enter the name',
  }),
  email: z.string({ required_error: 'You must enter email address' }).email(),
});

export default schema;
