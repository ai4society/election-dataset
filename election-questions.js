const elecData = {'Ireland': {'Questions': ['IE-1 Who can vote in a presidential election?',
    'IE-2 Who can run for President of Ireland?',
    'IE-3 How does the presidential election work?',
    'IE-4 How much can a candidate spend?',
    'IE-5 How often are general elections held?',
    'IE-6 Who can run as a candidate in a general election?',
    'IE-7 How much can candidates spend on their campaign?',
    'IE-8 When can candidates put up election posters?',
    'IE-9 How to vote in a general election?\n',
    'IE-10 What happens if I cannot attend the polling station?',
    'IE-11 How to vote in a local election?\n']},
  'United Kingdom': {'Questions': ['GB-1 Which are the most populated (in terms of number of voters) and least populated seats being contested in the general election?',
    'GB-2 Will UK expats and EU citizens living in the UK be able to vote on 12 December?',
    'GB-3 In what conditions can a candidate request a recount in a close result, do returning officers have any guidelines?',
    'GB-4 How many seats are each of the main parties contesting please?',
    'GB-5 What happens if there is a hung parliament?',
    'GB-6 Is the European Commission unelected or undemocratic?',
    "GB-7 Is there somewhere where we can enter the name of an MP and see the MP's full voting records in the House of Commons?"]},
  'Canada': {'Questions': ['CA-1 So why are we having an election now — during a pandemic? ',
    'CA-2 Could a Governor General actually refuse to dissolve Parliament? ',
    'CA-3 How do I register to vote? ',
    'CA-4 How will the pandemic affect the election?',
    'CA-5 How does mail-in voting work?',
    'CA-6 Are more people expected to vote by mail this year? ',
    'CA-7 What goes into the cost of an election?',
    'CA-8 Can Parliament be recalled after being dissolved? ',
    'CA-9 Why do some media outlets refer to Justin Trudeau as the “Liberal leader” during the election period?',
    'CA-10 What’s the story behind “strategic voting”? ',
    'CA-11 I feel apathetic about the different party platforms and am not sure if I’m going to vote. What should I do?']},
  'South Africa': {'Questions': ["ZA-1 Can I vote if I can't get to my voting station on Election Day because I'm heavily pregnant?",
    'ZA-2 Can I vote if I registered but am now in prison?',
    'ZA-3 Can I vote if I registered but have lost my ID with the sticker in it?',
    'ZA-4 Can I vote if I turn 18 soon AFTER election day?',
    'ZA-5 Can I vote if I will be in another town or province on election day?',
    'ZA-6 Can I vote if I will be out of the country on Election Day?',
    'ZA-7 Can I vote if I will be out of the country on government service on Election Day?',
    "ZA-8 Can I vote if I'm a South African citizen but no longer live in SA?",
    "ZA-9 Can I vote if I'm bedridden and unable to go to my voting station on Election Day?",
    "ZA-10 Can I vote if I'm in hospital?",
    "ZA-11 Can I vote if I've lost my registration sticker?",
    'ZA-12 Can I vote if my new ID book has not arrived yet?',
    'ZA-13 Can I vote on behalf of someone who is unable to get to their voting station?',
    'ZA-14 Can I vote with my temporary registration certificate (TRC)?',
    'ZA-15 Can permanent residents vote in the elections?',
    'ZA-16 I am living overseas and voted in the last national and provincial elections. Can I vote in the municipal elections?',
    'ZA-17 How does the IEC ensure security and non-intimidation at voting stations?',
    'ZA-18 I am blind. Can someone help me at the voting station?',
    "ZA-19 I have registered, but I don't want to vote. Will anything happen to me if I don't vote?",
    "ZA-20 I'm in the SANDF/SAPS and on duty on Election Day. When will I vote?",
    'ZA-21 Will election day be a public holiday?',
    'ZA-22 Are posters of political parties allowed in registration stations?',
    'ZA-23 Can I register at any time before the election?',
    'ZA-24 Can I register at my nearest voting station?',
    "ZA-25 Can I re-register after the voters' roll closes?",
    "ZA-26 Can I still register if I can't register over the registration weekend?",
    'ZA-27 Can people wear party colours in the registration station?',
    "ZA-28 How do I know if I'm registered?",
    'ZA-29 How do I register?',
    'ZA-30 I am 17 years old now, but will turn 18 around the time when the elections will be held. Will I be able to vote?',
    "ZA-31 I can't apply for an ID because I don't have a birth certificate, so my right to vote is being denied me. What can I do?",
    "ZA-32 I have my old blue/TBVC ID, drivers' licence or passport. Can I register with it?",
    'ZA-33 I have registered, but am moving to a new home. Must I register again?',
    'ZA-34 I registered for a previous election, do I have to register again?',
    'ZA-35 I will be younger than 18 years old on Election Day - should I still register?',
    "ZA-36 My ID book is in my maiden name but my married name appears on the voters' roll. Do I need to re-register?",
    'ZA-37 What do I need to bring with me when I register as a voter?',
    'ZA-38 What proof do I get that I have registered?',
    "ZA-39 When and how do I change my details on the voters' roll?",
    "ZA-40 When does the voters' roll open for public inspection?",
    'ZA-41 When is the next registration weekend?',
    'ZA-42 Can I vote at my nearest voting station?',
    'ZA-43 Can I vote online or by post?',
    'ZA-44 How do I know if my voting station has changed?',
    'ZA-45 I registered at a temporary registration station. Where do I vote?',
    'ZA-46 Where can I vote?',
    'ZA-47 Why has my voting station changed?']},
  'India': {'Questions': ['IN-1 Why do Indian elections matter?',
    'IN-2 How much do Indian election workers get paid?',
    'IN-3 Who will win the Indian election 2019?',
    'IN-4 Are Indian elections democratic?',
    'IN-5 Do India elections involve betting?',
    'IN-6 What is “one nation, one election”?',
    'IN-7 What is Hasan Minhaj’s Indian elections episode?',
    'IN-8 Will Indian election be hacked?',
    'IN-9 Is there a holiday for Indian election?',
    'IN-10 What is India elections Zuckerberg?']},
  'Indonesia': {'Questions': ['ID-1 Who are first-time and Millennial voters?',
    'ID-2 Why are elections always held on a Wednesday?',
    'ID-3 How do you handle voter abstention?',
    'ID-4 When is the 2019 election?',
    'ID-5 Why do the elections matter?',
    'ID-6 What counts as a "fair" election?']},
  'United States': {'Questions': ['US-1 Do you have to vote for the party you are registrered for?',
    'US-2 Is it that big of a deal, historically or otherwise, not to have the results of this election on Election Day?',
    'US-3 If Joe Biden is declared the winner after all votes are tabulated, could a legal challenge from President Donald Trump hold up the inauguration and stop Biden from taking office?What happens if there is a tie in the Electoral College?\n',
    'US-4 I’ve requested my mail-in ballot. If I change my mind and want to vote in person, may I?',
    'US-5 What if President Donald Trump refuses to accept the election results?',
    "US-6 Should we put a first-class stamp on our ballot if we don't drop it into a vote box?",
    'US-7 How far in advance of November 3 must we send our mail-in ballots?',
    'US-8 How do local officials verify signatures on mail-in ballots?',
    'US-9 How will people who lost their homes in the recent wildfires receive their voting information and their mail-in ballots?',
    'US-10 What about adding drive-thru voting so people can feel safe remaining in their vehicles?',
    'US-11 Can people volunteer to help the post office process ballots for delivery?',
    'US-12 What kind of access do Russians have to the election system? Can they manipulate vote totals or voter lists?',
    'US-13 How can I make sure my mail-in ballot is received and counted?',
    'US-14 Is it better to vote by mail or vote in person?',
    'US-15 I’m worried my signature on my mail-in ballot won’t match the signature the state has on file for me.',
    'US-16 What if the signature on my mail-in ballot is rejected?',
    'US-17 Will we know the winner on election night?',
    'US-18 Why do so few people vote in US elections?',
    'US-19 By what date do I need to register to vote?',
    'US-20 I received my North Carolina ballot and at the end it says I have to have a witness sign. Is this true? Do you have to have a witness in all states or just in North Carolina?',
    'US-21 My wife and I voted by mail in New York’s Democratic primary. The instructions said to vote for any eight delegates. My wife checked off everyone on the Biden line, which included Joe Biden in the first column plus eight more names across the row. So she voted for nine people. Did her ballot get tossed for exceeding the limit of eight delegates? It was very confusing and makes me concerned about mail-in ballots.',
    'US-22 My mom moved in with me from Pennsylvania to Virginia. She is now registered to vote but cannot get a Virginia photo ID because the DMV is booked up past Election Day. How do I make sure she can vote?',
    "US-23 I received a text indicating that you could vote online with a link to sign up. Didn't click the link as I've not heard anything about online voting. Any insight on this issue?",
    'US-24 How can the Democratic Party, after four years or more of screaming about Republican voter suppression, be engaging in a very public campaign of actual suppression by using legal loopholes to knock the Green Party and Kanye West off state ballot after state ballot?',
    'US-25 What is the point in voting with Donald Trump’s declaration to dispute/reject the election results?',
    'US-26 What measures are being taken to stop Donald Trump from rigging the election?',
    'US-27 How much does the political leaning of each state’s secretary of state impact their decisions on key voting processes? Can every state trust their secretary of state to put democracy before party?',
    "US-28 I requested a mail-in ballot from the state of North Carolina, which I have received. I've heard stories of votes not counting because hey deemed the signatures didn't match up (or the like) and I've decided to vote in person. Is this allowed? Because I have requested an absentee ballot and received one, is it as simple as not filling out that ballot; not sending it in, and simply going to vote in person?",
    'US-29 I am a registered voter but recently moved to new address. In order to move, I have to verify my new address when registering. I haven’t changed my address on my driver’s license and I don’t have a “recent letter with my name,” i.e. an electric bill with my new address. How can I register to vote? I have seen people being turned away previously when they tried to vote who had similar issues as I am now. I don’t want it to happen it to me.',
    'US-30 I received a ballot with just an option for president. Why were the other positions not listed?',
    'US-31 Is it OK to just vote for a president only and not vote for anything else on the ballot? Will my vote still count if I currently vote for my presidential choice?',
    'US-32 I registered as independent when I was 18. I am now 32, and have never voted. How do I know where to vote? Will I be able to vote Democrat? How do I change my party?',
    'US-33 What happens if my voting location closes due to a Covid surge?',
    'US-34 If I checked Democrat, at the beginning of the ballot, is it ok that I then checked individual boxes for each candidate, some state ones being Republican?',
    'US-35 When can the states begin to count absentee & mail-in ballots?',
    'US-36 Will CNN project states on election night like they do every year? Will there be too many mail-in ballots cast that the number of in-person votes cast just won’t be enough to project a winner?',
    'US-37 If the Electoral College’s vote is the primary determination of who becomes president, what is the purpose of the popular vote?',
    'US-38 The sticker on my absentee ballot envelope shows my first, middle & last name. I never sign using my middle name. Are we supposed to sign our name exactly as the sticker reads, or is our first and last name sufficient? Will my ballot be tossed out if the signatures don’t match ?',
    'US-39 Can I send my mail-in ballot by Priority Mail, and can I put the ballots of my other family members in the same Priority envelope?',
    'US-40 What is a Presidential Primary?',
    'US-41 Why are the Presidential Primaries on two separate dates? Why are they being held on Saturdays?\n',
    'US-42 What candidates and/or offices are on the ballot?',
    'US-43 Why are there questions on the Republican ballot?',
    'US-44 Why do ballots still show candidates that have “suspended” their campaigns? And, what happens to votes cast for those candidates?',
    'US-45 Why do ballots have a district number beside the office of President?',
    'US-46 Do I have to be a registered member of a party to participate in a Presidential Primary?',
    'US-47 If I vote in one party’s Presidential Primary, do I have to vote in that party’s State Primary in June?',
    'US-48 When do I need to register to vote?',
    'US-49 I’ve moved since the last time I voted and I haven’t updated my voter registration. Can I still vote?',
    'US-50 Can I vote in both the Republican and Democratic Presidential Primaries?',
    'US-51 When are the Presidential Primaries?',
    'US-52 Who can vote absentee?',
    'US-53 How can I vote absentee?',
    "US-54 It's almost Election Day and I still have my absentee ballot. What should I do?",
    'US-55 How and where can I vote early in person?',
    'US-56 What hours are polling places open on Election Day?',
    'US-57 What do I take with me to vote?',
    'US-58 What if I dont have one of these Photo IDs?',
    "US-59 What happens if I have a Photo ID but don't bring it when voting in person?",
    "US-60 I've lost my non-photo voter registration card. Can I still vote?",
    'US-61 How does straight party voting work?\t',
    'US-62 How is the ballot order determined for candidates and political parties?        ',
    'US-63 A candidate is listed more than once on my ballot. Is this correct?        ',
    'US-64 I saw a candidate/member of candidates campaign at my polling place talking to voters. Can they do that?',
    'US-65 Are there any laws about candidates posting their signs along the roadway?        ',
    'US-66 A candidate is definitely campaigning while in the polling place, or there is campaign material within 500 feet of the entrance. What can I do?        ',
    'US-67 Can candidates or their representatives take people to the polls to vote?        ',
    'US-68 Can I take my child with me to vote?        ',
    'US-69 Are ballot selfies legal? Can I take a picture of my ballot and share it with others?        ',
    'US-70 When I left the polls, I was asked to participate in an "exit poll." Is this legal?        ',
    'US-71 When and where will results be reported?        ',
    'US-72 What are official results?        ',
    'US-73 When is a recount necessary?        ',
    'US-74 How can I trust the accuracy of the results?        ',
    'US-75 Is the voting system connected to the internet?        ',
    'US-76 Where can I report an issue or file a complaint about the election?        ',
    'US-77 How can I help?        ',
    "US-78 I can't find an answer to my question, are there other resources available?        ",
    'US-79 What are my voting rights?        ',
    'US-80 What are the registration qualifications to vote?        ',
    'US-81 How to register by mail to vote?        ',
    'US-82 How to check if I am registered to vote?        ',
    'US-83 How to update my address?        ',
    'US-84 How do I get an absentee ballot if I am overseas or serving in the military outside my home state?        ',
    'US-85 Who are my elected officials?        ']},
  'Estonia': {'Questions': ['EE-1 The voter application displays error message 0x6-23. What went wrong?',
    'EE-2 How can I be sure that I am on the right web page and use the correct voter application?',
    'EE-3 Why can’t I download Windows voter application in my work computer? ',
    'EE-4 Why is it possible to change my vote at i-voting, but not at voting with a ballot paper? ',
    'EE-5 Why is the time for checking of an i-vote restricted to 30 minutes?',
    'EE-6 What to do when the virus protection program on my device sees the voter application as a threat and moves it to quarantine?',
    'EE-7 I voted at the polling place and later I also voted online at home. How is it possible?',
    'EE-8 Where can I get an ID-card?',
    'EE-9 My ID-card certificates are not valid (are expired, suspended or annulled). How can I get new ones?',
    'EE-10 I have lost/forgotten my PIN-codes. How can I get new ones?',
    'EE-11 Is it possible to vote with Digi-ID?',
    'EE-12 I have recently renewed my ID-card certificates, but I cannot vote. Why?',
    'EE-13 I do not have a computer with Internet connection and card reader, how can I i-vote?',
    'EE-14 I don’t have a chip card reader. Where can I get one?',
    'EE-15 Where can I get ID-software?',
    'EE-16 Is it possible to vote with Mobile ID?',
    'EE-17 Is it possible to vote with a mobile phone, without using a computer?',
    'EE-18 How has i-voting influenced voter turnout?',
    'EE-19 How is the voter identified?',
    'EE-20 How is it ensured that each voter votes himself or herself (independently)?',
    'EE-21 How is vote buying / transfer of ID-card and its codes prevented?',
    'EE-22 Why is it possible to change your i-vote, but not the paper vote?',
    'EE-23 Why is it not possible to vote with a smart device?',
    'EE-24 How is the secrecy of i-voting ensured?',
    'EE-25 Why did Estonia decide to introduce i-voting?',
    'EE-26 Why is i-voting used only in Estonia and not in other countries?',
    'EE-27 Which countries use voting through the Internet?',
    'EE-28 Which countries have tried i-voting?',
    'EE-29 Why have other countries discontinued their i-voting projects?',
    'EE-30 What is the international reaction to Estonia’s i-voting solutions?',
    'EE-31 But the international experts have found that the system is not reliable, e.g., there has been criticism from the OSCE?',
    'EE-32 Can i-voting be secure if internationally several elections (USA, Netherlands) have been “hacked”?',
    'EE-33 How can the voter be sure that their vote reached the i-voting system correctly?',
    'EE-34 How can you be sure that all collected i-votes are counted correctly and the voting result is right?',
    'EE-35 Why are the i-votes destroyed so quickly after the declaration of election results?',
    'EE-36 How is it possible that voters of advanced age vote as actively as the young?',
    'EE-37 Does i-voting favour specific political parties?',
    'EE-38 What use is the implementation of i-voting to the voters and to the society?',
    'EE-39 How can i-voting be observed?',
    'EE-40 Who are the organisers of i-voting? Can they be trusted?',
    'EE-41 Can the voter’s computer be trusted?',
    'EE-42 What is the difference between i-voting and e-voting?',
    'EE-43 How can it be ensured that a person votes with their own certificates?',
    'EE-44 How can I be sure that the authentication and signature keys connected with my personal certificate have not leaked?',
    'EE-45 How can I be sure that the electoral committee or anybody else cannot change the contents of the vote-collecting tank?',
    'EE-46 Why is it not possible to submit an invalid ballot at i-voting?',
    'EE-47 Why should we presume that a person themselves does not want to cheat with their ID-card?',
    'EE-48 Is it safe to vote over the Internet?',
    'EE-49 How is the secrecy of my vote kept if I can see in my smartphone who I voted for?',
    'EE-50 Why don’t other countries use voting over the Internet at national elections?']}};