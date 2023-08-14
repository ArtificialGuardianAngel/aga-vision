import { z } from "zod"

const schema = z.object({
    name: z.string({ required_error: 'You must provide the name'}).min(2),
    email: z.string({ required_error: 'You must provide email address' }),
    phone: z.string().optional(),
    privacy: z.boolean({ required_error: 'You must agree to the privacy policy' }),
})

export default schema