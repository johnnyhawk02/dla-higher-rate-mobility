const dlaQuestions = [
  {
    questionNumber: 40,
    description: "Please tell us about the child's health condition or disabilities",
    helpfulInfo: "Robyn has Down Syndrome (DS), Autism Spectrum Disorder (ASD), and Pathological Demand Avoidance (PDA). She is non-verbal, has significant learning disabilities, and experiences hypotonia which affects general muscle tone but not walking. All her mobility challenges are behavioral. Robyn's autism affects both her intelligence and social functioning: she has limited understanding of danger, difficulty following instructions, and struggles with social awareness. Her PDA results in extreme refusal, rages, and daily flop-and-drop episodes. She wakes frequently and needs constant supervision to prevent harm. Her impairments meet the criteria for severe mental impairment."
  },
  {
    questionNumber: 41,
    description: "Does the child use, or have they been prescribed or had an occupational health assessment for any aids or adaptations?",
    helpfulInfo: "Robyn uses visual aids and communication boards due to being non-verbal. She requires a buggy outdoors due to unpredictable flopping, refusal to walk, and safety risks. Occupational therapists have assessed her for home and school adaptations, including toileting aids. She needs full adult support to use all aids safely."
  },
  {
    questionNumber: 42,
    description: "When the child needs help",
    helpfulInfo: "Robyn's needs are constant, intensive, and unpredictable. Her autism and PDA cause extreme behavioral episodes throughout the day. These include sudden rage, bolting, or flop-and-drop behaviors, often in unsafe situations like near roads. These episodes require physical intervention and hands-on support to prevent injury. Even on better days, she needs close prompting and supervision to complete any tasks, and may still suddenly refuse or drop to the floor, requiring physical assistance."
  },
  {
    questionNumber: 43,
    description: "Can the child physically walk?",
    helpfulInfo: "Yes – Robyn can physically walk and often moves quickly. However, she is virtually unable to walk safely outdoors due to extreme behavioral challenges. She frequently refuses to walk, drops to the ground without warning, or bolts in dangerous directions. Her behavior is unpredictable and cannot be managed without one-to-one adult supervision. Because of this, her walking cannot be relied upon in public spaces."
  },
  {
    questionNumber: 44,
    description: "Does the child have any difficulties with standing and moving around due to a health condition or disability?",
    helpfulInfo: "Yes – Robyn's autism and PDA cause sudden refusal to walk, flop-and-drop episodes, and unpredictable bolting. These behavioral difficulties make her movement dangerous and unreliable. She often drops to the ground or runs without warning, even in busy or unfamiliar places, creating serious safety risks. Her mobility requires continuous adult supervision and frequent physical intervention to prevent harm."
  },
  {
    questionNumber: 45,
    description: "How far can they walk without having severe discomfort and how long does it take them?",
    helpfulInfo: "Robyn may walk 10–50 meters before stopping, usually due to behavioral refusal rather than discomfort. In public, she often flops to the ground after only a few steps. Each walk can take 5–10 minutes or longer due to these interruptions, even over very short distances. She is not in physical pain, but her behavior makes it impossible for her to walk safely or consistently. Benchmarks like 11 meters (a double-decker bus) help demonstrate that her mobility is severely limited due to her behavioral needs."
  },
  {
    questionNumber: 46,
    description: "Please tell us about their walking speed",
    helpfulInfo: "Tick 'Varies.' Robyn can move quickly if she wants to, which makes her mobility particularly unpredictable and unsafe. Although she has the physical ability to walk at normal speeds, her autism and PDA result in sudden refusals, full-body flopping, or bolting. These behaviors can change moment to moment, and her speed offers no reflection of her ability to walk safely or under control. Close adult supervision is always required."
  },
  {
    questionNumber: 47,
    description: "Please tell us about the way they walk",
    helpfulInfo: "Tick 'They refuse to walk.' Robyn frequently refuses to walk, but also refuses to hold hands or be guided in any way. Her response is often to suddenly drop to the ground in a full-body collapse, a behavior known as 'flop-and-drop.' These episodes are extreme and unsafe—she becomes so floppy that two adults are often needed to lift her, as her arms go straight up if you try to pick her up under them. This makes safe movement impossible without close, hands-on support."
  },
  
  {
    questionNumber: 48,
    description: "Does the child have any other difficulties either during or after standing and moving around that affects their health?",
    helpfulInfo: "Yes – Robyn becomes distressed during transitions or from overstimulation, leading to meltdown behaviors or flop-and-drop collapses. These episodes are exhausting and can leave her distressed or withdrawn afterward. She often needs recovery time and hands-on support to move again. This unpredictability and need for recovery further restrict her safe mobility and reinforce the case for the highest mobility rate."
  },
  {
    questionNumber: 49,
    description: "Do they need guidance or supervision most of the time when they walk outdoors?",
    helpfulInfo: "Yes – Robyn needs constant supervision outdoors. She does not understand danger and refuses to follow instructions. Her PDA profile means she often will not hold hands, or may suddenly let go and bolt. She has previously run into the street during transitions, despite adult presence. On another occasion in [Month/Year], she dropped to the ground while crossing a road and had to be physically lifted to safety. One-to-one support is always essential to prevent serious harm."
  },
  {
    questionNumber: 50,
    description: "Do they fall due to their health condition or disability?",
    helpfulInfo: "Yes – Robyn experiences multiple daily flop-and-drop episodes. These are sudden, full-body collapses onto the ground, triggered by refusal or stress, and resemble falls in both appearance and impact. These episodes are unpredictable and pose a risk of injury, especially in unsafe environments like pavements or roads. She requires physical help each time to regain safety and continue moving."
  },
  {
    questionNumber: 51,
    description: "When did the child's mobility needs start?",
    helpfulInfo: "Mobility needs began before age 2 due to behavioral issues from autism/PDA. These needs have remained consistent or increased. This meets the qualifying timeframe for the higher mobility rate."
  },
  {
    questionNumber: 52,
    description: "If the child is eligible for help from Motability, would you like us to send you information about the help they can offer?",
    helpfulInfo: "Select 'Yes.' Robyn's mobility issues mean the family would benefit greatly from the Motability Scheme, especially for safe transport given she cannot walk reliably in public."
  },
  {
    questionNumber: 53,
    description: "Tell us anything else we need to know about their difficulties with standing and moving around or how their needs change from day to day",
    helpfulInfo: "Robyn's ability to walk safely varies from moment to moment. Even in familiar environments, she may suddenly bolt or lie down without warning. These behaviors are not within her control and occur regardless of preparation or support. During flop-and-drop episodes, she becomes so floppy that she cannot be lifted easily—her arms rise up if you try to lift her under them, and two adults are often needed to move her safely. Because of this unpredictability and physical floppiness, she must be closely supervised at all times outdoors, and often needs a buggy to keep her safe. Her mobility difficulties are behavioral and severe enough to meet the criteria for highest rate mobility under severe mental impairment and extreme behavioral problems."
  },
  {
    questionNumber: 54,
    description: "Does the child need encouragement, prompting, or assistance to settle in bed during the day?",
    helpfulInfo: "If the child naps or rests, note help needed due to hypotonia (e.g., physical assistance to get into bed) or autism/PDA (e.g., prompting to settle). Example: 'Needs 10–15 minutes of reassurance daily to settle for naps due to sensory issues.' Specify frequency and duration to support frequent daytime attention for highest care rate."
  },
  {
    questionNumber: 55,
    description: "Do they need encouragement, prompting or assistance to manage their toilet needs?",
    helpfulInfo: "Tick boxes for help with toileting due to DS's developmental delays or autism/PDA's resistance. Example: 'Needs full assistance 4–5 times daily, taking 10 minutes each, due to delayed toilet training and demand avoidance.' Highlight frequency and time to support highest care rate. See page 12 for examples."
  },
  {
    questionNumber: 56,
    description: "Do they need encouragement, prompting, or assistance to help move around indoors, use stairs or get into or out of a chair during the day?",
    helpfulInfo: "Tick boxes for indoor mobility help due to hypotonia (e.g., unsteady on stairs) or autism/PDA (e.g., refusal to move). Example: 'Needs hand-holding on stairs 5–6 times daily; requires prompting to sit due to behavioral resistance.' Emphasize frequent assistance for highest care rate. See page 13 for examples."
  },
  {
    questionNumber: 57,
    description: "Do they need encouragement, prompting, or assistance with washing, bathing, showering and cleaning themselves during the day?",
    helpfulInfo: "Note extensive help due to DS's physical limitations or autism/PDA's sensory aversions. Example: 'Needs full assistance with bathing daily, taking 30 minutes, due to resistance to water and inability to wash independently.' Specify frequency and duration for highest care rate. See page 14 for examples."
  },
  {
    questionNumber: 58,
    description: "Do they need encouragement, prompting, or assistance to dress and undress during the day?",
    helpfulInfo: "Describe help needed due to DS's motor skill delays or autism/PDA's resistance to clothing changes. Example: 'Requires assistance dressing twice daily, taking 15 minutes each, due to hypotonia and sensory-driven refusals.' Highlight time and frequency for highest care rate. See page 15 for examples."
  },
  {
    questionNumber: 59,
    description: "Do they need encouragement, prompting, or assistance to eat and drink during the day?",
    helpfulInfo: "Note help with feeding due to DS's chewing/swallowing difficulties or autism/PDA's selective eating. Example: 'Needs supervision and prompting at every meal, taking 20 minutes, to ensure safe eating.' Emphasize frequency for highest care rate. See page 16 for examples."
  },
  {
    questionNumber: 60,
    description: "Do they need encouragement, prompting, or assistance with managing their medication or monitoring or managing any treatments carried out at home during the day?",
    helpfulInfo: "If applicable, list medications or therapies (e.g., for heart conditions in DS, sensory strategies for autism). Example: 'Needs daily prompting for medication, taking 10 minutes, and supervision for therapy exercises.' Highlight frequency to support highest care rate. See page 17 for examples."
  },
  {
    questionNumber: 61,
    description: "Do they have difficulty seeing?",
    helpfulInfo: "If DS involves vision issues (common in 50% of cases), note difficulties even with glasses. Example: 'Struggles to see small objects, needing guidance to navigate.' Send a Certificate of Vision Impairment if applicable. For autism, mention sensory processing affecting visual perception. Supports care needs. See page 17."
  },
  {
    questionNumber: 62,
    description: "Do they have difficulty hearing?",
    helpfulInfo: "If DS involves hearing loss (common in 75% of cases), note issues even with aids. Example: 'Cannot hear normal voices, needing visual cues.' Send audiology reports if available. For autism, mention auditory sensitivities causing distress. Supports care needs. See page 18."
  },
  {
    questionNumber: 63,
    description: "Do they have difficulty speaking?",
    helpfulInfo: "For DS and autism, note speech delays or non-verbal communication. Example: 'Uses limited words, needing support to express needs.' Describe alternative methods (e.g., gestures, PECS) and constant help required, supporting highest care rate. See page 19."
  },
  {
    questionNumber: 64,
    description: "Do they have difficulty and need help communicating?",
    helpfulInfo: "Tick boxes for communication methods (e.g., PECS, Makaton) used due to DS's speech delays or autism's social challenges. Example: 'Needs constant support to use PECS, taking 10–15 minutes multiple times daily.' Highlight extensive help for highest care rate. See page 20."
  },
  {
    questionNumber: 65,
    description: "Do they have fits, blackouts, seizures, or something similar?",
    helpfulInfo: "If applicable (e.g., seizures in DS or autism), describe frequency and risks. Example: 'Has seizures monthly, requiring immediate supervision.' If not, note behavioral meltdowns resembling seizures, needing similar attention. Supports highest care rate. See page 21."
  },
  {
    questionNumber: 66,
    description: "Do they need to be supervised during the day to keep them safe?",
    helpfulInfo: "Select 'Yes' and tick boxes for risks like wandering, flop-and-drop collapses, or bolting into danger. Robyn must be constantly supervised during all waking hours. She does not understand danger and may suddenly run into roads, climb unsafe structures, or collapse in busy areas. Her refusal to be guided or held makes physical intervention essential, and two adults are sometimes needed to ensure her safety. This level of supervision supports both the highest care rate and mobility component under severe mental impairment."
  },
  {
    questionNumber: 67,
    description: "Do they need extra help with their development?",
    helpfulInfo: "Select 'Yes' and tick boxes for developmental support due to DS's learning disability and autism's social challenges. Example: 'Needs constant prompting to engage in play, taking 20 minutes daily.' Highlight extensive help for highest care rate. See page 22."
  },
  {
    questionNumber: 68,
    description: "Do they need encouragement, prompting or assistance at school or nursery?",
    helpfulInfo: "Describe extensive school support (e.g., one-to-one aide for DS's learning needs, behavioral support for autism/PDA). Example: 'Requires constant assistance with learning and toileting, 5 hours daily.' Supports highest care rate. See page 23."
  },
  {
    questionNumber: 69,
    description: "Do they need encouragement, prompting or assistance to take part in hobbies, interests, social or religious activities?",
    helpfulInfo: "List activities needing support due to DS's physical/cognitive limits or autism/PDA's social avoidance. Example: 'Needs one-to-one help at clubs, taking 2 hours weekly, due to sensory issues.' Supports highest care rate. See page 24."
  },
  {
    questionNumber: 70,
    description: "Due to a health condition or disability do they wake and need assistance or supervision during the night?",
    helpfulInfo: "Robyn wakes at least 4 nights a week, usually between 1am and 4am. When she wakes, she cannot settle herself and needs an adult to stay with her until she falls asleep, which usually takes over an hour. On some nights she does not go back to sleep at all and requires full supervision for the rest of the night. She cannot be left alone at any time as she may wander or access unsafe areas. This level of supervision is essential for her safety and has a significant impact on the family's ability to rest and function."
  },
  {
    questionNumber: 71,
    description: "What date did the child's difficulties with their care needs start?",
    helpfulInfo: "Care needs began at birth due to Down syndrome, and became more complex from age 2 when Robyn's autism and PDA-related behaviors emerged. From this point, she required increasing levels of supervision, physical assistance, and intervention to keep her safe and support her daily living. Her needs have remained consistently high or increased over time. This timeline meets the eligibility criteria for the highest rate care and mobility components."
  },
  {
    questionNumber: 72,
    description: "Tell us anything else we need to know about their difficulties with their daily living and care needs or how their needs change from day to day",
    helpfulInfo: "Robyn requires continuous, hands-on care throughout the day and night. Her PDA and autism result in unpredictable and extreme behaviors, including refusal, rage, and sudden flop-and-drop collapses—often in unsafe environments. She cannot be guided or redirected and becomes so floppy during collapses that two adults are sometimes needed to lift her safely. These episodes significantly extend the time needed for all care tasks. Her needs fluctuate unpredictably but remain intensive every day, requiring constant supervision, physical support, and emotional reassurance. The combination of her conditions means her care requirements are far beyond what is typical for her age. Use question 89 for extra space."
  }
];

export default dlaQuestions; 