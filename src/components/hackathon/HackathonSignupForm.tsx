'use client';

import { FormEvent, useContext, useRef, useState } from 'react';
import Image from 'next/image';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Select from '../Select';
import Textarea from '../Textarea';
import Button from '../Button';
import OverlayContext from '@/context/OverlayContext';
import PrivacyPolicyContent from '../PrivacyPolicyContent';
import { COUNTRIES } from '@/utils/countries';
import { useAlert } from '@/lib/hooks/use-alert';
import schema from '@/lib/schemas/hackathon-form.schema';

const HackathonSignupForm = () => {
  const { alertComponent, open, close } = useAlert();
  const successElement = useRef<HTMLDivElement>(null);
  const { setContent, open: openOverlay } = useContext(OverlayContext);

  const [success, setSuccess] = useState(false);
  const [haveTeam, setHaveTeam] = useState<string>('yes');
  const [privacy, setPrivacy] = useState(false);
  const [country, setCountry] = useState<string>();

  const showPrivacyPolicyOverlay = () => {
    setContent(<PrivacyPolicyContent />);
    openOverlay();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    close();

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string | string[] | boolean | Object> = {};

    formData.forEach((value, name) => {
      if (value) {
        data[name] = value as string;
      }
    });

    if (data['privacy']) {
      data['privacy'] = data['privacy'] === 'on';
    }

    data.haveTeam = haveTeam;
    data.country = country || '';

    const validation = schema.safeParse(data);

    if (validation.success) {
      try {
        await fetch('/api/hackathon', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data, null, 2),
        });

        setSuccess(true);
        setTimeout(() => {
          document
            .querySelector('#success')
            ?.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
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
      <div className="p-[50px] flex flex-col gap-[50px] bg-card rounded-[10px] md:p-[50px_20px] md:mr-[-20px] md:ml-[-20px] md:rounded-none relative">
        <div
          id="success"
          className="absolute -top-[100px] md:-top-[50px]"
        ></div>
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
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-[70px_50px] rounded-[20px] bg-white/[0.03] shadow-[3px_3px_0px_0px_#11F4D1] flex flex-col gap-[50px] md:p-[50px_20px]">
        <div className="font-[500] md:text-[15px]">
          Ready to be a part of this groundbreaking event? Follow these simple
          steps to secure your spot:
        </div>

        <div className="grid gap-[10px] grid-cols-2">
          <Input className="md:col-span-2" name="name" placeholder="Name" />
          <Input className="md:col-span-2" name="email" placeholder="Email" />
          <Input
            className="md:col-span-2"
            name="university"
            placeholder="University/Institution (if applicable)"
          />
          <Select
            className="md:col-span-2"
            placeholder="Choose country"
            options={COUNTRIES}
            value={country}
            onChange={(value) => setCountry(value)}
          />
          <Textarea
            className="col-span-2 min-h-[200px]"
            placeholder="Your area of Interest in AGI"
            name="interest"
          />
        </div>

        <div className="flex flex-col gap-[30px]">
          <div className="font-[500]">Do you have a team?</div>
          <div className="flex gap-[40px]">
            <Checkbox
              type="radio"
              name="haveTeam"
              value={'yes'}
              checked={haveTeam === 'yes'}
              onChange={(e) =>
                setHaveTeam((e.target as HTMLInputElement).value)
              }
            >
              Yes
            </Checkbox>
            <Checkbox
              type="radio"
              name="haveTeam"
              value={'no'}
              checked={haveTeam === 'no'}
              onChange={(e) =>
                setHaveTeam((e.target as HTMLInputElement).value)
              }
            >
              No
            </Checkbox>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[10px]">
          {haveTeam === 'yes' && (
            <Input name="teamName" placeholder="Team name" />
          )}
          <Textarea
            className="min-h-[200px]"
            placeholder="Briefly describe your coding experience or projects (optional)"
            name="experience"
          />
          <Input name="github" placeholder="GitHub link (optional)" />
          <Input name="linkedIn" placeholder="LinkedIn link (optional)" />
        </div>

        <div className="h-[1px] w-full bg-white/20"></div>

        <div className="flex gap-[50px] md:flex-col">
          <div className="flex-1">
            <Checkbox
              name="privacy"
              checked={privacy}
              onChange={(e) => setPrivacy((p) => !p)}
            >
              I accept{' '}
              <span
                className="underline cursor-pointer"
                onClick={showPrivacyPolicyOverlay}
              >
                Privacy Policy
              </span>
              .
            </Checkbox>
          </div>
          <Button size="lg" disabled={!privacy}>
            Submit
          </Button>
        </div>

        <div className="h-[1px] w-full bg-white/20"></div>

        <div className="max-w-[700px] m-auto text-center md:text-[15px]">
          After submitting the form, you will receive a confirmation email with
          further details and resources to prepare for the hackathon.
        </div>
      </div>
      <div className="m-[10px_0]">{alertComponent}</div>
    </form>
  );
};

export default HackathonSignupForm;
