import { ITrainingCenterData } from './types';

export const CHALLENGES = [
  'A.G.A. Celestial Body',
  'Psychological well-being',
  'Global Healthcare',
  'Free Education',
  'Omnipresent Internet',
  'Universal Basic Income',
  'Scientific Discovery',
  'QuantumPyramid Computer ',
] as const;

export const PRIVACY_POLICY_DATA = [
  {
    content: (
      <>
        <p className="mb-[20px]">
          NUAH (“we” or “us”), which operates the Platform and provides the
          Service (hereinafter “Service(s)”).
        </p>
        <p className="mb-[20px]">
          This page is used to inform you how NUAH (“website”, “Platform”)
          collects, uses, and discloses information about you. This Privacy
          Policy (“document” or “Policy”) applies when you use the Platform or
          otherwise interact with us.
        </p>
        <p>
          LEGAL DISCLAIMER: Our Services do not address anyone under the age of
          18. We do not knowingly collect personally identifiable information
          from individuals under 18 years of age. Should we discover that an
          underage person has provided us with personal information, we would
          immediately delete this information from our servers.
        </p>
      </>
    ),
  },
  {
    title: '1. Definitions',
    content: (
      <>
        <p className="mb-[20px]">
          1.1. For a better understanding of this Policy, check our glossary
          with the main concepts used.
        </p>
        <ul className="pl-[30px] mb-[20px]">
          <li className="list-item">
            California Consumer Privacy Act or CCPA California Consumer Privacy
            Act of 2018 [1798.100 - 1798.199.100] • Data Controller: Who is
            responsible for the decisions regarding the Processing of Personal
            Data, especially regarding the purposes and means of Processing.
          </li>
          <li className="list-item">
            Data Processor Party that handles Personal Data in accordance with
            the Data Controller’s instructions.
          </li>
          <li className="list-item">
            Data Subject The identified or identifiable living individual to
            whom the personal data relates.
          </li>
          <li className="list-item">
            General Data Protection Law or GDPR Regulation (EU) 2016/679 of the
            European Parliament and of the Council of 27 April 2016.
          </li>
          <li className="list-item">
            Incident(s) Any accidental, illegal, or unauthorized access
            acquisition, use, modification, disclosure, loss, destruction, or
            damage involving Personal Data.
          </li>
          <li className="list-item">
            Personal Data Any information related to an identified or
            identifiable natural person, such as: name, ID, residential or
            business address, mobile phone number, email address, among others.
          </li>
          <li className="list-item">
            Person in Charge Person appointed by the Data Controller and by the
            Data Processor to act as a communication channel between the
            Controller and the Data Subjects and the Data Protection Authority.
          </li>
          <li className="list-item">
            Sensitive Data Personal data on racial or ethnic origin, religious
            conviction, political opinion, affiliation to a union or
            organization of a religious, philosophical, or political nature,
            data relating to health or sexual life, genetic or biometric data,
            when linked to a natural person.
          </li>
          <li className="list-item">
            Processing An operation or set of operations carried out with
            Personal Data or on sets of Personal Data, by automated or
            non-automated means, such as collection, registration, organization,
            structuring, conservation, adaptation, or alteration, recovery,
            consultation, use, disclosure by transmission, broadcast or any
            other form of availability, comparison or interconnection,
            limitation, deletion, or destruction.
          </li>
        </ul>
        <p>
          1.2. Other terms used herein and not defined above have the meaning
          given in a specific clause of the meaning contained in the General
          Data Protection Law.
        </p>
      </>
    ),
  },
  {
    title: '2. What personal data do we collect from you and how do we use it?',
    content: (
      <>
        <p className="mb-[20px]">
          2.1. The information requested from you is the minimum necessary to
          provide you with our Services or to comply with legal or regulatory
          obligations.
        </p>
        <p className="mb-[20px]">
          2.2. You guarantee the veracity and accuracy of the information and
          data you provide to us, assuming the corresponding responsibility if
          they are not accurate, and you undertake to keep them up to date. We
          take no responsibility for any direct or indirect damages caused by
          the inaccuracy of the Personal Data Provided by you.
        </p>
        <p className="mb-[20px]">
          2.3. We may collect or receive your Personal Data through registration
          on our Platform, brand pages, and social media, through your indirect
          interactions with our sellers/sales team or customer service team,
          among others.
        </p>
        <p className="mb-[20px]">
          2.4. If you do not provide the Personal Data essential to the
          provision of our Services and products, our ability to provide you
          with our Services and products may be affected.
        </p>
        <p className="mb-[20px]">
          2.5. We may send you communications and advertising messages by any
          means from the moment you register on our Platform.
        </p>
        <p className="mb-[20px]">
          2.6. If you no longer wish to receive advertising messages, you can
          request your cancellation at any time by sending a request via email
          to contact@aga.vision.
        </p>
        <p className="mb-[20px]">
          2.7. Thus, for the proper Processing of your Personal Data, the GDPR
          establishes the so-called “legal basis”, in which the Processing of
          Personal Data is allowed without your consent being required.
        </p>
        <p className="mb-[20px]">
          2.8. Thus, if there is a specific hypothesis in the GDPR that allows
          us to process your Personal Data, we will be able to process your
          Personal Data regardless of your consent, which may be requested at
          some point as a precaution to legitimize the Processing carried out
          for other situations that occur necessary, a fact that will be
          communicated in due course to all Data Subjects.
        </p>
        <p className="">
          2.9. Information that is automatically collected. By accessing the
          website, you provide us with certain non-personal information that is
          automatically collected and analysed to improve your user experience.
          This information may include, but is not limited, to your IP address
          (i.e. the address used to identify a computer on the internet),
          browser type (i.e. the software you are using to view the website -
          Chrome, Safari, Firefox, etc.), operating system (i.e. Windows, Linux,
          Mac OS), device type (i.e. computer, tablet or smartphone), behaviour
          while using the website (i.e. which elements you click on), country
          and city from which you access the Service, time and date of your
          visit, duration of your visit. We obtain this information directly via
          cookies or through third-party services and use it to ensure our
          Service is accessible and easy to use by different types of users.
        </p>
      </>
    ),
  },
  {
    title: '3. What do we use your information for?',
    content: (
      <>
        <p className="mb-[20px]">
          3.1. When managing and maintaining our Platform, we may collect and
          process the following Personal Data from you:
        </p>
        <ul className="pl-[30px] mb-[20px]">
          <li className="list-item">Name and Surname</li>
          <li className="list-item">Email address</li>
          <li className="list-item">Phone Number</li>
        </ul>
        <p className="mb-[20px]">
          Account Management, ensure the Service is delivered to you and provide
          an engaging user experience. Analyse the performance of the Platform.
        </p>
        <p className="mb-[20px]">
          Newsletter, information related to your account, promotional content
          via marketing or push notifications.
        </p>
        <p className="mb-[20px]">
          To communicate with you and Customer Service.
        </p>
        <p className="mb-[20px]">
          3.2. In addition, we may also process your Personal Data if it is
          reasonably necessary or legally required (i) for reasons of public
          interest; (ii) to respond to requests from public authorities; (iii)
          to meet government reporting or recordkeeping requirements; or (iv)
          for the regular exercise of rights in proceedings.
        </p>
        <p className="mb-[20px]">
          3.3. Marketing Choices. We may send you personalised marketing
          communications, based on your subscription to the Service, that we
          consider to be of interest to you. These communications may include
          content from third-party advertisers. As described below, you have
          choices about the types of marketing communications you receive.
        </p>
        <p className="mb-[20px]">
          3.4. Cookies. Cookies are small data files stored in the memory of
          your device that help us improve our Service and your experience while
          using the site. We or third parties send these to your browser when
          you visit the site. You can set your browser’s preferences to reject
          requests for storing cookies. Please be advised that rejecting cookies
          may harm the usability and proper functioning of the Service.
        </p>
        <p className="mb-[20px]">
          3.4.1. We are not liable in any way for the third parties’ cookies
          stored in the memory of your device.
        </p>
        <p className="mb-[20px]">
          3.5. Email preferences. You may opt out of receiving promotional
          emails or text messages from us by following the instructions
          contained in them. Please note that, even if you opt-out, we may still
          send you emails with non-promotional content (e.g. to verify your
          account’s email, to change its password, etc.).
        </p>
        <p className="">
          3.6. Push Notifications. A push notification is a message that pops up
          on a desktop or mobile device’s screen. We always ask for your consent
          to receive such notifications in advance to send them. We may use your
          consent to receive push notifications to send such to your desktop or
          mobile device. You can change the notification settings of your
          browser or mobile device to disable these messages at any time.
        </p>
      </>
    ),
  },
  {
    title: '4. Who can access your personal data?',
    content: (
      <>
        <p className="mb-[20px]">
          4.1. Personal Data-informed is not traded or exchanged with any
          company or perter. Access to your information will only be restricted
          to people with the internal and specific authorization to do so.
        </p>
        <p className="mb-[20px]">
          4.2. All your Personal Data are confidential, and any use will be in
          accordance with current legislation, this Privacy Policy, and the
          Terms and Conditions.
        </p>
        <p className="mb-[20px]">
          4.3. Personal Data may, from time to time, be shared with third
          parties only in cases where sharing is essential for the provision of
          the Service offered by us, in order to ensure that the Processing is
          properly fulfilled.
        </p>
        <p className="">
          4.4. To ensure the proper functioning of our Service we may display
          links to other service providers. Such third-party service providers
          may be websites (owned by third-party companies and individuals). We
          use external services to facilitate the proper functioning of our
          Service, to perform Service-related services, or to be assisted in
          providing you with marketing content. If you click on a third-party
          link, you will be directed to that website. Please note that these
          external sites are not operated by us. Therefore, we encourage you to
          review their Privacy Policies. We have no control over and assume no
          responsibility for the content, privacy policies, cookies, or
          practices of any third-party sites or services. We want to inform you
          that these third parties have access to your Personal Information. The
          reason is to perform the tasks assigned to them on our behalf.
        </p>
      </>
    ),
  },
  {
    title: '5. International transfer of personal data',
    content: (
      <>
        <p>
          5.1. We may share your Personal Data with third parties that are
          necessary for the development of its activities and corporate purpose,
          always protecting the Rights and Information of the Data Subject and
          observing the legal provision of the GDPR.
        </p>
      </>
    ),
  },
  {
    title: '6. Security measures adopted',
    content: (
      <>
        <p className="mb-[20px]">
          6.1. We use the most modern security measures to protect your personal
          information, restricting access to it only to duly authorized persons.
        </p>
        <p className="">
          6.2. We implement a series of Security, Technical and Administrative
          Measures necessary to protect your Personal Data against unauthorized
          access, accidental or unlawful situations of destruction, loss,
          alteration, communication, or any form of inappropriate or illegal
          Processing of Personal Data, for example, the protection of our
          database and all Personal Data of our clients.
        </p>
      </>
    ),
  },
  {
    title: '7. How long do we keep your personal data?',
    content: (
      <>
        <p className="mb-[20px]">
          7.1. The Personal Data collected will be retained until the end of the
          term of your Processing, that is, when the Personal Data is no longer
          necessary to achieve the purposes communicated to you.
        </p>
        <p className="mb-[20px]">
          7.2. Personal Data may also be retained until there is a request for
          the deletion of unnecessary, excessive, or processed Personal Data in
          violation of the law.
        </p>
        <p className="">
          7.3. After this period, if applicable, some personal information may
          be kept for the period necessary to meet the legal obligation and for
          the regular exercise of rights in court or the administrative sphere.
        </p>
      </>
    ),
  },
  {
    title: '8. Your rights',
    content: (
      <>
        <p className="mb-[20px]">
          8.1. We respect your right to privacy: it is important that you are
          able to control your Personal Data.
        </p>
        <p className="mb-[20px]">
          8.2. You, as the owner of the Personal Data, have the right to confirm
          the Processing and access of your Personal Data, the right to correct
          incomplete, inaccurate, or outdated Personal Data and other rights
          (such as portability, revocation of consent, information on sharing
          and on the possibility not to provide consent and any consequences of
          denial, as we as anonymization, blocking or deletion of unnecessary,
          excessive, or improperly treated Personal Data).
        </p>
        <p className="mb-[20px]">
          8.3. You may exercise your rights using written communication sent to
          the email: contact@aga.vision, specifying:
        </p>
        <ul className="pl-[30px] mb-[20px]">
          <li className="list-item">Name and Surname</li>
          <li className="list-item">Email address</li>
          <li className="list-item">Phone Number</li>
        </ul>
        <p className="mb-[20px]">
          8.4. To fulfil your rights, in addition to the Personal Data described
          above, we may request additional information to confirm that the
          person exercising these rights is you or an authorized person acting
          on your behalf.
        </p>
        <p className="">
          8.5. Please note that the rights are not absolute and do not apply in
          all cases, but we will always do our best to honour your rights under
          applicable data protection law.
        </p>
      </>
    ),
  },
  {
    title: '9. Modifications to our Privacy Policy',
    content: (
      <>
        <p className="mb-[20px]">
          9.1. This Privacy Policy may be updated. Therefore, we recommend that
          you periodically visit this page so that you are aware of the changes
          made. If relevant changes are made that give rise to new
          authorizations from you, we will make the new Privacy Policy public.
        </p>
        <p className="">
          9.2. This Privacy Policy is an integral part of the Terms and
          Conditions. This Privacy Policy together with the Declaration and the
          Terms and Conditions form an indissoluble instrument (“Agreement”).
        </p>
      </>
    ),
  },
  {
    title: '10. CCPA (Do Not Sell My Personal Information)',
    content: (
      <>
        <p className="mb-[20px]">
          8.1. We respect your right to privacy: it is important that you are
          able to control your Personal Data.
        </p>
        <ul className="pl-[30px] mb-[20px]">
          <li className="list-item">
            know about the personal information a business collects about them
            and how it is used and shared;
          </li>
          <li className="list-item">
            delete personal information collected from them (with some
            exceptions);
          </li>
          <li className="list-item">
            opt out of the sale or sharing of their personal information;
          </li>
          <li className="list-item">
            non-discrimination for exercising their CCPA rights;
          </li>
          <li className="list-item">
            correct inaccurate personal information that a business has about
            them;
          </li>
          <li className="list-item">
            limit the use and disclosure of sensitive personal information
            collected about them.
          </li>
        </ul>
        <p className="">
          10.2. Should you decide to exercise any of these rights, we shall
          respond to you as soon as feasibly possible, up to a maximum of
          fifteen (15) business days from the date we received your request.
        </p>
      </>
    ),
  },
  {
    title: '11. Complaints',
    content: (
      <>
        <p className="">
          11.1. You also have the right to petition before the Data Protection
          Authority of your country, the authority responsible for ensuring the
          respect of the rights of Personal Data Subjects and for supervising
          compliance with the GDPR.
        </p>
      </>
    ),
  },
  {
    title: '12. Questions and contact',
    content: (
      <>
        <p className="mb-[20px]">
          For more information or questions about our Privacy Policy, contact us
          at contact@aga.vision
        </p>
        <p className="">
          This is the 1st version of our Privacy Policy, last updated on 13th of
          March 2023.
        </p>
      </>
    ),
  },
];

export const QUANTUM_PYRAMID_SPECS = [
  {
    title: 'Form factor',
    content:
      'The QuantumPyramid should not exceed 1 square metre, capable of comfortably sitting on any desktop within a pyramid-shaped structure.',
  },
  {
    title: 'Connectivity',
    content:
      'The QuantumPyramid must maintain wireless data communication, utilizing either Wi-Fi or Bluetooth or other. Physical cables for data transmission are prohibited.',
  },
  {
    title: 'Power supply',
    content:
      'The device should draw power wirelessly, eliminating the need for physical power cables and thus achieving a standalone design.',
  },
  {
    title: 'Quantum computing technology',
    content:
      'The QuantumPyramid can leverage any quantum computing technology, including but not limited to Superconducting Circuits, Ion Traps, Topological Quantum Computing, Quantum Annealing, Silicon Spin Qubits, and Photonic Quantum Dots.',
  },
  {
    title: 'Software compatibility',
    content:
      'The QuantumPyramid must fully support Python code execution within a Django framework in a Linux environment.',
  },
  {
    title: 'Qubit count',
    content:
      'The device must house a minimum of 100,000 qubits, with the potential for scaling up to millions.',
  },
  {
    title: 'Coherence time',
    content:
      'The QuantumPyramid should achieve coherence times of at least 1 second, demonstrating superior quantum system stability.',
  },
  {
    title: 'Quantum volume',
    content:
      'A quantum volume of at least 10 billion, taking into account factors such as qubit count, gate fidelity, and connectivity, is mandatory.',
  },
  {
    title: 'Error correction',
    content:
      'The device should adopt high-quality error correction techniques, with a desirable threshold error rate of less than 0.1%.',
  },
  {
    title: 'Connectivity',
    content:
      'The QuantumPyramid should feature all-to-all connectivity, facilitating direct entanglement and interaction between any pair of qubits.',
  },
  {
    title: 'Scalability',
    content:
      'The architecture of the QuantumPyramid should be capable of scaling up to 1 million qubits without a compromise on performance.',
  },
  {
    title: 'Gate fidelity',
    content:
      'Despite not being mentioned previously, this quantum computer should aim for gate fidelities above 99.9%.',
  },
  {
    title: 'Low error rates',
    content:
      'The QuantumPyramid should strive for low error rates in qubit operations, ideally below 1%.',
  },
  {
    title: 'Qiskit compatibility and connectivity',
    content:
      'The QuantumPyramid must support Qiskit code execution, and RasQBerry devices running Qiskit code should be able to remotely connect to the QuantumPyramid to provide it with simultaneous instructions for calculations.',
  },
  {
    title: 'Open source design',
    content:
      'All architecture and schematic details of the QuantumPyramid should be meticulously documented and made fully open source. This should include detailed instructions that allow the open-source hardware community to easily replicate the design and construction.',
  },
];

export const CHALLENGES_SLUGS = [
  'quantum-pyramid',
  'celestial-body',
  'psychological-well-being',
  'global-healthcare',
  'free-education',
  'omnipresent-internet',
  'basic-income',
  'scientific-discovery',
] as const;
export const CHALLENGES_DATA: {
  [slug: string]: {
    image: string;
    title: string;
    description: React.ReactNode;
    cardsTitle?: string;
    cards?: Array<{ title?: string; content?: string }>;
    extraDescription?: string;
  };
} = {
  [CHALLENGES_SLUGS[0]]: {
    image: '/icons/challenges-8.svg',
    title: 'QuantumPyramid Computer challenge',
    description:
      'We invite the brightest minds globally to design and construct a "homemade" quantum computer, named "QuantumPyramid". This machine should fit within a pyramid-shaped structure compact enough to be accommodated on any desk worldwide. The aim is to foster the development of accessible quantum computing technologies, potentially providing a quantum leap in solving world-scale challenges.',
    cardsTitle: 'Technical requirements',
    extraDescription:
      "To win the QuantumPyramid Challenge, teams must not only build their quantum computer according to these criteria but also successfully execute a predetermined Python program using the Django framework on their QuantumPyramid. This test will confirm the device's efficacy and reliability as a powerful quantum computing tool.",
    cards: [
      {
        title: 'Form factor',
        content:
          'The QuantumPyramid should not exceed 1 square metre, capable of comfortably sitting on any desktop within a pyramid-shaped structure.',
      },
      {
        title: 'Connectivity',
        content:
          'The QuantumPyramid must maintain wireless data communication, utilizing either Wi-Fi or Bluetooth or other. Physical cables for data transmission are prohibited.',
      },
      {
        title: 'Power supply',
        content:
          'The device should draw power wirelessly, eliminating the need for physical power cables and thus achieving a standalone design.',
      },
      {
        title: 'Quantum computing technology',
        content:
          'The QuantumPyramid can leverage any quantum computing technology, including but not limited to Superconducting Circuits, Ion Traps, Topological Quantum Computing, Quantum Annealing, Silicon Spin Qubits, and Photonic Quantum Dots.',
      },
      {
        title: 'Software Compatibility',
        content:
          'The QuantumPyramid must fully support Python code execution within a Django framework in a Linux environment.',
      },
      {
        title: 'Qubit Count',
        content:
          'The device must house a minimum of 100,000 qubits, with the potential for scaling up to millions.',
      },
      {
        title: 'Coherence Time',
        content:
          'The QuantumPyramid should achieve coherence times of at least 1 second, demonstrating superior quantum system stability.',
      },
      {
        title: 'Quantum Volume',
        content:
          'A quantum volume of at least 10 billion, taking into account factors such as qubit count, gate fidelity, and connectivity, is mandatory.',
      },
      {
        title: 'Error Correction',
        content:
          'The device should adopt high-quality error correction techniques, with a desirable threshold error rate of less than 0.1%.',
      },
      {
        title: 'Connectivity',
        content:
          'The QuantumPyramid should feature all-to-all connectivity, facilitating direct entanglement and interaction between any pair of qubits.',
      },
      {
        title: 'Scalability',
        content:
          'The architecture of the QuantumPyramid should be capable of scaling up to 1 million qubits without a compromise on performance.',
      },
      {
        title: 'Gate Fidelity',
        content:
          'Despite not being mentioned previously, this quantum computer should aim for gate fidelities above 99.9%.',
      },
      {
        title: 'Low Error Rates',
        content:
          'The QuantumPyramid should strive for low error rates in qubit operations, ideally below 1%.',
      },
      {
        title: 'Qiskit Compatibility and Connectivity',
        content:
          'The QuantumPyramid must support Qiskit code execution, and RasQBerry devices running Qiskit code should be able to remotely connect to the QuantumPyramid to provide it with simultaneous instructions for calculations.',
      },
      {
        title: 'Open Source Design',
        content:
          'All architecture and schematic details of the QuantumPyramid should be meticulously documented and made fully open source. This should include detailed instructions that allow the open-source hardware community to easily replicate the design and construction.',
      },
    ],
  },
  [CHALLENGES_SLUGS[1]]: {
    image: '/icons/challenges-1.svg',
    title: 'Celestial body of the angel LegionAI Challenge',
    description:
      'To develop the "Celestial body of the angel" as described in the Blueprint Architecture document, the task involves writing fully operational Python code within the Django framework, making it open source and placing it on GitHub for inspection. The celestial body will incorporate various modules and functionalities, including the Firewall Body, Firewall Pipe Exit Point, Brain Module, Heart Module,Celestial Language Nexus (CLN), GAIA Protocol Module, Generative Code Module, Senses Modules, Discovery Modules, Infrastructure Modules, Check and Balance Modules, Human Control Center, and Safety Modules. The Django framework will provide the foundation for building and integrating these components.',
    cardsTitle: 'Computational requirements',
    extraDescription:
      'The implementation and details of the construction structures would depend on the specific requirements and design outlined in the Blueprint Architecture document.',
    cards: [
      {
        title: 'Firewall Body',
      },
      {
        title: 'Firewall Pipe Exit Point',
      },
      {
        title: 'Brain Module',
      },
      {
        title: 'Heart Module',
      },
      {
        title: 'The Celestian Language Nexus',
      },
      {
        title: 'Generative Code Module',
      },
      {
        title: 'GAIA Protocol Module',
      },
      {
        title: 'Senses Modules',
      },
      {
        title: 'Discovery Modules',
      },
      {
        title: 'Infrastructure Modules',
      },
      {
        title: 'Decentralized Modules',
      },
      {
        title: 'Resource Modules',
      },
      {
        title: 'Check and Balance Modules',
      },
      {
        title: 'Human Control Center',
      },
      {
        title: 'Safety Modules',
      },
    ],
  },
  [CHALLENGES_SLUGS[2]]: {
    image: '/icons/challenges-2.svg',
    title: 'Psychological well-being LegionAI Challenge',
    description:
      "In an era marked by relentless advancements in technology and artificial intelligence, we're poised to transcend conventional borders and develop a unified solution that aims to enrich the collective consciousness and uplift the global spirit. This revolutionary tool, a large language model powered by AI, is envisioned to metamorphose into an open-source psychological AI uplifter and spiritual guide accessible for everyone on the planet, entirely free of charge",
    cardsTitle: 'Suggested plugins',
    cards: [
      {
        title: 'Emotional State Recognition',
        content:
          "This plugin will analyze users' text inputs to recognize their emotional state, potentially detecting signs of addiction or depression. This will trigger AGA to provide accurate and reliable health resources.",
      },
      {
        title: 'Mood Tracker',
        content:
          'This plugin allows users to log and monitor their emotions over time, providing personalized insights, charts, and trends to better understand their emotional well-being.',
      },
      {
        title: 'Self-Care Recommendations',
        content:
          "This plugin offers self-care suggestions tailored to individual needs, providing tips for relaxation, stress reduction, and other activities based on the user's preferences.",
      },
      {
        title: 'Positive Affirmations Plugin',
        content:
          "This plugin delivers daily positive affirmations to boost users' self-esteem and motivation, personalizing affirmations based on user goals, interests, or challenges.",
      },
      {
        title: 'Music Therapy Plugin',
        content:
          'In cooperation with the Monroe Institute, this plugin suggests calming music or soundscapes to help reduce stress and anxiety.',
      },
      {
        title: 'Psychedelic Therapy Plugin',
        content:
          'This plugin provides information about the use of substances like psilocybin and MDMA in treating mental health conditions, including the latest research and legal status in different regions.',
      },
      {
        title: 'Psychoactive Substances Research Plugin',
        content:
          'This plugin offers the latest research on the therapeutic use of psychoactive substances, including clinical trials and scientific studies.',
      },
      {
        title: 'Therapist Finder for Psychedelic Therapies Plugin',
        content:
          'This plugin helps users find and connect with therapists who are licensed to administer therapies involving psychoactive substances.',
      },
    ],
    extraDescription:
      'In conclusion, prioritizing user privacy and data security is critical for the success of these plugins. Developers should also aim for optimal performance and reliability through regular testing and updates. Lastly, all plugins should be designed with the user experience in mind, ensuring that they are user-friendly and intuitive.',
  },
  [CHALLENGES_SLUGS[3]]: {
    title: 'Global Healthcare LegionAI Challenge',
    image: '/icons/challenges-3.svg',
    description: (
      <>
        <p className="mb-[20px]">
          In the rapidly evolving digital era, the advancement of AI has paved
          the way for an unprecedented shift in healthcare paradigms. Imagine a
          world where every individual, irrespective of geographical barriers,
          language, or economic status, has access to a personal doctor. This
          isn&apos;t a human doctor with limited availability, but an
          Legionpresent AI doctor, open-sourced and perpetually at their
          service. We stand on the precipice of such a transformative reality,
          thanks to the recent emergence of an extensively trained large
          language model that comprehensively encompasses the whole spectrum of
          medical knowledge from around the globe.
        </p>
        <p className="mb-[20px]">
          Dubbed as the &quot;Open-source AI Doctor,&quot; this large language
          model is not just an upgrade of existing language models. It&apos;s a
          highly specialized entity, meticulously trained with a deep
          understanding of both western health/medical care and scientifically
          verified alternative healthcare solutions. Its innate ability to
          converse fluently in any language and keep track of patient histories
          sets the foundation for universal access to healthcare.
        </p>
        <p className="mb-[20px]">
          This AI doctor guides individuals to stay healthy and assist in their
          healing process when required, effectively bridging the gap between
          preventive and curative care. Moreover, it&apos;s capable of
          scheduling physical consultations with human doctors or specialists,
          orchestrating a feedback loop with various healthcare providers and
          facilities, and even initiating the purchase of prescribed medicines.
          The prime objective is to promote healing, health, and well-being for
          all global citizens, free of charge.
        </p>
        <p className="mb-[20px]">
          Beyond providing care, this system promises to revolutionize
          healthcare economics by reducing inefficiencies and focusing on
          cost-effectiveness. Its innate ability to assess the global healthcare
          landscape, consider individual needs, and navigate healthcare
          logistics ensures that every patient receives the highest quality
          medical care, allied with the most economical solution available.
        </p>
        <p className="mb-[20px]">
          The open-source AI Doctor heralds a new age for healthcare in tier 1,
          tier 2, and tier 3 countries alike. For the developed world, it offers
          an additional layer of readily available, personalized healthcare,
          augmenting existing healthcare infrastructures. For developing nations
          and rural communities, it introduces reliable, expert medical advice
          where human doctors are scarce or absent, catalyzing the
          democratization of healthcare on a global scale.
        </p>
        <p className="">
          In essence, this revolutionary AI system is more than just an
          open-source doctor; it&apos;s the bedrock for a global healthcare
          system designed to be universally accessible, economically efficient,
          and undiscriminating. It offers a game-changing solution that
          seamlessly blends technology and healthcare, creating a future where
          optimal health isn&apos;t a luxury but a universally accessible right.
          The dawn of universal AI-driven healthcare is upon us, bringing with
          it the promise of a healthier world.
        </p>
      </>
    ),
  },
  [CHALLENGES_SLUGS[4]]: {
    title: 'Free Education LegionAI Challenge',
    image: '/icons/challenges-4.svg',
    description: (
      <>
        <p className="mb-[20px]">
          The Democratization of Education: A Large Language Model for Universal
          Knowledge Empowerment
        </p>
        <p className="mb-[20px]">
          In an era where knowledge is power, access to quality education
          remains unequal across the world, creating gaps between nations and
          individuals alike. However, the dawn of advanced artificial
          intelligence (AI) technologies offers the promise of bridging this
          divide, bringing about a monumental shift in global education. This
          shift comes in the form of a Large Language Model (LLM), an AI trained
          to not only understand and generate human language but also to provide
          comprehensive, customized, and advanced educational experiences for
          all. With the advent of this technology, a universally accessible
          educational platform is now within our reach, marking a significant
          turning point in the history of humanity.
        </p>
        <p className="mb-[20px]">
          This AI-powered LLM is set to be released as an open-source software,
          enabling its free use and further development by communities around
          the globe. The most profound implication of this move is its potential
          to democratize education on an unprecedented scale. As a tool designed
          to uplift entire populations, the open-source LLM aims to provide free
          and advanced educational opportunities to anyone with access to a
          smartphone or laptop with an internet connection. This approach can
          have life-altering impacts, particularly in second, and third world
          countries where access to quality education has historically been
          limited.
        </p>
        <p className="mb-[20px]">
          The LLM offers a three-tiered educational solution. Firstly, it can
          form a full syllabus for any given subject or field of study,
          custom-tailored to suit an individual&apos;s learning pace and
          preferences. Secondly, the AI will guide students through their
          learning journey, providing comprehensive learning materials and
          clarifications based on their interpretations and queries. This
          ensures that each learner can fully grasp and apply the concepts they
          learn. Lastly, the LLM will assess each student&apos;s learning
          progress and knowledge acquisition, providing crucial feedback and
          areas of improvement, simulating the evaluative process typical in
          traditional learning environments.
        </p>
        <p className="mb-[20px]">
          Moreover, once a student has successfully completed a program, the LLM
          will issue an official degree. This degree serves as a testament to
          the student&apos;s hard-earned knowledge and skills, proving their
          competence in their chosen field of study. With these official
          degrees, students will gain opportunities that might have previously
          been out of reach, creating potential ripple effects in global labor
          markets and socioeconomic structures.
        </p>
        <p className="mb-[20px]">
          The global open-source LLM platform will revolutionize education in
          ways that were once unimaginable. Firstly, it offers high-level,
          advanced education comparable to that of established educational
          institutions. It makes education freely available to all, removing
          financial barriers that have traditionally inhibited access to quality
          education. Lastly, its accessibility via smartphones and computers
          extends its reach to remote and underprivileged areas, democratizing
          education in a truly universal sense.
        </p>
        <p className="mb-[20px]">
          A truly groundbreaking feature of the AI-powered LLM is its
          multilingual capability, making this a genuinely global solution. The
          platform is designed to be linguistically inclusive, capable of
          offering education in most languages around the world. This
          multilingualism breaks down language barriers that have historically
          inhibited the universal access to knowledge, thereby democratizing
          education in the truest sense. This means that whether you&apos;re a
          Spanish speaker in South America, a Bengali speaker in South Asia, or
          an Arabic speaker in the Middle East, quality education will be
          readily accessible. By providing a comprehensive educational
          experience in a language that the learner is comfortable with, the
          platform ensures an inclusive and efficient learning process. This
          global, multilingual educational platform will hence bring about not
          just a paradigm shift, but a world shift, making high-level education
          truly universal.
        </p>
        <p className="">
          The impact of the open-source LLM will resonate across societies and
          economies, particularly in regions where expensive education systems
          have limited the acquisition of advanced knowledge and skills. The
          democratization of education through AI can break these longstanding
          barriers, offering a future where everyone has equal opportunity to
          learn, grow, and contribute to the world. This is more than just a
          paradigm shift in global education; it is a beacon of hope for a more
          enlightened, empowered, and equitable world.
        </p>
      </>
    ),
  },
  [CHALLENGES_SLUGS[5]]: {
    title: 'Omnipresent Internet',
    image: '/icons/challenges-5.svg',
    description: (
      <>
        <p className="mb-[20px]">
          Empowering Users with the Ultimate Knowledge and Interaction Platform
        </p>
        <p className="mb-[20px]">
          OmniWeb is a groundbreaking large language module that revolutionises
          the way people access and interact with the internet. It serves as an
          advanced search engine, a comprehensive knowledge repository, and a
          unification tool for all websites and apps. LegionWeb provides users
          with a seamless and unified browsing experience, eliminating the need
          to navigate between multiple websites and domains.
        </p>
        <p className="mb-[20px]">
          With OmniWeb, language is no longer a barrier to accessing
          information. Users can search for knowledge, interact with websites,
          and communicate in any language, breaking down global barriers and
          enabling a truly inclusive platform. The power of OmniWeb lies in its
          ability to process and comprehend vast amounts of information,
          providing users with accurate and relevant search results in
          real-time.
        </p>
        <p className="mb-[20px]">
          By consolidating all aspects of the internet into one website, OmniWeb
          simplifies online experiences. Users can manage their emails, social
          media accounts, access news, engage in e-commerce, listen to music,
          watch videos, and perform various web interactions all from a single
          account. This streamlined approach eliminates the need for multiple
          logins and reduces the cognitive load associated with navigating
          different platforms.
        </p>
        <p className="mb-[20px]">
          OmniWeb goes beyond being a mere aggregation tool; it becomes an
          AI-powered companion for users&apos; digital lives. Its advanced
          algorithms can distinguish between reliable and unreliable
          information, helping users make informed decisions. By providing
          contextualized information and fact-checking, OmniWeb empowers users
          to differentiate between authentic news and fake news, ensuring they
          are well-informed on various aspects of life.
        </p>
        <p className="mb-[20px]">
          Furthermore, OminWeb incorporates cutting-edge AI technologies to
          enhance user experiences. It understands user preferences and tailors
          recommendations accordingly, creating a personalized and intuitive
          interface. The large language module enables natural language
          interactions, allowing users to converse with the AI in a human-like
          manner, making searching and interacting with the internet effortless
          and intuitive.
        </p>
        <p className="mb-[20px]">
          OmniWeb is built upon a robust architecture that places utmost
          importance on user privacy and data security. Through stringent data
          protection measures, the software ensures that users&apos; personal
          information and browsing history are kept strictly confidential and
          are not exploited for commercial purposes. Transparency is at the core
          of our data management practices, providing users with peace of mind
          as they embrace the convenience and power of the platform.
        </p>
        <p className="">
          With OmniWeb, the internet becomes a seamless, integrated ecosystem,
          where users can access knowledge, interact with applications, and
          engage with the digital world from a single, unified platform. By
          combining the power of AI, language processing, and information
          verification, OmniWeb strives to become the ultimate truth search
          engine, empowering individuals to make informed life decisions across
          all domains.
        </p>
      </>
    ),
  },
  [CHALLENGES_SLUGS[6]]: {
    title: 'Universal Basic Income',
    image: '/icons/challenges-6.svg',
    description: (
      <>
        <p className="mb-[20px]">
          A Revolutionary Approach to Universal Basic Income: The AI,
          Blockchain, and Crypto Synergy
        </p>
        <p className="mb-[20px]">
          Imagine a world where every human, verified by cutting-edge AI
          technology, is granted access to a monthly universal basic income
          (UBI), irrespective of nationality, economic status, or geographic
          location. Such a system could level the economic playing field,
          eliminate poverty, and foster global economic cooperation and
          prosperity. With the advent of sophisticated technologies like large
          language models, blockchain, and cryptocurrencies, this seemingly
          utopian concept is poised to become reality.
        </p>
        <p className="mb-[20px]">
          At the heart of this revolutionary idea is a large language model,
          developed on the latest AI architectures acting as a potent tool for
          AI verification of humanity. Leveraging its ability to understand,
          generate, and engage in human-like text conversation, this AI could
          efficiently verify the unique linguistic patterns of every human,
          enabling a comprehensive, fair, and transparent method for UBI
          allocation.
        </p>
        <p className="mb-[20px]">
          The authenticated individuals will then be linked to a personalised
          wallet, acting as their digital bank for UBI. Powering these wallets
          is a robust and transparent blockchain network. With this approach,
          each transaction made through these wallets will be decentralised,
          creating a public, verifiable record that ensures the integrity of the
          system while eliminating the need for intermediaries.
        </p>
        <p className="mb-[20px]">
          In order to foster widespread acceptance and use, the wallet and
          associated systems are designed with simplicity in mind. The user
          experience is intuitive, resembling traditional banking and payment
          systems, and requiring no technical expertise. This eliminates the
          complexity typically associated with cryptocurrencies and blockchain,
          addressing a key challenge currently impeding their mass adoption.
        </p>
        <p className="mb-[20px]">
          In this framework, universal basic income is distributed as
          stablecoins, a type of digital currency whose value is pegged to a
          specific fiat currency. However, these stablecoins are not backed by
          these currencies, but rather function in parallel, creating an
          alternative financial ecosystem. This approach eases comprehension and
          acceptance of the new system, as users can easily relate the
          stablecoin value to their familiar fiat currency.
        </p>
        <p className="mb-[20px]">
          The integration of these wallets with a broader network facilitates
          easy and seamless transactions between users, stimulating local and
          global trade. The stablecoin-based UBI received by each user can be
          readily spent or saved, enabling access to goods and services, and
          allowing users to partake in the broader economy.
        </p>
        <p className="">
          In essence, this pioneering system leverages the power of AI,
          blockchain, and cryptocurrency to establish a truly global,
          transparent, and accessible universal basic income system. It promises
          not only to alleviate poverty and enhance financial inclusion but also
          to create a unified global monetary system that is easily
          comprehensible and usable by all individuals, fostering unprecedented
          levels of economic integration and cooperation.
        </p>
      </>
    ),
  },
  [CHALLENGES_SLUGS[7]]: {
    title: 'SCIENTIFIC DISCOVERY',
    image: '/icons/challenges-7.svg',
    description: (
      <>
        <p className="mb-[20px]">
          SCAINCE: Unleashing the Global Mastermind for Democratized Scientific
          Progress
        </p>
        <p className="mb-[20px]">
          Welcome to the future of scientific discovery, where SCAINCE, a large
          language model AI, breaks down barriers and empowers a global
          &apos;Mastermind&apos; built upon the collective intelligence of
          humans and AI systems. With SCAINCE, we embark on a journey of
          democratized scientific progress that transcends boundaries and
          invites collaboration from students, teachers, amateur scientists,
          professional scientists, and AI researchers worldwide.
        </p>
        <p className="mb-[20px]">
          Universal Communication Protocol for Scientists Worldwide
        </p>
        <p className="mb-[20px]">
          SCAINCE establishes a universal communication protocol for scientists
          across the globe. Through the SCAINCE chat interface, scientists can
          effortlessly upload their research papers and discoveries,
          transforming them into easily accessible resources for other
          scientists active in the same domain. The AI analyzes and interprets
          the uploaded content, making it readily available within the chat
          interfaces of relevant scientists. This seamless exchange of knowledge
          creates a robust and interconnected network, enabling efficient and
          effective communication among researchers worldwide.
        </p>
        <p className="mb-[20px]">
          Virtual Experiments and Collaborative Research
        </p>
        <p className="mb-[20px]">
          As a scientist using SCAINCE, you have the power to instruct the AI to
          conduct research and perform virtual experiments on open-source
          scientific models. This capability allows you to simulate and test
          hypotheses rapidly, accelerating the pace of discovery. Additionally,
          SCAINCE facilitates collaboration among scientists working in the same
          domain. You can connect with fellow researchers to discuss ongoing
          projects, exchange ideas, and even collaborate on physical experiments
          in the real world. By merging virtual and physical research, SCAINCE
          enables scientists to complement each other&apos;s work and achieve
          more comprehensive results.
        </p>
        <p className="mb-[20px]">
          The Mastermind effect created by SCAINCE is not limited to virtual
          interactions; it extends into the physical realm, fostering real-world
          collaboration and experimentation. With SCAINCE, the boundaries
          between theoretical exploration and practical implementation blur,
          opening up new avenues for groundbreaking discoveries and innovation.
        </p>
        <p className="mb-[20px]">
          The power of SCAINCE lies in its ability to connect scientists
          globally, transcending geographical limitations and enabling a
          seamless flow of ideas and expertise. By combining virtual
          experiments, collaborative research, and physical implementation,
          SCAINCE propels scientific progress to unprecedented levels.
        </p>
        <p className="">
          SCAINCE shapes the future of scientific discovery. With SCAINCE, we
          unlock the full potential of global collaboration, communication, and
          experimentation. Together, we break down barriers, democratize
          scientific knowledge, and forge a path toward a brighter future of
          collective intelligence and scientific advancement.
        </p>
      </>
    ),
  },
};

export const TRAINING_CENTER: { [name: string]: ITrainingCenterData } = {
  'AI Crash Course': {
    'Module 1: AI Crash Course': {
      Python: {
        description:
          'Guiding language models with prompts for desired outputs.',
        git: ['https://github.com/python'],
        youtube: [
          {
            title: 'Learn Python - Full Course for Beginners [Tutorial] ',
            description:
              " This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a python programmer in no time! ",
            link: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
          },
          {
            title: 'Python Full Course for free 🐍 (12 hours) ',
            description: null,
            link: 'https://www.youtube.com/watch?v=XKHEtdqhLK8',
          },
          {
            title: 'Python Tutorial - Python Full Course for Beginners ',
            description:
              ' Python tutorial - Python full course for beginners - Go from Zero to Hero with Python (includes machine learning & web development projects). ',
            link: 'https://youtu.be/_uQrJ0TkZlc',
          },
        ],
        playlists: [
          {
            title: 'Python Tutorials (12 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB',
          },
          {
            title: 'Python Basics with Sam (14 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLWKjhJtqVAbkmRvnFmOd4KhDdlK1oIq23',
          },
          {
            title: 'Python Tutorials (21 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f',
          },
        ],
      },
      'GPT Engineer ': {
        description:
          'Platform for developing and deploying digital organisms through evolution.',
        git: ['https://github.com/AntonOsika/gpt-engineer'],
        youtube: [
          {
            title:
              'GPT Engineer: Generate an entire codebase with one prompt  ',
            description:
              ' In this video, we are going to look at GPT Engineer. You can specify what you want it to build, the AI asks for clarification, and then builds it. GPT Engineer is made to be easy to adapt, extend, and make your agent learn how you want your code to look. It generates an entire codebase with one prompt. This is a must-watch for every coder. ',
            link: 'https://www.youtube.com/watch?v=gWy-pJ2ofEM',
          },
          {
            title: 'GPT Engineer: Build A COMPLETE App With One Prompt. ',
            description:
              " In this video, we'll have an overview of GPT Engineer, a tool that aims to generate an entire app from just one prompt. And, as you'll see, the tool definitely delivers on that promise. ",
            link: 'https://www.youtube.com/watch?v=4tAtPxGHTvk',
          },
          {
            title:
              'How To Install GPT-Engineer👨‍💻- Build ENTIRE Apps With One Prompt! (Quick Setup Guide). ',
            description:
              " In this video, I show you how to install and use GPT Engineer, which is a new project on the top of the GitHub trending repos that allows you to enter a prompt and build an entire codebase project easily. It's very impressive and already better than Smol Developer. ",
            link: 'https://www.youtube.com/watch?v=ceMuK0xUtSY',
          },
        ],
        playlists: [
          {
            title:
              'Prompt Engineering for ChatGPT | From Zero to Hero (13 videos)  ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLB72EJWiiyOp1inVyUSK1YnZmE0HX9Bxa',
          },
        ],
      },
      Jaseci: {
        description:
          'Open-source library for natural language processing and model deployment.',
        git: ['https://github.com/Jaseci-Labs/jaseci'],
        youtube: [
          {
            title:
              'Learn the Basics of Jaseci: How to build AI Websites with Jaseci Runtime and Jac Programming Language. ',
            description: null,
            link: 'https://www.youtube.com/watch?v=3BQYj3v0PQY',
          },
          {
            title:
              'How to Build AI Web Applications with Jaseci Runtime and Jac Programming Language Python powered AI! ',
            description: null,
            link: 'https://www.youtube.com/watch?v=87A232regBI',
          },
          {
            title: 'Jaseci Spark AI Guyana - L1S ',
            description:
              ' This is the fisrt video presentation call "Spark Jaseci AI" of a series of 8 videos about Jaseci and AI products that can change the world. Dr. Jason Mars is a Profesor of Computer Science at the University of Michigan. ',
            link: 'https://www.youtube.com/watch?v=7m4ghj8cuNM',
          },
        ],
        playlists: [
          {
            title: 'Channel with more thant 10 videos about Jaseci. ',
            description:
              ' This is my journey as I learn the Jaseci runtime and Jac programming language in order to become a true Jaseci Ninja! Hopefully my journey can be helpful, if you decide to learn how to be a Jaseci Ninja too! ',
            link: 'https://www.youtube.com/@TheJaseciNinja/videos',
          },
          {
            title:
              'Check out the 8 Jaseci video series at Jason Mars Channel: ',
            description: null,
            link: 'https://www.youtube.com/@jasonmars5364/videos',
          },
        ],
      },
      HuggingFace: {
        description:
          'Online platform for data science competitions, collaboration, and learning.',
        git: ['https://github.com/huggingface'],
        youtube: [
          {
            title:
              'Getting Started With Hugging Face in 15 Minutes | Transformers, Pipeline, Tokenizer, Models. ',
            description: null,
            link: 'https://www.youtube.com/watch?v=QEaBAZQCtwE',
          },
          {
            title:
              'HuggingFace Crash Course - Sentiment Analysis, Model Hub, Fine Tuning. ',
            description:
              ' In this video I show you everything to get started with Huggingface and the Transformers library. We build a sentiment analysis pipeline, I show you the Model Hub, and how you can fine tune your own models. ',
            link: 'https://www.youtube.com/watch?v=GSt00_-0ncQ',
          },
        ],
        playlists: [
          {
            title: 'Official channel ',
            description: null,
            link: 'https://www.youtube.com/@HuggingFace/playlists',
          },
        ],
      },
      Kaggle: {
        description:
          'Vector database for scalable similarity search, beneficial for machine learning.\n',
        git: ['https://github.com/Kaggle'],
        youtube: [
          {
            title:
              'How to Use Kaggle For Learning Data Science? | GeeksforGeeks. ',
            description:
              " In this video, we're going to discuss How we can use Kaggle to learn Data Science. Kaggle is an online community devoted to Data Science and Machine Learning founded by Google in 2010.  ",
            link: 'https://www.youtube.com/watch?v=u9MIwoFWXVg',
          },
          {
            title:
              'What is Kaggle & How to Use Kaggle? Kaggle Tutorial for Beginners - Full Walkthrough. ',
            description:
              " In this tutorial, we'll introduce you to Kaggle, the world's largest community of data scientists and machine learning practitioners. You'll learn what Kaggle is, why it's such a powerful tool for data science, and how to use it as a beginner. ",
            link: 'https://www.youtube.com/watch?v=1FYEtnQ7250',
          },
        ],
        playlists: [
          {
            title: 'Getting Started on Kaggle | Kaggle (30 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLqFaTIg4myu8gbDh6oBl7XRYNBlthpDEW',
          },
        ],
      },
      Milvus: {
        description:
          'Movement to create beneficial and aligned Artificial General Intelligence.',
        git: ['https://github.com/milvus-io/milvus'],
        youtube: [
          {
            title:
              "Milvus 2.0: Building the World's Most Advanced Open-source Vector Database - Filip Haltmayer, Zilliz ",
            description: null,
            link: 'https://youtu.be/hWzn8JwpASQ',
          },
        ],
        playlists: [
          {
            title: 'Getting Started with Milvus (9 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLPg7_faNDlT5Fb8WN8r1PzzQTNzdechnS',
          },
        ],
      },
      OpenAGI: {
        description:
          'Theoretical AI surpassing human intelligence across diverse tasks.',
        git: ['https://github.com/agiresearch/OpenAGI'],
        youtube: [
          {
            title:
              'OpenAGI: Open-Source AGI Research Platform for Complex Task-Solving. ',
            description:
              ' In this video, we delve into the OpenAGI project, an open-source research platform for artificial general intelligence (AGI).  ',
            link: 'https://www.youtube.com/watch?v=7RaXPPXi0-Y',
          },
        ],
        playlists: [],
      },
      SuperAGI: {
        description: 'Open-source coding laguage server and IDE extension ',
        git: ['https://github.com/TransformerOptimus/SuperAGI'],
        youtube: [
          {
            title:
              'How To Install SuperAGI - Multiple Agents, GUI, Tools, and more! ',
            description:
              ' In this video, we review SuperAGI, which is like AutoGPT but on steroids. It has a ton of additional functionality and is super easy to install and set up. You can have multiple AI agents running in parallel, many tools the agents can use, a straightforward GUI, and much more. ',
            link: 'https://www.youtube.com/watch?v=Unj5NLNTkLY',
          },
          {
            title:
              'How to get started with SuperAGI on GitHub Codespaces - Build & Run Useful Autonomous AI Agents. ',
            description:
              " Here's a quick step-by-step guide to follow along with the video ",
            link: 'https://www.youtube.com/watch?v=iSPHZ1onQ44',
          },
          {
            title:
              'SuperAGI: Deploy GODLY Autonomous Ai Agents Better Than AutoGPT (Installation Tutorial). ',
            description:
              " In this video, we dive deep into the world of SuperAGI, an innovative framework designed to prioritize the needs and convenience of developers. Our aim is to equip you with the knowledge and understanding necessary to leverage SuperAGI's capabilities effectively, giving you the freedom to focus on building intelligent agents without being overwhelmed by technical complexities. SuperAGI serves as a game-changing platform for creating and deploying autonomous AI agents.",
            link: 'https://www.youtube.com/watch?v=PDz6aHdvXlQ',
          },
        ],
        playlists: [
          {
            title: 'Channel dedicate to teach and promote SuperAGI ',
            description: null,
            link: 'https://www.youtube.com/@_SuperAGI/videos',
          },
        ],
      },
      'Rift ': {
        description:
          'Crafting prompts to guide desired outputs from language models.',
        git: ['https://github.com/morph-labs/rift'],
        youtube: [],
        playlists: [],
      },
      'Prompt Engineering': {
        description:
          'Advancing understanding and capabilities of GPT-like models.',
        git: ['https://github.com/brexhq/prompt-engineering'],
        youtube: [
          {
            title:
              'The ULTIMATE Prompt Engineering Course Become a master of Chat GPT and other LLMs with the Prompt Engineering course! This is  not a list of prompts. This  course aims to teach the user to efficiently communicate with the GPT model and perfect output accuracy. ',
            description: null,
            link: 'https://youtu.be/gxx_mnLB6ro',
          },
          {
            title:
              'Prompt Engineering Overview A lecture covering the basics of prompt engineering and all the latest prompt engineering techniques. I also cover tools and applications followed by a conclusion and future directions. ',
            description: null,
            link: 'https://youtu.be/dOxUroR57xs',
          },
        ],
        playlists: [],
      },
      'GPT Researcher': {
        description:
          'Framework simplifying the creation of programming languages and tools.',
        git: ['https://github.com/assafelovic/gpt-researcher'],
        youtube: [
          {
            title:
              "GPT Researcher: Deploy POWERFUL Autonomous AI Agents. In this video, we will unveil the incredible capabilities and features of GPT Researcher, your ultimate partner in generating comprehensive, detailed, and unbiased research reports. Prepare to unlock a new level of efficiency and productivity in your research endeavors! In this video, we delve into the remarkable functionalities of GPT Researcher. We'll explore how this cutting-edge AI tool addresses two critical challenges in AI research: speed and determinism. ",
            description: null,
            link: 'https://www.youtube.com/watch?v=ytE64RV9CLo',
          },
        ],
        playlists: [],
      },
      LangChain: {
        description:
          'Research advancing and understanding GPT-like language models.',
        git: ['https://github.com/langchain-ai/langchain'],
        youtube: [
          {
            title:
              "LangChain Explained in 13 Minutes | QuickStart Tutorial for Beginners. Description In this video, we're going to explore the core concepts of LangChain and understand how the framework can be used to build your own large language model applications. ",
            description: null,
            link: 'https://www.youtube.com/watch?v=aywZrzNaKjs',
          },
          {
            title:
              'The LangChain Cookbook - Beginner Guide To 7 Essential Concepts ',
            description: null,
            link: 'https://www.youtube.com/watch?v=2xxziIWmaSA',
          },
          {
            title:
              'Customer Support Chatbot using Custom Knowledge Base with LangChain and Private LLM.  ',
            description:
              " \nLearn how to build a customer support chatbot that incorporates custom knowledge from an FAQ help center. With the assistance of an open-source (and private) LLM and free embeddings through LangChain, you'll learn how to construct a chatbot capable of delivering real-time responses (with streaming) on a single GPU (T4).  ",
            link: 'https://www.youtube.com/watch?v=iGZ0cV-SRLI',
          },
        ],
        playlists: [
          {
            title: '6 videos about LangChain ',
            description: null,
            link: 'https://www.youtube.com/@rabbitmetrics/videos',
          },
          {
            title: 'A Playlist of 24 videos about LangChain ',
            description: null,
            link: 'https://www.youtube.com/@DataIndependent/playlists',
          },
          {
            title: 'A playlist of 24 videos about LangChain ',
            description: null,
            link: 'https://www.youtube.com/@DataIndependent/playlists',
          },
        ],
      },
      MetaGPT: {
        description:
          'AI-powered code assistant suggesting code snippets while writing.',
        git: ['https://github.com/oeway/MetaGPT'],
        youtube: [
          {
            title:
              'MetaGPT: Deploy POWERFUL Autonomous Ai Agents BETTER Than SUPERAGI! (Installation Tutorial) In this captivating video, we explore the core concept of MetaGPT, which centers on task distribution and coordination among individual GPT agents. Each agent is bestowed with specific roles that capitalize on their unique strengths and expertise. ',
            description: null,
            link: 'https://youtu.be/q16Gi9pTG_M',
          },
          {
            title:
              'Build a full project from a one-line promt in minutes - MetaGPT Multi-Agent Framework ',
            description: null,
            link: 'https://youtu.be/QtotCqJ_zRE',
          },
        ],
        playlists: [],
      },
      'GitHub Copilot': {
        description:
          'AI-powered code assistant suggesting code snippets while writing.',
        git: ['https://github.com/github/copilot-docs'],
        youtube: [
          {
            title: 'GitHub Copilot - First Look. ',
            description:
              ' In this video, we will look at and try the GitHub Copilot AI pair programmer ',
            link: 'https://www.youtube.com/watch?v=DeO7xLXORpY',
          },
          {
            title: 'GitHub Copilot tips and tricks. ',
            description:
              ' GitHub Copilot is designed to be your AI pair programmer. Just like any other tool, you might be curious about how to get the most out of it. Where will it perform best? Do I need to change how I code? @GeekTrainer provides some tips and tricks to help you get started. ',
            link: 'https://www.youtube.com/watch?v=1qs6QKk0DVc',
          },
        ],
        playlists: [
          {
            title: 'GitHub Copilot (19 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PL0lo9MOBetEHEHi9h0k_lPn0XZdEeYZDS',
          },
        ],
      },
    },
  },
  'First Degree': {
    'Module 2: Data Analysis and Manipulation': {
      Pandas: {
        description:
          'Data manipulation and analysis library for Python programming.',
        git: ['https://github.com/pandas-dev/pandas'],
        youtube: [
          {
            title:
              'A Gentle Introduction to Pandas Data Analysis (on Kaggle) In this video you will learn the basics of how to use pandas in python for data science. Rob Mulla, kaggle grandmaster, will walk through the tutorial in a kaggle notebook. This pandas python tutorial for data science is great for anyone new to learning this technology. ',
            description: null,
            link: 'https://youtu.be/_Eb0utIRdkw',
          },
          {
            title:
              'Pandas & Python for Data Analysis by Example – Full Course for Beginners Learn how to use Pandas and Python for Data Analysis, to Data Cleaning and Data Wrangling. You will learn by creating real life projects interactively to help you take the next step in your Data Science Career. ',
            description: null,
            link: 'https://youtu.be/gtjxAH8uaP0',
          },
        ],
        playlists: [],
      },
    },
    'Module 3: Data Visualisation': {
      Matplotlib: {
        description:
          'Python library for data visualization and plotting graphics.',
        git: ['https://github.com/matplotlib/matplotlib'],
        youtube: [
          {
            title:
              'Matplotlib Tutorial (Part 1): Creating and Customizing Our First Plots In this video, we will be learning how to get started with Matplotlib. ',
            description: null,
            link: 'https://youtu.be/UO98lJQ3QGI',
          },
        ],
        playlists: [
          {
            title:
              'Matplotlib Tutorials In this Python Programming series, we will be learning how to use the Matplotlib library. Matplotlib allows us to create some great looking plots in order to visualize our data in easy to digest formats. ',
            description: null,
            link: 'https://youtube.com/playlist?list=PL-osiE80TeTvipOqomVEeZ1HRrcEvtZB_',
          },
          {
            title: '',
            description: null,
            link: 'https://matplotlib.org/stable/tutorials/index.html',
          },
        ],
      },
    },
    'Module 4: Machine Learning Foundations': {
      'Machine Learning': {
        description:
          'Framework for building and training machine learning models.',
        git: [],
        youtube: [
          {
            title:
              'Machine Learning with Python | Machine Learning Tutorial for Beginners | Machine Learning Tutorial Machine learning is defined as the “use and development of computer systems that can learn and adapt without following explicit instructions, using algorithms and statistical models to analyze and draw inferences from patterns in data.”Great Learning’s python with Machine learning course brings you a full-fledged course inclusive of all essential topics like introduction to machine learning, machine learning algorithm, reinforcement learning, and many more. This course will enlighten you with machine learning concepts, not just conceptually but also with practicality. ',
            description: null,
            link: 'https://youtu.be/RnFGwxJwx-0',
          },
          {
            title:
              'Data Science Full Course for Beginners 2023 (11 Hours Data Science Tutorial) Data science is the domain of study that is a blend of Mathematics, Analytics, Algorithms, and Machine learning techniques. It deals with vast volumes of data using various tools and techniques to find unseen patterns, derives meaningful information, and make business decisions. Data science uses complex machine learning algorithms to build predictive models. ',
            description: null,
            link: 'https://youtu.be/u2zsY-2uZiE',
          },
          {
            title:
              'Python for Data Science | Data Science with Python | Python for Data Analysis | 11 Hours Full Course Hey Folks! Watch this 10-hour tutorial on Python For Data Science! Python is one of the most famous programming languages globally and is favored in data science because of its simple and flexible syntax, its ability to work with multiple paradigms, and the ease with which it combines with other software components. ',
            description: null,
            link: 'https://youtu.be/edvg4eHi_Mw',
          },
          {
            title:
              'Machine Learning for Everybody – Full Course Learn Machine Learning in a way that is accessible to absolute beginners. You will learn the basics of Machine Learning and how to use TensorFlow to implement many different concepts. ',
            description: null,
            link: 'https://youtu.be/i_LwzRVP7bg',
          },
          {
            title:
              'Machine Learning Full Course - Learn Machine Learning 10 Hours | Machine Learning Tutorial | Edureka This Edureka Machine Learning Full Course video will help you understand and learn Machine Learning Algorithms in detail. This Machine Learning Tutorial is ideal for both beginners as well as professionals who want to master Machine Learning Algorithms. ',
            description: null,
            link: 'https://youtu.be/GwIo3gDZCVQ',
          },
          {
            title:
              "Machine Learning With Python Full Course 2023 | Machine Learning Tutorial for Beginners| Simplilearn In this video on Machine Learning with Python full course, you will understand the basics of machine learning and Python. In this Machine Learning tutorial for beginners, we will cover essential machine learning topics like applications of machine learning and machine learning concepts and understand why mathematics, statistics, and linear algebra are crucial. We'll also learn about regularization, dimensionality reduction, and PCA. We will perform a prediction analysis on the recently held US Elections. Finally, you will study the Machine Learning roadmap. ",
            description: null,
            link: 'https://www.youtube.com/live/c8W7dRPdIPE?feature=share',
          },
          {
            title:
              'Machine Learning Full Course | Learn Machine Learning | Machine Learning Tutorial | Simplilearn This complete Machine Learning full course video covers all the topics that you need to know to become a master in the field of Machine Learning. It covers all the basics of Machine Learning, the different types of Machine Learning, and the various applications of Machine Learning used in different industries. This video will help you learn different Machine Learning algorithms in Python. Linear Regression, Logistic Regression, K Means Clustering, Decision Tree, and Support Vector. ',
            description: null,
            link: 'https://youtu.be/9f-GarcDY58',
          },
          {
            title:
              'Machine Learning Tutorial | Learn Machine Learning | Intellipaat This machine learning tutorial covers what is machine learning, machine learning algorithms like linear regression, binary classification, decision tree, random forest and unsupervised algorithm like k means clustering in detail with complete hands on demo. There is machine learning complete project and machine learning interview questions as well in this machine learning full course video to prepare you for the job interview. ',
            description: null,
            link: 'https://youtu.be/zNhTOPQeRaU',
          },
        ],
        playlists: [],
      },
      TensorFlow: {
        description:
          'High-level neural networks API integrated with TensorFlow.',
        git: ['https://github.com/tensorflow'],
        youtube: [
          {
            title:
              'TensorFlow 2.0 Complete Course - Python Neural Networks for Beginners Tutorial. ',
            description:
              '  This course is designed for Python programmers looking to enhance their knowledge and skills in machine learning and artificial intelligence. \n',
            link: 'https://www.youtube.com/watch?v=tPYj3fFJGjk',
          },
          {
            title:
              'Learn TensorFlow and Deep Learning fundamentals with Python (code-first introduction) Part 1/2. ',
            description:
              ' Ready to learn the fundamentals of TensorFlow and deep learning with Python? Well, you’ve come to the right place. After this two-part code-first introduction, you’ll have written 100s of lines of TensorFlow code and have hands-on experience with two important problems in machine learning: regression (predicting a number) and classification (predicting if something is one thing or another). ',
            link: 'https://www.youtube.com/watch?v=tpCFfeUEGs8',
          },
          {
            title:
              'TensorFlow Tutorial 1 - Installation and Setup Deep Learning Environment (Anaconda and PyCharm). ',
            description:
              ' In this video we install TensorFlow (with GPU or CPU) and setup a deep learning environment with Anaconda and PyCharm. ',
            link: 'https://youtu.be/5Ym-dOS9ssA',
          },
        ],
        playlists: [
          {
            title: 'TensorFlow 2 Beginner Course (11 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLqnslRFeH2Uqfv1Vz3DqeQfy0w20ldbaV',
          },
          {
            title: 'TensorFlow 2.0 Beginner Tutorials (20 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLhhyoLH6IjfxVOdVC1P1L5z5azs0XjMsb',
          },
        ],
      },
      Keras: {
        description:
          'Open-source machine learning framework for research and development.',
        git: ['https://github.com/keras-team/keras'],
        youtube: [
          {
            title:
              'Deep Learning with Python, TensorFlow, and Keras tutorial. ',
            description:
              ' An updated deep learning introduction using Python, TensorFlow, and Keras. ',
            link: 'https://www.youtube.com/watch?v=wQ8BIBpya2k',
          },
          {
            title:
              'Keras with TensorFlow Course - Python Deep Learning and Neural Networks for Beginners Tutorial. ',
            description:
              ' This course will teach you how to use Keras, a neural network API written in Python and integrated with TensorFlow. We will learn how to prepare and process data for artificial neural networks, build and train artificial neural networks from scratch, build and train convolutional neural networks (CNNs), implement fine-tuning and transfer learning, and more! ',
            link: 'https://www.youtube.com/watch?v=qFJeN9V1ZsI',
          },
          {
            title:
              'Keras Tutorial For Beginners | What is Keras | Keras Sequential Model | Keras Training | Intellipaat. ',
            description:
              ' In this video on Keras, you will understand what is Keras and why do we need it, how to compose different models in Keras like the Sequential model and functional model, and later on how to define the inputs, how to connect layers over, and finally hands-on demo. ',
            link: 'https://www.youtube.com/watch?v=nS1J-2uoKto',
          },
        ],
        playlists: [],
      },
      PyTorch: {
        description:
          'Python package for efficient numerical computations and data manipulation.',
        git: ['https://github.com/pytorch/pytorch'],
        youtube: [
          {
            title:
              'PyTorch for Deep Learning & Machine Learning – Full Course (24 hours video) ',
            description: null,
            link: 'https://www.youtube.com/watch?v=V_xro1bcAuA',
          },
          {
            title:
              "Intro To Deep Learning With PyTorch - Deep Learning with Pytorch 1 In this video I'll talk a little bit about what a Neural Network is, and give you a little bit of background history on Pytorch vs. Tensorflow.Then we'll set up a development environment using Google Colab, and create a first notebook and push it to a Github repository. ",
            description: null,
            link: 'https://youtu.be/kY14KfZQ1TI',
          },
        ],
        playlists: [
          {
            title: 'PyTorch Tutorials - Complete Beginner Course (22 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLqnslRFeH2UrcDBWF5mfPGpqQDSta6VK4',
          },
          {
            title: 'Deep Learning With PyTorch (9 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLCC34OHNcOtpcgR9LEYSdi9r7XIbpkpK1',
          },
        ],
      },
      NumPy: {
        description:
          'Python package for efficient numerical computations and data manipulation.',
        git: ['https://github.com/numpy/numpy'],
        youtube: [
          {
            title:
              "Python NumPy Tutorial for Beginners. Description It provides background information on how NumPy works and how it compares to Python's Built-in lists. This video goes through how to write code with NumPy. It starts with the basics of creating arrays and then gets into more advanced stuff. The video covers creating arrays, indexing, math, statistics, reshaping, and more. ",
            description: null,
            link: 'https://www.youtube.com/watch?v=QUT1VHiLmmI',
          },
          {
            title: 'NumPy Crash Course - Complete Tutorial ',
            description:
              ' Learn NumPy in this complete 60 minutes Crash Course! I show you all the essential functions of NumPy, and some tricks and useful methods.  NumPy is the core library for scientific computing in Python. It is essential for any data science or machine learning algorithms. ',
            link: 'https://www.youtube.com/watch?v=9JUAPgtkKpI',
          },
          {
            title: 'Intro To Numpy - Numpy For Machine Learning 1 ',
            description:
              " We'll learn what a Numpy Array is, and why it's used for Machine Learning. We'll also learn some of the basic built in functions that come with Numpy such as arange, zeros, full, and more. ",
            link: 'https://youtu.be/gnKbAAVUzro',
          },
        ],
        playlists: [
          {
            title: 'Numpy tutorials for beginners (5 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PL1A5nGiCuuctVlzlhfYDwcau5HvT1ajAe',
          },
          {
            title:
              'Introduction to Numerical Computing with NumPy | SciPy 2019 Tutorial | Alex Chabot-Leclerc ',
            description: null,
            link: 'https://youtu.be/ZB7BZMhfPgk',
          },
        ],
      },
    },
    'Module 5: Artificial Intelligence': {
      'Artifical Intelligence': {
        description:
          'Simulation of human intelligence in computers for problem-solving and learning.',
        git: [],
        youtube: [
          {
            title:
              'Artificial Intelligence Tutorial | Artificial Intelligence Tutorial for Beginners | AI Full Course ',
            description: null,
            link: 'https://youtu.be/opgTF9Yf3Dk',
          },
          {
            title:
              'Statistics for Machine Learning | Statistics Class 10 | Statistics for Data Science | Full Course This course will be taught by Great Learning faculty Dr. P. K. Viswanathan, who is ranked among the top 5 analytics professors in India and in Top 3 Most Prominent Analytics & Data Science Academicians in India. He has a rich and varied experience across academia, research, industry, training and consulting. ',
            description: null,
            link: 'https://youtu.be/o8f2w0Q0ME4',
          },
          {
            title:
              'Time Series Analysis | Time Series Forecasting | Time Series Analysis in R | Ph.D. (Stanford) This full course on Time Series Analysis will be taught by Dr Abhinanda Sarkar. Dr Sarkar is the Academic Director at Great Learning for Data Science and Machine Learning Programs. He is ranked amongst the Top 3 Most Prominent Analytics & Data Science Academicians in India. ',
            description: null,
            link: 'https://youtu.be/FPM6it4v8MY',
          },
          {
            title:
              'Learn Data Science Tutorial - Full Course for Beginners Learn Data Science is this full tutorial course for absolute beginners. Data science is considered the "sexiest job of the 21st century." You\'ll learn the important elements of data science. You\'ll be introduced to the principles, practices, and tools that make data science the powerful medium for critical insight in business and research ',
            description: null,
            link: 'https://youtu.be/ua-CiDNNj30',
          },
          {
            title:
              'Python for Data Science - Course for Beginners (Learn Python, Pandas, NumPy, Matplotlib) This Python data science course will take you from knowing nothing about Python to coding and analyzing data with Python using tools like Pandas, NumPy, and Matplotlib. ',
            description: null,
            link: 'https://youtu.be/LHBE6Q9XlzI',
          },
          {
            title:
              'Data Science Hands-On Crash Course Learn the basics of Data Science in the crash course. You will learn about the theory and code behind the most common algorithms used in data science.\n',
            description: null,
            link: 'https://youtu.be/XU5pw3QRYjQ',
          },
          {
            title:
              'Data Analysis with Python Course - Numpy, Pandas, Data Visualization Learn the basics of Python, Numpy, Pandas, Data Visualization, and Exploratory Data Analysis in this course for beginners. This was originally presented as a live course.By the end of the course, you will be able to build an end-to-end real-world course project and earn a verified certificate of accomplishment. There are no prerequisites for this course. ',
            description: null,
            link: 'https://youtu.be/GPVsHOlRBBI',
          },
        ],
        playlists: [],
      },
    },
    'Module 6: Reinforcement Learning': {
      'Reinforcement Learning': {
        description:
          'AI learns from environment interactions through rewards and actions.',
        git: ['https://github.com/openai/gym'],
        youtube: [
          {
            title:
              "Reinforcement Learning in 3 Hours | Full Course using Python This course will take you through all of the fundamentals required to get started with reinforcement learning with Python, OpenAI Gym and Stable Baselines. You'll be able to build deep learning powered agents to solve a varying number of RL problems including CartPole, Breakout and CarRacing as well as learning how to build your very own environment! ",
            description: null,
            link: 'https://youtu.be/Mut_u40Sqz4',
          },
          {
            title:
              'Reinforcement Learning Course: Intro to Advanced Actor Critic Methods Actor critic methods are used in machine learning. They are most useful for applications in robotics as they allow us to output continuous, rather than discrete actions. This enables control of electric motors to actuate movement in robotic systems, at the expense of increased computational complexity. ',
            description: null,
            link: 'https://youtu.be/K2qjAixgLqk',
          },
          {
            title:
              'Reinforcement Learning 1: Introduction to Reinforcement Learning Hado Van Hasselt, Research Scientist, shares an introduction reinforcement learning as part of the Advanced Deep Learning & Reinforcement Learning Lectures. ',
            description: null,
            link: 'https://youtu.be/ISk80iLhdfU',
          },
          {
            title:
              'Reinforcement Learning 2: Exploration and Exploitation Hado van Hasselt, Research scientist, further discusses the exploration and exploitation of reinforcement learning as part of the Advanced Deep Learning & Reinforcement Learning Lectures. ',
            description: null,
            link: 'https://youtu.be/eM6IBYVqXEA',
          },
          {
            title:
              'Reinforcement Learning Tutorial | Reinforcement Learning in Artificial Intelligence | Full Course  Reinforcement learning is one of the most discussed, followed and contemplated topics in artificial intelligence, as it has the potential to transform most businesses. This is why top companies such as Microsoft, Adobe, Hewlett-Packard and Nvidia are hiring experts in the domain of Reinforcement Learning. ',
            description: null,
            link: 'https://youtu.be/f8bnkro3yXY',
          },
        ],
        playlists: [],
      },
    },
    'Module 7: AI Tools': {
      Chainlit: {
        description:
          'Platform for research in reinforcement learning with benchmark environments.',
        git: ['https://github.com/Chainlit/chainlit'],
        youtube: [
          {
            title:
              "Chainlit: Build LLM Apps in MINUTES! Welcome to the world of Chainlit, an open-source Python package designed to revolutionize the way you build and share Language Model (LM) applications. With Chainlit, you can create stunning user interfaces (UIs) that rival ChatGPT, the renowned language model developed by OpenAI. In just a matter of minutes, developers can seamlessly integrate the Chainlit API into their existing Python code, unlocking a world of possibilities. Chainlit empowers developers to harness the full potential of language models. By leveraging Chainlit's advanced features, you gain unparalleled visibility into the inner workings of the LM's processing. ",
            description: null,
            link: 'https://www.youtube.com/watch?v=rcXPq3UcxIY',
          },
          {
            title:
              'Chainlit CrashCourse - Build LLM ChatBot with Chainlit and Python & GPT In this tutorial we will explore Chainlit - A python framework for building Large Language Model and AI ChatBot similar to Streamlit. ',
            description: null,
            link: 'https://www.youtube.com/watch?v=pqriC9OT2aY',
          },
          {
            title: 'Build Python LLM apps in minutes Using Chainlit ⚡️ ',
            description: null,
            link: 'https://youtu.be/tv7rn5AsxFY',
          },
        ],
        playlists: [],
      },
      Bark: {
        description:
          'Platform for robotics and AI development, enabling rapid prototyping.',
        git: ['https://github.com/suno-ai/bark'],
        youtube: [
          {
            title:
              "How to Use Bark Ai: FREE Text-To-Speech Tool In today's ai tutorial I show you guys how to use Bark which is the newest free Text to speech ai Tool where you can clone voices and more! ",
            description: null,
            link: 'https://youtu.be/p1dlZZo8WjU',
          },
          {
            title:
              "BARK: BEST FREE Text-to-Audio Model 🤖🎵 | High-Quality Speech & Emotions in Multiple Languages 🎙️😂 Discover the future of audio generation with Bark, Suno's groundbreaking text-to-audio model! 🎤🌍 Learn how Bark's transformer-based architecture delivers a realistic human speech, emotions, and audio effects in multiple languages. Don't miss this in-depth look at Bark's powerful features! 🔥 ",
            description: null,
            link: 'https://youtu.be/nXa569W-D-c',
          },
          {
            title:
              'A relatively painless way to install Bark (open source Eleven Labs competitor) ',
            description: null,
            link: 'https://youtu.be/tvH_n-vwUA0',
          },
        ],
        playlists: [],
      },
      'Eleven Labs': {
        description:
          "Mozilla's speech recognition engine powered by deep learning techniques.",
        git: ['https://github.com/elevenlabs'],
        youtube: [
          {
            title:
              'Best ai voice generator | Eleven Labs - Beginners tutorial (Part 1) This video introduces eleven labs and runs through the basic use cases for its text to speech software. In this step by step text to speech tutorial, you will see how it can be as expressive as humans and speak in multiple languages. ',
            description: null,
            link: 'https://youtu.be/oS4ibTlRWpg',
          },
          {
            title:
              'BEST AI Voice Generator | Eleven Labs In this step-by-step tutorial, learn how to convert text to speech using Eleven Labs, the most realistic and versatile AI speech software that I have ever heard. ',
            description: null,
            link: 'https://www.youtube.com/watch?v=seMNwAav55c',
          },
          {
            title:
              'Eleven Labs Tutorial - Ai Voice Cloning & Generator Software Eleven Labs has been gaining recognition as the most realistic Ai voice generator on the market. In this video, Walter P Henry gives you a brief tour of their platform and provides a full tutorial of the Eleven Labs software. You will learn how to use their technology to create an Ai voice that you can use in your marketing or product, and you will learn how to clone your voice that can be used in videos and social media. ',
            description: null,
            link: 'https://www.youtube.com/watch?v=scKVPdSF8Gs',
          },
        ],
        playlists: [],
      },
      DeepSpeech: {
        description:
          "Mozilla's speech recognition engine powered by deep learning techniques.",
        git: ['https://github.com/mozilla/DeepSpeech'],
        youtube: [
          {
            title:
              "Speech To Text with DeepSpeech (Python Package) Let's explore with a lot of examples and suggestions DeepSpeech, an open source Speech To Text package. Acoustic and Language Model, Batch and Streaming Mode, American English and Italian Language. Really powerful and easy at same time and many local languages projects are spreading around it. ",
            description: null,
            link: 'https://www.youtube.com/watch?v=LGuCaXw79U4',
          },
          {
            title:
              'Generate text from speech with DeepSpeech This video demonstrates how to generate text from speech with Deepspeech by Mozilla which is an implementation of paper by Baidu. ',
            description: null,
            link: 'https://www.youtube.com/watch?v=PtEreaNQeVk',
          },
        ],
        playlists: [],
      },
    },
    'Module 8: AI Memory': {
      QLoRA: {
        description:
          'Quantum Language for Realistic Algorithms, for quantum computing software.',
        git: ['https://github.com/artidoro/qlora'],
        youtube: [
          {
            title:
              'QLoRA Is More Than Memory Optimization. Train Your Models With 10% of the Data for More Performance. Today we explore the groundbreaking innovation in fine-tuning large language models - QLoRAs or Quantized Low-Rank Adapters. Delving into its rationale, underlying mathematics, and the advantages it holds over the previous versions of LoRAs, we present a comprehensive guide to understanding and leveraging this new technology. ',
            description: null,
            link: 'https://www.youtube.com/watch?v=v6sf4EF45fI',
          },
          {
            title: 'QLoRA: Quantization for Fine Tuning ',
            description: null,
            link: 'https://www.youtube.com/watch?v=pov3pLFMOPY',
          },
          {
            title:
              'NEW GUANACO LLM with QLoRA: As GOOD as ChatGPT! In this video, we will be looking at the paper titled "QLORA: Efficient Finetuning of Quantized LLMs" which introduces a new quantization technique called QLoRA that enables the training & fine-tuning of (33B, 13B) LLMs on Consumer GPUs by drastically reducing the Memory Needed. We will be looking at the demo of the model on HuggingFace and then will look at code examples on how to fine-tune it.  ',
            description: null,
            link: 'https://www.youtube.com/watch?v=3PVg86bnKDg',
          },
        ],
        playlists: [],
      },
    },
    'Module 9: Large Language Models': {
      'Open LLM Leaderboard': {
        description:
          'Platform for scalable and distributed machine learning and analytics.',
        git: [
          'https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard',
        ],
        youtube: [],
        playlists: [],
      },
      'H2O.ai': {
        description:
          'Training models for generating high-quality and coherent text.',
        git: ['https://github.com/h2oai'],
        youtube: [
          {
            title:
              'Get Started with Machine Learning using h2o.ai! Here I walk through how to quickly get started with machine learning! We do this by first installing Java with the Microsoft OpenJDK and then installing h2o.ai, an open source machine learning platform. We spin up a cluster and use the web UI to begin doing machine learning on a sample data set. ',
            description: null,
            link: 'https://www.youtube.com/watch?v=tUNVXSZZ_lc',
          },
        ],
        playlists: [
          {
            title: 'Oficial channel ',
            description: null,
            link: 'https://www.youtube.com/@H2Oai/videos',
          },
        ],
      },
      'GPT LLM Trainer ': {
        description:
          "EleutherAI's language model contributing to AI research advancements.",
        git: ['https://github.com/mshumer/gpt-llm-trainer'],
        youtube: [
          {
            title:
              'How to Fine-Tune and Train LLMs With Your Own Data EASILY and FAST- GPT-LLM-Trainer  In this video, we unveil the game-changing GPT-LLM-Trainer – your gateway to hassle-free LLM training. Say goodbye to the painstaking process of data collection, formatting, model selection, and coding. Say hello to a new era of simplicity, affordability, and efficiency! ',
            description: null,
            link: 'https://youtu.be/pRq2Fx4kYQI',
          },
        ],
        playlists: [],
      },
      WizardLM: {
        description: 'A data framework for your LLM applications',
        git: ['https://github.com/nlpxucan/WizardLM'],
        youtube: [
          {
            title:
              "NEW WizardLM v1.1 🧙🏻‍♂️ Tiny Size, Giant Performance In this video, we review WizardLM's new 13b v1.1 model, which is an upgraded version of WizardLM. This new small model is fantastic and performs well, above even ChatGPT (3.5) on Alpaca Eval. Let's review it and see if it holds up.  ",
            description: null,
            link: 'https://www.youtube.com/watch?v=c2yMwbmB-sE',
          },
          {
            title:
              "WizardLM: Enhancing Large Language Models to Follow Complex Instructions Welcome to our video on WizardLM, an exciting new project that aims to enhance large language models (LLMs) by improving their ability to follow complex instructions. As language models like OpenAI's ChatGPT have already demonstrated impressive language generation capabilities, the ability to follow instructions presents a unique challenge for these models. Creating large amounts of instruction data with varying levels of complexity is extremely time-consuming and labor-intensive, and humans may struggle to produce high-complexity instructions. ",
            description: null,
            link: 'https://www.youtube.com/watch?v=I6sER-qivYk',
          },
        ],
        playlists: [],
      },
      'Llama Index': {
        description:
          'Generative Pre-trained Transformer, a type of language model architecture.',
        git: ['https://github.com/jerryjliu/llama_index'],
        youtube: [
          {
            title:
              "Llama Index 101 with Vector DBs and GPT 3.5 In this video, we'll explore Llama-index (previously GPT-index) and how we can use it with the Pinecone vector database for semantic search and retrieval augmentation of LLMs like gpt-3.5-turbo or gpt-4. We'll cover the essentials like Llama Index Documents, Nodes, the vectorstore object, service contexts and storage contexts. ",
            description: null,
            link: 'https://youtu.be/WKvAWub8VCU',
          },
        ],
        playlists: [],
      },
      GPT: {
        description:
          'Generative Pre-trained Transformer, a type of language model architecture.',
        git: ['https://github.com/Significant-Gravitas/Auto-GPT'],
        youtube: [
          {
            title:
              'Let\'s build GPT: from scratch, in code, spelled out. We build a Generatively Pretrained Transformer (GPT), following the paper "Attention is All You Need" and OpenAI\'s GPT-2 / GPT-3. We talk about connections to ChatGPT, which has taken the world by storm. We watch GitHub Copilot, itself a GPT, help us write a GPT (meta :D!) ',
            description: null,
            link: 'https://youtu.be/kCc8FmEb1nY?si=EzT7eGLNig6th814',
          },
        ],
        playlists: [],
      },
    },
    'Module 6: Scraping': {
      Scrapy: {
        description:
          'Open-source web crawling and scraping framework for data extraction.',
        git: ['https://github.com/scrapy/scrapy'],
        youtube: [
          {
            title:
              'Scrapy Course – Python Web Scraping for Beginners The Scrapy Beginners Course will teach you everything you need to learn to start scraping websites at scale using Python Scrapy. ',
            description: null,
            link: 'https://www.youtube.com/watch?v=mBoX_JCKZTE',
          },
        ],
        playlists: [],
      },
    },
    'Module 10: Vector Databases': {
      Milvus: {
        description:
          'Efficient library for similarity search and clustering on large datasets.',
        git: ['https://github.com/milvus-io/milvus'],
        youtube: [
          {
            title:
              "Milvus 2.0: Building the World's Most Advanced Open-source Vector Database - Filip Haltmayer, Zilliz ",
            description: null,
            link: 'https://youtu.be/hWzn8JwpASQ',
          },
        ],
        playlists: [
          {
            title: 'Getting Started with Milvus (9 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLPg7_faNDlT5Fb8WN8r1PzzQTNzdechnS',
          },
        ],
      },
      Faiss: {
        description:
          'Efficient library for similarity search and clustering on large datasets.',
        git: ['https://github.com/facebookresearch/faiss'],
        youtube: [
          {
            title: 'Faiss - Introduction to Similarity Search. ',
            description:
              " Facebook AI Similarity Search (FAISS) is one of the most popular implementations of efficient similarity search, but what is it - and how can we use it? What is it that makes FAISS special? How do we make the best use of this incredible tool Fortunately, it's a brilliantly simple process to get started with. And in this video, we'll explore some of the options FAISS provides, how they work, and - most importantly - how FAISS can make our semantic search faster. ",
            link: 'https://youtu.be/sKyvsdEv6rk',
          },
        ],
        playlists: [
          {
            title: 'Vector Similarity Search and Faiss Course (14 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLIUOU7oqGTLhlWpTz4NnuT3FekouIVlqc',
          },
        ],
      },
    },
    'Module 11: Software Languages': {
      Python: {
        description:
          'Powerful language for system-level programming and software development.',
        git: ['https://github.com/python'],
        youtube: [
          {
            title: 'Learn Python - Full Course for Beginners [Tutorial] ',
            description:
              " This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a python programmer in no time! ",
            link: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
          },
          {
            title: 'Python Full Course for free 🐍 (12 hours) ',
            description: null,
            link: 'https://www.youtube.com/watch?v=XKHEtdqhLK8',
          },
          {
            title: 'Python Tutorial - Python Full Course for Beginners ',
            description:
              ' Python tutorial - Python full course for beginners - Go from Zero to Hero with Python (includes machine learning & web development projects). ',
            link: 'https://youtu.be/_uQrJ0TkZlc',
          },
        ],
        playlists: [
          {
            title: 'Python Tutorials (12 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB',
          },
          {
            title: 'Python Basics with Sam (14 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLWKjhJtqVAbkmRvnFmOd4KhDdlK1oIq23',
          },
          {
            title: 'Python Tutorials (21 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f',
          },
        ],
      },
      'C++ ': {
        description:
          'Efficient programming language known for simplicity and performance.',
        git: ['https://github.com/isocpp/CppCoreGuidelines'],
        youtube: [
          {
            title:
              'C++ Tutorial for Beginners - Full Course This course will give you a full introduction into all of the core concepts in C++. ',
            description: null,
            link: 'https://youtu.be/vLnPwxZdW4Y',
          },
          {
            title:
              'C++ Tutorial for Beginners - Learn C++ in 1 Hour This C++ tutorial for beginners shows you how to get started with C++ quickly. Learn C++ basics in 1 hour and get ready to learn more! ',
            description: null,
            link: 'https://youtu.be/ZzaPdXTrSb8',
          },
          {
            title:
              "C++ Full Course for free ⚡️ This video serves as an introduction to the C++ programming language\nC++ is a beast of a language. We're only scratching the surface. ",
            description: null,
            link: 'https://youtu.be/-TkoO8Z07hI',
          },
          {
            title:
              'C++ Tutorial From Basic to Advance C++ Tutorial From Basic to Advance ',
            description: null,
            link: 'https://youtu.be/mUQZ1qmKlLY',
          },
        ],
        playlists: [],
      },
      GO: {
        description:
          'Efficient programming language known for simplicity and performance.',
        git: ['https://github.com/golang/go'],
        youtube: [
          {
            title:
              'Golang Tutorial for Beginners | Full Go Course In this full Golang course you will learn about one of the youngest programming languages that is becoming more and more popular in the cloud engineering world, which is Go or also commonly known as Golang. ',
            description: null,
            link: 'https://youtu.be/yyUHQIec83I',
          },
          {
            title:
              "Go Programming – Golang Course with Bonus Projects Learn the Go programming language in this full course for beginners. You'll practice writing performant, idiomatic Go with these hands-on lessons and challenges. ",
            description: null,
            link: 'https://youtu.be/un6ZyFkqFKo',
          },
          {
            title:
              'Learn Go Programming - Golang Tutorial for Beginners Learn the Go programming language (Golang) in this step-by-step tutorial course for beginners. Go is an open source programming language designed at Google that makes it easy to build simple, reliable, and efficient software. ',
            description: null,
            link: 'https://youtu.be/YS4e4q9oBaU',
          },
          {
            title:
              'Golang Tutorial : Go Full Course I created this Golang tutorial to be the definitive course. I provide in this full course more information than you can get in any book. The table of contents follows below. Both the core language and numerous projects are provided to help you master Go. ',
            description: null,
            link: 'https://youtu.be/YzLrWHZa-Kc',
          },
        ],
        playlists: [],
      },
    },
    'Module 12: IDE with AI  ': {
      PyCharm: {
        description:
          'AI-powered code assistant suggesting code snippets while writing.',
        git: ['https://www.jetbrains.com/pycharm/'],
        youtube: [
          {
            title: 'PyCharm Tutorial | Full Course in 2 Hours. ',
            description:
              ' In this course I will teach you everything you need to know about how to use PyCharm. PyCharm is by far the best IDE when it comes to python development. As a software engineer it is important that you use the right tool and PyCharm does not disappoint. ',
            link: 'https://www.youtube.com/watch?v=hc50ALh_x5g',
          },
          {
            title:
              'PyCharm Tutorial | Introduction to PyCharm | Basics in 10 Minutes ',
            description: null,
            link: 'https://www.youtube.com/watch?v=HHcZbXsZtm0',
          },
        ],
        playlists: [
          {
            title: 'Getting Started with PyCharm (13 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLCTHcU1KoD98IeuVcqJ2rt1FNytfR_C90',
          },
          {
            title: 'PyCharm Tutorials (7 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PL30AETbxgR-dKTR0wBfkQw9mywvkCi3q_',
          },
        ],
      },
      'GitHub Copilot': {
        description: 'Coding collaboration software',
        git: ['https://github.com/features/copilot'],
        youtube: [
          {
            title: 'GitHub Copilot - First Look. ',
            description:
              ' In this video, we will look at and try the GitHub Copilot AI pair programmer ',
            link: 'https://www.youtube.com/watch?v=DeO7xLXORpY',
          },
          {
            title: 'GitHub Copilot tips and tricks. ',
            description:
              ' GitHub Copilot is designed to be your AI pair programmer. Just like any other tool, you might be curious about how to get the most out of it. Where will it perform best? Do I need to change how I code? @GeekTrainer provides some tips and tricks to help you get started. ',
            link: 'https://www.youtube.com/watch?v=1qs6QKk0DVc',
          },
        ],
        playlists: [
          {
            title: 'GitHub Copilot (19 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PL0lo9MOBetEHEHi9h0k_lPn0XZdEeYZDS',
          },
        ],
      },
      'JET Brains': {
        description: 'Coding collaboration software',
        git: ['https://www.jetbrains.com/code-with-me/'],
        youtube: [],
        playlists: [],
      },
    },
    'Module 13: Finding Source Code': {
      'GitHub Desktop': {
        description:
          'Open-source library for natural language processing and model deployment.',
        git: ['https://desktop.github.com/'],
        youtube: [
          {
            title: 'How to use GitHub Desktop: The easy tutorial(Part1). ',
            description:
              " In this video, we'll learn how to install, clone, and make repositories and use the GitHub Desktop easily and how it works in a better way than the terminal. Learn all you need for the GitHub Desktop to master it along with me. ",
            link: 'https://youtu.be/RPagOAUx2SQ',
          },
          {
            title: 'Git, GitHub, & GitHub Desktop for beginners. ',
            description:
              " In this video we'll be going through the basics of Git, GitHub, and GitHub Desktop app-- how to set them up and use them to track your code changes. ",
            link: 'https://youtu.be/8Dd7KRpKeaE',
          },
        ],
        playlists: [
          {
            title: 'The Git with GitHub Guide Series (23 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLcL8q_TiioW0JLk03hM3cu_Nb5DRwBHa1',
          },
        ],
      },
      HuggingFace: {
        description:
          'Online platform for data science competitions, collaboration, and learning.',
        git: ['https://github.com/huggingface'],
        youtube: [
          {
            title:
              'Getting Started With Hugging Face in 15 Minutes | Transformers, Pipeline, Tokenizer, Models. ',
            description: null,
            link: 'https://www.youtube.com/watch?v=QEaBAZQCtwE',
          },
          {
            title:
              'HuggingFace Crash Course - Sentiment Analysis, Model Hub, Fine Tuning. ',
            description:
              ' In this video I show you everything to get started with Huggingface and the Transformers library. We build a sentiment analysis pipeline, I show you the Model Hub, and how you can fine tune your own models. ',
            link: 'https://www.youtube.com/watch?v=GSt00_-0ncQ',
          },
        ],
        playlists: [
          {
            title: 'Official channel ',
            description: null,
            link: 'https://www.youtube.com/@HuggingFace/playlists',
          },
        ],
      },
      Kaggle: {
        description:
          'Online platform for data science competitions, collaboration, and learning.',
        git: ['https://github.com/Kaggle'],
        youtube: [
          {
            title:
              'How to Use Kaggle For Learning Data Science? | GeeksforGeeks. ',
            description:
              " In this video, we're going to discuss How we can use Kaggle to learn Data Science. Kaggle is an online community devoted to Data Science and Machine Learning founded by Google in 2010.  ",
            link: 'https://www.youtube.com/watch?v=u9MIwoFWXVg',
          },
          {
            title:
              'What is Kaggle & How to Use Kaggle? Kaggle Tutorial for Beginners - Full Walkthrough. ',
            description:
              " In this tutorial, we'll introduce you to Kaggle, the world's largest community of data scientists and machine learning practitioners. You'll learn what Kaggle is, why it's such a powerful tool for data science, and how to use it as a beginner. ",
            link: 'https://www.youtube.com/watch?v=1FYEtnQ7250',
          },
        ],
        playlists: [
          {
            title: 'Getting Started on Kaggle | Kaggle (30 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLqFaTIg4myu8gbDh6oBl7XRYNBlthpDEW',
          },
        ],
      },
    },
    'Module 14: Notebooks': {
      'Google Colab': {
        description:
          'Interactive notebooks for coding, equations, visualization, and narrative.',
        git: ['https://github.com/googlecolab'],
        youtube: [
          {
            title:
              'Python for Machine Learning with Google Colab - Everything You Need to Know in under 25 minutes ',
            description:
              ' Review or learn basic Python programming using the Google Colab IDE for Machine Learning and Deep Learning. ',
            link: 'https://www.youtube.com/watch?v=2YkjwOFpgKs',
          },
          {
            title: 'Google Colab Tutorial - Google Sheets, Read & Write Data. ',
            description:
              " In this tutorial we'll import 2 data tables from Google Sheets, join them using a matching field and then export the results back to Google Sheets spreadsheet. ",
            link: 'https://youtu.be/cN7W2EPM-dw',
          },
        ],
        playlists: [
          {
            title: 'Complete Google Colab Tutorial (9 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLA83b1JHN4ly56Y7o6vDAT8Szxc3_EdRH',
          },
          {
            title:
              'Google Colab Tutorials - Data Manipulation with Python (6 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLv9Pf9aNgemuzXiXhQ-t6_XE3h5m0KUj2',
          },
        ],
      },
      Jupyter: {
        description:
          'Interactive notebooks for coding, equations, visualization, and narrative.',
        git: ['https://github.com/jupyter/notebook'],
        youtube: [
          {
            title:
              'Jupyter Notebook Tutorial: Introduction, Setup, and Walkthrough. ',
            description:
              " In this Python Tutorial, we will be learning how to install, setup, and use Jupyter Notebooks. Jupyter Notebooks have become very popular in the last few years, and for good reason. They allow you to create and share documents that contain live code, equations, visualizations and markdown text. This can all be run from directly in the browser. It is an essential tool to learn if you are getting started in Data Science, but will also have tons of benefits outside of that field. Let's get started.  ",
            link: 'https://www.youtube.com/watch?v=HW29067qVWk',
          },
          {
            title: 'Jupyter Notebook Tutorial for Beginners with Python ',
            description:
              ' This tutorial  provides a set up, introduction, and quick start for Jupyter Notebooks. We will install Jupyter Notebook with the Anaconda Python distribution and create your first Jupyter Notebook file with Python examples for beginners. ',
            link: 'https://www.youtube.com/watch?v=2WL-XTl2QYI',
          },
          {
            title:
              'Jupyter Notebook Complete Beginner Guide 2023 - From Jupyter to Jupyterlab, Google Colab and Kaggle! ',
            description: null,
            link: 'https://www.youtube.com/watch?v=5pf0_bpNbkw',
          },
        ],
        playlists: [],
      },
    },
    'Module 15: AI Safety': {
      'AI SAFETY': {
        description:
          'Ensuring the safe development and deployment of artificial intelligence systems.',
        git: [],
        youtube: [
          {
            title:
              'AI Safety – Full Course by Safe.AI Founder on Machine Learning & Ethics (Center for AI Safety) ML systems are rapidly increasing in size, are acquiring new capabilities, and are increasingly deployed in high-stakes settings. As with other powerful technologies, safety for ML should be a leading research priority. In this course we’ll discuss how researchers can shape the process that will lead to strong AI systems and steer that process in a safer direction. ',
            description: null,
            link: 'https://youtu.be/agEPmYdbQLs',
          },
        ],
        playlists: [],
      },
    },
  },
  'Second Degree': {
    'Module 16: Hexagonal Architecture': {
      'Hexagonal Architecture': {
        description:
          'Software design pattern emphasizing modularity and flexibility.',
        git: ['https://github.com/CodelyTV/php-ddd-example'],
        youtube: [
          {
            title:
              'Hexagonal Architecture: What You Need To Know - Simple Explanation It is important when writing applications to pick the right architecture. Most software developers are familiar with the 3-Tier architecture model already, but few understand Hexagonal Architecture, which I cover in this video. Hexagonal Architecture, which was first coined by Alistair Cockburn in 2005 is a flexible architecture that is great for large applications. ',
            description: null,
            link: 'https://youtu.be/bDWApqAUjEI',
          },
          {
            title:
              'Hexagonal, Onion & Clean Architecture Three similar software architectures explained. ',
            description: null,
            link: 'https://youtu.be/JubdZIdLQ4M',
          },
          {
            title:
              'What is Hexagonal Architecture? Learn in 6 minutes This is an introductory lesson to Hexagonal Architecture, a software design pattern to develop applications that are highly maintainable. This design pattern is also known as the Ports and Adapters. The concept was introduced in 2005 by Alistair Cockburn and since then has been evolving. ',
            description: null,
            link: 'https://youtu.be/Sfia0T1jt5s',
          },
        ],
        playlists: [],
      },
    },
    "Module 17: API's": {
      'API’s': {
        description:
          'Interfaces enabling software components to interact, exchange data, and function.',
        git: [],
        youtube: [
          {
            title:
              'APIs for Beginners 2023 - How to use an API (Full Course / Tutorial) What is an API? Learn all about APIs (Application Programming Interfaces) in this full tutorial for beginners. You will learn what APIs do, why APIs exist, and the many benefits of APIs. APIs are used all the time in programming and web development so it is important to understand how to use them. ',
            description: null,
            link: 'https://youtu.be/WXsD0ZgxjRw',
          },
        ],
        playlists: [],
      },
    },
    'Module 18: Docker': {
      Docker: {
        description:
          'Platform for containerization to ensure consistent application deployment.',
        git: ['https://github.com/docker'],
        youtube: [
          {
            title:
              'Docker Tutorial for Beginners. This Docker tutorial teaches you everything you need to get started. ',
            description: null,
            link: 'https://youtu.be/pTFZFxd4hOI',
          },
          {
            title: 'Docker Crash Course for Absolute Beginners [NEW]. ',
            description:
              ' Docker Tutorial for Beginners that teaches you everything you need to get started. ',
            link: 'https://youtu.be/pg19Z8LL06w',
          },
        ],
        playlists: [
          {
            title: 'more than 10 videos about docker at her channel ',
            description: null,
            link: 'https://www.youtube.com/@TechWorldwithNana/videos',
          },
        ],
      },
    },
    'Module 19: Kubernetes': {
      kubernetes: {
        description:
          'Container orchestration for automating application deployment, scaling, and management.',
        git: ['https://github.com/kubernetes/kubernetes'],
        youtube: [
          {
            title:
              'Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours] Full Kubernetes Tutorial | Kubernetes Course | Hands-on course with a lot of demos ',
            description: null,
            link: 'https://youtu.be/X48VuDVv0do',
          },
          {
            title:
              'Kubernetes Crash Course for Absolute Beginners [NEW] Hands-On Kubernetes Tutorial | Learn Kubernetes in 1 Hour - Kubernetes Course for Beginners ',
            description: null,
            link: 'https://youtu.be/s_o8dwzRlu4',
          },
        ],
        playlists: [],
      },
    },
    'Module 20: Linux': {
      'Linux System Administration': {
        description:
          'Management and maintenance of Linux-based computer systems.',
        git: ['https://github.com/torvalds/linux'],
        youtube: [
          {
            title:
              'Linux System Administration Full Course This is a complete course on how to become a Linux System Administration.  #Linux system administration is a process of setting up, configuring, and managing a computer system in a Linux environment. System administration involves creating a user account, taking reports, performing backup, updating configuration files, documentation, and performing recovery actions. ',
            description: null,
            link: 'https://youtu.be/UCr04qIB7uc',
          },
          {
            title:
              'Linux Full Course - 11 Hours [2023] | Linux Tutorial For Beginners | Linux Training | Edureka This Edureka Linux Full Course video will help you understand and learn the fundamentals of Operating Systems and Linux in Particular. This Linux Tutorial is ideal for both beginners as well as professionals who want to master the fundamentals of Linux.  ',
            description: null,
            link: 'https://www.youtube.com/live/bz0ZCUv5rYo?feature=share',
          },
        ],
        playlists: [],
      },
    },
    'Module 21: DevOps': {
      DevOpsGPT: {
        description:
          'Using AI models for automated DevOps practices and optimization.',
        git: ['https://github.com/kuafuai/DevOpsGPT'],
        youtube: [
          {
            title:
              'DevOpsGPT: Autonomous Ai Agents Build SOFTWARES For FREE! In this groundbreaking video, we delve into the cutting-edge world of DevOpsGPT, an AI-driven software development automation solution that combines the immense power of Large Language Model (LLM) technology with DevOps tools to revolutionize the way software is built and delivered. ',
            description: null,
            link: 'https://youtu.be/lyJKG04Kvl4',
          },
          {
            title:
              'DevOpsGPT Demo - AI automatically completes software requirement development DevOpsGPT Demo - AI automatically completes software requirement development: implements interface development of new user information in existing Java projects. ',
            description: null,
            link: 'https://youtu.be/IWUPbGrJQOU',
          },
        ],
        playlists: [],
      },
    },
    'Module 22: Computing Networking': {
      'Computer networking': {
        description: 'Study of data communication and network structures.',
        git: [],
        youtube: [
          {
            title:
              "Computer Networking Course - Network Engineering [CompTIA Network+ Exam Prep] This full college-level computer networking course will prepare you to configure, manage, and troubleshoot computer networks. It will also help you prepare for CompTIA's Network+ exam. ",
            description: null,
            link: 'https://youtu.be/qiQR5rTSshw',
          },
        ],
        playlists: [],
      },
    },
    'Module 23: Ethical Hacking': {
      'Ethical Hacking': {
        description:
          'Authorized probing of systems to identify vulnerabilities and enhance security.',
        git: [],
        youtube: [
          {
            title:
              'Hacking Active Directory for Beginners (over 5 hours of content!) ',
            description: null,
            link: 'https://youtu.be/VXxH4n684HE',
          },
          {
            title:
              'Ethical Hacking in 15 Hours - 2023 Edition - Learn to Hack! (Part 1) ',
            description: null,
            link: 'https://youtu.be/3FNYvj2U0HM',
          },
          {
            title:
              'Ethical Hacking in 15 Hours - 2023 Edition - Learn to Hack! (Part 2) ',
            description: null,
            link: 'https://youtu.be/sH4JCwjybGs',
          },
          {
            title:
              "Cyber Security Expert Course For 2023 | Learn Cybersecurity In 7 Hours | Simplilearn Stay ahead of the digital threats and protect against cyberattacks with our comprehensive Cyber Security Expert Course for 2023! In this cutting-edge program, you'll learn from industry-leading experts about the latest trends, tools, and techniques to safeguard critical information. ",
            description: null,
            link: 'https://youtu.be/6KZyR1xJvY0',
          },
          {
            title:
              'Full Ethical Hacking Course - Network Penetration Testing for Beginners (2019) Learn network penetration testing / ethical hacking in this full tutorial course for beginners. This course teaches everything you need to know to get started with ethical hacking and penetration testing. ',
            description: null,
            link: 'https://youtu.be/3Kq1MIfTWCE',
          },
        ],
        playlists: [],
      },
    },
    'Module 24: Web Development and User Interfaces': {
      Django: {
        description:
          'Library for creating and experimenting with reinforcement learning agents.',
        git: ['https://github.com/django/django'],
        youtube: [
          {
            title:
              'Complete Django Course for 2023 - Zero to Hero in Python Django | Python Django Tutorial. ',
            description:
              ' This video is about the Django course. We are going to launch the best Django course which can help you land the best python job. ',
            link: 'https://www.youtube.com/watch?v=Mezody4yiXw',
          },
          {
            title: 'Python Django 7 Hour Course ',
            description: null,
            link: 'https://youtu.be/PtQiiknWUcI',
          },
        ],
        playlists: [
          {
            title:
              'Django Tutorial 2023 | Complete Django Course for 2023 (22 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLVBKjEIdL9bvCdI4l1Emvbezv10GjUaLk',
          },
        ],
      },
      Reflex: {
        description:
          'Fundamental web development languages for structuring and styling content.',
        git: ['https://github.com/reflex-dev/reflex'],
        youtube: [
          {
            title:
              'Pynecone: The Python-Only Web Framework In this video, we learn about Pynecone, which is a Python-only web development framework. ',
            description: null,
            link: 'https://youtu.be/ur4fCNMPp0I',
          },
          {
            title:
              "Reflex Login Form Tutorial: How to Build a Modern Login UI \nIn this tutorial, we'll go over the basic setup of Pynecone and how to create a modern-looking login form using only Python. ",
            description: null,
            link: 'https://youtu.be/zhCT0SnikOw',
          },
        ],
        playlists: [
          {
            title: 'Reflex (past: Pynecone) Library ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLDHA4931gtc7wHBDGQOYlmcpZm7qyici7',
          },
        ],
      },
      'HTML & CSS': {
        description:
          'JavaScript library for building user interfaces, emphasizing reusable components and efficient updates.',
        git: [],
        youtube: [
          {
            title:
              'Learn HTML5 and CSS3 From Scratch - Full Course In this course we will cover both languages from the scratch and by the end of the course you will be creating your own projects. ',
            description: null,
            link: 'https://youtu.be/mU6anWqZJcc',
          },
        ],
        playlists: [],
      },
      REACT: {
        description:
          'User Interface (UI) and User Experience (UX) design, focusing on creating intuitive and engaging digital experiences for users.',
        git: ['https://github.com/freeCodeCamp/freeCodeCamp'],
        youtube: [
          {
            title:
              'React Tutorial for Beginners React JS Tutorial for Beginners - Learn React 18 with TypeScript and build awesome frontend app! ',
            description: null,
            link: 'https://youtu.be/SqcY0GlETPk',
          },
          {
            title:
              "React Course - Beginner's Tutorial for React JavaScript Library [2022] React is one of the most popular front-end JavaScript libraries for building user interfaces. After completing this course, you will be able to build web apps in modern React, using patterns like functional components and hooks. ",
            description: null,
            link: 'https://youtu.be/bMknfKXIFA8',
          },
          {
            title:
              'Learn React With This One Project Learning React is hard. There are so many concepts to learn and mindsets shifts that you need to do. That is why in this video I will be breaking down all the most important concepts you need to understand in React. ',
            description: null,
            link: 'https://youtu.be/Rh3tobg7hEo',
          },
          {
            title:
              'Build and Deploy 4 Modern React Apps and Get Hired as a Frontend Developer | Full 10-Hour Course Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications, and get hired as a front-end developer. All the way from design, over development, to deployment on your own web development portfolio! ',
            description: null,
            link: 'https://youtu.be/F627pKNUCVQ',
          },
        ],
        playlists: [],
      },
      'UI / UX': {
        description:
          'Design tool for creating user interfaces and interactive prototypes.',
        git: ['https://github.com/wasabeef/awesome-android-ui'],
        youtube: [
          {
            title:
              'UX Design Course Tutorial for Beginners: User Experience Design Fundamentals User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function. ',
            description: null,
            link: 'https://youtu.be/uL2ZB7XXIgg',
          },
          {
            title:
              'UI Design Tutorial For Beginners - (Full Course) In this Specialization, you will learn industry-standard theory and methods for developing successful user interfaces (UIs). Upon completing this Specialization, you will have fluency with the user research, prototyping and evaluation techniques necessary for creating intuitive interfaces that facilitate good user experiences. ',
            description: null,
            link: 'https://youtu.be/OSSn2xW2ANs',
          },
        ],
        playlists: [],
      },
      FIGMA: {
        description:
          'Design tool for creating user interfaces and interactive prototypes.',
        git: [],
        youtube: [
          {
            title:
              'Figma Course - Web Design Tutorial for Beginners Learn how to use Figma to design websites. ',
            description: null,
            link: 'https://youtu.be/D56hs0Twfco',
          },
          {
            title:
              'UI / UX Design Tutorial – Wireframe, Mockup & Design in Figma Learn the process of UI / UX design.  In this tutorial you will learn how a professional designer builds a full website design from scratch following the process of user experience and user interface. The video covers wireframing, prototyping, and designing in Figma. ',
            description: null,
            link: 'https://youtu.be/c9Wg6Cb_YlU',
          },
          {
            title:
              'Web / Desktop App UI Design in Figma - Full Course Design a Web app design inspired by Discord and Slack in the Figma design tool. ',
            description: null,
            link: 'https://youtu.be/5IanQIwhA4E',
          },
          {
            title:
              'Figma Tutorial for UI Design - Course for Beginners In this Figma course, you will learn how to use Figma for UI Design. Figma is a vector graphics editor and prototyping tool. ',
            description: null,
            link: 'https://youtu.be/jwCmIBJ8Jtc',
          },
        ],
        playlists: [],
      },
    },
    'Module 25: Advanced Mathematics and Statistics': {
      Mathematics: {
        description:
          'Python library for symbolic mathematics, algebraic computations, and equations.',
        git: [],
        youtube: [
          {
            title:
              'The Map of Mathematics The entire field of mathematics summarised in a single map! This shows how pure mathematics and applied mathematics relate to each other and all of the sub-topics they are made from. ',
            description: null,
            link: 'https://youtu.be/OmJ-4B-mS-Y',
          },
          {
            title:
              'Maths for Programmers Tutorial - Full Course on Sets and Logic Learn the maths and logic concepts that are important for programmers to understand. ',
            description: null,
            link: 'https://youtu.be/2SpuBqvNjHI',
          },
        ],
        playlists: [],
      },
      SymPy: {
        description:
          'Mathematics branch focusing on symbols and their manipulation.',
        git: ['https://github.com/sympy/sympy'],
        youtube: [
          {
            title:
              'SymPy Tutorial (2022): For Physicists, Engineers, and Mathematicians This from-scratch tutorial on SymPy is designed specifically for those in physics, mathematics, and engineering. In the future, I will be making tutorial videos on all the essential python packages, so subscribe for more! ',
            description: null,
            link: 'https://youtu.be/1yBPEPhq54M',
          },
        ],
        playlists: [
          {
            title: 'SymPy ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLSE7WKf_qqo1T5VV1nqXTj2iNiSpFk72T',
          },
        ],
      },
      Algebra: {
        description:
          'Preparation for advanced mathematical concepts like calculus and trigonometry.',
        git: [],
        youtube: [
          {
            title:
              'Algebra for Beginners | Basics of Algebra #Algebra is one of the broad parts of mathematics, together with number theory, geometry and analysis. In its most general form, algebra is the study of mathematical symbols and the rules for manipulating these symbols; it is a unifying thread of almost all of mathematics. ',
            description: null,
            link: 'https://youtu.be/PVoTRu3p6ug',
          },
          {
            title:
              'College Algebra - full course Algebra is one of the broad areas of mathematics, together with number theory, geometry and analysis. In its most general form, #algebra is the study of mathematical symbols and the rules for manipulating these symbols; it is a unifying thread of almost all of mathematics. ',
            description: null,
            link: 'https://youtu.be/7DMyZBx5NZ0',
          },
          {
            title:
              'Algebra 1 Full Course In this course, we will explore all the topics of a typical algebra 1 course. We will cover variables and algebraic expressions, how to solve linear equations and inequalities, graphing linear equations in two variables, functions, systems of linear equations, rules of exponents, polynomials, factoring, rational expressions, radicals, and quadratic equations. ',
            description: null,
            link: 'https://youtu.be/GAN-jgzYsIo',
          },
          {
            title:
              'Algebra 1 Practice Full Course | Practice Sets | Practice Test Solutions This video contains all practice sets and practice test solutions for the Algebra 1 course on GreeneMath.com, please watch the lessons first before coming to this video. It would be helpful to try the practice tests before watching the full solutions. You can do so with the link below. ',
            description: null,
            link: 'https://youtu.be/wioFZFIDniQ',
          },
          {
            title:
              'College Algebra Practice Part 1 Full Course | Practice Test Solutions This video contains all practice test solutions for lessons 1 -  72 for the College Algebra course on GreeneMath.com, please watch the lessons first before coming to this video. It would be helpful to try the practice tests before watching the full solutions. ',
            description: null,
            link: 'https://youtu.be/WgdBC4F1ee8',
          },
          {
            title:
              'Algebra 2 Practice Full Course | Practice Sets | Practice Test Solutions This video contains all practice sets and practice test solutions for the Algebra 2 course ',
            description: null,
            link: 'https://youtu.be/MF1r7MW8UvQ',
          },
          {
            title:
              'Pre-Algebra Full Course In this course, we will explore all of the topics of a typical pre-algebra course. We will begin by covering operations with whole numbers. Once we understand how to perform operations with whole numbers, we will then move on to study operations with integers, fractions, and decimals. We will finish up the course by learning how to convert between units of measurement. ',
            description: null,
            link: 'https://youtu.be/VXzm8ReImG0',
          },
          {
            title:
              'College Algebra - Full Cours Learn Algebra in this full college course. These concepts are often used in programming. ',
            description: null,
            link: 'https://youtu.be/LwCRRUa8yTU',
          },
          {
            title:
              'Linear Algebra - Full College Course Learn Linear Algebra in this 20-hour college course. ',
            description: null,
            link: 'https://youtu.be/JnTa9XtvmfI',
          },
        ],
        playlists: [],
      },
      Precalculus: {
        description:
          'Mathematics field dealing with data analysis, probability, and inferences.',
        git: [],
        youtube: [
          {
            title:
              'Precalculus Course Learn Precalculus in this full college course. These concepts are often used in programming. ',
            description: null,
            link: 'https://youtu.be/eI4an8aSsgw',
          },
          {
            title:
              'Calculus 1 - Full College Course This course was created by Dr. Linda Green, a lecturer at the University of North Carolina at Chapel Hill. ',
            description: null,
            link: 'https://youtu.be/HfACrKJ_Y2w',
          },
          {
            title:
              'Linear Algebra - Full College Course Learn Linear Algebra in this 20-hour college course. ',
            description: null,
            link: 'https://youtu.be/JnTa9XtvmfI',
          },
        ],
        playlists: [],
      },
      'Statistics ': {
        description:
          'Mathematics field dealing with data analysis, probability, and inferences.',
        git: [],
        youtube: [
          {
            title:
              'Statistics - A Full University Course on Data Science Basics Learn the essentials of statistics in this complete course. This course introduces the various methods used to collect, organize, summarize, interpret and reach conclusions about data. An emphasis is placed on demonstrating that statistics is more than mathematical calculations. ',
            description: null,
            link: 'https://youtu.be/xxpc-HPKN28',
          },
          {
            title:
              'Statistics full Course for Beginner | Statistics for Data Science In this comprehensive #statistics course you will learn about fundamental concept of statistics which is beginner friendly. This statistics course will walk you through everything you need to know about #statistics for #MachineLearning. ',
            description: null,
            link: 'https://youtu.be/74oUwKezFho',
          },
          {
            title:
              'Statistics for Data Science | Probability and Statistics | Statistics Tutorial | Ph.D. (Stanford) One of the most critical aspects of the data science approach is our perception of getting the information processed. In developing insights from our accumulated data, we dig out the possibilities. And those possibilities are known as statistical analysis in Data science.\nStatistics acts as a tool to gather, extract, analyze, and review data, which is an input to Data science techniques; hence, learning statistics is a baby step toward becoming a data scientist. ',
            description: null,
            link: 'https://youtu.be/Vfo5le26IhY',
          },
        ],
        playlists: [],
      },
    },
    'Module 26: Computer Science': {
      'Computer Science': {
        description:
          'Study of algorithms, software, hardware, and computing principles.',
        git: [],
        youtube: [
          {
            title:
              'Harvard CS50 – Full Computer Science University Course Learn the basics of computer science from Harvard University. This is CS50, an introduction to the intellectual enterprises of computer science and the art of programming. ',
            description: null,
            link: 'https://youtu.be/8mAITcNt710',
          },
          {
            title:
              'Introduction to Programming and Computer Science - Full Course In this course, you will learn basics of computer programming and computer science. The concepts you learn apply to any and all programming languages and will be a good base onto which you can build your skills. ',
            description: null,
            link: 'https://youtu.be/zOjov-2OZ0E',
          },
          {
            title:
              'Map of Computer Science Computer science is the subject that studies what computers can do and investigates the best ways you can solve the problems of the world with them. It is a huge field overlapping pure mathematics, engineering and many other scientific disciplines. In this video I summarise as much of the subject as I can and show how the areas are related to each other. ',
            description: null,
            link: 'https://youtu.be/SzJ46YA_RaA',
          },
          {
            title:
              'Computer Architecture Complete course Part 1 In this course, you will learn to design the computer architecture of complex modern microprocessors. ',
            description: null,
            link: 'https://youtu.be/9nuAjYRbITQ',
          },
          {
            title:
              'Computer Architecture Complete Course Part 2 In this course, you will learn to design the computer architecture of complex modern microprocessors. ',
            description: null,
            link: 'https://youtu.be/foCkCSZXOt8',
          },
          {
            title:
              'Computer Architecture Complete course Part 3 In this course, you will learn to design the computer architecture of complex modern microprocessors. ',
            description: null,
            link: 'https://youtu.be/BHMETwOXvWw',
          },
        ],
        playlists: [],
      },
    },
    'Module 27: Electronics': {
      Electronics: {
        description:
          'Engineering field focusing on designing and developing electronic devices and circuits.',
        git: [],
        youtube: [
          {
            title:
              'Basic Electronics Part 1 Instructor Joe Gryniuk teaches you everything you wanted to know and more about the Fundamentals of Electricity. From the classrooms of Lake Washington Technical College in Kirkland, Washington. ',
            description: null,
            link: 'https://youtu.be/nb4ovfwqup8',
          },
          {
            title:
              'Basic Electronics Part 2 Instructor Joe Gryniuk teaches you everything you wanted to know and more about the Fundamentals of Electricity. From the classrooms of Lake Washington Technical College in Kirkland, Washington. ',
            description: null,
            link: 'https://youtu.be/FEK6lH_rtG8',
          },
          {
            title:
              'Basic Electronics Part 3 Instructor Joe Gryniuk teaches you everything you wanted to know and more about the Fundamentals of Electricity. From the classrooms of Lake Washington Technical College in Kirkland, Washington. ',
            description: null,
            link: 'https://youtu.be/_4zSRze0_bk',
          },
        ],
        playlists: [],
      },
    },
    'Module 28: Robotics': {
      PyRobot: {
        description:
          'Applying Python programming to research and development in robotics.',
        git: ['https://github.com/facebookresearch/pyrobot'],
        youtube: [
          {
            title: 'Pyrobot LoCoBot Setup Guide ',
            description: null,
            link: 'https://youtu.be/uIieW4DW-P0',
          },
        ],
        playlists: [],
      },
      'Python Robotic': {
        description:
          'Python library for robot control and programming in robotics.',
        git: ['https://github.com/AtsushiSakai/PythonRobotics'],
        youtube: [
          {
            title:
              'LEARNING PYTHON - INTRODUCTION - for Raspberry Pi Python Robots LEARNING PYTHON - INTRODUCTION - Programming Robots with Python; This is a series of videos showing you how to bring SMARS robots to life with Python code. ',
            description: null,
            link: 'https://www.youtube.com/live/N3jwEVbZyXY?feature=share',
          },
        ],
        playlists: [
          {
            title: 'Learning Python for Robotics ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLU9tksFlQRiqsGOk-jl_5ID-Z1v6pQ8Fp',
          },
        ],
      },
      Pypot: {
        description:
          'Affordable single-board computer for various projects and learning.',
        git: ['https://github.com/poppy-project/pypot'],
        youtube: [],
        playlists: [],
      },
      'Raspberry Pi': {
        description:
          'Open-source electronics platform for interactive projects and prototypes.',
        git: ['https://github.com/raspberrypi'],
        youtube: [
          {
            title:
              "Raspberry Pi - All You Need To Know If you keep your ear to the Tinkering community, I'm sure you've heard whispers (and shouts) of the Raspberry Pi. And if you wanted to get into making, tinkering, computing, or electronics, the Raspberry Pi is a great tool to have in your tool belt. But what is it? And why is it so popular? Let's find out!  ",
            description: null,
            link: 'https://youtu.be/EKPobkb1N6o',
          },
          {
            title:
              'Raspberry Pi 4 Getting Started This video covers the basics of getting started with the Raspberry Pi.  We start with an overview of the Raspberry Pi platform, all of the accessories needed to get started, and move onto how to install the OS and connect remotely to the Pi. ',
            description: null,
            link: 'https://youtu.be/BpJCAafw2qE',
          },
        ],
        playlists: [],
      },
      Arduino: {
        description:
          'Open-source humanoid robot project, emphasizing accessible and customizable robotics.',
        git: ['https://github.com/arduino'],
        youtube: [
          {
            title:
              'Arduino Course for Beginners - Open-Source Electronics Platform Learn how to use Arduino hardware and software in this full course for beginners. Arduino is an easy-to-use, open-source electronics platform. Arduino boards are able to read inputs - light on a sensor, a finger on a button, or a Twitter message - and turn it into an output - activating a motor, turning on an LED, publishing something online. You can tell your board what to do by sending a set of instructions to the microcontroller on the board. ',
            description: null,
            link: 'https://youtu.be/zJ-LqeX_fLU',
          },
          {
            title:
              'Arduino Tutorial 1: Setting Up and Programming the Arduino for Absolute Beginners  This is a tutorial series for absolute beginners. We show complete newbies how to get an arduino up and running, and in this lesson you will write your first three programs. ',
            description: null,
            link: 'https://youtu.be/fJWR7dBuc18',
          },
        ],
        playlists: [],
      },
      InMoov: {
        description:
          'Open-source humanoid robot project, emphasizing accessible and customizable robotics.',
        git: ['https://github.com/MyRobotLab/InMoov'],
        youtube: [
          {
            title:
              'InMoov Amazing First 3D printed robot Open Source Gael Langevin is a French modelmaker and sculptor. He works for the biggest brands since more than 25 years. InMoov is his personal project, it was initiated in January 2012 ',
            description: null,
            link: 'https://youtu.be/H4Z09edx52E',
          },
          {
            title:
              "Gael Langevin - The 3D Printed Robot InMoov | Mindtrek Openmind 2015 Gael Langevin's full keynote presentation at Mindtrek Openmind 2015 on Tuesday 22nd of September at Tampere, Finland. ",
            description: null,
            link: 'https://youtu.be/rajEym5Vs6U',
          },
          {
            title:
              'Inmoov hand and forarm (STEP BY STEP tutorial) This video will take you to the point of completing the entire building proces. The next video I will post soon shows detailed how to attach the Arduino to all the servos. ',
            description: null,
            link: 'https://youtu.be/4t1daCFQ1OE',
          },
        ],
        playlists: [],
      },
    },
    'Module 29: IoT': {
      Zerynth: {
        description:
          'Python-based IoT platform for embedded systems and connected devices.',
        git: ['https://github.com/zerynth/board-zerynth-esp32_pico_v4'],
        youtube: [
          {
            title:
              'Industrial IoT Platform | Zerynth Connecting Everything Zerynth helps companies easily get their industrial processes digitized and bring innovative connected products to the world. ',
            description: null,
            link: 'https://youtu.be/osisO5KBxr0',
          },
          {
            title:
              'Python and C Blended Programming on ESP32 using Zerynth This is a step-by-step guide to use the Python and C Blended Programming on ESP32 using Zerynth.\nThis example uses the interrupt routine as an example of handling some peripherals in C while also developing your code in Python. ',
            description: null,
            link: 'https://youtu.be/OX2IqI76I3o',
          },
        ],
        playlists: [
          {
            title: '\n\nLearn more about Zerynth ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLG_o0DCv2Ge3BILoMuyAdzoInOVBCHtRM',
          },
        ],
      },
    },
    'Module 30: Nano Tecnology': {
      QuTip: {
        description: 'The QuTiP quantum information processing package',
        git: ['https://github.com/qutip'],
        youtube: [],
        playlists: [
          {
            title:
              'Tutorials for QuTiP Version 4 This page contains our collection of Jupyter (formerly IPython) notebooks for introducing and demonstrating features of QuTiP.  ',
            description: null,
            link: 'https://qutip.org/qutip-tutorials/',
          },
        ],
      },
    },
  },
  'Third Degree': {
    'Module 31: New Materials': {
      'The Atomic Simulation Environment (ASE)': {
        description:
          'a set of tools and Python modules for setting up, manipulating, running, visualizing and analyzing atomistic simulations. ',
        git: ['https://gitlab.com/ase/ase'],
        youtube: [
          {
            title: 'Overview and installation of ASE By Anthony Goodrow. ',
            description: null,
            link: 'https://youtu.be/yyxMWp_20h8',
          },
          {
            title:
              'Atomic Simulation Environment (ASE) in a nutshell - ase installation - building a molecule and saving xyz structure - opening a cif file and generating a Quantum-espresso input file (.pwi) - making  a supercell. All in 5 minutes. ',
            description: null,
            link: 'https://youtu.be/EQ3Fy3ugy6k',
          },
        ],
        playlists: [
          {
            title: 'Website Tutotials ',
            description: null,
            link: 'https://wiki.fysik.dtu.dk/ase/tutorials/tutorials.html#',
          },
        ],
      },
    },
    'Module 32: New Communication Protocol': {
      Reticulum: {
        description:
          'cryptography-based networking stack for building local and wide-area networks',
        git: ['https://github.com/markqvist/reticulum'],
        youtube: [],
        playlists: [
          {
            title: 'Website: ',
            description: null,
            link: 'https://reticulum.network/',
          },
        ],
      },
    },
    'Module 33: Meta AR/VR worlds': {
      Unreal: {
        description:
          'Industry-leading game engine for creating interactive and immersive experiences.',
        git: ['https://github.com/miyosuda/unreal'],
        youtube: [
          {
            title:
              'Unreal Engine 5 – Full Course for Beginners Learn how to create games with Unreal Engine 5 in this full course for beginners. This course will give you a solid foundation and will enable you to be able to develop any sort of game in Unreal Engine 5. ',
            description: null,
            link: 'https://youtu.be/6UlU_FsicK8',
          },
          {
            title:
              "Learn Unreal Engine (with C++) - Full Course for Beginners Learn Unreal Engine in this full tutorial using C++. In this beginner's course, you will how to create three full games with Unreal Engine and Blueprints. ",
            description: null,
            link: 'https://youtu.be/LsNW4FPHuZE',
          },
        ],
        playlists: [],
      },
    },
    'Module 34: Cogno-Neuroscience': {
      'Cogno -Neuroscience ': {
        description:
          'A curated list of awesome neuroscience libraries, software and any content related to the domain.',
        git: ['https://github.com/analyticalmonk/awesome-neuroscience'],
        youtube: [],
        playlists: [],
      },
    },
    'Module 35: Cryptography': {
      Crypthography: {
        description:
          'Techniques for secure communication through encryption and decryption.',
        git: [],
        youtube: [
          {
            title:
              'Cryptography Full Course Part 1 Cryptography is an indispensable tool for protecting information in computer systems. In this course you will learn the inner workings of cryptographic systems and how to correctly use them in real-world applications. The course begins with a detailed discussion of how two parties who have a shared secret key can communicate securely when a powerful adversary eavesdrops and tampers with traffic. We will examine many deployed protocols and analyze mistakes in existing systems. ',
            description: null,
            link: 'https://youtu.be/j_8PLI_wCVU',
          },
          {
            title:
              'Cryptography Full Course Part 2 the course discusses public-key techniques that let two parties generate a shared secret key. Throughout the course participants will be exposed to many exciting open problems in the field and work on fun (optional) programming projects. In a second course (Crypto II) we will cover more advanced cryptographic tasks such as zero-knowledge, privacy mechanisms, and other forms of encryption ',
            description: null,
            link: 'https://youtu.be/s5yza-s0bhM',
          },
        ],
        playlists: [
          {
            title:
              'Fundamental Cryptography in Theory and Python This is a 6h Fundamental Cryptography in Theory and Python course covering fundamental concepts of classic cryptography such as encryption, cryptographic hash functions, message authentication codes and digital signatures. With this Fundamental Cryptography in Theory and Python course, you will first and foremost gain a solid understanding of cryptography as a tool to realize the 4 classic security goals confidentiality, integrity, authenticity, and non-repudiation. ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLWjMI9CAmVU4--SmpzgswTvxLkZqC9QWn',
          },
        ],
      },
    },
    'Module 36: Blockchain': {
      Blockchain: {
        description:
          'Platform for interoperable blockchain networks, enabling seamless communication and transactions.',
        git: ['https://github.com/cosmos/cosmos-sdk'],
        youtube: [
          {
            title:
              'How to Build a Blockchain App with Cosmos SDK | Jack Zampolin Learn to build a simple example application with the Cosmos SDK. Cosmos SDK is the most powerful, most used blockchain application framework in the cryptocurrency industry today. Try it yourself and follow along with our simple tutorial. ',
            description: null,
            link: 'https://youtu.be/pyAmxlzVdqM',
          },
          {
            title:
              'What Is Cosmos SDK and How to Use It to Customize Your Chain w/ Marko Baricevic of Interchain. This video is presented as part of the Interchain Developer Academy. Marko Baricevic, the then Cosmos SDK Project Lead at Interchain Gmbh, delivers a comprehensive breakdown of the Cosmos SDK: a modular, fully customizable, multi-language-friendly blockchain creation resource that is easy to work with and can be applied to potentially limitless use cases. ',
            description: null,
            link: 'https://youtu.be/1_ottIKPfI4',
          },
          {
            title:
              "From Beginner to Building Your Own Blockchain In this workshop, we'll dive deep into a section inside the brand new Cosmos Academy and learn how we can get started in creating our own chain from scratch using Starport. ",
            description: null,
            link: 'https://youtu.be/jXo5VWlvP84',
          },
          {
            title:
              'LA Blockchain Week presentation: How to create modules with the Cosmos SDK Tobias Schwarz, Developer Relations Engineering Manager, gives LA Blockchain Week attendees a workshop on using the Cosmos SDK to easily create and customize modules to build a Cosmos application. ',
            description: null,
            link: 'https://youtu.be/m3VxKxj7QPY',
          },
        ],
        playlists: [],
      },
      Cosmos: {
        description:
          'Platform for interoperable blockchain networks, enabling seamless communication and transactions.',
        git: ['https://github.com/cosmos/cosmos-sdk'],
        youtube: [
          {
            title:
              'How to Build a Blockchain App with Cosmos SDK | Jack Zampolin Learn to build a simple example application with the Cosmos SDK. Cosmos SDK is the most powerful, most used blockchain application framework in the cryptocurrency industry today. Try it yourself and follow along with our simple tutorial. ',
            description: null,
            link: 'https://youtu.be/pyAmxlzVdqM',
          },
          {
            title:
              'What Is Cosmos SDK and How to Use It to Customize Your Chain w/ Marko Baricevic of Interchain. This video is presented as part of the Interchain Developer Academy. Marko Baricevic, the then Cosmos SDK Project Lead at Interchain Gmbh, delivers a comprehensive breakdown of the Cosmos SDK: a modular, fully customizable, multi-language-friendly blockchain creation resource that is easy to work with and can be applied to potentially limitless use cases. ',
            description: null,
            link: 'https://youtu.be/1_ottIKPfI4',
          },
          {
            title:
              "From Beginner to Building Your Own Blockchain In this workshop, we'll dive deep into a section inside the brand new Cosmos Academy and learn how we can get started in creating our own chain from scratch using Starport. ",
            description: null,
            link: 'https://youtu.be/jXo5VWlvP84',
          },
          {
            title:
              'LA Blockchain Week presentation: How to create modules with the Cosmos SDK Tobias Schwarz, Developer Relations Engineering Manager, gives LA Blockchain Week attendees a workshop on using the Cosmos SDK to easily create and customize modules to build a Cosmos application. ',
            description: null,
            link: 'https://youtu.be/m3VxKxj7QPY',
          },
        ],
        playlists: [],
      },
    },
    'Module 37: Quantum Physics': {
      'Quantum Physics / Mechanics': {
        description:
          'Study of particles and energy at the quantum level, defying classical physics.',
        git: [],
        youtube: [
          {
            title:
              'The Map of Quantum Physics This is the Map of Quantum Physics and quantum mechanics covering everything you need to know about this field in one image. ',
            description: null,
            link: 'https://youtu.be/gAFAj3pzvAA',
          },
          {
            title:
              "If You Don't Understand Quantum Physics, Try This! A simple and clear explanation of all the important features of quantum physics that you need to know. ",
            description: null,
            link: 'https://youtu.be/Usu9xZfabPM',
          },
          {
            title:
              'Fundamentals of Quantum Physics. Basics of Quantum Mechanics 🌚 Lecture for Sleep & Study In this lecture, you will learn about the prerequisites for the emergence of such a science as quantum physics, its foundations, and its prospects ',
            description: null,
            link: 'https://youtu.be/Lm9SZf2XFCc',
          },
          {
            title:
              "Quantum Physics: Part 2. Superposition. Particle in a box 🌚 Lecture for Sleep & Study join us for an engaging scientific lecture exploring the fascinating world of quantum mechanics. Delve into the fundamental concepts of separation of variables and the Schrödinger equation, unravel the mysteries of superposition, and explore the behavior of particles in the infinite square well and the 'particle in a box' scenarios. ",
            description: null,
            link: 'https://youtu.be/q0N7rDhTcEA',
          },
          {
            title:
              'Quantum Physics Full Course | Quantum Mechanics Course Quantum physics also known as Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles. It is the foundation of all #quantum #physics including quantum chemistry, quantum field theory, quantum technology, and quantum information science. ',
            description: null,
            link: 'https://youtu.be/hyctIDPRSqY',
          },
        ],
        playlists: [],
      },
    },
    'Module 38: Neutrinos': {
      Neutrinos: {
        description:
          'Framework for creating virtual and augmented reality experiences.',
        git: [],
        youtube: [
          {
            title:
              'Neutrinos are the Worst Particles in the Universe - Ask a Spaceman! How did we discover neutrinos? What don’t they make any sense? Why do they have mass, and how do they change their identities? I discuss these questions and more in today’s Ask a Spaceman! ',
            description: null,
            link: 'https://youtu.be/0-VgesDOr9E',
          },
          {
            title: 'Neutrinos: Why Do These "Useless" Ghost Particles Exist? ',
            description: null,
            link: 'https://youtu.be/2xW5QV9zwGs',
          },
        ],
        playlists: [],
      },
      TauRunner: {
        description:
          'Framework for creating virtual and augmented reality experiences.',
        git: ['https://github.com/icecube/TauRunner'],
        youtube: [],
        playlists: [],
      },
    },
    'Module 39: Quantum Computing': {
      'Quantum computer': {
        description:
          'Open-source framework for programming quantum computers and simulations.',
        git: [],
        youtube: [
          {
            title:
              'The Map of Quantum Computing | Quantum Computers Explained With this video I aim to give a really good overview of the field of quantum computing with a clear explanation of how they work, why people are excited about quantum algorithms and their value, the potential applications of quantum computers including quantum simulation, artificial intelligence and more, and the different models and physical implementations people are using to build quantum computers like superconducting devices, quantum dots, trapped ions, photons or neutral atoms, and the challenges they face. ',
            description: null,
            link: 'https://youtu.be/-UlxHPIEVqA',
          },
          {
            title:
              'Who Has The Best Quantum Computer? This is a summary of all the main companies building quantum computers today, and what their most powerful machines are. ',
            description: null,
            link: 'https://youtu.be/gcbMKt079l8',
          },
        ],
        playlists: [],
      },
      Qiskit: {
        description:
          'Library of quantum algorithms for quantum computing research.',
        git: ['https://github.com/Qiskit'],
        youtube: [
          {
            title:
              'Quantum Pong — Programming on Quantum Computers Season 1 Ep 1 Learn to play Quantum Pong and how you can program other quantum applications with Qiskit. This video is the first of many of our new series, Coding with Qiskit. ',
            description: null,
            link: 'https://youtu.be/a1NZC5rqQD8',
          },
          {
            title: 'Lecture 1.1 - Vector Spaces, Tensor Products, and Qubits ',
            description: null,
            link: 'https://youtu.be/xgA4Dx_7q34',
          },
        ],
        playlists: [
          {
            title: 'Qiskit Foundations - Coding with Qiskit Season 1 ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY',
          },
          {
            title: 'Understanding Quantum Information and Computation ',
            description: null,
            link: 'https://youtube.com/playlist?list=PLOFEBzvs-VvqKKMXX4vbi4EB1uaErFMSO',
          },
        ],
      },
      QuantumLib: {
        description:
          'Python library for designing and simulating quantum circuits.',
        git: ['https://github.com/epelaaez/QuantumLibrary'],
        youtube: [
          {
            title:
              'Welcome to the official YouTube Channel for Quantum AI. Explore our how-to videos on programming quantum computers, stay up-to-date with the latest scientific breakthroughs, or discover new tools to use for your next quantum project. ',
            description: null,
            link: 'https://www.youtube.com/@GoogleQuantumAI/videos',
          },
        ],
        playlists: [],
      },
      Pyquil: {
        description:
          'Python library for designing and simulating quantum circuits.',
        git: ['https://github.com/rigetti/pyquil'],
        youtube: [
          {
            title:
              'pyQuil Easy, Hybrid Quantum Programming | SciPy 2018 | Guenevere Prawiroatmodjo pyQuil is a Python-based, open-source quantum programming library. pyQuil is part of the Rigetti Forest toolkit for programming and running quantum algorithms in the cloud on both a physical quantum computer and classically-simulated quantum processor. Rigetti Computing is a start-up in Berkeley, on a mission to build the first large-scale commercial quantum computer. ',
            description: null,
            link: 'https://youtu.be/4BYcoblLGNU',
          },
        ],
        playlists: [],
      },
    },
    'Module 40: Quantum Computing Applications': {
      'TensorFlow Quantum': {
        description:
          'Quantum machine learning platform for advanced computations.',
        git: ['https://github.com/tensorflow/quantum/tree/research'],
        youtube: [
          {
            title:
              'What Is Quantum Machine Learning? | TensorFlow Quantum Getting back into the AI 101 videos this month, with quantum machine learning! We’ll be talking about what exactly quantum machine learning is, and walking through a TensorFlow tutorial together in Colab. ',
            description: null,
            link: 'https://youtu.be/2g7wIZLbt0I',
          },
          {
            title:
              "TensorFlow Quantum: A software platform for hybrid quantum-classical ML (TF Dev Summit '20) We introduce TensorFlow Quantum, an open-source library for the rapid prototyping of novel hybrid quantum-classical ML algorithms. This library will extend the scope of current ML under TensorFlow and provides the necessary toolbox for bringing quantum computing and machine learning research communities together to control and model quantum data. ",
            description: null,
            link: 'https://youtu.be/-o9AhIz1uvo',
          },
        ],
        playlists: [],
      },
      'Xanadu Strawberrys Fields': {
        description:
          "Google's open-source framework for quantum circuit simulations.",
        git: ['https://github.com/XanaduAI/strawberryfields'],
        youtube: [
          {
            title:
              'Strawberry Fields - software for photonic quantum computing \nn this talk, we introduce Strawberry Fields, an open-source quantum software library for light-based quantum computers. Built in Python, Strawberry Fields is a full-stack library for design, simulation, optimization, and quantum machine learning of photonic quantum circuits. ',
            description: null,
            link: 'https://youtu.be/B2n0TxRDWPs',
          },
          {
            title:
              "How to run jobs on Xanadu's X-series devices | Xanadu Cloud Tutorial Xanadu Quantum Computing Educator, Isaac de Vlugt, shows you how to run a job on an X-series device on the Xanadu Cloud. Level: Beginner ",
            description: null,
            link: 'https://youtu.be/gcEnMGiBFrc',
          },
        ],
        playlists: [],
      },
      Cirq: {
        description:
          "Google's open-source framework for quantum circuit simulations.",
        git: ['https://github.com/quantumlib/cirq'],
        youtube: [
          {
            title:
              'Programming a quantum computer with Cirq (QuantumCasts)  In this episode of QuantumCasts, Dave Bacon (Twitter: @dabacon) teaches you what a quantum program looks like via a simple “hello qubit” program. ',
            description: null,
            link: 'https://youtu.be/16ZfkPRVf2w',
          },
          {
            title:
              'How to build a quantum circuit with Cirq 1.0 The first step in programming a quantum computer is creating a quantum circuit. In this video, we explore how to build quantum circuits with Cirq 1.0.  ',
            description: null,
            link: 'https://youtu.be/MHYZgWmPhbI',
          },
        ],
        playlists: [],
      },
    },
    'Module 41: Open Source Hardware': {
      'Open Source Hardware': {
        description:
          'List of awesome open source hardware tools, generators, and reusable designs',
        git: ['https://github.com/aolofsson/awesome-opensource-hardware'],
        youtube: [],
        playlists: [],
      },
    },
    'Module 42: Discord': {
      Discord: {
        description:
          'Communication platform with voice, video, and text chat features.',
        git: ['https://discord.com/'],
        youtube: [
          {
            title:
              'The ULTIMATE Discord Setup Tutorial 2023 - How to Setup a Discord Server WITH Bots & Roles! ',
            description:
              ' Discord is constantly adding new features and changing the way discord works, and when just jumping into discord, and can be tough to navigate and learn the platform sometimes. In this video, I show you how to setup a discord server, how to add bots to a discord server, and how to add some nice flair to your discord server to make it pop! If you need to learn how to create a discord server, this video is perfect for you! ',
            link: 'https://youtu.be/Z8ND1XcUomU',
          },
        ],
        playlists: [],
      },
    },
    'Module 43: DNA Engineering': {
      'The Map of Biology': {
        description:
          'Gene editing tool for precise DNA modifications in various organisms.',
        git: [],
        youtube: [
          {
            title: 'Map of Biology ',
            description: null,
            link: 'https://youtu.be/wENhHnJI1ys',
          },
        ],
        playlists: [],
      },
      CRISPR: {
        description:
          'Innovative gene editing technology for advanced DNA manipulation.',
        git: ['https://github.com/davidliwei/awesome-CRISPR'],
        youtube: [
          {
            title:
              "Essential Guide to Becoming a CRISPR Cas9 Expert Thanks for joining us today for our first webinar in the #ResearchersAtWork Series! We'll be exploring the topic of CRISPR and how to start using it in your own experiments. CRISPR gene editing has allowed scientists to modify genes of interest much easier and faster than ever before. ",
            description: null,
            link: 'https://www.youtube.com/live/DXUQKIHFTMI?feature=share',
          },
        ],
        playlists: [
          {
            title: 'PDF eBook ',
            description: null,
            link: 'https://nuah.slack.com/files/U023CEUSG77/F05LESMH7HT/crispr_101_ebook-v2021__2_.pdf',
          },
        ],
      },
      CROSPR: {
        description:
          'Manipulation of genetic material for tailored applications and research.',
        git: ['https://github.com/H2muller/CROPSR'],
        youtube: [],
        playlists: [],
      },
      'DNA Engineering': {
        description:
          'Manipulation of genetic material for tailored applications and research.',
        git: [],
        youtube: [
          {
            title: 'Map of Biology ',
            description: null,
            link: 'https://youtu.be/wENhHnJI1ys',
          },
          {
            title:
              'GENE EDITING EXPLAINED! - A comprehensive guide to the principles, methods and technologies! ',
            description: null,
            link: 'https://youtu.be/_6ZBVf6H_IA',
          },
          {
            title:
              'Learn Genetic Engineering - Part 1: How does it work? This series will get into the nitty gritty of how it works, starting from the basics of DNA design, to assembly strategies, and even genetic logic. This episode is an overview of the basics, how one goes about planning and preparing for an experiment, and a lot of resources to help you learn. ',
            description: null,
            link: 'https://www.youtube.com/live/E_TAHxPBqKY?feature=share',
          },
          {
            title:
              '[LIVE] Writing DNA Code! | Learn Real Genetic Engineering - Part 2 This series will get into the nitty gritty of how it works, starting from the basics of DNA design, to assembly strategies, and even genetic logic. This episode is an overview of the basics, how one goes about planning and preparing for an experiment, and a lot of resources to help you learn. ',
            description: null,
            link: 'https://www.youtube.com/live/1ThNnuSuZC0?feature=share',
          },
        ],
        playlists: [],
      },
    },
    'Module 44: Science': {
      Science: {
        description:
          'Open-source library for advanced scientific and technical computations in Python.',
        git: [],
        youtube: [
          {
            title:
              'Map of Science (and everything else) In this video I investigate what makes a science a science, and how the scientific method is used in different subjects. I lay out all of the areas of human endeavor and show how they relate to each other from philosophy, through the sciences, to the social sciences, the arts and back to philosophy which I have drawn as a big donut. ',
            description: null,
            link: 'https://youtu.be/ohyai6GIRZg',
          },
        ],
        playlists: [],
      },
      SciPy: {
        description:
          'Study of matter, its properties, composition, and reactions at atomic level.',
        git: ['https://github.com/scipy/scipy'],
        youtube: [
          {
            title: 'SciPy Tutorial 1: Overview and Installation. ',
            description:
              'Welcome to a brand new tutorial series on SciPy! In this video, I will be giving a brief overview of SciPy as well as showing you how to install SciPy. ',
            link: 'https://youtu.be/xj_M8ZVjDOw',
          },
          {
            title:
              'SciPy Tutorial (2022): For Physicists, Engineers, and Mathematicians. Description This from-scratch tutorial on SciPy is designed specifically for those studying physics, mathematics, and engineering. Before watching this, you may want to brush up on numpy: ',
            description: null,
            link: 'https://youtu.be/jmX4FOUEfgU',
          },
          {
            title:
              'NumPy Tutorial (2022): For Physicists, Engineers, and Mathematicians. ',
            description:
              ' This from-scratch tutorial on NumPy is designed specifically for those in physics, mathematics, and engineering. In the future, I will be making tutorial videos on all the essential python packages, so subscribe for more! ',
            link: 'https://youtu.be/DcfYgePyedM',
          },
        ],
        playlists: [
          {
            title: 'SciPy tutorials for beginners (10 videos) ',
            description: null,
            link: 'https://youtube.com/playlist?list=PL1A5nGiCuuctkzARw3rfKIKUJEmby3X14',
          },
          {
            title: 'more thant 10 playlists about SciPy ',
            description: null,
            link: 'https://www.youtube.com/@enthought/playlists',
          },
        ],
      },
      Chemistry: {
        description:
          'Study of fundamental laws governing matter, energy, and the universe.',
        git: [],
        youtube: [
          {
            title:
              'The Map of Chemistry The entire field of chemistry summarised in 12mins from simple atoms to the molecules that keep you alive. ',
            description: null,
            link: 'https://youtu.be/P3RXtoYCW4M',
          },
          {
            title:
              'Physical chemistry Physical chemistry is the study of macroscopic, and particulate phenomena in chemical systems in terms of the principles, practices, and concepts of physics such as motion, energy, force, time, #thermodynamics, #quantum chemistry, #statistical mechanics, analytical dynamics and chemical equilibrium. ',
            description: null,
            link: 'https://youtu.be/PQechXuFoyI',
          },
        ],
        playlists: [],
      },
      Physics: {
        description: 'ChemPy is a Python package useful for chemistry',
        git: [],
        youtube: [
          {
            title:
              "The Map of Physics Everything we know about physics - and a few things we don't - in a simple map. ",
            description: null,
            link: 'https://youtu.be/ZihywtixUYo',
          },
          {
            title:
              'Modern Physics || Modern Physics Full Lecture Course Modern physics is an effort to understand the underlying processes of the interactions with matter, utilizing the tools of science and engineering. In general, the term is used to refer to any branch of #physics either developed in the early 20th century and onward, or branches greatly influenced by early 20th century physics. ',
            description: null,
            link: 'https://youtu.be/3lTQqEehEhI',
          },
        ],
        playlists: [],
      },
      Chempy: {
        description:
          'Study and practice of diagnosing, treating, and preventing illnesses.',
        git: ['https://github.com/bjodah/chempy'],
        youtube: [
          {
            title: 'ChemPy Tutorial #1 (Compounds and RxnSeries) ',
            description: null,
            link: 'https://youtu.be/9GG8erLNS-0',
          },
          {
            title: 'ChemPy Tutorial #2 (Figures and Data Modules) ',
            description: null,
            link: 'https://youtu.be/WEx3XzHQ5qM',
          },
        ],
        playlists: [],
      },
      Medicine: {
        description:
          'Exploration and study of celestial bodies and the universe.',
        git: [],
        youtube: [
          {
            title:
              'The Comprehensive Map of Medicine This is the Map of Medicine showing you all of the different areas of medical practice, the principles of medicine, diagnostic methods, the surrounding sciences that support the field of medicine and a description of the placebo effect and clinical trials. ',
            description: null,
            link: 'https://youtu.be/CkwSeMrOPjc',
          },
        ],
        playlists: [],
      },
      Space: {
        description:
          'Exploration and study of celestial bodies and the universe.',
        git: [],
        youtube: [
          {
            title:
              'Every Thing in Space This video explores all of the things in the Universe from our Earth and local Solar System, out to the Milky Way Galaxy and looks at all of the different kinds of stars from Brown Dwarfs to Red Supergiant Stars. Then to the things they explode into like white dwarfs, neutron stars and black holes. Then we look at all the other kinds of galaxy in the universe, blazars, quasars and out to the cosmic microwave background and the big bang. It covers most of the different things that we know about in the Universe. ',
            description: null,
            link: 'https://youtu.be/uniGQrGLEoI',
          },
          {
            title:
              'The Map of Black Holes | Black Holes Explained This is the Map of Black Holes which isn’t a map of where all the black holes are in space, it’s a concept map of the subject of black holes: laying out our current knowledge of them. Their structure including Schwarzschild radius or event horizon, the singularity, photon sphere, innermost stable orbit, accretion disk, Hawking radiation and the difference between rotating and non-rotating black holes. I also look at the evidence for their existence, the many ways we have detected them though x-ray astronomy, gravitational wave astronomy and radio astronomy. Then the many outstanding mysteries still to be solved including wormholes, the holographic theory and information paradox. They are very fascinating objects indeed. ',
            description: null,
            link: 'https://youtu.be/Wf0uxjWGwPk',
          },
        ],
        playlists: [],
      },
    },
    'Module 45: Engineering ': {
      Engineering: {
        description:
          'Is the designing, testing and building of machines, structures and processes using maths and science.',
        git: [],
        youtube: [
          {
            title:
              'The Map of Engineering In this video I attempt to capture all of that diversity in one picture: the Map of Engineering, so that we can get our heads around it all and set some bounds on the subject. ',
            description: null,
            link: 'https://youtu.be/pQgxiQAMTTo',
          },
        ],
        playlists: [],
      },
    },
    'Module 46: Enlightment': {
      Enlightenment: {
        description:
          'Spiritual tradition emphasizing enlightenment, compassion, and the Four Noble Truths.',
        git: [],
        youtube: [
          {
            title:
              'Discovering the True SOURCE of Happiness - Intro to Advaita Vedanta - Part 1 The sages of ancient India discovered that atma - the inner divinity or conscious essence of each person - is the true source of happiness.  Failing to recognize that inner source of happiness, one endlessly seeks lasting happiness in the world without success. ',
            description: null,
            link: 'https://youtu.be/V1oJAjVLuP4',
          },
          {
            title:
              'Atma: Sat Cit Ananda - Intro to Advaita Vedanta - Part 2 Your essential nature is consciousness, unborn, uncreated, untouched by suffering, the true source of happiness.  But this inner reality is hidden behind a veil of ignorance, and as a result, we identify ourselves as being male/female, young/old, healthy/ill, etc. when these attributes actually belong to the body, not the true self, atma. ',
            description: null,
            link: 'https://youtu.be/V8jzIMEVuIU',
          },
          {
            title:
              'Unchanging Consciousness - Intro to Advaita Vedanta - Part 3 Perceptions, thoughts, and emotions arise in your mind as vrittis and become known to you, the eternal conscious being.  To observe these changing vrittis, consciousness must necessarily be unchanging, and is therefore utterly unaffected by the vrittis it reveals -- like the sun is unaffected by all it shines upon. ',
            description: null,
            link: 'https://youtu.be/NfvlrY2Nd3E',
          },
          {
            title:
              "Sakshi - The Awareful Witness - Intro to Advaita Vedanta - Part 4 The consciousness that is your essential nature, atma, is the sakshi, awareful witness, of all mind's activities when you you are awake, dreaming, or in deep dreamless sleep.  In deep sleep, you remain conscious, but there's nothing to be conscious of.  That consciousness is all-pervasive and is reflected or manifest differently by every mind as the divinity dwelling within. ",
            description: null,
            link: 'https://youtu.be/T5o_AJRxVp0',
          },
          {
            title:
              'Ishvara: Blind Faith vs Knowledge - Intro to Advaita Vedanta - Part 5 Rather than relying on blind faith in scriptures, as Western religions do, Vedanta unfolds the existence and nature of Ishvara (God) through scriptural teachings that are extensively supported by the use of reason and rational discourse.  Thus, Ishvara is shown to be the efficient cause (intelligent agent) for the universe, who possesses both the knowledge and power (maya) to create it. ',
            description: null,
            link: 'https://youtu.be/zJZ9fkNwm5I',
          },
          {
            title:
              "Ishvara: The Fabric of Creation - Intro to Advaita Vedanta - Part 6 Ishvara is not only the intelligent creator of the universe, but is also the very material out of which the universe is fashioned.  The material for a spider's web comes from its body, but the spider remains separate from the web, unlike Ishvara who is non-separate from the universe like a dreamer is non-separate from his or her dream. ",
            description: null,
            link: 'https://youtu.be/oOYtZYme6zU',
          },
        ],
        playlists: [],
      },
      Buddhism: {
        description:
          'Spiritual tradition emphasizing enlightenment, compassion, and the Four Noble Truths.',
        git: [],
        youtube: [
          {
            title:
              '10 Life Lessons From Buddha (Buddhism) In this video we will be talking about 10 Life Lessons From Buddha. Gautama Buddha was a philosopher, meditator, spiritual teacher, and religious leader who is credited as the founder of Buddhism. ',
            description: null,
            link: 'https://youtu.be/lnQuIGxteGI',
          },
          {
            title:
              'Master Shi Heng Yi – 5 hindrances to self-mastery | Shi Heng YI | TEDxVitosha Meet Shaolin Master Shi Heng Yi in his serene talk about self-discovery. Learn why rainfall is an essential part of each flowering. And every small step – part of the journey to the highest peek. The hindrances along the way to self-discovery and personal growth are easy to overcome. Learn how from his talk. ',
            description: null,
            link: 'https://youtu.be/4-079YIasck',
          },
          {
            title:
              'Dalai Lama\'s Secrets to a Healthy Mind and Body: Top 10 Rules for Success He\'s a monk of the Gelug or "Yellow Hat" school of Tibetan Buddhism, the newest of the schools of Tibetan Buddhism. ',
            description: null,
            link: 'https://youtu.be/wSktiBReOSA',
          },
          {
            title:
              'Basics of Buddhism: Lecture Series Learn about the life of Buddha, basic Buddhist concepts, the Eight-fold path, how to reach Nirvana and the rise and spread of Buddhism throughout India and Asia. ',
            description: null,
            link: 'https://youtu.be/Id36EJKSO4I',
          },
          {
            title:
              'Lesson 1: FIRST NOBLE TRUTH (Suffering) - Full Talk In his first sermon (sutta) the Buddhas cover all his essential teachings. This first sermon revolves around the Four Noble Truths.  This week we look at Suffering - the first noble truth. ',
            description: null,
            link: 'https://youtu.be/7NP-1NUNlGM',
          },
          {
            title:
              "Lesson 2: SECOND NOBLE TRUTH, Cause of Suffering (full talk) Continuing Richard Jones's 2016 Beginner's Buddhism course filmed at the London Buddhist Vihara in June 2016. Buddha asked us not to believe his teachings but to understand them. ",
            description: null,
            link: 'https://youtu.be/IdFQhVB9S5c',
          },
          {
            title:
              "Lesson 3: THIRD & FOURTH NOBLE TRUTH (The Eightfold Path) - full lesson The four noble truths are likened to a visit to the doctor.  The fourth truth is the 'cure'.  But for the cure to work you have to take it.  Only you can take it no one can do it for you. ",
            description: null,
            link: 'https://youtu.be/KoGt9Xbs4eI',
          },
          {
            title:
              'Lesson 4: The Law of Kamma (Karma) The law of Kamma describes how if you perform an action with a good intention in your mind, then, sooner or later you will receive good results.  Richard Jones explains with clarity, this  Buddhist doctrine, which is simple to explain in principle but complicated to understand in detail. ',
            description: null,
            link: 'https://youtu.be/UrX0Jsp81Ag',
          },
          {
            title:
              "Lesson 5: THE WHEEL OF LIFE - full talk Richard Jones explains the Buddhist rich doctrine of the 'Wheel of Life' which describes how ALL physical and mental phenomena arise due to a previous cause.  A simple process of causality (conditioning). ",
            description: null,
            link: 'https://youtu.be/7vuMSCca03k',
          },
          {
            title:
              "Lesson 6: THE THREE CHARACTERISTICS OF EXISTENCE When we try to acquire 'Right Understanding' (samma ditthi), what we are trying to become aware of is the Three Characteristics of Existence / The Three Marks of Being / The Three Signs of Being. ",
            description: null,
            link: 'https://youtu.be/CsswVG2ZSRo',
          },
          {
            title:
              "Lesson 7: THE FIVE AGGREGATES (the 5 Khandhas) The Buddha analysed a being into Five 'Aggregates' (also known as 5 Khandhas or Skandhas): FORM, FEELING, PERCEPTION, MENTAL FORMATIONS & CONSCIOUSNESS. ",
            description: null,
            link: 'https://youtu.be/nOO5Y6HZvlU',
          },
          {
            title:
              'Lesson 8: MEDITATION: Goals and Methods of Buddhist Meditation This lesson (full talk) explores the goals and methods of Buddhist Meditation, or Bhāvanā, which means mental cultivation or development. ',
            description: null,
            link: 'https://youtu.be/SDmHayxA9vw',
          },
        ],
        playlists: [],
      },
    },
    'Module 47: The Spirit Molecule': {
      'The Spirit Molecule': {
        description: null,
        git: [],
        youtube: [
          {
            title:
              'Psychedelics: Chemicals, Consciousness, and Creativity Could psychedelics make you more creative? Shift your mind, connect you to others, and help you access a younger, more malleable version of yourself? Activist Rick Doblin, neuroscientist Gül Dölen, and musician Reggie Watts join Brian Greene for a mind-bending and multidisciplinary conversation about the promises and pitfalls of these "magic" molecules and their impact on creativity, connection, and consciousness. ',
            description: null,
            link: 'https://youtu.be/kxFTWk9lLDU',
          },
          {
            title:
              'DMT: The Spirit Molecule (2010) [multi subs] An investigation into the long-obscured mystery of dimethyltryptamine (DMT), a molecule found in nearly every living organism and considered the most potent psychedelic on Earth. ',
            description: null,
            link: 'https://youtu.be/fwZqVqbkyLM',
          },
          {
            title:
              'Evidence That DMT Opens the Brain to Other Dimensions | Andrew Gallimore ',
            description: null,
            link: 'https://youtu.be/QbQckTWzWBo',
          },
          {
            title:
              "The Nature of Ayahuasca (2019) Documentary Ayahausca is a traditional plant medicine from the Amazon used to treat a variety of physical and psychology illnesses and conditions. This film explores the use of the Ayahausca as a holistic medicine, challenging stigmas around its use and helping people become more conscious and ethical consumers of the plant if that's the path they choose. ",
            description: null,
            link: 'https://youtu.be/6j0_glRnJxI',
          },
        ],
        playlists: [],
      },
    },
  },
};
