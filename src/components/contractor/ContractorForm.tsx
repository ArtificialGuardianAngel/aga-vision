'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../Button';
import schema from '@/lib/schemas/contractor-form.schema';
import { useAlert } from '@/lib/hooks/use-alert';

const ContractorForm = () => {
  const { alertComponent, open } = useAlert();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string | string[] | boolean | Object> = {};

    formData.forEach((value, name) => {
      data[name] = value as string;
    });

    data.amount = +data.amount;
    data['privacy'] = data['privacy'] === 'on';

    const validation = schema.safeParse(data);

    if (validation.success) {
      try {
        await fetch('/api/contractor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        setSuccess(true);
      } catch (e) {
        open('Something went wrong', 'error');
      } finally {
        return;
      }
    }
    open(validation.error.errors.map((i) => i.message).join('\n'), 'error');
  };

  if (success) {
    return (
      <div className="p-[50px] flex flex-col gap-[50px] bg-card rounded-[10px] md:p-[50px_20px] md:mr-[-20px] md:ml-[-20px] md:rounded-none">
        <div className="flex flex-col gap-[30px] items-center">
          <div className="rounded-full w-[80px] h-[80px] border-[1px] border-accentGreen flex items-center justify-center">
            <Image src="/icons/icon-check.svg" alt="" width={20} height={14} />
          </div>

          <div className="text-[40px] font-[200] leading-[calc(29/40)] md:text-[26px]">
            OK, done!
          </div>
        </div>

        <div className="text-[18px] text-center md:text-[16px]">
          Thank you for submitting your solution through our website form!
          We&apos;ve received your submission and will be responding to the
          email address you provided in the form.
        </div>

        {/* <Button
          size="lg"
          className="self-center"
          onClick={() => setSuccess(false)}
        >
          Submit another solution
        </Button> */}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[30px]">
        <h2 className="green-title">Bold enough to partner with AI Ronin?</h2>

        <h4 className="text-[18px] calc(23/18) text-center">
          Confidentiality is our credo.
        </h4>
      </div>

      <div className="rounded-[10px] p-[50px] bg-card md:p-[50px_20px] md:ml-[-10px] md:mr-[-10px] md:rounded-none">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[10px]">
              <Input
                name="organizationName"
                placeholder="Organization's Name"
              />
              <Input name="contactPerson" placeholder="Contact Person" />
              <Input name="email" placeholder="Email address" />
              <Input name="phone" placeholder="Phone" />
              <Textarea
                name="vision"
                className="resize-none min-h-[200px]"
                placeholder="Vision of the Outcome (challenge us with the impossible)"
              />
            </div>

            <div className="flex flex-col gap-[20px]">
              <div>Resources available upon achievement:</div>
              <Input
                className=""
                name="amount"
                prefix="USD"
                placeholder="0,00"
                type="number"
              />
            </div>

            <div className="flex flex-col gap-[20px]">
              <div>Who introduced you to our domain?</div>
              <Input name="endorserEmail" placeholder="Email address" />
            </div>

            <div className="flex gap-[50px] justify-between items-start md:flex-col">
              <Checkbox name="privacy">
                I accept{' '}
                <Link href="privacy-policy" className="underline">
                  Privacy Policy
                </Link>
                .
              </Checkbox>
              <Button className="md:w-full" size="lg">
                Submit
              </Button>
            </div>
          </div>
        </form>
        <div className="m-[10px_0]">{alertComponent}</div>
      </div>
    </div>
  );
};

export default ContractorForm;
