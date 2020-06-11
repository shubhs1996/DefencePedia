import Category from '../modals/ForceCategory'
import Entry from '../modals/Entries'
import QualifyingEntry from '../modals/qualifying'
import DirectEntry from '../modals/DirectEntries'
import About from '../modals/About'
import Operation from '../modals/Operations'
import { Officer, Other } from '../modals/Rank'

export const CATEGORIES = [
    new Category('c1', 'IndianArmy', 'army', 'https://d2c7ipcroan06u.cloudfront.net/wp-content/uploads/2020/02/Indian-Army-4-696x392.jpg'),
    new Category('c2', 'IndianNavy', 'navy', 'https://i.cdn.newsbytesapp.com/images/116_18921531393675.jpg'),
    new Category('c3', 'IndianAirForce', 'airforce', 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/Indian-Air-Force-647-770x433.jpeg?oejF2NPKhxqtIsWuxXKFoMXQ5NGdkRzi')
]

export const ENTRIESLIST = [
    new Entry('E1', 'National Defence Academy and Naval Academy', ['army', 'navy', 'airforce'], ['PC'], 'QE'),
    new Entry('E2', '10+2 Tech', ['army'], ['PC'], 'DE'),
    new Entry('E19', '10+2 Btech Cadet Entry Scheme', ['navy'], ['PC'], 'DE'),
    new Entry('E5', 'Short Sevice Commission (Tech Men & Women)', ['army'], ['SSC'], 'DE'),
    new Entry('E6', 'NCC Special (Men & Women)', ['army', 'navy', 'airforce'], ['SSC'], 'DE'),
    new Entry('E7', 'TGC(Technical Graduate Course)', ['army'], ['PC'], 'DE'),
    new Entry('E8', 'JAG(Men & Women', ['army'], ['PC', 'SSC'], 'DE'),
    new Entry('E9', 'UES(Unviersity Entry Scheme)', ['army', 'navy'], ['SSC'], 'DE'),
    new Entry('E10', 'AEC(Army Education Corps', ['army'], ['PC'], 'DE'),
    new Entry('E11', 'TA(Territorial Army)', ['army'], ['PC'], 'QE'),
    new Entry('E12', 'Combined Defence Services Examination', ['army', 'navy', 'airforce'], ['PC'], 'QE'),
    new Entry('E13', 'Special Naval Architects Entry Scheme', ['navy'], ['SSC'], 'QE'),
    new Entry('E15', 'INET(Indian Navy Entrance Test)', ['navy'], ['PC'], 'QE'),
    new Entry('E16', 'AFCAT(Air Force Common Admission Test', ['airforce'], ['PC'], 'QE'),
    new Entry('E17', 'Meteorological Branch', ['airforce'], ['PC', 'SSC'], 'DE'),
    new Entry('E18', 'Airforce X Y Group', ['airforce'], ['PC'], 'QE'),
    new Entry('E20', 'Indian Navy SSR,MR,AA', ['navy'], ['PC'], 'QE'),
]


export const ENTRYDETAILS = [
    new QualifyingEntry(
        'E1',
        'National Defence Academy and NAval Academy',
        'NDA is one of the most sought after defence entrance exams in the country conducted by UPSC. NDA recruitment is conducted for admission to Army, Navy and Air Force wings of NDA and Indian Naval Academy Course (INAC). NDA is conducted twice a year. The exam is conducted two stages - written exam and SSB Interview. Around 4 lakh aspirants sit for NDA every year, out of which approximately 6000 are called for SSB Interview. ',
        '16.5 years  and 19.5 years ',
        'Should have passed or Studying in 10+2',
        'twice in a year',
        'Written exam and SSB Interview',
        'Offline',
        '5 hours (Mathematics - 2 ½ hours, General Ability Test (GAT) - 2 ½ hours) ',
        'English and Hindi',
        'Mathematics: - Algebra, Matrices and Determinants, Trigonometry, Analytical Geometry of two and three dimensions, Differential Calculus, Vector Algebra, Statistics and Probability.\nGAT: - English, General Knowledge, Physics, Chemistry, General Science, Geography, Current Events etc. ',
        'GAT: - 150 objective type questions.\nMathematics: - 120 objective type questions ',
        'Permanent Commission',
        'https://www.upsc.gov.in/',
    ),
    new DirectEntry(
        'E19',
        '10+2 Cadet Entry',
        '10+2 Btech Cadet Entry is released by Indian Navy. All the Unmarried male candidates are eligible to apply for filling the application.The candidates qualifying will get a chance to pursue a four-year degree course under the 10+2 (B.Tech) Cadet Entry Scheme. The shortlisting criteria of candidates are JEE Main All India Rank. Hence appearing for JEE Main is mandatory for the candidates.',
        '16.5 years  and 19.5 years ',
        'Should have passed 10+2 with minimum 70% in PCM',
        'twice a year',
        'Shortlisting of Candidates and SSB Interview',
        'Permanent Commission',
        'https://www.joinindiannavy.nic.in/',

    ),
    new DirectEntry(
        'E2',
        '10+2 Tech',
        'This is a technical Entry that is released by Army.After selection of the candidates, a training of 5 years will be provided.',
        '16.5 years  and 19.5 years ',
        'Should have passed 10+2 with minimum 70% in PCM',
        'twice a year',
        'Shortlisting of Candidates and SSB Interview',
        'Permanent Commission',
        'https://www.joinindianarmy.nic.in/'
    ),
    new DirectEntry(
        'E5',
        'Short Sevice Commission (Tech Men & Women)',
        'Applications are invited from eligible unmarried Male and unmarried Female Engineering Graduates and also from Widows of Defence Personnel who died in harness for grant of Short Service Commission (SSC) in the Indian Army.',
        '20 to 27 years from unmarried Men & Women,max 37 years for Widow of Defence Personnel',
        'Candidates who have passed the requisite Engineering Degree course or are in the final year of Engineering Degree course are eligible to apply',
        'twice a year',
        'Shortlisting of Applications. Only shortlisted candidates will go through SSB Interview',
        'Short Service Commission',
        'https://www.joinindianarmy.nic.in/'

    ),
    new DirectEntry(
        'E6',
        'NCC Special (Men & Women)',
        'Applications are invited from unmarried male and unmarried female (including Wards of Battle Casualties of Army Personnel), for grant of Short Service Commission in the Indian Army. ',
        '19 to 25 years',
        'Graduate 50% aggregate \'A\' or \'B\' grade in NCC \'C\' certificate ',
        'twice a year',
        'Shortlisting of Applications. Only shortlisted candidates will go through SSB Interview',
        'Short Service Commission',
        'https://www.joinindianarmy.nic.in/'
    ),
    new DirectEntry(
        'E7',
        'Technical Graduate Course',
        'Technical Graduate Course Entry is a type of entry through which an engineering graduate(only male) can join the Indian Army as an officer. TGC entry is specific for engineering students who can apply for it from final year onward.All male engineering students studying in final year or passed out, can apply for this entry',
        '20 to 27 years ',
        'BE / B Tech final appearing & degree holders in notified streams of Engineers.',
        'twice a year',
        'Shortlisting of Applications. Only shortlisted candidates will go through SSB Interview',
        'Permanent Commission',
        'https://www.joinindianarmy.nic.in/'

    ),
    new DirectEntry(
        'E8',
        'JAG(Judge Advocate General)',
        'JAG or Judge Advocate General is a post held by a major general who is the legal and judicial chief of the Indian Army. The Indian Army has an individual JAG branch which includes legally qualified army officers.It is a special entry for both male and female law graduates. There is no written exam for this entry. Shortlisted candidates will directly face the SSB interview.',
        '21 to 27b years',
        'Candidates should have minimum 55% aggregate makes in LLB Degree. Additionally, they should be eligible for registration along with Bar Council of India/State. They should be law graduate from a college/university recognized by Bar Council of India.',
        'twice a year',
        'Shortlisting of Applications. Only shortlisted candidates will go through SSB Interview',
        'Permanent and Short Service Commission',
        'https://www.joinindianarmy.nic.in/'
    ),
    new QualifyingEntry(
        'E12',
        'CDS Examination',
        'CDS Exam(Combined Defence Services Examination)is conducted by the Union Public Service Commission(UPSC). Through this exam, the conducting body recruits Commissioned Officers in Indian Army, Navy and Air Force. Both men and women can apply for several posts of 418 vacancies offered by CDS Exam.',
        '\n IMA 19-24 male Unmarried \n INA 19-22 male unmarried \n AirForce 19-23 male  \n OTA 19-25 both male and female unmarried',
        'have to be a graduate or at least appearing the final exam of eligible degree.Should have Engineering degree for INA and Air Force',
        'twice a year',
        'Written exam and SSB Interview',
        'offline',
        '6hrs(Mathematics,General Science and English ,2hrs each)',
        'Hindi and English',
        'English:-Antonyms,Sentence improvement,Comprehension,Synonyms,Word substitution,Ordering of sentences,Spotting Errors,Selecting Words,Ordering of words in a sentence\n \nGeneral Science:-Economics,Physics,Current Awareness,Politics,Chemistry,Sociology,History,Defence,Award,Geography,Environment,Sport,Biology,Cultural,Book,Statement true/false  \n\nMathematics:Algebra,Trignometry,Geometry,Mensuration,Statistics',
        'GS:100 MCQs\nMathematics:120 MCQs\nEnglish:100 MCQs',
        'Permanent Commission',
        'https://www.upsc.gov.in/',
    ),
    new DirectEntry(
        'E9',
        'University Entry Scheme',
        'UES entry stands for Unuversity Entry Scheme, since it is a non-upsc entry so there will be no exam.Candiates are called for SSB Interview on basis of their college CGPA.It is a technical Entry so only Engineering Students can apply for.',
        '18 yrs to 24 yrs only male candidates',
        'Candidates who have BE/B. Tech degree or are in final years with minimum of 60% aggregate amrks are eligible.',
        'once a year',
        'Shortlisting of Applications on the basis of cutoff.Only shortlisted candidates will go through Campus Interview then after qualified candidates will go through SSB Interview.',
        'Short Service Commission',
        'https://www.joinindiannavy.gov.in/',

    ),
    new DirectEntry(
        'E10',
        'Army Education Corps',
        'In AEC applications are invited from married/unmarried MALE Post Graduates in the subjects \nMA/MSc in English/Geography/Economics/History/Pol Science/ /International Relation \nMA/MSc in English/Geography/Economics/History/Pol Science/ /International Relation \nForeign language (MA in Chinese)',
        '23 to 27 years',
        'Only those candidates who have passed Post Graduate Degree in the following subjects with 1st or 2 nd Division are eligible to apply',
        'NA',
        'Shortlisting of Applications. Only shortlisted candidates will go through SSB Interview',
        'Permanent Commission',
        'https://www.joinindianarmy.nic.in/'
    ),
    new QualifyingEntry(
        'E11',
        'Territorial Army',
        'This is an excellent opportunity given by Government of India to young men who are well settled in their professional life. They can now join Territorial Army as an officer and prove their dream of wearing army officer uniform. The best thing is, you can serve the nation in both ways- as a civilian and as a soldier. On top of this, you need not lose your primary profession, let it be an MNC job, govt job or your own business.',
        '18 to 42 years',
        'Graduate from any recognized university.Gaingully Employed',
        'Once a year',
        'Civilians:- Screening (Written exam and interview), SSB, Medical Board for final selection \nEx-Servicemen:- Interview only',
        'Offline',
        '2 hours',
        'English and Hindi',
        'Short Essay \n\nObjective type question on General Awareness Includes Issues related to Political/Economical affairs, International  Situation and Sports.',
        'MCQs',
        'Permanent Commission',
        'https://www.joinindianarmy.nic.in/'

    ),
    new DirectEntry(
        'E13',
        'Special Naval Architechs Entry Scheme(SNAES)',
        'Special Naval Architects Entry Scheme’ (SNAES) is a special scheme which is recently approved by the Government with the vacancy of 45 Naval Architect officers into the Naval Architecture Cadre of the Engineering Branch, as Short Service Commission (SSC) Officers.A Naval team visits IIT Kharagpur, Andhra University and Cochin University of Science and Technology (CUSAT), IIT Chennai, to select candidates through campus interviews. The selected candidates undergo a medical examination.',
        '19.5 to 25 years',
        'Candidates of IT Kharagpur, IIT Chennai, Cochin University of Science and Technology (CUSAT) and Andhra University',
        'Once a year',
        'Select candidates through campus interviews. The selected candidates undergo a medical examination.',
        'Short Service Commission',
        'https://www.joinindiannavy.gov.in/',

    ),
    new QualifyingEntry(
        'E15',
        'Indian Navy Entrance Test',
        'Indian Navy Entrance Test or INET is a national-level entrance exam conducted for selection of Officers in various branches/entries of Indian Air Force such as Executive, Educational and Technical. Selected candidates are granted Permanent Commission (PC) and Short Service Commission (SSC) and undergo training at the Indian Naval Academy (INA) Ezhimala, Kerala.',
        '19 to 25 years',
        'Candidates should have passed B.E./B.Tech in any discipline with minimum 60% marks from AICTE recognized university/institute.',
        'Twice a year',
        'Written exam and SSB Interview',
        'Online',
        '2 hrs',
        'English',
        'English, Reasoning & Numerical Ability, General Science, Mathematical Aptitude & General Knowledge',
        'MCQs',
        'Permanent and Short Service Commission',
        'https://www.joinindiannavy.gov.in/',

    ),
    new QualifyingEntry(
        'E16',
        'Air Force Common Admission Test',
        'Indian Air Force invites online application for both male and female aspirants to join in flying and ground duty (technical and non-technical) branches through AFCAT',
        'For Flying Branch:- 20 to 24 years \n\nGround Duty (Technical & Non-Technical) Branch:- 20 to 26years',
        'Flying Duty:- Candidates must have scored a minimum of 60% marks each in Maths and Physics at 10+2 level.Graduation with a minimum of three years degree course or BE/BTech degree with a minimum of 60% marks \n\nGround Duty(Technical):- A minimum of 60% marks each in Physics and Mathematics at 10+2 level and BE\BTech degree with minimum 60% marks',
        'Twice a year',
        'written exam and SSB Interview',
        'Online',
        '2hrs AFCAT and (45mins EKT only for Technical Candidates)',
        'English',
        'AFCAT:- General Awareness, Verbal Ability in English, Numerical Ability and Reasoning and Military Aptitude Test\n\n EKT:-Mechanical, Computer Science and Electrical & Electronics',
        'MCQs',
        'Permanent Commission',
        'https://afcat.cdac.in/AFCAT/',

    ),
    new DirectEntry(
        'E17',
        'Meteorological Branch',
        'Indian Air Force has a separate branch for weather analysis - an important factor for safe flying. Officers of IAF meteorology branch do have great amount of responsibility on their shoulders while serving in the Indian Air Force.There are two courses offered by the IAF for candidates who want to become a meteorology officers.Ground Duty (Non technical) 202/18G/PC/M is the course exclusive for men only. Permanent commission will be granted to all candidates who joins IAF through this entry.Ground Duty (Non technical) 202/18G/SSC/M & W course is for both men and women. All successful candidates of this course of IAF meteorology branch will be awarded Short Service Commission in the IAF.',
        '20 to 26 years',
        'should have passed Post Graduation with minimum 50% in any one of the following subjects.\n\nAny Science stream,Mathematics,Statistics,Geography,Computer Applications,Environmental Science,Applied Physics,Oceanography,Meteorology,Agricultural Meteorology,Ecology & Environment,Geo-physics,Environmental Biology,Also candidates must have studied Maths and Physics at graduation level with minimum 55% marks in both the subjects.',
        'Once a year',
        'Shortlisting of Candidates and SSB Interviews',
        'Permanent and Short Service Commission',
        'https://www.joinindianairforce.nic.in/'

    ),
    new QualifyingEntry(
        'E18',
        'Airforce X Y Group',
        'Indian Air Force Group X & Y are the personnel below officer rank in the Indian Air Force also known as Airmen.The Indian Air Force conducts the Group X & Y exam for the selection of airmen into the Indian Air Force.',
        '17 to 21 years with minimum height 152.5cm',
        'Group X:- Passed 10+2/equivalent exam with Mathematics, Physics & English.He Must have 50% marks in aggregate and 50% marks in English.Passed 3 years diploma course in Engineering in any stream with 50% marks aggregate & 50% marks in English\n\n GroupY:- Passed 10+2/equivalent exam with (Mathematics not for Medical Assistant),Physics,(Chemistry,Biology for Medical Assistant) & English.He Must have 50% marks in aggregate and 50% marks in English',
        'Twice a year',
        'Stage 1 – Online test or Written test.\nStage 2- Physical Fitness Test ( PFT ), Situation Reaction Test ( SRT ), Group – Discussion ( GD ).\nStage 3 – Medical Exam.',
        'Online',
        'Airmen Group X:-1 hr\nAirmen Group Y:-45mins\nAirmen Group X and Y:- 85mins',
        'English',
        'English:- Comprehension,Grammer,Vocabulary\n\n Mathematics:- 3-Dimensional geometry,Application of derivatives,Application of integrals,Binomial Theorem,Cartesian system of rectangular coordinates,Circles and family of circles,Complex numbers,Conic sections,Definite and Indefinite integrals,Differential equations,Differentiation,Limit and continuity,Linear Equations,Linear programming,Quadratic equations,Permutation and Combination,Statistics,Trigonometric & Inverse Trigonometric functions etc. \n\nPhysics:- Laws of motion,Communication Systems,Electronic devices,Optics,Kinematics,Waves and Oscillations,Physical-world and measurement,Atoms and Nuclei,Gravitation,Thermodynamics,Electromagnetic induction and Alternating current etc..\n\n General Awareness:- Current Affairs,General Science,Geography,History,Basic Computer Operations,Civics\n\n Reasoning :- Distance and Direction,Number Specification,Coding and Decoding,Analogy,Blood Relations,Non-Verbal,Dictionary etc',
        'Group X:-English: 20 QuestionsMathematics: 25 QuestionsPhysics: 25 Questions \n\n Group Y:-Reasoning & General Awareness: 30 QuestionsEnglish: 20 Questions \n\n Group XandY:- Mathematics: 25 QuestionsEnglish: 20 marksReasoning & General Awareness: 30 QuestionsPhysics: 25 Question',
        'Permanent Commission',
        'https://www.joinindianairforce.nic.in/',
    )
]

export const ABOUTFORCES = [
    new About(
        'army',
        'The Indian Army',
        'The Indian Army is the land-based branch and the largest component of the Indian Armed Forces.The President of India is the Supreme Commander of the Indian Army,and its professional head is the Chief of Army Staff (COAS),who is a four-star general.Two officers have been conferred with the rank of field marshal,a five-star rank, which is a ceremonial position of great honour.The Indian Army originated from the armies of the East India Company,which eventually became the British Indian Army,and the armies of the princely states,which were merged into the national army after independence.The primary mission of the Indian Army is to ensure national security and national unity,to defend the nation from external aggression and internal threats,and to maintain peace and security within its borders',
        '1 April 1895',
        '1,237,117 active personnel\n960,000 reserve personnel\n245 manned aircraft',
        'Service Before Self',
        'General Manoj Mukund Naravane, PVSM, AVSM, SM, VSM, ADC',
        'Lieutenant General Satinder Kumar Saini, AVSM, YSM, VSM',
        'https://en.wikipedia.org/wiki/Indian_Army#/media/File:Flag_of_Indian_Army.svg',
        '15 January',
        ['Field Marshal K M Cariappa OBE', 'Field Marshal Sam Manekshaw MC', ' General K S Thimayya, DSO']
    ),
    new About(
        'navy',
        'The Indian Navy',
        'The Indian Navy is the naval branch of the Indian Armed Forces. The President of India is the Supreme Commander of the Indian Navy. The Chief of Naval Staff, a four-star admiral, commands the navy.The Indian Navy traces its origins back to the East India Company\'s Marine which was founded in 1612 to protect British merchant shipping in the region. In 1793, the British East India Company established its rule over eastern part of the Indian subcontinent i.e. Bengal, but it was not until 1830 that the colonial navy was titled as His Majesty\'s Indian Navy. When India became a republic in 1950, the Royal Indian Navy as it had been named since 1934 was renamed to Indian Navy.The primary objective of the navy is to safeguard the nation\'s maritime borders, and in conjunction with other Armed Forces of the union, act to deter or defeat any threats or aggression against the territory, people or maritime interests of India, both in war and peace.',
        '5 Sept 1612',
        '67,252 active personnel\n55,000 reserve personnel\n295 ships (excl. auxiliaries)\nApprox. 246 aircraft',
        'May the Lord of the Water be auspicious unto us',
        'Admiral Karambir Singh, PVSM, AVSM',
        'Vice Admiral G Ashok Kumar, AVSM, VSM',
        'https://en.wikipedia.org/wiki/Indian_Navy#/media/File:Naval_Ensign_of_India.svg',
        '4 December',

        ['Admiral S. M. Nanda', 'Admiral Ram Dass Katari']
    ),
    new About(
        'airforce',
        'The Indian Air Force',
        'The Indian Air Force (IAF) is the air arm of the Indian Armed Forces. Its complement of personnel and aircraft assets ranks fourth amongst the air forces of the world.Its primary mission is to secure Indian airspace and to conduct aerial warfare during armed conflict. It was officially established on 8 October 1932 as an auxiliary air force of the British Empire which honoured India\'s aviation service during World War II with the prefix Royal.After India gained independence from the United Kingdom in 1947, the name Royal Indian Air Force was kept and served in the name of Dominion of India. With the government\'s transition to a Republic in 1950, the prefix Royal was removed.',
        '8 October 1932',
        '139,576 active personnel\n140,000 reserve personnel\nApprox. 1,748+ aircraft',
        'Glory that touches the sky',
        'Air Chief Marshal Rakesh Kumar Singh Bhadauria, PVSM, AVSM, VM, ADC',
        'Air Marshal Harjit Singh Arora, AVSM, ADC',
        'https://en.wikipedia.org/wiki/Indian_Air_Force#/media/File:Air_Force_Ensign_of_India.svg',
        '8 October',
        ['Marshal of the Indian Air Force Arjan Singh', 'Air Chief Marshal Pratap Chandra Lal', 'Air Marshal Subroto Mukherjee']
    )
]


export const OPERATIONS = [
    new Operation(
        'army',
        'During First Kashmir War 1947',
        'Kashmir',
        'The Indo-Pakistani War of 1947–1948, sometimes known as the First Kashmir War, was fought between India and Pakistan over the princely state of Jammu and Kashmir from 1947 to 1948. It was the first of four Indo-Pakistan Wars fought between the two newly independent nations. Pakistan precipitated the war a few weeks after independence by launching tribal lashkar (militia) from Waziristan,[27] in an effort to capture Kashmir, the future of which hung in the balance. The inconclusive result of the war still affects the geopolitics of both countries.Pakistan controls roughly a third of Kashmir (Azad Kashmir and Gilgit-Baltistan), whereas India controls the rest (Kashmir Valley, Jammu and Ladakh).'
    ),
    new Operation(
        'army',
        'Operation Polo 1948',
        'Hyderabad',
        'Indian armed forces ended the rule of the Nizam of Hyderabad and led to the incorporation of the princely state of Hyderabad in Southern India, into the Indian Union',
    ),
    new Operation(
        'army',
        'Operation Vijay 1961',
        'Goa,Daman & Diu',
        'The operation by the Military of India that led to the freedom of Goa, Daman and Diu and Anjidiv Islands from the Portuguese colonial holding in 1961',
    ),
    new Operation(
        'army',
        'During Sino-Indian War 1962',
        'Assam',
        'The Sino-Indian War, also known as the Indo-China War and Sino-Indian Border Conflict, was a war between China and India that occurred in 1962. A disputed Himalayan border was the main cause of the war, but other issues also played a role.Result of this war was Chinese Victory',
    ),
    new Operation(
        'army',
        'During Second Kashmir War 1965',
        'Kashmir',
        'The Indo-Pakistani War of 1965 was a culmination of skirmishes that took place between April 1965 and September 1965 between Pakistan and India. The conflict began following Pakistan\'s Operation Gibraltar, which was designed to infiltrate forces into Jammu and Kashmir to precipitate an insurgency against Indian rule. India retaliated by launching a full-scale military attack on West Pakistan.Both sides claim victory.'
    ),
    new Operation(
        'army',
        'Operation Steeplechase 1971',
        'Calcutta',
        'In July 1971, Indira Gandhi took advantage of President\'s rule to mobilise the Indian Army against the Naxalites and launched a colossal combined army and police counter-insurgency operation, termed "Operation Steeplechase," killing hundreds of Naxalites and imprisoning more than 20,000 suspects and cadres, including senior leaders.'
    ),
    new Operation(
        'army',
        'Bangladesh Liberation War 1971',
        'Bangladesh',
        'The Indo-Pakistani War was a military confrontation between India and Pakistan that occurred during liberation war in East Pakistan from 3 Dec to the fall of Dhaka on 16 Dec.'
    ),
    new Operation(
        'army',
        'Amalgamation of Sikkim',
        'Sikkim',
        'ndian Army disarmed and disbanded the Royal Guard of the Sikkimese King, after which Sikkim joined India as a State of India.'
    ),
    new Operation(
        'army',
        'Siachen Conflict 1984',
        'Kashmir',
        'Siachin Conflict is also known an Siachin War,a militry conflict between India and Pakistan over the disputed Siachen Glacier region in Kashmir.',
    ),
    new Operation(
        'army',
        'Operation Blue Star 1984',
        'Punjab',
        'Carried out to remove separatist religious leader Jarnail Singh Bhindranwale and his armed followers from the buildings of the Harmandir Sahib complex in Amritsar, Punjab.'
    ),
    new Operation(
        'army',
        'Operation Woodrose 1984',
        'Punjab',
        '	Took place in the months after Operation Blue Star to "prevent the outbreak of widespread public protest" in the state of Punjab.'
    ),
    new Operation(
        'army',
        'Operation Meghdoot 1984',
        'Kashmir',
        'Indian military\'s capture of the majority of Siachen Glacier.'
    ),
    new Operation(
        'navy',
        'Operation Vijay 1961',
        'Goa',
        'Annexation of Goa from the Portuguese',
    ),
    new Operation(
        'navy',
        'Operation Trident 1971',
        'Karachi',
        'An offensive operation launched on Pakistan\'s port city of Karachi during the Indo-Pakistani War of 1971.'
    ),
    new Operation(
        'airforce',
        'Operation Safed Sagar 1999',
        'Krgil',
        'the code name assigned to the Indian Air Force\'s role in acting jointly with the Ground troops during the Kargil war that was aimed at flushing out Regular and Irregular troops of the Pakistani Army from vacated Indian Positions in the Kargil sector along the Line of Control.'
    ),
    new Operation(
        'airforce',
        'Operation Rahat 2013',
        'Uttarakhand',
        'Operation Rahat was the name given to the Indian Air Force\'s rescue operations to evacuate civilians affected by the 2013 North India floods',
    ),
    new Operation(
        'army',
        'Operation Rajiv 1987',
        'Siachen',
        'Operation Rajiv was an Indian Army operation to capture the highest peak in the Siachen area in 1987. The Pakistan Army had established a post (called the Quaid Post) on the top of the strategically located peak, threatening the Indian movement in the area.Result in Indian Victory.India captures Quaid Post/Bana Top after three unsuccessful attempts.'
    ),
    new Operation(
        'army',
        'Operation Bluebird 1987',
        'Manipur',
        'Operation Bluebird was a massive defense operation in response to an attack on the Assam Rifles by the National Socialist Council of Nagaland (NSCN). It was carried out in the Oinam village, where the historic Assam Rifles Outpost is located.'
    ),
    new Operation(
        'army',
        'Operation Pawan 1987',
        'Sri Lanka',
        'Operations by the Indian Peace Keeping Force to take control of Jaffna from the LTTE in late 1987 to enforce the disarmament of the LTTE as a part of the Indo-Sri Lankan Accord.'
    ),
    new Operation(
        'army',
        'Operation Viraat 1988',
        'Sri Lanka',
        'It was an anti-insurgency operation launched by the IPKF against the LTTE in April 1988 in Northern Sri Lanka.',
    ),
    new Operation(
        'army',
        'Operation Cactus 1988',
        'Maldives',
        'Paracommandos of Indian Army and MARCOS of Indian Navy oust Tamil nationalist mercenaries of PLOTE who instigated a coup in Malé in the Maldives.'
    ),
    new Operation(
        'army',
        'Operation Vijay 1999',
        'Kargil',
        'Indian operation to push back the infiltrators from the Kargil Sector, in the 1999 Kargil War.'
    ),
    new Operation(
        'army',
        'Operation Parakram 2001',
        'Line Of Control',
        'The 2001–2002 India–Pakistan standoff was a military standoff between India and Pakistan that resulted in the massing of troops on both sides of the border and along the Line of Control (LoC) in the region of Kashmir.'
    ),
    new Operation(
        'army',
        'Operation Sarp Vinash 2003',
        'Jammu and Kashmir',
        'Operation Sarp Vinash (Snake Destroyer) was an operation undertaken by Indian army to flush out terrorists who made bases in the Hilkaka Poonch-Surankot area of the Pir Panjal range in Jammu and Kashmir during April–May 2003.'
    ),
    new Operation(
        'army',
        'Operation Black Tornado 2008',
        'Mumbai',
        'Against the 2008 Mumbai Terror Attacks',
    ),
    new Operation(
        'army',
        'Operation Surya Hope 2013',
        'Uttarakhand',
        'For saving people trapped in Uttarakhand Disaster.',
    ),
    new Operation(
        'army',
        'Operation Mehar 2014',
        'Visakhapatnam',
        'Operation of Indian Army for saving people trapped in vishakhapatnam due to Cyclone Hudhud.'
    ),
    new Operation(
        'army',
        'Operation All Out 2015',
        'Jammu and Kashmir',
        'Operation for flushing out militants from specially Kashmir region of Jammu and Kashmir state of India.'
    ),
    new Operation(
        'army',
        'Operation Maitri 2015',
        'Nepal',
        'India\'s Army-led rescue and relief mission in quake-hit Nepal'
    ),
    new Operation(
        'army',
        'Surgical Strike 2016',
        'Across Line Of Control',
        'Indian Para Commandos allegedly carried out a surgical strike 2–3 km inside Pakistan administered Kashmir crossing the Line of Control.'
    ),
    new Operation(
        'army',
        'Operation Sahyog 2018',
        'Kerala',
        'Indian army launch this Operation to rescue people in flood-hit Kerala.'
    ),
    new Operation(
        'army',
        'Operation Randoori Behak 2020',
        'Jammu and Kashmir',
        'humanitarian tasks in J&K'
    ),
    new Operation(
        'navy',
        'Operation Cactus 1988',
        'Maldives',
        'Paracommandos of Indian Army and MARCOS of Indian Navy oust Tamil nationalist mercenaries of PLOTE who instigated a coup in Malé in the Maldives'
    ),
    new Operation(
        'navy',
        'Operation Parakram 2001',
        'Line Of Control',
        'The 2001–2002 India–Pakistan standoff was a military standoff between India and Pakistan that resulted in the massing of troops on both sides of the border and along the Line of Control (LoC) in the region of Kashmir.'
    ),
    new Operation(
        'navy',
        'Operation Enduring Freedom 2001',
        'Afghanistan',
        'This operation was released by The US Govt. for the Global War on Terrorism.'
    ),
    new Operation(
        'navy',
        'Operation Sukoon 2006',
        'Lebanon',
        'A relief operation to evacuate Indian Sri Lankan and Nepalese nationals as well as Lebanese nationals with Indian spouses during 2006 Lebanon War.'
    ),
    new Operation(
        'navy',
        'Operation Searchlight 2014',
        'NA',
        'The Search Operation Undertaken by Indian Navy to find the missing Boieng 777 M.H 17 Malaysian Flight'
    ),
    new Operation(
        'navy',
        'Operation Raahat 2015',
        'Yemen',
        'Operation by the Indian Armed Forces to evacuate Indian citizens and other foreign nationals from Yemen during the 2015 military intervention by Saudi Arabia and its allies in that country during the Yemeni Crisis.'
    ),
    new Operation(
        'airforce',
        'During Bangladesh Liberation War 1971',
        'Bangladesh',
        'The Indo-Pakistani War was a military confrontation between India and Pakistan that occurred during liberation war in East Pakistan from 3 Dec to the fall of Dhaka on 16 Dec.'
    ),
    new Operation(
        'airforce',
        'Operation Meghdoot 1984',
        'Siachen',
        '	Indian military\'s capture of the majority of Siachen Glacier.'
    ),
    new Operation(
        'airforce',
        'Operation Safed Sagar 1999',
        'Kargil',
        'Operation Safed Sagar was the code name assigned to the Indian Air Force\'s role in acting jointly with the Ground troops during the Kargil war'
    ),
    new Operation(
        'airforce',
        'Operation Bandar 2019',
        'Balakot',
        'An airstrike caried out by IAF in response to the Pulwama terror attack on 14 February 2019 by a suicide bomber, killing 40 Indian soldiers.'
    )
]



export const OFFICERSRANKS = [
    new Officer(
        'army',
        ['Field Marshal', 'General', 'Lieutenant General', 'Major General', 'Brigadier', 'Colonel', 'Lieutenant Colonel', 'Major', 'Captain', 'Lieutenant'],
        '../assets/images/armyRank.jpg',
    ),
    new Officer(
        'navy',
        ['Admiral of the Fleet', 'Admiral', 'Vice Admiral', 'Rear Admiral', 'Commodore', 'Captain', 'Commander', 'Lieutenant Commander', 'Lieutenan', 'Sub-Lieutenant'],
        '../assets/images/navyRank.png'
    ),
    new Officer(
        'airforce',
        ['Air Chief Marshal', 'Air Marshal', 'Air Vice Marshal', 'Air Commodore', 'Group Captain', 'Wing Commander', 'Squadron Leader', 'Flight Lieutenant', 'Flying Officer'],
        '../assets/images/airforceRank.png'
    )

]

export const BELOWOFFICERSRANK = [
    new Other(
        'army',
        ['Subedar Major', 'Subedar', 'Naib Subedar', 'Havaldar', 'Naik', 'Lance Naik', 'Sepoy'],

    ),
    new Other(
        'navy',
        ['Master Chief Pretty Officer(First Class)', 'Master Chief Petty Officer(Second Class)', 'Chief Petty Officer', 'Petty Officer', 'Able Seaman', 'Seaman'],

    ),
    new Other(
        'airforce',
        ['Master Warrant Officer', 'Warrant Officer', 'Junior Warrant Officer', 'Sergeant', 'Corporal', 'Leading Airdractsman', 'Aircraftsman'],

    )
]
