'use client';

import { useContext, useState } from 'react';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Select from '../Select';
import Textarea from '../Textarea';
import Button from '../Button';
import OverlayContext from '@/context/OverlayContext';
import PrivacyPolicyContent from '../PrivacyPolicyContent';
import { COUNTRIES } from '@/utils/countries';

const HackathonSignupForm = () => {
  const { setContent, open: openOverlay } = useContext(OverlayContext);

  const [haveTeam, setHaveTeam] = useState<string>('yes');
  const [privacy, setPrivacy] = useState(false);
  const [country, setCountry] = useState<string>();

  const showPrivacyPolicyOverlay = () => {
    setContent(<PrivacyPolicyContent />);
    openOverlay();
  };

  return (
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
            onChange={(e) => setHaveTeam((e.target as HTMLInputElement).value)}
          >
            Yes
          </Checkbox>
          <Checkbox
            type="radio"
            name="haveTeam"
            value={'no'}
            checked={haveTeam === 'no'}
            onChange={(e) => setHaveTeam((e.target as HTMLInputElement).value)}
          >
            No
          </Checkbox>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[10px]">
        {haveTeam === 'yes' && <Input name="name" placeholder="Name" />}
        <Textarea
          className="min-h-[200px]"
          placeholder="Briefly describe your coding experience or projects (optional)"
        />
        <Input name="github" placeholder="GitHub link (optional)" />
        <Input name="linkedin" placeholder="LinkedIn link (optional)" />
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
  );
};

export default HackathonSignupForm;
