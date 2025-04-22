const dlaQuestions = [
  {
    questionNumber: 40,
    description: "Please tell us about the child's health condition or disabilities",
    helpfulInfo: `Robyn has a confirmed diagnosis of Down syndrome, Autism Spectrum Disorder and a Pathological Demand Avoidance (PDA) profile. She is non‑verbal and has a severe learning disability (developmental age ≈ 2½ years). Hypotonia reduces general muscle tone; she can walk but fatigues quickly. She has no sense of danger and cannot follow verbal instructions.

PDA drives extreme refusals, prolonged rages and daily “flop‑and‑drop” collapses. She wakes repeatedly at night and must be watched constantly to stay safe. Taken together, these difficulties satisfy the DLA definition of severe mental impairment.`
  },
  {
    questionNumber: 41,
    description: "Does the child use, or have they been prescribed or had an occupational health assessment for any aids or adaptations?",
    helpfulInfo: `• PECS book, visual timetable and communication boards for all expressive language.
• Specialist buggy (Maclaren Major Elite) for outdoor travel because she collapses or bolts without warning.
• OT‑recommended toileting frame, hand‑rails and low‑arousal bedroom adaptations.

All equipment must be set up and used under one‑to‑one adult supervision – Robyn cannot operate it safely or consistently on her own.`
  },
  {
    questionNumber: 42,
    description: "When the child needs help",
    helpfulInfo: `Help is required minute‑by‑minute and is unpredictable:
• 8–12 behavioural incidents daily (rage, bolting or full collapse).
• Physical assistance to lift or guide her when she refuses or flops.
• Continuous verbal prompting and visual cues for every routine (dressing, eating, toileting, crossing rooms).

Without immediate hands‑on support she would injure herself or others.`
  },
  {
    questionNumber: 43,
    description: "Can the child physically walk?",
    helpfulInfo: `Yes – Robyn has the physical ability to walk and can move quickly. However, outdoors she is unsafe: within 10–30 m she will either bolt towards traffic or collapse to the ground. Reliable walking is impossible without one‑to‑one adult support or the buggy.`
  },
  {
    questionNumber: 44,
    description: "Does the child have any difficulties with standing and moving around due to a health condition or disability?",
    helpfulInfo: `Yes – difficulties are behavioural, not muscular:
• Sudden refusals and full‑body collapses (“flop‑and‑drop”) multiple times a day.
• Unpredictable bolting in any direction, including into roads.
• Requires continuous supervision and frequent physical intervention to prevent harm.`
  },
  {
    questionNumber: 45,
    description: "How far can they walk without having severe discomfort and how long does it take them?",
    helpfulInfo: `Behaviour, not pain, stops her. On most outings she manages only 10–20 m before collapsing or bolting. A 30 m walk to the car routinely takes 5–10 minutes with 2+ interventions. Benchmarks (e.g., length of a double‑decker bus ≈ 11 m) show her functional mobility is severely limited.`
  },
  {
    questionNumber: 46,
    description: "Please tell us about their walking speed",
    helpfulInfo: `Tick “Varies”. When engaged she can jog; the next moment she lies flat or bolts. Speed therefore gives no indication of safe, purposeful walking. One‑to‑one adult control is essential at all times.`
  },
  {
    questionNumber: 47,
    description: "Please tell us about the way they walk",
    helpfulInfo: `Tick “They refuse to walk”. Robyn often refuses any guidance, then drops into a floppy, un‑liftable heap – arms vertical, body limp – needing two adults to move her safely. This makes independent or even supported walking impossible without physical handling.`
  },
  {
    questionNumber: 48,
    description: "Does the child have any other difficulties either during or after standing and moving around that affects their health?",
    helpfulInfo: `Transitions, noise or crowds trigger meltdowns or collapse. Afterwards she is exhausted, distressed and may refuse to move for 30‑60 minutes, requiring calming and carrying. The recovery time further restricts usable mobility.`
  },
  {
    questionNumber: 49,
    description: "Do they need guidance or supervision most of the time when they walk outdoors?",
    helpfulInfo: `Yes – supervision must be continuous. She does not grasp danger, refuses hand‑holding and has previously bolted into traffic. In [Month Year] she collapsed mid‑crossing and needed two adults to lift her clear of cars.`
  },
  {
    questionNumber: 50,
    description: "Do they fall due to their health condition or disability?",
    helpfulInfo: `Yes – 3–5 “flop‑and‑drop” collapses daily. They are sudden, hard and indistinguishable from falls, posing bruising and traffic risks. Adult lifting is required each time.`
  },
  {
    questionNumber: 51,
    description: "When did the child's mobility needs start?",
    helpfulInfo: `Behaviour‑related mobility problems were evident before age 2 and have escalated since. Needs have been present well over the qualifying three‑month period and are expected to continue indefinitely.`
  },
  {
    questionNumber: 52,
    description: "If the child is eligible for help from Motability, would you like us to send you information about the help they can offer?",
    helpfulInfo: `Select “Yes”. A Motability vehicle is essential because Robyn cannot walk safely for more than a few metres.`
  },
  {
    questionNumber: 53,
    description: "Tell us anything else we need to know about their difficulties with standing and moving around or how their needs change from day to day",
    helpfulInfo: `Capability changes minute‑to‑minute rather than day‑to‑day. Even familiar routes can trigger an instant bolt or collapse. During a collapse her arms shoot upwards and her weight shifts unpredictably, so two adults are often required. For safety she therefore travels in a buggy for most journeys.`
  },
  {
    questionNumber: 54,
    description: "Does the child need encouragement, prompting, or assistance to settle in bed during the day?",
    helpfulInfo: `If she naps, an adult must spend 10–15 minutes calming her with visual cues and firm pressure to counter sensory overload. Without this she will not settle and becomes agitated.`
  },
  {
    questionNumber: 55,
    description: "Do they need encouragement, prompting or assistance to manage their toilet needs?",
    helpfulInfo: `Yes – she is not fully toilet‑trained. Requires full adult assistance 4–5 times a day (≈ 10 min each) for undressing, lifting onto frame, wiping and redressing. PDA often causes outright refusal, increasing time and physical handling.`
  },
  {
    questionNumber: 56,
    description: "Do they need encouragement, prompting, or assistance to help move around indoors, use stairs or get into or out of a chair during the day?",
    helpfulInfo: `• Needs a guiding hand and verbal prompts on every stair use (5–6 times daily) due to low tone and risk‑taking.
• Frequently freezes or lies on the floor; adult lifting or carrying then required.
• Prompts needed to sit or stand from chairs because of resistance.`
  },
  {
    questionNumber: 57,
    description: "Do they need encouragement, prompting, or assistance with washing, bathing, showering and cleaning themselves during the day?",
    helpfulInfo: `Daily bath/shower takes ≈ 30 minutes:
• Adult prepares bathroom, lifts her in, washes her body and hair.
• Sensory aversion leads to resistance and prolonged reassurance.
• Cannot wash, rinse or dry herself independently.`
  },
  {
    questionNumber: 58,
    description: "Do they need encouragement, prompting, or assistance to dress and undress during the day?",
    helpfulInfo: `Needs full assistance twice daily (≈ 15 min each). Low muscle tone makes buttons/zips impossible; PDA causes refusal – adult provides hand‑over‑hand help and motivational strategies.`
  },
  {
    questionNumber: 59,
    description: "Do they need encouragement, prompting, or assistance to eat and drink during the day?",
    helpfulInfo: `Supervision and prompting are required at every meal (3 main meals + 2 snacks). She eats selectively, stuffs food or walks away mid‑bite. Adult maintains safety, cuts food and prompts each mouthful (≈ 20 min per meal).`
  },
  {
    questionNumber: 60,
    description: "Do they need encouragement, prompting, or assistance with managing their medication or monitoring or managing any treatments carried out at home during the day?",
    helpfulInfo: `Takes thyroid medication once daily and requires sensory‑based physiotherapy exercises. An adult administers medication (≈ 10 min) and supervises exercises (2× daily, 15 min each). She cannot understand or manage either task herself.`
  },
  {
    questionNumber: 61,
    description: "Do they have difficulty seeing?",
    helpfulInfo: `Robyn wears prescription glasses for farsightedness common in Down syndrome. Even with glasses she struggles to focus on small or distant objects and relies on adult guidance to navigate obstacles.`
  },
  {
    questionNumber: 62,
    description: "Do they have difficulty hearing?",
    helpfulInfo: `She has mild conductive hearing loss with grommets fitted. Background noise or ear infections reduce hearing further, so visual cues and close positioning are necessary for communication.`
  },
  {
    questionNumber: 63,
    description: "Do they have difficulty speaking?",
    helpfulInfo: `Robyn is largely non‑verbal. She uses a handful of approximated words and makaton signs but cannot reliably express needs, pain or danger.`
  },
  {
    questionNumber: 64,
    description: "Do they have difficulty and need help communicating?",
    helpfulInfo: `Yes – constant adult mediation is essential.
• Uses PECS book or gesture; needs prompting to select symbols.
• Communication attempts take 10‑15 minutes and must be interpreted and relayed by an adult multiple times daily.`
  },
  {
    questionNumber: 65,
    description: "Do they have fits, blackouts, seizures, or something similar?",
    helpfulInfo: `No epileptic seizures. Meltdowns mimic seizure‑like rigidity; adult must ensure airway is clear and protect her head (occurs 1–2 times weekly).`
  },
  {
    questionNumber: 66,
    description: "Do they need to be supervised during the day to keep them safe?",
    helpfulInfo: `Select “Yes”. Supervision is required for every waking minute. Risks include bolting into traffic, climbing furniture, mouthing unsafe objects or collapsing in hazardous places. Two adults are sometimes needed for lifts or restraint.`
  },
  {
    questionNumber: 67,
    description: "Do they need extra help with their development?",
    helpfulInfo: `Yes – daily 1‑to‑1 sessions (20 min) with simplified language, sensory breaks and hand‑over‑hand guidance to build basic play, language and self‑care skills.`
  },
  {
    questionNumber: 68,
    description: "Do they need encouragement, prompting or assistance at school or nursery?",
    helpfulInfo: `Robyn has a full‑time 1:1 teaching assistant (25 hours per week). Support covers learning tasks, personal care, behaviour management and safe movement around school.`
  },
  {
    questionNumber: 69,
    description: "Do they need encouragement, prompting or assistance to take part in hobbies, interests, social or religious activities?",
    helpfulInfo: `She enjoys soft‑play and music therapy but attends only with 1:1 adult support (≈ 2 hours weekly) to manage sensory overload, ensure safety and prompt engagement.`
  },
  {
    questionNumber: 70,
    description: "Due to a health condition or disability do they wake and need assistance or supervision during the night?",
    helpfulInfo: `Robyn wakes at least four nights a week, usually between 01:00 and 04:00. An adult must remain with her until she resettles (45–90 min) or supervise the rest of the night if she stays awake. She cannot be left alone as she will wander and is unaware of danger.`
  },
  {
    questionNumber: 71,
    description: "What date did the child's difficulties with their care needs start?",
    helpfulInfo: `Care needs have existed from birth (Down syndrome). Behavioural challenges linked to autism/PDA became significant from age 2 and have intensified. Needs have remained severe and are expected to persist for life.`
  },
  {
    questionNumber: 72,
    description: "Tell us anything else we need to know about their difficulties with their daily living and care needs or how their needs change from day to day",
    helpfulInfo: `Robyn’s baseline requires continuous, hands‑on care. Severity fluctuates within the day rather than between days – any change in routine, noise or demand can trigger sudden refusal, rage or collapse. During collapses she is totally limp; two adults may be needed to move her. Every task therefore takes far longer than for a typical child of her age. Question 89 continuation page will include additional examples and professional evidence.`
  }
];

export default dlaQuestions;
