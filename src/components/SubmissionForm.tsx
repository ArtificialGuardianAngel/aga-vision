'use client';

import React, { FormEvent, useContext, useState } from 'react';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';
import Select from './Select';
import schema from '@/lib/schemas/submition-form.schema';
import { useAlert } from '@/lib/hooks/use-alert';
import { CHALLENGES } from '@/utils/constants';
import Image from 'next/image';
import OverlayContext from '@/context/OverlayContext';
import PrivacyPolicyContent from './PrivacyPolicyContent';
import { useSearchParams } from 'next/navigation';

const SubmissionForm = () => {
  const { alertComponent, open, close } = useAlert();
  const { setContent, open: openOverlay } = useContext(OverlayContext);
  const params = useSearchParams();
  const [challenge, setChallenge] = useState<string>(
    params.get('challenge') || '',
  );
  const [success, setSuccess] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const showPrivacyPolicyOverlay = () => {
    setContent(<PrivacyPolicyContent />);
    openOverlay();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    close();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string | string[] | boolean | Object> = {}; // Object to store the form values

    // Loop through the FormData entries and populate formValues object
    fd.forEach((value, name) => {
      if (value) {
        data[name] = value as string;
      }
    });

    if (data['document_link'] && data['github_link'] && data['video_link']) {
      data['links'] = {
        document: data['document_link'],
        github: data['github_link'],
        video: data['video_link'],
      };
      delete data['document_link'];
      delete data['github_link'];
      delete data['video_link'];
    }

    data['challenge'] = challenge;

    if (data['participants']) {
      data['participants'] = (data['participants'] as string).split(',');
    }

    if (data['privacy']) {
      data['privacy'] = data['privacy'] === 'on';
    }
    const validation = schema.safeParse(data);
    if (validation.success) {
      try {
        await fetch('/api/submit', {
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

        <Button
          size="lg"
          className="self-center"
          onClick={() => setSuccess(false)}
        >
          Submit another solution
        </Button>
      </div>
    );
  }

  return (
    <>
      <form
        id="submmition-form"
        className="bg-card p-[50px] rounded-[4px] flex flex-col gap-[50px] text-start md:p-[50px_20px] md:ml-[-20px] md:mr-[-20px] md:rounded-none"
        onSubmit={handleSubmit}
      >
        <div>
          <h6 className="text-[16px] leading-[calc(12/16)] font-[500] mb-[50px]">
            You are submitting a solution as:
          </h6>
          <div className="flex gap-[40px]">
            <Checkbox type="radio" name="type" value="Individual">
              Individual
            </Checkbox>
            <Checkbox type="radio" name="type" value="Team">
              Team
            </Checkbox>
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <Select
            placeholder="Choose the challenge"
            value={challenge}
            options={CHALLENGES}
            onChange={setChallenge}
          />
          <Input name="name" placeholder="Name" />
          <Input
            name="participants"
            placeholder="Who worked on this project (names, separated with coma)"
          />
          <Input name="email" placeholder="Email" />
          <Input name="phone" placeholder="Phone (optional)" />
        </div>

        <div>
          <h6 className="text-[16px] leading-[calc(12/16)] font-[500]">
            Paste your solution content links:
          </h6>
        </div>

        <div className="flex flex-col gap-[10px]">
          <Input
            name="document_link"
            placeholder="Document link to highlight your solution"
          />
          <Input
            name="github_link"
            placeholder="GitHub link to view the code"
          />
          <Input
            name="video_link"
            placeholder="Link to video with demo of the solution"
          />
        </div>

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
          <Button disabled={!privacy} size="lg">
            Submit solution
          </Button>
        </div>
      </form>
      {alertComponent}
    </>
  );
};

export default SubmissionForm;
