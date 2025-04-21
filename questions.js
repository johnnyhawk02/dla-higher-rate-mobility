const dlaQuestions = [
    {
      questionNumber: 40,
      description: "Please tell us about the child’s health condition or disabilities",
      helpfulInfo: "List Down Syndrome (DS), autism, Pathological Demand Avoidance (PDA), and any related conditions (e.g., hearing loss, heart issues). For DS, note moderate to severe learning disability and hypotonia affecting physical tasks. For autism, describe communication difficulties, sensory sensitivities, and repetitive behaviors. For PDA, explain extreme demand avoidance leading to meltdowns or flop-and-drop episodes. Mention frequent nighttime awakenings (e.g., 3–4 times nightly) requiring intervention. Specify when symptoms began (e.g., DS from birth, autism/PDA diagnosed at age X) and treatments (e.g., weekly speech therapy, daily sensory strategies). Include a prescription list if applicable. Use question 89 for extra details."
    },
    {
      questionNumber: 41,
      description: "Does the child use, or have they been prescribed or had an occupational health assessment for any aids or adaptations?",
      helpfulInfo: "List aids like Picture Exchange Communication System (PECS) for autism, noise-cancelling headphones for sensory issues, or orthotics for hypotonia from DS. If the child uses a buggy or wheelchair during flop-and-drop episodes or fatigue, note this to support virtual inability to walk. Describe help needed to use aids (e.g., prompting to use PECS, assistance with orthotics). Mention any occupational therapy assessments recommending aids. Use question 89 for extra space."
    },
    {
      questionNumber: 42,
      description: "When the child needs help",
      helpfulInfo: "Indicate if needs vary due to PDA’s unpredictable behavior. Describe frequent ‘bad days’ (e.g., 4–5 days weekly) with increased meltdowns, refusal to engage, or flop-and-drop, requiring intensive supervision. On ‘good days,’ note consistent needs for prompting due to DS’s learning disability. For mobility, highlight days when refusal to walk is severe, supporting virtual inability to walk. For care, emphasize constant attention for safety and daily tasks."
    },
    {
      questionNumber: 43,
      description: "Can the child physically walk?",
      helpfulInfo: "Answer ‘Yes’ as the child can walk, but proceed to questions 44–53 to describe severe limitations due to hypotonia and behavioral issues. Highlight that while physically able, frequent refusals to walk due to autism/PDA significantly impair mobility."
    },
    {
      questionNumber: 44,
      description: "Does the child have any difficulties with standing and moving around due to a health condition or disability?",
      helpfulInfo: "Select ‘Yes.’ Describe physical difficulties from DS, like hypotonia causing unsteady gait or fatigue after short distances. Emphasize behavioral issues from autism/PDA, such as frequent flop-and-drop episodes (e.g., multiple times daily) or refusal to walk in overwhelming environments, supporting virtual inability to walk. Provide examples, e.g., ‘Needs hand-holding to prevent falls; often drops to ground in busy places.’"
    },
    {
      questionNumber: 45,
      description: "How far can they walk without having severe discomfort and how long does it take them?",
      helpfulInfo: "Estimate distance considering hypotonia and behavioral refusals. For DS, note physical limits (e.g., 50–100 meters before fatigue). For autism/PDA, highlight shorter distances due to flop-and-drop (e.g., stops after 10 meters in unfamiliar settings). Example: ‘Can walk 50 meters slowly, taking 5 minutes, but often refuses after 10 meters due to sensory overload.’ Use page 9 benchmarks (e.g., double-decker bus ≈ 11 meters) to support virtual inability to walk."
    },
    {
      questionNumber: 46,
      description: "Please tell us about their walking speed",
      helpfulInfo: "Select ‘Slow’ or ‘Very slow’ due to hypotonia causing sluggish movement or frequent stopping from autism/PDA behaviors. Example: ‘Walks very slowly, often pausing due to sensory issues or refusal, taking twice as long as peers.’ This reinforces significant mobility impairment."
    },
    {
      questionNumber: 47,
      description: "Please tell us about the way they walk",
      helpfulInfo: "Tick ‘They have poor balance,’ ‘They shuffle,’ or ‘They refuse to walk’ if applicable. For DS, note unsteady gait or waddling due to hypotonia. For autism/PDA, emphasize refusal to walk or dropping to ground. Example: ‘Has poor balance, often stumbles; frequently refuses to walk, requiring carrying.’ This supports virtual inability to walk."
    },
    {
      questionNumber: 48,
      description: "Does the child have any other difficulties either during or after standing and moving around that affects their health?",
      helpfulInfo: "Select ‘Yes.’ Describe fatigue or pain from hypotonia after walking, or distress from autism/PDA leading to meltdowns post-walking. Example: ‘Walking short distances causes exhaustion; sensory overload triggers outbursts, requiring 30 minutes to calm.’ Highlight risks like falls or health deterioration to support higher mobility rate."
    },
    {
      questionNumber: 49,
      description: "Do they need guidance or supervision most of the time when they walk outdoors?",
      helpfulInfo: "Select ‘Yes’ and tick boxes like ‘They cannot cross roads safely,’ ‘They do not understand dangers,’ or ‘They get very distressed.’ For DS, note lack of safety awareness due to learning disability. For autism/PDA, describe wandering or meltdowns in busy areas. Example: ‘Needs constant hand-holding to prevent running into traffic; sensory overload causes refusal to walk.’ Supports lower mobility rate or severe mental impairment criteria."
    },
    {
      questionNumber: 50,
      description: "Do they fall due to their health condition or disability?",
      helpfulInfo: "If applicable, note frequent falls (e.g., 2–3 times monthly) due to hypotonia’s poor balance or flop-and-drop episodes. Example: ‘Falls weekly due to unsteady gait; drops to ground during behavioral episodes, needing help to get up.’ Mention any hospital visits to emphasize severity, supporting mobility and care needs."
    },
    {
      questionNumber: 51,
      description: "When did the child’s mobility needs start?",
      helpfulInfo: "Provide a date at least 3 months prior (e.g., since age 2 for DS-related walking delays or autism/PDA behaviors). Example: ‘Mobility needs began at age 2 due to hypotonia and increasing behavioral refusals.’ This meets DLA’s qualifying period for higher mobility rate."
    },
    {
      questionNumber: 52,
      description: "If the child is eligible for help from Motability, would you like us to send you information about the help they can offer?",
      helpfulInfo: "Select ‘Yes’ to receive Motability Scheme info, useful for higher mobility rate recipients to lease vehicles, addressing severe mobility limitations due to behavioral refusals or physical fatigue."
    },
    {
      questionNumber: 53,
      description: "Tell us anything else we need to know about their difficulties with standing and moving around or how their needs change from day to day",
      helpfulInfo: "Detail unpredictable flop-and-drop episodes (e.g., 3–5 times daily) or sensory-driven refusals to walk, requiring carrying or a buggy. Note physical fatigue from hypotonia and variability (e.g., ‘Some days walks 50 meters; others refuses after 5 meters’). Example: ‘Unpredictable meltdowns in public make walking unreliable; needs constant supervision.’ Use question 89 for extra space."
    },
    {
      questionNumber: 54,
      description: "Does the child need encouragement, prompting, or assistance to settle in bed during the day?",
      helpfulInfo: "If the child naps or rests, note help needed due to hypotonia (e.g., physical assistance to get into bed) or autism/PDA (e.g., prompting to settle). Example: ‘Needs 10–15 minutes of reassurance daily to settle for naps due to sensory issues.’ Specify frequency and duration to support frequent daytime attention for highest care rate."
    },
    {
      questionNumber: 55,
      description: "Do they need encouragement, prompting or assistance to manage their toilet needs?",
      helpfulInfo: "Tick boxes for help with toileting due to DS’s developmental delays or autism/PDA’s resistance. Example: ‘Needs full assistance 4–5 times daily, taking 10 minutes each, due to delayed toilet training and demand avoidance.’ Highlight frequency and time to support highest care rate. See page 12 for examples."
    },
    {
      questionNumber: 56,
      description: "Do they need encouragement, prompting, or assistance to help move around indoors, use stairs or get into or out of a chair during the day?",
      helpfulInfo: "Tick boxes for indoor mobility help due to hypotonia (e.g., unsteady on stairs) or autism/PDA (e.g., refusal to move). Example: ‘Needs hand-holding on stairs 5–6 times daily; requires prompting to sit due to behavioral resistance.’ Emphasize frequent assistance for highest care rate. See page 13 for examples."
    },
    {
      questionNumber: 57,
      description: "Do they need encouragement, prompting, or assistance with washing, bathing, showering and cleaning themselves during the day?",
      helpfulInfo: "Note extensive help due to DS’s physical limitations or autism/PDA’s sensory aversions. Example: ‘Needs full assistance with bathing daily, taking 30 minutes, due to resistance to water and inability to wash independently.’ Specify frequency and duration for highest care rate. See page 14 for examples."
    },
    {
      questionNumber: 58,
      description: "Do they need encouragement, prompting, or assistance to dress and undress during the day?",
      helpfulInfo: "Describe help needed due to DS’s motor skill delays or autism/PDA’s resistance to clothing changes. Example: ‘Requires assistance dressing twice daily, taking 15 minutes each, due to hypotonia and sensory-driven refusals.’ Highlight time and frequency for highest care rate. See page 15 for examples."
    },
    {
      questionNumber: 59,
      description: "Do they need encouragement, prompting, or assistance to eat and drink during the day?",
      helpfulInfo: "Note help with feeding due to DS’s chewing/swallowing difficulties or autism/PDA’s selective eating. Example: ‘Needs supervision and prompting at every meal, taking 20 minutes, to ensure safe eating.’ Emphasize frequency for highest care rate. See page 16 for examples."
    },
    {
      questionNumber: 60,
      description: "Do they need encouragement, prompting, or assistance with managing their medication or monitoring or managing any treatments carried out at home during the day?",
      helpfulInfo: "If applicable, list medications or therapies (e.g., for heart conditions in DS, sensory strategies for autism). Example: ‘Needs daily prompting for medication, taking 10 minutes, and supervision for therapy exercises.’ Highlight frequency to support highest care rate. See page 17 for examples."
    },
    {
      questionNumber: 61,
      description: "Do they have difficulty seeing?",
      helpfulInfo: "If DS involves vision issues (common in 50% of cases), note difficulties even with glasses. Example: ‘Struggles to see small objects, needing guidance to navigate.’ Send a Certificate of Vision Impairment if applicable. For autism, mention sensory processing affecting visual perception. Supports care needs. See page 17."
    },
    {
      questionNumber: 62,
      description: "Do they have difficulty hearing?",
      helpfulInfo: "If DS involves hearing loss (common in 75% of cases), note issues even with aids. Example: ‘Cannot hear normal voices, needing visual cues.’ Send audiology reports if available. For autism, mention auditory sensitivities causing distress. Supports care needs. See page 18."
    },
    {
      questionNumber: 63,
      description: "Do they have difficulty speaking?",
      helpfulInfo: "For DS and autism, note speech delays or non-verbal communication. Example: ‘Uses limited words, needing support to express needs.’ Describe alternative methods (e.g., gestures, PECS) and constant help required, supporting highest care rate. See page 19."
    },
    {
      questionNumber: 64,
      description: "Do they have difficulty and need help communicating?",
      helpfulInfo: "Tick boxes for communication methods (e.g., PECS, Makaton) used due to DS’s speech delays or autism’s social challenges. Example: ‘Needs constant support to use PECS, taking 10–15 minutes multiple times daily.’ Highlight extensive help for highest care rate. See page 20."
    },
    {
      questionNumber: 65,
      description: "Do they have fits, blackouts, seizures, or something similar?",
      helpfulInfo: "If applicable (e.g., seizures in DS or autism), describe frequency and risks. Example: ‘Has seizures monthly, requiring immediate supervision.’ If not, note behavioral meltdowns resembling seizures, needing similar attention. Supports highest care rate. See page 21."
    },
    {
      questionNumber: 66,
      description: "Do they need to be supervised during the day to keep them safe?",
      helpfulInfo: "Select ‘Yes’ and tick boxes for risks like wandering, self-harm, or aggression due to DS’s lack of danger awareness and autism/PDA’s impulsivity. Example: ‘Needs constant supervision to prevent running off or climbing, occurring 5–6 times daily.’ Supports highest care rate and severe mental impairment criteria. See page 22."
    },
    {
      questionNumber: 67,
      description: "Do they need extra help with their development?",
      helpfulInfo: "Select ‘Yes’ and tick boxes for developmental support due to DS’s learning disability and autism’s social challenges. Example: ‘Needs constant prompting to engage in play, taking 20 minutes daily.’ Highlight extensive help for highest care rate. See page 22."
    },
    {
      questionNumber: 68,
      description: "Do they need encouragement, prompting or assistance at school or nursery?",
      helpfulInfo: "Describe extensive school support (e.g., one-to-one aide for DS’s learning needs, behavioral support for autism/PDA). Example: ‘Requires constant assistance with learning and toileting, 5 hours daily.’ Supports highest care rate. See page 23."
    },
    {
      questionNumber: 69,
      description: "Do they need encouragement, prompting or assistance to take part in hobbies, interests, social or religious activities?",
      helpfulInfo: "List activities needing support due to DS’s physical/cognitive limits or autism/PDA’s social avoidance. Example: ‘Needs one-to-one help at clubs, taking 2 hours weekly, due to sensory issues.’ Supports highest care rate. See page 24."
    },
    {
      questionNumber: 70,
      description: "Due to a health condition or disability do they wake and need assistance or supervision during the night?",
      helpfulInfo: "Detail frequent awakenings (e.g., 3–4 times nightly), each requiring 15–30 minutes of help (e.g., reassurance, toileting). Example: ‘Wakes 3 times per night, needing 20 minutes to settle due to anxiety and sensory issues.’ Emphasize prolonged/repeated attention for highest care rate. See page 24."
    },
    {
      questionNumber: 71,
      description: "What date did the child’s difficulties with their care needs start?",
      helpfulInfo: "Provide a date at least 3 months prior (e.g., since birth for DS, age X for autism/PDA behaviors). Example: ‘Care needs began at birth due to DS’s developmental delays.’ Ensures eligibility for highest care rate."
    },
    {
      questionNumber: 72,
      description: "Tell us anything else we need to know about their difficulties with their daily living and care needs or how their needs change from day to day",
      helpfulInfo: "Summarize extensive care needs, e.g., ‘Constant supervision due to impulsivity and developmental delays.’ Highlight PDA’s unpredictability (e.g., ‘Daily meltdowns extend care tasks by 1 hour’). Note mobility challenges like flop-and-drop. Use question 89 for extra space."
    }
  ];
  
  export default dlaQuestions;