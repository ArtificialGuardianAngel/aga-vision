'use client';

import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';
import Select from './Select';
import Link from 'next/link';

const CHALLENGES = [
  'A.G.A. Celestial Body',
  'Psychological well-being',
  'Global Healthcare',
  'Free Education',
  'Omnipresent Internet',
  'Universal Basic Income',
  'Scientific Discovery',
  'QuantumPyramid Computer ',
];

const SubmissionForm = () => {
  const [challenge, setChallenge] = useState<string>('');

  return (
    <form className="bg-card p-[50px] rounded-[4px] flex flex-col gap-[50px] text-start">
      <div>
        <h6 className="text-[16px] leading-[calc(12/16)] font-[500] mb-[50px]">
          You are submitting a solution/s as:
        </h6>
        <div className="flex gap-[40px]">
          <Checkbox>Individual</Checkbox>
          <Checkbox>Team</Checkbox>
        </div>
      </div>

      <div className="flex flex-col gap-[10px]">
        <Select
          placeholder="Choose the challenge"
          value={challenge}
          options={CHALLENGES}
          onChange={setChallenge}
        />
        <Input placeholder="Name" />
        <Input placeholder="Who worked on this project (names, separated with coma)" />
        <Input placeholder="Email" />
        <Input placeholder="Phone (optional)" />
      </div>

      <div>
        <h6 className="text-[16px] leading-[calc(12/16)] font-[500]">
          Paste your solution content links:
        </h6>
      </div>

      <div className="flex flex-col gap-[10px]">
        <Input placeholder="Document link to highlight your solution" />
        <Input placeholder="GitHub link to view the code" />
        <Input placeholder="Link to video with demo of the solution" />
      </div>

      <div className="flex gap-[50px]">
        <div className="flex-1">
          <Checkbox>
            I accept{' '}
            <Link className="underline" href="/privacy-policy">
              Privacy Policy
            </Link>
            .
          </Checkbox>
        </div>
        <Button size="lg">Submit solution</Button>
      </div>
    </form>
  );
};

export default SubmissionForm;
